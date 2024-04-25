import pandas as pd
import numpy as np
from sklearn import preprocessing
import xgboost as xgb
import joblib
from pandas.core.frame import DataFrame
import eel

eel.init("D:/Desktop/51job/display")

@eel.exposeW
def python_function(list):
    print(list)
    bst = joblib.load('saved_model/51job.pkl')
    canshu = DataFrame(list)
    train_preds = bst.predict(canshu)
    result = answer(train_preds[0])
    print(result)

    eel.dataToJs(result)
    return result

def answer(value):
    if value == 2:
        return "5千~1万/月"
    elif value == 1:
        return "低于5千/月"
    elif value == 3:
        return "1万以上/月"
    else:
        return "错误"

eel.start("predict.html",host="0.0.0.0",post=8000)

