/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 13-9-14
 * Time: 下午7:48
 * To change this template use File | Settings | File Templates.
 */

(function() {


    var model = {
        //加法
        Addition: function(startOne,endOne,startTwo,endTwo,range) {
            var n = [];
            for(var i = startOne; i <= endOne; i++) {
                for(var j= startTwo; j <= endTwo; j++) {
                    var result = i+j;
                    var s = i.toString(),o = j.toString();
                    var nextResult = parseInt(s[1]) + parseInt(o[1]);
                    if(range) {
                        if(result < range && (s[2] == 0 && o[2] == 0)) {
                            if(nextResult < 10) {
                                var heh = "<li>"+ i + "+" + j + "=" + (i+j) + "</li>";
                                n.push(heh);
                            }
                        }
                    } else {
                        var hehe = "<li>"+ i + "+" + j + "=" + (i+j) + "</li>";
                        n.push(hehe);
                    }
                }

            }
            return n;
        },
        //减法
        Subtraction: function(startOne,endOne,startTwo,endTwo) {
            var n = [];
            for(var i = startOne;i <= endOne; i++) {
                for(var j= startTwo;j <= endTwo; j++) {
                    var result = i-j;
                    if(result >= 0) {
                        var hehe = "<li>"+ i + "-" + j + "=" + (i-j) + "</li>";
                        n.push(hehe);
                    }
                }
            }
            return n;
        },
        //乘法
        Multiplication: function(startOne,endOne,startTwo,endTwo) {
            var n = [];
            for(var i = startOne ;i <= endOne; i++) {
                for(var j= startTwo ;j <= endTwo; j++) {
                    var hehe = "<li>"+ i + "×" + j + "=" + (i*j) + "</li>";
                    n.push(hehe);
                }
            }
            return n;
        },
        //除法
        Division: function(startOne,endOne,startTwo,endTwo) {
            var n = [];
            for(var i = startOne ;i <= endOne; i++) {
                for(var j= startTwo ;j <= endTwo; j++) {
                    var modulo = i%j,
                        result = i/j;
                    if(modulo == 0) {
                        var hehe = "<li>"+ i + "÷" + j + "=" + (i/j) + "</li>";
                        n.push(hehe);
                    }
                }
            }
            return n;
        }

    };





    window.model = model;
})();