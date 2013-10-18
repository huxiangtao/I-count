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
        if(!($beforButtonSelsctTwo === '默认')) {
           $('#third-num').fadeIn();
       } else {
           $('#third-num').fadeOut();
        }
    });

    function testStatus() {

    }

    $cancelButton.click(function() {
        window.location.reload();
    });

    $runButton.click(function() {
        var $oneInput = $formOne = $('#form-one').find("option:selected").text(),
            $twoInput = $('#form-two').find("option:selected").text(),
            $showLimit = 100,/*parseInt($('#show-limit').val()),*/
            $oneMinNum = parseInt($('#one-min').val()),
            $oneMaxNum = parseInt($('#one-max').val()),
            $twoMinNum = parseInt($('#two-min').val()),
            $twoMaxNum = parseInt($('#two-max').val()),
            $thirdMinNum = parseInt($('#third-min').val()),
            $thirdMaxNum = parseInt($('#third-max').val()),
            $checkjinwei = $('input:radio[name="jinwei"]:checked').val(), //是否进位
            $checktuiwei = $('input:radio[name="tuiwei"]:checked').val(), //是否退位
            arrOne = model.unIque(model.RandomNums($oneMinNum,$oneMaxNum,$showLimit)),
            arrTwo = model.unIque(model.RandomNums($twoMinNum,$twoMaxNum,$showLimit)),
            arrThree = model.unIque(model.RandomNums($thirdMinNum,$thirdMaxNum,$showLimit)),
            $jibaijishi = $('input:radio[name="jibaijishi"]:checked').val(); //是否几百几十



        if($oneInput === '加' && $twoInput === '默认') {
            if($jibaijishi == 'true') {

                var allArrOne = model.traversal($oneMinNum,$oneMaxNum),
                    allArrTwo = model.traversal($twoMinNum,$twoMaxNum),
                    finArrOne = model.filterNum(allArrOne),
                    finArrTwo = model.filterNum(allArrTwo);

                var result = model.unIque(shuffle(model.Addition(finArrOne,finArrTwo)));//去重并且生成字符串
                $ksContent.html(result);

            } else {

                var result = model.unIque(shuffle(model.Addition(arrOne,arrTwo)));//去重并且生成字符串
                $ksContent.html(result);

            }
        } else if($oneInput === '减' && $twoInput === '默认') {
            $ksContent.html(shuffle(model.Subtraction($oneMinNum,$oneMaxNum,$twoMinNum,$twoMaxNum)));
        } else if($oneInput === '乘' && $twoInput === '默认') {
            $ksContent.html(shuffle(model.Multiplication($oneMinNum,$oneMaxNum,$twoMinNum,$twoMaxNum)));
        } else if($oneInput === '除' && $twoInput === '默认') {
            $ksContent.html(shuffle(model.Division($oneMinNum,$oneMaxNum,$twoMinNum,$twoMaxNum)));
        } else if($oneInput === '加' && $twoInput === '加') {
            var lianJia = model.unIque(shuffle(model.mixAdd(arrOne,arrTwo,arrThree)));//去重并且生成字符串——连加
            $ksContent.html(lianJia);
        } else if($oneInput === '加' && $twoInput === '减') {
            var jiajian = model.unIque(shuffle(model.mixAddSub(arrOne,arrTwo,arrThree)));//去重并且生成字符串——连加
            $ksContent.html(jiajian);
        } else if($oneInput === '加' && $twoInput === '乘') {
            var jiacheng = model.unIque(shuffle(model.mixAddMul(arrOne,arrTwo,arrThree)));//去重并且生成字符串——连加
            $ksContent.html(jiacheng);
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

    //parseInt()转换成数字的方法

})(window.model);