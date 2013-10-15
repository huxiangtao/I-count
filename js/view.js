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
            $showLimit = parseInt($('#show-limit').val()),
            $oneMinNum = parseInt($('#one-min').val()),
            $oneMaxNum = parseInt($('#one-max').val()),
            $twoMinNum = parseInt($('#two-min').val()),
            $twoMaxNum = parseInt($('#two-max').val()),
            $thirdMinNum = parseInt($('#third-min').val()),
            $thirdMaxNum = parseInt($('#third-max').val()),
            $checkjinwei = $("input[name='jinwei']:radio:checked").val(),
            $checktuiwei = $("input[name='tuiwei']:radio:checked").val(),
            arrOne = model.unIque(model.RandomNums($oneMinNum,$oneMaxNum,$showLimit)),
            arrTwo = model.unIque(model.RandomNums($twoMinNum,$twoMaxNum,$showLimit)),
            $jibaijishi = $('input:radio[name="jibaijishi"]:checked').val();



        if($oneInput === '加' && $twoInput === '默认') {
            if($jibaijishi == 'true') {
                model.AdditionDiZero(arrOne,arrTwo);
            } else {
                var resullt = model.unIque(shuffle(model.Addition(arrOne,arrTwo)));//去重并且生成字符串
                $ksContent.html(resullt);
            }
        } else if($oneInput === '减' && $twoInput === '默认') {
            $ksContent.html(shuffle(model.Subtraction($oneMinNum,$oneMaxNum,$twoMinNum,$twoMaxNum)));
        } else if($oneInput === '乘' && $twoInput === '默认') {
            $ksContent.html(shuffle(model.Multiplication($oneMinNum,$oneMaxNum,$twoMinNum,$twoMaxNum)));
        } else if($oneInput === '除' && $twoInput === '默认') {
            $ksContent.html(shuffle(model.Division($oneMinNum,$oneMaxNum,$twoMinNum,$twoMaxNum)));
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