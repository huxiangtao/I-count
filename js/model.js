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
                        if(result < 100) {
                            var hehe = "<li>"+ arrOne[i] + "+" + arrTwo[j] + "=" + result + "</li>";
                            n.push(hehe);
                        }
                    }
                }
            }
            return n;
        },

        //减法
        Subtraction: function(arrOne,arrTwo) {
            var n = [];
            for(var i = 0; i <= arrOne.length; i++) {
                for(var j= 0; j <= arrTwo.length; j++) {
                    if(arrOne[i] != undefined && arrTwo[j] != undefined) {
                        var result = arrOne[i] - arrTwo[j];
                        if(result > 0) {
                            var hehe = "<li>"+ arrOne[i] + "-" + arrTwo[j] + "=" + result + "</li>";
                            n.push(hehe);
                        }
                    }
                }
            }
            return n;
        },

        //乘法
        Multiplication: function(arrOne,arrTwo) {
            var n = [];
            for(var i = 0; i <= arrOne.length; i++) {
                for(var j= 0; j <= arrTwo.length; j++) {
                    if(arrOne[i] != undefined && arrTwo[j] != undefined) {
                        var result = arrOne[i] * arrTwo[j];
                        if(result < 81) {
                            var hehe = "<li>"+ arrOne[i] + "×" + arrTwo[j] + "=" + result + "</li>";
                            n.push(hehe);
                        }
                    }
                }
            }
            return n;
        },

        //除法
        Division: function(arrOne,arrTwo) {
            var n = [];
            for(var i = 0; i <= arrOne.length; i++) {
                for(var j= 0; j <= arrTwo.length; j++) {
                    if(arrOne[i] != undefined && arrTwo[j] != undefined) {
                        var result = arrOne[i] / arrTwo[j];
                        var modulo = arrOne[i] % arrTwo[j];
                        if(modulo == 0 && result <= 9 && result != 1) {
                            var hehe = "<li>"+ arrOne[i] + "÷" + arrTwo[j] + "=" + result + "</li>";
                            n.push(hehe);
                        }
                    }
                }
            }
            return n;
        },

        //带余数除法
        DivRemainder: function(arrOne,arrTwo) {
            var n = [];
            for(var i = 0; i <= arrOne.length; i++) {
                for(var j= 0; j <= arrTwo.length; j++) {
                    if(arrOne[i] != undefined && arrTwo[j] != undefined) {
                        var modulo = arrOne[i] % arrTwo[j];
                        var result = (arrOne[i] - modulo) / arrTwo[j];
                        if(modulo !== 0 && result < 10 && arrOne[i] > arrTwo[j]) {
                            var hehe = "<li>"+ arrOne[i] + "÷" + arrTwo[j] + "=" + result + "......" + modulo + "</li>";
                            var reverse = "<li>" + arrTwo[j] + "×" + result + "+" + modulo + "=" + arrOne[i] + "</li>";
                            n.push(hehe + reverse);
                        }
                    }
                }
            }
            return n;
        },



        //混合运算无括号——control
        Mix: function(arrOne,arrTwo,arrThree,oper,kuohao) {
            var n = [];
            switch(oper) {
                case '++' :
                    return n = model.mixAdd(arrOne,arrTwo,arrThree);
                    break;

                case '+-' :
                    return n = model.AddSub(arrOne,arrTwo,arrThree,kuohao);
                    break;

                case '+×' :
                    return n = model.AddMul(arrOne,arrTwo,arrThree,kuohao);
                    break;

                case '+÷' :
                    return n = model.AddDiv(arrOne,arrTwo,arrThree,kuohao);
                    break;

                case '-+' :
                    return n = model.SubAdd(arrOne,arrTwo,arrThree,kuohao);
                    break;

                case '--' :
                    return n = model.mixSub(arrOne,arrTwo,arrThree,kuohao);
                    break;

                case '-×' :
                    return n = model.SubMul(arrOne,arrTwo,arrThree,kuohao);
                    break;

                case '-÷' :
                    return n = model.SubDiv(arrOne,arrTwo,arrThree,kuohao);
                    break;

                case '×+' :
                    return n = model.MulAdd(arrOne,arrTwo,arrThree,kuohao);
                    break;

                case '×-' :
                    return n = model.MulSub(arrOne,arrTwo,arrThree,kuohao);
                    break;

                case '××' :
                    return n = model.mixMul(arrOne,arrTwo,arrThree,kuohao);
                    break;

                case '×÷' :
                    return n = model.MulDiv(arrOne,arrTwo,arrThree,kuohao);
                    break;

                case '÷+' :
                    return n = model.DivAdd(arrOne,arrTwo,arrThree,kuohao);
                    break;

                case '÷-' :
                    return n = model.DivSub(arrOne,arrTwo,arrThree,kuohao);
                    break;

                case '÷×' :
                    return n = model.DivMul(arrOne,arrTwo,arrThree,kuohao);
                    break;

                case '÷÷' :
                    return n = model.mixDiv(arrOne,arrTwo,arrThree,kuohao);
                    break;
            }
        },

        //混合运算——加加
        mixAdd: function(arrOne,arrTwo,arrThree) {
            var n = [];
            for(var i = 0; i <= arrOne.length; i++) {
                for(var j= 0; j <= arrTwo.length; j++) {
                    for(var h = 0; h<= arrThree.length; h++) {
                        if(arrOne[i] != undefined && arrTwo[j] != undefined && arrThree[h] != undefined) {
                            var result = arrOne[i] + arrTwo[j] + arrThree[h];
                            if(result > 0 && result < 100) {
                                var hehe = "<li>"+ arrOne[i] + "+" + arrTwo[j] + "+" + arrThree[h] + "=" + result + "</li>";
                                n.push(hehe);
                            }
                        }
                    }

                }
            }
            return n;
        },

        //混合运算——加减
        AddSub: function(arrOne,arrTwo,arrThree,kuohao) {
            var n = [];
            for(var i = 0; i <= arrOne.length; i++) {
                for(var j= 0; j <= arrTwo.length; j++) {
                    for(var h = 0; h<= arrThree.length; h++) {
                        if(arrOne[i] != undefined && arrTwo[j] != undefined && arrThree[h] != undefined) {
                            switch(kuohao) {
                                case 0 :
                                var result = arrOne[i] + arrTwo[j] - arrThree[h];
                                if(result > 0 && result < 100) {
                                    var hehe = "<li>"+ arrOne[i] + "+" + arrTwo[j] + "-" + arrThree[h] + "=" + result + "</li>";
                                    n.push(hehe);
                                }
                                break;

                                case 1 :
                                var resultq = (arrOne[i] + arrTwo[j]) - arrThree[h];
                                if(resultq > 0 && resultq < 100) {
                                    var heheq = "<li>" + "(" + arrOne[i] + "+" + arrTwo[j] + ")" + "-" + arrThree[h] + "=" + resultq + "</li>";
                                    n.push(heheq);
                                }
                                break;

                                case 2 :
                                var resulth = arrOne[i] + (arrTwo[j] - arrThree[h]),
                                resultk = arrTwo[j] - arrThree[h];
                                if(resulth > 0 && resulth < 100 && resultk > 0) {
                                    var heheh = "<li>" +  arrOne[i] + "+" + "(" + arrTwo[j] + "-" + arrThree[h] + ")" + "=" + resulth + "</li>";
                                    n.push(heheh);
                                }
                                break;
                            }
                        }
                    }

                }
            }
            return n;
        },

        //混合运算——加乘
        AddMul: function(arrOne,arrTwo,arrThree,kuohao) {
            var n = [];
            for(var i = 0; i <= arrOne.length; i++) {
                for(var j= 0; j <= arrTwo.length; j++) {
                    for(var h = 0; h<= arrThree.length; h++) {
                        if(arrOne[i] != undefined && arrTwo[j] != undefined && arrThree[h] != undefined) {
                            switch(kuohao) {
                                case 0 :
                                var result = arrOne[i] + arrTwo[j] * arrThree[h];
                                if(result > 0 && result < 100) {
                                    var hehe = "<li>"+ arrOne[i] + "+" + arrTwo[j] + "×" + arrThree[h] + "=" + result + "</li>";
                                    n.push(hehe);
                                }
                                break;

                                case 1 :
                                var resultq = (arrOne[i] + arrTwo[j]) * arrThree[h];
                                if(resultq > 0 && resultq < 100) {
                                    var heheq = "<li>" + "(" + arrOne[i] + "+" + arrTwo[j] + ")" + "×" + arrThree[h] + "=" + resultq + "</li>";
                                    n.push(heheq);
                                }
                                break;

                                case 2 :
                                var resulth = arrOne[i] + (arrTwo[j] * arrThree[h]);
                                if(resulth > 0 && resulth < 100) {
                                    var heheh = "<li>" +  arrOne[i] + "+" + "(" + arrTwo[j] + "×" + arrThree[h] + ")" + "=" + resulth + "</li>";
                                    n.push(heheh);
                                }
                                break;
                            }
                        }
                    }

                }
            }
            return n;
        },

        //混合运算——加除
        AddDiv: function(arrOne,arrTwo,arrThree,kuohao) {
            var n = [];
            for(var i = 0; i <= arrOne.length; i++) {
                for(var j= 0; j <= arrTwo.length; j++) {
                    for(var h = 0; h<= arrThree.length; h++) {
                        if(arrOne[i] != undefined && arrTwo[j] != undefined && arrThree[h] != undefined) {
                            if(arrOne[i] != undefined && arrTwo[j] != undefined && arrThree[h] != undefined) {
                                switch(kuohao) {
                                    case 0 :
                                        var result = arrOne[i] + arrTwo[j] / arrThree[h];
                                        var reschu = arrTwo[j] / arrThree[h];
                                        var r =/^[0-9]*[1-9][0-9]*$/;
                                        if(result > 0 && result < 100 && r.test(result) && reschu < 10) {
                                            var hehe = "<li>"+ arrOne[i] + "+" + arrTwo[j] + "÷" + arrThree[h] + "=" + result + "</li>";
                                            n.push(hehe);
                                        }
                                        break;

                                    case 1 :
                                        var resultq = (arrOne[i] + arrTwo[j]) / arrThree[h];
                                        var rq =/^[0-9]*[1-9][0-9]*$/;
                                        if(resultq > 0 && resultq < 10 && rq.test(resultq)) {
                                            var heheq = "<li>" + "(" + arrOne[i] + "+" + arrTwo[j] + ")" + "÷" + arrThree[h] + "=" + resultq + "</li>";
                                            n.push(heheq);
                                        }
                                        break;

                                    case 2 :
                                        var resulth = arrOne[i] + (arrTwo[j] / arrThree[h]);
                                        var reskuohao = arrTwo[j] / arrThree[h];
                                        var rh =/^[0-9]*[1-9][0-9]*$/;
                                        if(resulth > 0 && resulth < 100 && rh.test(resulth) && reskuohao < 10) {
                                            var heheh = "<li>" +  arrOne[i] + "+" + "(" + arrTwo[j] + "÷" + arrThree[h] + ")" + "=" + resulth + "</li>";
                                            n.push(heheh);
                                        }
                                        break;
                                }
                            }
                        }
                    }
                }
            }
            return n;
        },

        //混合运算——减加
        SubAdd: function(arrOne,arrTwo,arrThree,kuohao) {
            var n = [];
            for(var i = 0; i <= arrOne.length; i++) {
                for(var j= 0; j <= arrTwo.length; j++) {
                    for(var h = 0; h<= arrThree.length; h++) {
                        if(arrOne[i] != undefined && arrTwo[j] != undefined && arrThree[h] != undefined) {
                            switch(kuohao) {
                                case 0 :
                                var result = arrOne[i] - arrTwo[j] + arrThree[h];
                                if(result > 0 && result < 100) {
                                    var hehe = "<li>"+ arrOne[i] + "-" + arrTwo[j] + "+" + arrThree[h] + "=" + result + "</li>";
                                    n.push(hehe);
                                }
                                break;

                                case 1 :
                                var resultq = (arrOne[i] - arrTwo[j]) + arrThree[h];
                                if(resultq > 0 && resultq < 100) {
                                    var heheq = "<li>"+ "(" + arrOne[i] + "-" + arrTwo[j] + ")" + "+" + arrThree[h] + "=" + resultq + "</li>";
                                    n.push(heheq);
                                }
                                break;

                                case 2 :
                                var resulth = arrOne[i] - (arrTwo[j] + arrThree[h]);
                                if(resulth > 0 && resulth < 100) {
                                    var heheh = "<li>"+ arrOne[i] + "-" + "(" + arrTwo[j] + "+" + arrThree[h] + ")" + "=" + resulth + "</li>";
                                    n.push(heheh);
                                }
                                break;
                            }
                        }
                    }

                }
            }
            return n;
        },

        //混合运算——减减
        mixSub: function(arrOne,arrTwo,arrThree) {
            var n = [];
            for(var i = 0; i <= arrOne.length; i++) {
                for(var j= 0; j <= arrTwo.length; j++) {
                    for(var h = 0; h<= arrThree.length; h++) {
                        if(arrOne[i] != undefined && arrTwo[j] != undefined && arrThree[h] != undefined) {
                            var result = arrOne[i] - arrTwo[j] - arrThree[h];
                            if(result > 0 && result < 100) {
                                var hehe = "<li>"+ arrOne[i] + "-" + arrTwo[j] + "-" + arrThree[h] + "=" + result + "</li>";
                                n.push(hehe);
                            }
                        }
                    }

                }
            }
            return n;
        },

        //混合运算——减乘
        SubMul: function(arrOne,arrTwo,arrThree,kuohao) {
            var n = [];
            for(var i = 0; i <= arrOne.length; i++) {
                for(var j= 0; j <= arrTwo.length; j++) {
                    for(var h = 0; h<= arrThree.length; h++) {
                        if(arrOne[i] != undefined && arrTwo[j] != undefined && arrThree[h] != undefined) {
                            switch(kuohao) {
                                case 0 :
                                var result = arrOne[i] - arrTwo[j] * arrThree[h];
                                if(result > 0 && result < 100) {
                                    var hehe = "<li>"+ arrOne[i] + "-" + arrTwo[j] + "×" + arrThree[h] + "=" + result + "</li>";
                                    n.push(hehe);
                                }
                                break;

                                case 1 :
                                var resultq = (arrOne[i] - arrTwo[j]) * arrThree[h];
                                if(resultq > 0 && result < 100) {
                                    var heheq = "<li>" + "(" + arrOne[i] + "-" + arrTwo[j] + ")" + "×" + arrThree[h] + "=" + resultq + "</li>";
                                    n.push(heheq);
                                }
                                break;

                                case 2 :
                                var resulth = arrOne[i] - (arrTwo[j] * arrThree[h]);
                                if(result > 0 && result < 100) {
                                    var heheh = "<li>"+ arrOne[i] + "-" + "(" + arrTwo[j] + "×" + arrThree[h] + ")" + "=" + resulth + "</li>";
                                    n.push(heheh);
                                }
                                break;
                            }

                        }
                    }

                }
            }
            return n;
        },

        //混合运算——减除
        SubDiv: function(arrOne,arrTwo,arrThree,kuohao) {
            var n = [];
            for(var i = 0; i <= arrOne.length; i++) {
                for(var j= 0; j <= arrTwo.length; j++) {
                    for(var h = 0; h<= arrThree.length; h++) {
                        if(arrOne[i] != undefined && arrTwo[j] != undefined && arrThree[h] != undefined) {
                            switch(kuohao) {
                                case 0 :
                                    var result = arrOne[i] - arrTwo[j] / arrThree[h];
                                    var reschu = arrTwo[j] / arrThree[h];
                                    var r =/^[0-9]*[1-9][0-9]*$/;
                                    if(result > 0 && result < 100 && r.test(result) && reschu < 10) {
                                        var hehe = "<li>"+ arrOne[i] + "-" + arrTwo[j] + "÷" + arrThree[h] + "=" + result + "</li>";
                                        n.push(hehe);
                                    }
                                    break;

                                case 1 :
                                    var resultq = (arrOne[i] - arrTwo[j]) / arrThree[h];
                                    var rq =/^[0-9]*[1-9][0-9]*$/;
                                    if(resultq > 0 && resultq < 10 && rq.test(resultq)) {
                                        var heheq = "<li>" + "(" + arrOne[i] + "-" + arrTwo[j] + ")" + "÷" + arrThree[h] + "=" + resultq + "</li>";
                                        n.push(heheq);
                                    }
                                    break;

                                case 2 :
                                    var resulth = arrOne[i] - (arrTwo[j] / arrThree[h]);
                                    var reskuohao = arrTwo[j] / arrThree[h];
                                    var rh =/^[0-9]*[1-9][0-9]*$/;
                                    if(resulth > 0 && resulth < 100 && rh.test(resulth) && reskuohao < 10) {
                                        var heheh = "<li>" +  arrOne[i] + "-" + "(" + arrTwo[j] + "÷" + arrThree[h] + ")" + "=" + resulth + "</li>";
                                        n.push(heheh);
                                    }
                                    break;
                            }

                        }
                    }

                }
            }
            return n;
        },

        //混合运算——乘加
        MulAdd: function(arrOne,arrTwo,arrThree,kuohao) {
            var n = [];
            for(var i = 0; i <= arrOne.length; i++) {
                for(var j= 0; j <= arrTwo.length; j++) {
                    for(var h = 0; h<= arrThree.length; h++) {
                        if(arrOne[i] != undefined && arrTwo[j] != undefined && arrThree[h] != undefined) {
                            switch(kuohao) {
                                case 0 :
                                var result = arrOne[i] * arrTwo[j] + arrThree[h];
                                if(result > 0 && result < 100) {
                                    var hehe = "<li>"+ arrOne[i] + "×" + arrTwo[j] + "＋" + arrThree[h] + "=" + result + "</li>";
                                    n.push(hehe);
                                }
                                break;

                                case 1 :
                                var resultq = (arrOne[i] * arrTwo[j]) + arrThree[h];
                                if(resultq > 0 && resultq < 100) {
                                    var heheq = "<li>"+ "(" + arrOne[i] + "×" + arrTwo[j] + ")" + "＋" + arrThree[h] + "=" + resultq + "</li>";
                                    n.push(heheq);
                                }
                                break;

                                case 2 :
                                var resulth = arrOne[i] * (arrTwo[j] + arrThree[h]);
                                if(resulth > 0 && resulth < 100) {
                                    var heheh = "<li>"+ arrOne[i] + "×" + "(" + arrTwo[j] + "＋" + arrThree[h] + ")" + "=" + resulth + "</li>";
                                    n.push(heheh);
                                }
                                break;
                            }
                        }
                    }

                }
            }
            return n;
        },

        //混合运算——乘减
        MulSub: function(arrOne,arrTwo,arrThree,kuohao) {
            var n = [];
            for(var i = 0; i <= arrOne.length; i++) {
                for(var j= 0; j <= arrTwo.length; j++) {
                    for(var h = 0; h<= arrThree.length; h++) {
                        if(arrOne[i] != undefined && arrTwo[j] != undefined && arrThree[h] != undefined) {
                            switch(kuohao) {
                                case 0 :
                                var result = arrOne[i] * arrTwo[j] - arrThree[h];
                                if(result > 0 && result < 100) {
                                    var hehe = "<li>"+ arrOne[i] + "×" + arrTwo[j] + "-" + arrThree[h] + "=" + result + "</li>";
                                    n.push(hehe);
                                }
                                break;

                                case 1 :
                                var resultq = (arrOne[i] * arrTwo[j]) - arrThree[h];
                                if(resultq > 0 && resultq < 100) {
                                    var heheq = "<li>"+ "(" + arrOne[i] + "×" + arrTwo[j] + ")" + "-" + arrThree[h] + "=" + resultq + "</li>";
                                    n.push(heheq);
                                }
                                break;

                                case 2 :
                                var resulth = arrOne[i] * (arrTwo[j] - arrThree[h]);
                                if(resulth > 0 && resulth < 100) {
                                    var heheh = "<li>"+ arrOne[i] + "×" + "(" + arrTwo[j] + "-" + arrThree[h] + ")" + "=" + resulth + "</li>";
                                    n.push(heheh);
                                }
                                break;

                            }

                        }
                    }

                }
            }
            return n;
        },

        //混合运算——乘乘
        mixMul: function(arrOne,arrTwo,arrThree) {
            var n = [];
            for(var i = 0; i <= arrOne.length; i++) {
                for(var j= 0; j <= arrTwo.length; j++) {
                    for(var h = 0; h<= arrThree.length; h++) {
                        if(arrOne[i] != undefined && arrTwo[j] != undefined && arrThree[h] != undefined) {
                            var result = arrOne[i] * arrTwo[j] * arrThree[h];
                            if(result > 0 && result < 100) {
                                var hehe = "<li>"+ arrOne[i] + "×" + arrTwo[j] + "×" + arrThree[h] + "=" + result + "</li>";
                                n.push(hehe);
                            }
                        }
                    }

                }
            }
            return n;
        },

        //混合运算——乘除
        MulDiv: function(arrOne,arrTwo,arrThree,kuohao) {
            var n = [];
            for(var i = 0; i <= arrOne.length; i++) {
                for(var j= 0; j <= arrTwo.length; j++) {
                    for(var h = 0; h<= arrThree.length; h++) {
                        if(arrOne[i] != undefined && arrTwo[j] != undefined && arrThree[h] != undefined) {
                            var r =/^[0-9]*[1-9][0-9]*$/;

                            switch(kuohao) {
                                case 0 :
                                var result = arrOne[i] * arrTwo[j] / arrThree[h];
                                if(result > 0 && result < 100 && r.test(result)) {
                                    var hehe = "<li>"+ arrOne[i] + "×" + arrTwo[j] + "÷" + arrThree[h] + "=" + result + "</li>";
                                    n.push(hehe);
                                }
                                break;

                                case 1 :
                                var resultq = (arrOne[i] * arrTwo[j]) / arrThree[h];
                                if(resultq > 0 && resultq < 100 && r.test(resultq)) {
                                    var heheq = "<li>" + "(" + arrOne[i] + "×" + arrTwo[j] + ")" + "÷" + arrThree[h] + "=" + resultq + "</li>";
                                    n.push(heheq);
                                }
                                break;

                                case 2 :
                                var resulth = arrOne[i] * (arrTwo[j] / arrThree[h]);
                                if(resulth > 0 && resulth < 100 && r.test(resulth)) {
                                    var heheh = "<li>" + arrOne[i] + "×" + "(" + arrTwo[j] + "÷" + arrThree[h] + ")" + "=" + resulth + "</li>";
                                    n.push(heheh);
                                }
                                break;

                            }
                        }
                    }

                }
            }
            return n;
        },

        //混合运算——除加
        DivAdd: function(arrOne,arrTwo,arrThree,kuohao) {
            var n = [];
            for(var i = 0; i <= arrOne.length; i++) {
                for(var j= 0; j <= arrTwo.length; j++) {
                    for(var h = 0; h<= arrThree.length; h++) {
                        if(arrOne[i] != undefined && arrTwo[j] != undefined && arrThree[h] != undefined) {
                            var r =/^[0-9]*[1-9][0-9]*$/;
                            switch(kuohao) {
                                case 0 :
                                var result = arrOne[i] / arrTwo[j] + arrThree[h];
                                if(result > 0 && result < 100 && r.test(result)) {
                                    var hehe = "<li>"+ arrOne[i] + "÷" + arrTwo[j] + "+" + arrThree[h] + "=" + result + "</li>";
                                    n.push(hehe);
                                }
                                break;

                                case 1 :
                                var resultq = (arrOne[i] / arrTwo[j]) + arrThree[h];
                                if(resultq > 0 && resultq < 100 && r.test(resultq)) {
                                    var heheq = "<li>" + "(" + arrOne[i] + "÷" + arrTwo[j] + ")" + "+" + arrThree[h] + "=" + resultq + "</li>";
                                    n.push(heheq);
                                }
                                break;

                                case 2 :
                                var resulth = arrOne[i] / (arrTwo[j] + arrThree[h]);
                                if(resulth > 0 && resulth < 100 && r.test(resulth)) {
                                    var heheh = "<li>" + arrOne[i] + "÷" + "(" + arrTwo[j] + "+" + arrThree[h] + ")" + "=" + resulth + "</li>";
                                    n.push(heheh);
                                }
                                break;
                            }
                        }
                    }

                }
            }
            return n;
        },

        //混合运算——除减
        DivSub: function(arrOne,arrTwo,arrThree,kuohao) {
            var n = [];
            for(var i = 0; i <= arrOne.length; i++) {
                for(var j= 0; j <= arrTwo.length; j++) {
                    for(var h = 0; h<= arrThree.length; h++) {
                        if(arrOne[i] != undefined && arrTwo[j] != undefined && arrThree[h] != undefined) {
                            var r =/^[0-9]*[1-9][0-9]*$/;
                            switch(kuohao) {
                                case 0 :
                                var result = arrOne[i] / arrTwo[j] - arrThree[h];
                                if(result > 0 && result < 100 && r.test(result)) {
                                    var hehe = "<li>"+ arrOne[i] + "÷" + arrTwo[j] + "-" + arrThree[h] + "=" + result + "</li>";
                                    n.push(hehe);
                                }
                                break;

                                case 1 :
                                var resultq = (arrOne[i] / arrTwo[j]) - arrThree[h];
                                if(resultq > 0 && resultq < 100 && r.test(resultq)) {
                                    var heheq = "<li>" + "(" + arrOne[i] + "÷" + arrTwo[j] + ")" + "-" + arrThree[h] + "=" + resultq + "</li>";
                                    n.push(heheq);
                                }
                                break;

                                case 2 :
                                var resulth = arrOne[i] / (arrTwo[j] - arrThree[h]);
                                if(resulth > 0 && resulth < 100 && r.test(resulth)) {
                                    var heheh = "<li>" + arrOne[i] + "÷" + "(" + arrTwo[j] + "-" + arrThree[h] + ")" + "=" + resulth + "</li>";
                                    n.push(heheh);
                                }
                                break;
                            }
                        }
                    }

                }
            }
            return n;
        },

        //混合运算——除乘
        DivMul: function(arrOne,arrTwo,arrThree,kuohao) {
            var n = [];
            for(var i = 0; i <= arrOne.length; i++) {
                for(var j= 0; j <= arrTwo.length; j++) {
                    for(var h = 0; h<= arrThree.length; h++) {
                        if(arrOne[i] != undefined && arrTwo[j] != undefined && arrThree[h] != undefined) {
                            var r =/^[0-9]*[1-9][0-9]*$/;
                            switch(kuohao) {
                                case 0 :
                                var result = arrOne[i] / arrTwo[j] * arrThree[h];
                                if(result > 0 && result < 100 && r.test(result)) {
                                    var hehe = "<li>"+ arrOne[i] + "÷" + arrTwo[j] + "×" + arrThree[h] + "=" + result + "</li>";
                                    n.push(hehe);
                                }
                                break;

                                case 1 :
                                var resultq = (arrOne[i] / arrTwo[j]) * arrThree[h];
                                if(resultq > 0 && resultq < 100 && r.test(resultq)) {
                                    var heheq = "<li>" + "(" + arrOne[i] + "÷" + arrTwo[j] + ")" + "×" + arrThree[h] + "=" + resultq + "</li>";
                                    n.push(heheq);
                                }
                                break;

                                case 2 :
                                var resulth = arrOne[i] / (arrTwo[j] * arrThree[h]);
                                if(resulth > 0 && resulth < 100 && r.test(resulth)) {
                                    var heheh = "<li>" + arrOne[i] + "÷" + "(" + arrTwo[j] + "×" + arrThree[h] + ")" + "=" + resulth + "</li>";
                                    n.push(heheh);
                                }
                                break;
                            }
                        }
                    }

                }
            }
            return n;
        },

        //混合运算——除除
        mixDiv: function(arrOne,arrTwo,arrThree) {
            var n = [];
            for(var i = 0; i <= arrOne.length; i++) {
                for(var j= 0; j <= arrTwo.length; j++) {
                    for(var h = 0; h<= arrThree.length; h++) {
                        if(arrOne[i] != undefined && arrTwo[j] != undefined && arrThree[h] != undefined) {
                            var result = arrOne[i] / arrTwo[j] / arrThree[h];
                            var r =/^[0-9]*[1-9][0-9]*$/;
                            if(result > 0 && result < 100 && r.test(result)) {
                                var hehe = "<li>"+ arrOne[i] + "÷" + arrTwo[j] + "÷" + arrThree[h] + "=" + result + "</li>";
                                n.push(hehe);
                            }
                        }
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



        /*//进位加法计算
        carryAddition: function(arrOne,arrTwo) {
            var n = [];
            for(var i = 0; i <= arrOne.length; i++) {
                for(var j= 0; j <= arrTwo.length; j++) {
                    if(arrOne[i] != undefined && arrTwo[j] != undefined) {
                        var sOneItem = arrOne[i].toString();
                        var sTwoItem = arrTwo[j].toString();
                        var lenCompare = sOneItem.length - sTwoItem.length;

                        if(lenCompare > 0) {
                            for(var k = lenCompare; k < sOneItem.length; k++) {
                                for(var h = 0; h < sTwoItem.length; h++) {
                                    var r = parseInt(sOneItem[k]) + parseInt(sTwoItem[h]);
                                    if(r >= 10) {
                                        var result = arrOne[i] + arrTwo[j];
                                        var hehe = "<li>"+ arrOne[i] + "+" + arrTwo[j] + "=" + result + "</li>";
                                        n.push(hehe);
                                    }
                                }

                            }
                        } else if(lenCompare = 0) {
                            for(var o = 0; o < sOneItem.length; o++) {
                                for(var t = 0; t < sTwoItem.length; t++) {
                                    var s = parseInt(sOneItem[o]) + parseInt(sTwoItem[t]);
                                    if(s >= 10) {
                                        var resullt = arrOne[i] + arrTwo[j];
                                        var heheh = "<li>"+ arrOne[i] + "+" + arrTwo[j] + "=" + resullt + "</li>";
                                        n.push(heheh);
                                    }
                                }

                            }
                        } else if(lenCompare < 0) {
                            for(var p = lenCompare; p < sTwoItem.length; p++) {
                                for(var x = 0; x < sOneItem.length; x++) {
                                    var v = parseInt(sTwoItem[p]) + parseInt(sOneItem[x]);
                                    if(v >= 10) {
                                        var resulllt = arrOne[i] + arrTwo[j];
                                        var hehehe = "<li>"+ arrOne[i] + "+" + arrTwo[j] + "=" + resulllt + "</li>";
                                        n.push(hehehe);
                                    }
                                }
                            }
                        }

                    }
                }
            }
            return n;
        }*/

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

