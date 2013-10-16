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
        Addition: function(arrOne,arrTwo) {
            var n = [];
            for(var i = 0; i <= arrOne.length; i++) {
                for(var j= 0; j <= arrTwo.length; j++) {
                    if(arrOne[i] != undefined && arrTwo[j] != undefined) {
                        var result = arrOne[i] + arrTwo[j];
                        var hehe = "<li>"+ arrOne[i] + "+" + arrTwo[j] + "=" + result + "</li>";
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
                        var hehe = "<li>"+ i + "÷" + j + "=" + result + "</li>";
                        n.push(hehe);
                    }
                }
            }
            return n;
        },

        //获取随机数们
        RandomNums: function(min,max,limit) {
            var ret = [],
                i = 0,
                len = parseInt(Math.sqrt(limit));
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
        },

        //筛选出几百几十的数字
        filterNum: function(arr) {
            var n = [];
            for (var i = 0; i < arr.length; i++) {

                var item = arr[i],
                    sItem = item.toString(),
                    shiNum = item % 10,
                    baiNum = item % 100;

                if(shiNum == 0) {
                    if(sItem.length >= 3 && baiNum == 0) {
                        n.push(item);
                    } else if(sItem.length < 3) {
                        n.push(item);
                    }
                }
            }
            return n;
        },

        //遍历出所有的数字
        traversal: function(start,end) {
            var n = [];
                for(var j= start ;j <= end; j++) {
                    var hehe = j;
                    n.push(hehe);
                }
            return n;
        }

        /*//获取随机的几百几十数字
        filterNums: function(arr,limit) {
            var ret = [],
                i = 0,
                len = parseInt(Math.sqrt(limit));
            while(i < len) {
                ret.push(getRandom(arr));
                i++;
            }
            //获取单个随机数
            function getRandom(arr){
                //x上限，y下限

                var rand = parseInt(Math.random() * (x - y + 1) + y);
                return arr[rand];
            }

            return ret;
        }*/

    };





    window.model = model;
})();

