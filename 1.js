let year = +prompt('nhap nam');
if (year % 4 == 0) {
    if (year % 100 ==0) {
        if ( year%400 == 0) {
            alert(year + 'la nam nhuan');
        } else {
            alert(year + 'khong phai nam nhuan');
    }
}else{
    alert(year + 'nam nhuan')}
} else {
    alert(year + 'khong phai la nam nhuan')
}
    