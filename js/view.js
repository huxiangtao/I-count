/**
 * Created with IntelliJ IDEA.
 * User: huxiangtao
 * Date: 13-9-14
 * Time: 下午2:56
 * To change this template use File | Settings | File Templates.
 */

(function(model) {

    var $runButton = $('#run'),
        $cancelButton = $('#cancel'),
        $formOne = $('#form-one'),
        $formTwo = $('#form-two'),
        $Operation =$('#operation'),
        $ksContent = $(".ks-content");

    $Operation.delegate($formOne,'click',function() {
        var $beforButtonSelsct = $('#form-one').find("option:selected").text(),
            $beforButtonSelsctTwo = $('#form-two').find("option:selected").text();
        if(!($beforButtonSelsct === '默认')) {
            $('#one-num').fadeIn();
            $('#two-num').fadeIn();
        } else {
            $('#one-num').fadeOut();
            $('#two-num').fadeOut();
        }
    });

    function testStatus() {

    }

    $cancelButton.click(function() {
        window.location.reload();
    });

    $runButton.click(function() {
        var $oneInput = $formOne.find("option:selected").text(),
            $twoInput = $formTwo.find("option:selected").text(),
            $showLimit = 1000,/*parseInt($('#show-limit').val()),*/
            $oneMinNum = parseInt($('#one-min').val()),
            $oneMaxNum = parseInt($('#one-max').val()),
            $twoMinNum = parseInt($('#two-min').val()),
            $twoMaxNum = parseInt($('#two-max').val()),
            $thirdMinNum = parseInt($('#third-min').val()),
            $thirdMaxNum = parseInt($('#third-max').val()),
            $checkbrack = $('input:radio[name="bracket"]:checked').val(), //是否括号
            $checkjinwei = $('input:radio[name="jinwei"]:checked').val(), //是否进位
            $checktuiwei = $('input:radio[name="tuiwei"]:checked').val(), //是否退位
            arrOne = randomNums($oneMinNum,$oneMaxNum,$showLimit),
            arrTwo = randomNums($twoMinNum,$twoMaxNum,$showLimit),
            arrThree = randomNums($thirdMinNum,$thirdMaxNum,$showLimit),
            $jibaijishi = $('input:radio[name="jibaijishi"]:checked').val(), //是否几百几十
            brack = 0;



        if($oneInput === '加' && $twoInput === '默认') {
            if($checkbrack == 'true') {
                brack = 1;
                Add(arrOne,arrTwo,brack);
            } else if($checkbrack == 'false'){
                brack = 0;
                Add(arrOne,arrTwo,brack);
            }
        } else if($oneInput === '减' && $twoInput === '默认') {
            if($checkbrack == 'true') {
                brack = 1;
                Sub(arrOne,arrTwo,brack);
            } else if($checkbrack == 'false'){
                brack = 0;
                Sub(arrOne,arrTwo,brack);
            }
        } else if($oneInput === '乘' && $twoInput === '默认') {
            if($checkbrack == 'true') {
                brack = 1;
                Mul(arrOne,arrTwo,brack);
            } else if($checkbrack == 'false'){
                brack = 0;
                Mul(arrOne,arrTwo,brack);
            }
        } else if($oneInput === '除' && $twoInput === '默认') {
            if($checkbrack == 'true') {
                brack = 1;
                Div(arrOne,arrTwo,brack);
            } else if($checkbrack == 'false'){
                brack = 0;
                Div(arrOne,arrTwo,brack);
            }
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

    function Add(arrOne,arrTwo,brack) {
        var result = model.unIque(shuffle(model.Addition(arrOne,arrTwo)));//去重并且生成字符串
        if(brack == 1) {
            var oper = "+";
            var bracResu = shuffle(bracket(result,oper));
            $ksContent.html(bracResu);
        } else if(brack == 0) {
            $ksContent.html(result);
        }
    }

    function Sub(arrOne,arrTwo,brack) {
        var result = model.unIque(shuffle(model.Subtraction(arrOne,arrTwo)));//去重并且生成字符串
        if(brack == 1) {
            var oper = "-";
            var bracResu = shuffle(bracket(result,oper));
            $ksContent.html(bracResu);
        } else if(brack == 0) {
            $ksContent.html(result);
        }
    }

    function Mul(arrOne,arrTwo,brack) {
        var result = model.unIque(shuffle(model.Multiplication(arrOne,arrTwo)));//去重并且生成字符串
        if(brack == 1) {
            var oper = "×";
            var bracResu = shuffle(bracket(result,oper));
            $ksContent.html(bracResu);
        } else if(brack == 0) {
            $ksContent.html(result);
        }
    }

    function Div(arrOne,arrTwo,brack) {
        var result = model.unIque(shuffle(model.Division(arrOne,arrTwo)));//去重并且生成字符串
        if(brack == 1) {
            var oper = "÷";
            var bracResu = shuffle(bracket(result,oper));
            $ksContent.html(bracResu);
        } else if(brack == 0) {
            $ksContent.html(result);
        }
    }



    function bracket(n,oper) {
        var resArr = [];
        var resultq = n.map(function(x) {
            var h = x.split(oper);
            return x = "<li>" + "()" + oper + h[1] + "</li>";
        });
        var resulth = n.map(function(x) {
            var h = x.split(oper);
            var hs = h[1].split("=");
            return x = h[0] + oper + "()" + "=" + hs[1];
        });
        for(var i = 0; i < n.length; i++) {
            resArr[i] = resultq[i] + resulth[i];
        }
        return resArr;
    }

})(window.model);