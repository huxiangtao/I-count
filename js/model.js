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
        Addition: function(arrOne,arrTwo,limit) {
            var n = [];
            for(var i = 0; i <= limit/2; i++) {
                for(var j= 0; j <= limit/2; j++) {
                    var result = arrOne[i] + arrTwo[j];
                    var hehe = "<li>"+ arrOne[i] + "+" + arrTwo[j] + "=" + (arrOne[i] + arrTwo[j]) + "</li>";
                    n.push(hehe);
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
        },
        //获取随机数们
        RandomNums: function(min,max,len) {
            var ret = [],
                i = 0;
            while(i < len) {
                ret.push(getRandom(min,max));
                i++;
            }
            //获取单个随机数
            function getRandom(min,max){
                //x上限，y下限
                var x = max;
                var y = min;
                if(x<y){
                    x=min;
                    y=max;
                }
                var rand = parseInt(Math.random() * (x - y + 1) + y);
                return rand;
            }

            return ret;
        },
        //去重函数
        unIque: function(arr) {
            var n = [];
            var hash = {};

            for (var i = 0; i < arr.length; i++) {
                var item = arr[i];
                var key = typeof(item) + item;
                if (hash[key] !== 1) {
                    n.push(item)
                    hash[key] = 1
                }
            }
            return n
        }

    };





    window.model = model;
})();