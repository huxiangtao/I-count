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

    function Add(arrOne,arrTwo,condition) {
        var result = model.unIque(shuffle(model.Addition(arrOne,arrTwo))),//去重并且生成字符串
            itemnumber = result.length,
            oper = "+";

        superSwitch(result,oper,condition);
        $itemNumber.html(itemnumber);
    }

    function Sub(arrOne,arrTwo,condition) {
        var result = model.unIque(shuffle(model.Subtraction(arrOne,arrTwo))),//去重并且生成字符串
            itemnumber = result.length,
            oper = "-";

        superSwitch(result,oper,condition);
        $itemNumber.html(itemnumber);
    }

    function Mul(arrOne,arrTwo,condition) {
        var result = model.unIque(shuffle(model.Multiplication(arrOne,arrTwo))),//去重并且生成字符串
            itemnumber = result.length,
            oper = "×";

        superSwitch(result,oper,condition);
        $itemNumber.html(itemnumber);
    }

    function Div(arrOne,arrTwo,condition) {
        var result = model.unIque(shuffle(model.Division(arrOne,arrTwo))),//去重并且生成字符串
            itemnumber = result.length,
            oper = "÷";

        superSwitch(result,oper,condition);
        $itemNumber.html(itemnumber);
    }


    //switchcondition函数
    function lowSwitch(Input) {
        var condition = 0;
        switch (Input) {
            case 'default' :
                condition = 0;
                return condition;
                break;

            case 'bracket' :
                condition = 1;
                return condition;
                break;

            case 'operator' :
                condition = 2;
                return condition;
                break;

            case 'than' :
                condition = 3;
                return condition;
                break;
        }
    }
                          
    
    
    //Superswitch函数
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

    //带括号的算式
    function conditionet(n,oper) {
        var resArr = [];
        var resultq = n.map(function(x) {
            var h = x.split(oper);
            return x = "<li>" + "(  )" + oper + h[1] + "</li>";
        });
        var resulth = n.map(function(x) {
            var h = x.split(oper);
            var hs = h[1].split("=");
            return x = h[0] + oper + "(  )" + "=" + hs[1];
        });
        for(var i = 0; i < n.length; i++) {
            resArr[i] = resultq[i] + resulth[i];
        }
        return resArr;
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