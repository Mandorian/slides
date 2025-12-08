---
title: 学习汇报
separator: <!--s-->
verticalSeparator: <!--v-->
theme: simple
highlightTheme: github
css: custom/custom.css
revealOptions:
    transition: 'fade'
    transitionSpeed: fast
    center: false
    slideNumber: "c/t"
    width: 1000
---

<div class="middle center">
<div style="width: 100%">

# 学习汇报

<hr>

[王倓](https://github.com/Mandorian) 2025.11.09

</div>
</div>

<!--s-->
<div class="middle center">
<div style="width: 100%">

# DepthTrack: Unveiling the Power of RGBD Tracking

</div>
</div>

<!--v-->
## DeT基本架构

首先分别从RGB图像和深度图像中提取特征，分别通过特征提取网络$F_{rgb}$和$F_{depth}$。随后，将参考帧（reference）与测试帧（test）的RGB和深度特征进行拼接与融合，得到融合后的多模态特征表示$D_{rgbd}$。融合后的特征输入到**Model Predictor**中生成追踪模型参数，测试特征输入到**Classifier**中，用于计算目标在搜索区域的响应图。该响应图的峰值位置对应目标的预测位置，实现多模态信息（RGB + Depth）的联合追踪。

<img src='lec3/det.png' width=100% style='display: block; margin: 0 auto;'>

<!--s-->
<div class="middle center">
<div style="width: 100%">

# 深度图

</div>
</div>

<!--v-->
## HighResDepth

提出了一种在不重新训练模型的前提下，将**单目深度估计**结果提升到**高分辨率和高细节质量**的方法。对同一图像分别在低、高分辨率下推理，获得结构一致与细节丰富的两张深度图，再通过一个轻量的**U-Net**融合网络将两者的优势结合，生成既全局一致又细节清晰的深度图。使得传统网络能输出**多兆像素级**的高质量深度估计结果，显著提升边界清晰度与细节保真度。

<img src='lec3/high_res_depth.png' width=85% style='display: block; margin: 0 auto;'>

<!--s-->
<div class="middle center">
<div style="width: 100%">

# ResNet

</div>
</div>

<!--v-->
## 残差块

残差块里首先有2个有相同输出通道数的$3\times 3$卷积层。每个卷积层后接一个批量规范化层和**ReLU激活函数**。然后通过跨层数据通路，跳过这2个卷积运算，将输入直接加在最后的**ReLU激活函数**前。这样的设计要求2个卷积层的输出与输入形状一样，从而使它们可以相加。如果想改变通道数，就需要引入一个额外的卷积层来将输入变换成需要的形状后再做相加运算。残差块的实现如下：

<img src='lec3/residual.png' width=60% style='display: block; margin: 0 auto;'>

<!--v-->
``` python
class Residual(nn.Module):
   def __init__(self, input_channels, num_channels, use_1x1conv=False, strides=1):
      super().__init__()
      self.block = nn.Sequential(
         nn.Conv2d(input_channels, num_channels, kernel_size=3, padding=1, stride=strides),

         nn.BatchNorm2d(num_channels),
         nn.ReLU(inplace=True),

         nn.Conv2d(num_channels, num_channels, kernel_size=3, padding=1),
         nn.BatchNorm2d(num_channels)
      )
      self.conv3 = nn.Conv2d(input_channels, num_channels, kernel_size=1, stride=strides) if use_1x1conv else None
      self.relu = nn.ReLU(inplace=True)

   def forward(self, X):
      Y = self.block(X)
      if self.conv3:
         X = self.conv3(X)
      return self.relu(Y + X)
```

<!--v-->
## 深层残差网络

通过配置不同的通道数和模块里的残差块数可以得到不同的ResNet模型。如ResNet50、ResNet152等。

<img src='lec3/resnet.png' width=100% style='display: block; margin: 0 auto;'>

<!--s-->
<div class="middle center">
<div style="width: 100%">

# 特征提取与特征融合

</div>
</div>

<!--v-->
## 特征提取

特征提取过程采用双路并行架构，输入6通道**RGBD图像**被分割为前3通道RGB和后3通道深度，分别通过两个独立的**ResNet**网络提取分层特征，得到RGB特征$F_{rgb}$和深度特征$F_{depth}$，然后在**layer2**和**layer3**层级采用预设的融合策略将双模态特征进行融合，最终输出融合后的多模态特征表示用于后续的目标分类和边界框回归任务。

``` python
def extract_backbone_features(self, im, layers=None):

        if layers is None:
            layers = self.output_layers

        dims = im.shape
        if dims[1] == 6:
            color_feat = self.feature_extractor(im[:, :3, :, :], layers)
            depth_feat = self.feature_extractor_depth(im[:, 3:, :, :], layers)

            merged_feat = self.merge(color_feat, depth_feat)
            # self.id += 1
            return merged_feat
```

<!--v-->
## 特征融合

<div class="mul-cols">

<div class="col">

1. $1\times 1$卷积融合
2. 最大值融合
3. 乘法融合
4. 平均融合
5. 加权求和融合