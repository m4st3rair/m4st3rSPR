from datetime import datetime


def stringToDate(date):
    date_time_obj = datetime.strptime(date, '%d/%m/%y %H:%M:%S')
    return date_time_obj

def dateNow():
    return datetime.today()