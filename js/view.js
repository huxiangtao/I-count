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
            oper = "+";

        superSwitch(result,oper,condition);
        $itemNumber.html(itemnumber);
    }

    //减法
    function Sub(arrOne,arrTwo,condition) {
        var result = model.unIque(shuffle(model.Subtraction(arrOne,arrTwo))),//去重并且生成字符串
            itemnumber = result.length,
            oper = "-";

        superSwitch(result,oper,condition);
        $itemNumber.html(itemnumber);
    }

    //乘法
    function Mul(arrOne,arrTwo,condition) {
        var result = model.unIque(shuffle(model.Multiplication(arrOne,arrTwo))),//去重并且生成字符串
            itemnumber = result.length,
            oper = "×";

        superSwitch(result,oper,condition);
        $itemNumber.html(itemnumber);
    }

    //除法
    function Div(arrOne,arrTwo,condition) {
        var result = model.unIque(shuffle(model.Division(arrOne,arrTwo))),//去重并且生成字符串
            itemnumber = result.length,
            oper = "÷";

        superSwitch(result,oper,condition);
        $itemNumber.html(itemnumber);
    }

    //带余数除法
    function DivRemaind(arrOne,arrTwo,condition) {
        var result = model.unIque(shuffle(model.DivRemainder(arrOne,arrTwo))),//去重并且生成字符串
            itemnumber = result.length,
            oper = "÷";

        superSwitch(result,oper,condition);
        $itemNumber.html(itemnumber);
    }

    //混编整除与非整除
    function Mixdiv(arrOne,arrTwo,condition) {
        var ArrRemaind = model.unIque(shuffle(model.DivRemainder(arrOne,arrTwo))),
            Arr = model.unIque(shuffle(model.Division(arrOne,arrTwo))),
            resArr = shuffle($.merge(ArrRemaind , Arr)),
            itemnumber = resArr.length,
            oper = "÷";

        superSwitch(resArr,oper,condition);
        $itemNumber.html(itemnumber);
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
                $ksContent.html(result);
                break;

            case 1 :
                var bracResu = shuffle(conditionet(result,oper));
                $ksContent.html(bracResu);
                break;

            case 2 :
                var operResu = shuffle(operator(result,oper));
                $ksContent.html(operResu);
                break;

            case 3 :
                var thanResu = shuffle(than(result,oper));
                $ksContent.html(thanResu);
                break;

        }
    }

    //带括号的算式（混合）
    function conditionet(n,oper) {
        var resultq = n.map(function(x) {
            var h = x.split(oper);
            return x = "<li>" + "(  )" + oper + h[1] + "</li>";
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
        var result = n.map(function(x) {
            return x = x.replace(oper,"О");
        });
        return result;
    }

    //比大小
    function than(n) {
        var result = n.map(function(x) {
            return x = x.replace("=","О");
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