/**
 * Created with IntelliJ IDEA.
 * User: huxiangtao
 * Date: 13-9-14
 * Time: 下午2:56
 * To change this template use File | Settings | File Templates.
 * 两个数字加减乘除.
 */

(function(model) {

    var $runButton = $('#run'),
        $cancelButton = $('#cancel'),
        $formOne = $('#form-one'),
        $formRequire = $('#form-require'),
        $Operation =$('#operation'),
        $ksContent = $(".ks-content"),
        $itemNumber = $(".item-number");

    $Operation.delegate($formOne,'click',function() {
        var $beforButtonSelsct = $('#form-one').find("option:selected").text();

        if(!($beforButtonSelsct === '默认')) {
            $('#one-num').fadeIn();
            $('#two-num').fadeIn();
        } else {
            $('#one-num').fadeOut();
            $('#two-num').fadeOut();
        }
    });


    $cancelButton.click(function() {
        window.location.reload();
    });

    $runButton.click(function() {
        var $oneInput = $formOne.find("option:selected").text(),
            $twoInput = $formRequire.find("option:selected").val(),
            $showLimit = 1000,/*parseInt($('#show-limit').val()),*/
            $oneMinNum = parseInt($('#one-min').val()),
            $oneMaxNum = parseInt($('#one-max').val()),
            $twoMinNum = parseInt($('#two-min').val()),
            $twoMaxNum = parseInt($('#two-max').val()),
            $checkjinwei = $('input:radio[name="jinwei"]:checked').val(), //是否进位
            $checktuiwei = $('input:radio[name="tuiwei"]:checked').val(), //是否退位
            arrOne = randomNums($oneMinNum,$oneMaxNum,$showLimit),
            arrTwo = randomNums($twoMinNum,$twoMaxNum,$showLimit),
            $jibaijishi = $('input:radio[name="jibaijishi"]:checked').val(), //是否几百几十
            condition = lowSwitch($twoInput);

        switch($oneInput) {
            case '加' :
                Add(arrOne,arrTwo,condition);
                break;

            case '减' :
                Sub(arrOne,arrTwo,condition);
                break;

            case '乘' :
                Mul(arrOne,arrTwo,condition);
                break;

            case '除' :
                Div(arrOne,arrTwo,condition);
                break;

            case '带余数除法' :
                DivRemaind(arrOne,arrTwo,condition);
                break;

            case '整除与非整除混编' :
                Mixdiv(arrOne,arrTwo,condition);
                break;

            case '乘除混合' :
                MixMD(arrOne,arrTwo);
                break;

            case '加减乘除混合' :
                MixAll(arrOne,arrTwo);
                break;

            case '加减混合' :
                MixAddSub();
                break;

            case '带括号加减乘除混合' :
                MixBracket(arrOne,arrTwo);
                break;

            case '运算符号加减乘除混合' :
                MixOperator(arrOne,arrTwo);
                break;

            case '最大能填几' :
                maxNum(arrOne,arrTwo,condition);
                break;

            case '答案相等的两个算式填运算符' :
                equRseult(arrOne,arrTwo);
                break;

        }
    });

    //shuffle 乱序
    function shuffle(inputArr) {
        var valArr = [],k = '';

        for (k in inputArr) { // Get key and value arrays
          if (inputArr.hasOwnProperty(k)) {
            valArr.push(inputArr[k]);
          }
        }
        valArr.sort(function () {
          return 0.5 - Math.random();
        });

        return valArr;
    }

    //获得随机数组
    function randomNums(MinNum,MaxNum,Limit) {
        return model.unIque(model.RandomNums(MinNum,MaxNum,Limit));
    }


/**
 * 基本运算
 * 加
 * 减
 * 乘
 * 除法
 */

    //加法
    function Add(arrOne,arrTwo,condition) {
        var result = model.unIque(shuffle(model.Addition(arrOne,arrTwo))),//去重并且生成字符串
            itemnumber = result.length,
            oper = "﹢";

        $ksContent.html(superSwitch(result,oper,condition));
        $itemNumber.html(itemnumber);
    }

    //减法
    function Sub(arrOne,arrTwo,condition) {
        var result = model.unIque(shuffle(model.Subtraction(arrOne,arrTwo))),//去重并且生成字符串
            itemnumber = result.length,
            oper = "﹣";

        $ksContent.html(superSwitch(result,oper,condition));
        $itemNumber.html(itemnumber);
    }

    //乘法
    function Mul(arrOne,arrTwo,condition) {
        var result = model.unIque(shuffle(model.Multiplication(arrOne,arrTwo))),//去重并且生成字符串
            itemnumber = result.length,
            oper = "×";

        $ksContent.html(superSwitch(result,oper,condition));
        $itemNumber.html(itemnumber);
    }

    //除法
    function Div(arrOne,arrTwo,condition) {

        var s = Math.max.apply(null,arrTwo);

        var result = model.unIque(shuffle(model.Division(arrOne,arrTwo,s))),//去重并且生成字符串
            itemnumber = result.length,
            oper = "÷";

        $ksContent.html(superSwitch(result,oper,condition));
        $itemNumber.html(itemnumber);
    }

    //带余数除法
    function DivRemaind(arrOne,arrTwo,condition) {
        var result = model.unIque(shuffle(model.DivRemainder(arrOne,arrTwo))),//去重并且生成字符串
            itemnumber = result.length,
            oper = "÷";

        $ksContent.html(superSwitch(result,oper,condition));
        $itemNumber.html(itemnumber);
    }

    //最大能填几
    function maxNum(arrOne,arrTwo,condition) {
        var result = model.unIque(shuffle(model.MaxNum(arrOne,arrTwo))),
            itemnumber = result.length,
            oper = "÷";

        $ksContent.html(superSwitch(result,oper,condition));
        $itemNumber.html(itemnumber);

    }

    //混编整除与非整除
    function Mixdiv(arrOne,arrTwo,condition) {
        var s = Math.max.apply(null,arrTwo);
        var ArrRemaind = model.unIque(shuffle(model.DivRemainder(arrOne,arrTwo))),
            Arr = model.unIque(shuffle(model.Division(arrOne,arrTwo,s))),
            resArr = shuffle($.merge(ArrRemaind , Arr)),
            itemnumber = resArr.length,
            oper = "÷";

        $ksContent.html(superSwitch(resArr,oper,condition));
        $itemNumber.html(itemnumber);
    }

    //乘除混合
    function MixMD(arrOne,arrTwo) {

        var s = Math.max.apply(null,arrTwo);
        var arrMulOne = randomNums(2,s,10),
            arrMulTwo = randomNums(2,s,10);


        var arrMul = model.unIque(shuffle(model.Multiplication(arrMulOne,arrMulTwo))),
            arrDiv = model.unIque(shuffle(model.Division(arrOne,arrTwo,s))),
            resArr = shuffle($.merge(arrMul,arrDiv)),
            itemnumber = resArr.length;


        $ksContent.html(resArr);
        $itemNumber.html(itemnumber);
    }

    //加减混合
    function MixAddSub() {
        var arrAddSubOne = randomNums(1,100,100),
            arrAddSubTwo = randomNums(1,100,100);

        var arrAdd = model.unIque(shuffle(model.Addition(arrAddSubOne,arrAddSubTwo))),
            arrSub = model.unIque(shuffle(model.Subtraction(arrAddSubOne,arrAddSubTwo))),
            mixAs = $.merge(arrAdd,arrSub),
            resArr = shuffle(mixAs),
            itemnumber = resArr.length;

        $ksContent.html(resArr);
        $itemNumber.html(itemnumber);
    }

    //加减乘除混合
    function MixAll(arrOne,arrTwo) {
        var s = Math.max.apply(null,arrTwo);

        var arrAddSubOne = randomNums(1,100,100),
            arrAddSubTwo = randomNums(1,100,100),
            arrMulOne = randomNums(2,s,100),
            arrMulTwo = randomNums(2,s,100),
            k = [];

        var arrAdd = model.unIque(shuffle(model.Addition(arrAddSubOne,arrAddSubTwo))),
            arrSub = model.unIque(shuffle(model.Subtraction(arrAddSubOne,arrAddSubTwo))),
            arrMul = model.unIque(shuffle(model.Multiplication(arrMulOne,arrMulTwo))),
            arrDiv = model.unIque(shuffle(model.Division(arrOne,arrTwo,s))),

            arrResult = k.concat(arrAdd.slice(1,6),arrSub.slice(1,8),arrMul,arrDiv),
            resArr = shuffle(arrResult),
            itemnumber = resArr.length;



        $ksContent.html(resArr);
        $itemNumber.html(itemnumber);
        return resArr;

    }

    //带括号的加减乘除混合——临时解决办法
    function MixBracket(arrOne,arrTwo) {
        var arrAddSubOne = randomNums(1,100,100),
            arrAddSubTwo = randomNums(1,100,100),
            arrMulOne = randomNums(1,6,6),
            arrMulTwo = randomNums(1,6,6),
            s = Math.max.apply(null,arrTwo);

        var arrAdd = model.unIque(shuffle(model.Addition(arrAddSubOne,arrAddSubTwo))),
            arrSub = model.unIque(shuffle(model.Subtraction(arrAddSubOne,arrAddSubTwo))),
            arrMul = model.unIque(shuffle(model.Multiplication(arrMulOne,arrMulTwo))),
            arrDiv = model.unIque(shuffle(model.Division(arrOne,arrTwo,s))),
            arrAddbr = superSwitch(arrAdd,'﹢',1),
            arrSubbr = superSwitch(arrSub,'﹣',1),
            arrMulbr = superSwitch(arrMul,'×',1),
            arrDivbr = superSwitch(arrDiv,'÷',1),
            mixAs = $.merge(arrAddbr.slice(1,6),arrSubbr.slice(1,8)),
            mixMd = $.merge(arrMulbr,arrDivbr),
            resArr = shuffle($.merge(mixAs,mixMd)),
            itemnumber = resArr.length;

        $ksContent.html(resArr);
        $itemNumber.html(itemnumber);
    }

    //运算符号填写加减乘除混合——临时解决办法
    function MixOperator(arrOne,arrTwo) {
        var arrAddSubOne = randomNums(1,100,100),
            arrAddSubTwo = randomNums(1,100,100),
            arrMulOne = randomNums(1,9,9),
            arrMulTwo = randomNums(1,9,9),
            s = Math.max.apply(null,arrTwo);

        var arrAdd = model.unIque(shuffle(model.Addition(arrAddSubOne,arrAddSubTwo))),
            arrSub = model.unIque(shuffle(model.Subtraction(arrAddSubOne,arrAddSubTwo))),
            arrMul = model.unIque(shuffle(model.Multiplication(arrMulOne,arrMulTwo))),
            arrDiv = model.unIque(shuffle(model.Division(arrOne,arrTwo,s))),
            arrAddbr = superSwitch(arrAdd,'﹢',2),
            arrSubbr = superSwitch(arrSub,'﹣',2),
            arrMulbr = superSwitch(arrMul,'×',2),
            arrDivbr = superSwitch(arrDiv,'÷',2),
            mixAs = $.merge(arrAddbr.slice(1,6),arrSubbr.slice(1,8)),
            mixMd = $.merge(arrMulbr,arrDivbr),
            resArr = shuffle($.merge(mixAs,mixMd)),
            itemnumber = resArr.length;

        $ksContent.html(resArr);
        $itemNumber.html(itemnumber);
    }

    function equRseult(arrOne,arrTwo) {
        var arr = deHtml(MixAll(arrOne,arrTwo));
        var n = equalResult(arr);
        var result = hunIque(qunIque(n)),
            itemnumber = result.length;

        $ksContent.html(result);
        $itemNumber.html(itemnumber);
    }

    //筛选出结果相等的算式
    function equalResult(arr) {
        var n = [];
        for(var i = 0; i < arr.length; i++) {
            for(var j = 0; j < arr.length; j++) {
                var itemOne = arr[i];
                var itemTwo = arr[j];
                var aOne = itemOne.split('='),
                    sOne = aOne[1];

                var bTwo = itemTwo.split('='),
                    sTwo = bTwo[1];

                if(sOne == sTwo && itemOne != itemTwo) {
                  var k = '<li>' + aOne[0] + '=' + bTwo[0] + '</li>';
                    n.push(k);
                }


            }

        }
        return model.unIque(n);
    }



    function qunIque(arr) {
        var n = [];
        var hash = {};

        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            var sitem = item.split('=');
            var key = typeof(item) + sitem[0];
            if (hash[key] !== 1) {
                n.push(item);
                hash[key] = 1;
            }
        }
        return n;
    }

    function hunIque(arr) {
        var n = [];
        var hash = {};

        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            var sitem = item.split('=');
            var key = typeof(item) + sitem[1];
            if (hash[key] !== 1) {
                n.push(item);
                hash[key] = 1;
            }
        }
        return n;
    }

    //去除<li></li>标签
    function deHtml(arr) {
        var result = arr.map(function(x) {
                var h = x.replace(/<li>/,''),
                    i = h.replace(/<\/li>/,'');
                return x = i;
            });
        return result;
    }




    //switchcondition函数——附加条件的开关
    function lowSwitch(Input) {
        var condition = 0;
        switch (Input) {
            case 'default' :
                return condition = 0;
                break;

            case 'bracket' :
                return condition = 1;
                break;

            case 'operator' :
                return condition = 2;
                break;

            case 'than' :
                return condition = 3;
                break;
        }
    }
                          
    
    
    //Superswitch函数——附加条件函数执行
    function superSwitch(result,oper,condition) {
        switch(condition) {
            case 0 :
                return result;
                break;

            case 1 :
                return result = shuffle(conditionet(result,oper));
                break;

            case 2 :
                return result = shuffle(operator(result,oper));
                break;

            case 3 :
                return result = shuffle(than(result,oper));
                break;
        }
    }

    //带括号的算式（混合）
    function conditionet(n,oper) {
        var resultq = n.map(function(x) {
            var h = x.split(oper);
            return x = "<li>" + "(  )" + oper + h[1];
        });
        var resulth = n.map(function(x) {
            var h = x.split(oper);
            var hs = h[1].split("=");

            return x = h[0] + oper + "(  )" + "=" + hs[1];
        });

        return resArr = $.merge(resultq , resulth);
    }

    //运算符填空
    function operator(n,oper) {
        var replItem = "(" + oper + ")";
        var result = n.map(function(x) {
            return x = x.replace(oper,replItem);
        });
        return result;
    }

    //比大小
    function than(n) {
        var result = n.map(function(x) {
            return x = x.replace("=","（）");
        });
        return result;
    }

    //去除答案
    function deAnswer(n) {

        var result = n.map(function(x) {
            var h = x.split("=");
            return x = h[0]+"=";
        });

        return result;

    }

})(window.model);