/**
 * Created with IntelliJ IDEA.
 * User: huxiangtao
 * Date: 13-9-14
 * Time: 下午2:56
 * To change this template use File | Settings | File Templates.
 */

(function() {

    var $runButton = $('#run'),
        $cancelButton = $('#cancel'),
        $formOne = $('#form-one'),
        $Operation =$('#operation');

    $Operation.delegate($formOne,'click',function() {
        var $beforButtonSelsct = $('#form-one').find("option:selected").text(),
            $beforButtonSelsctTwo = $('#form-two').find("option:selected").text();
        if(!($beforButtonSelsct === '默认')) {
            $('#one-num').fadeIn();
            $('#two-num').fadeIn();
        }
        if(!($beforButtonSelsctTwo === '默认')) {
           $('#third-num').fadeIn();
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
            $showLimit = $('#show-limit').val(),
            $oneMin = $('#one-min').val(),
            $oneMax = $('#one-max').val(),
            $twoMin = $('#two-min').val(),
            $twoMax = $('#two-max').val(),
            $thirdMin = $('#third-min').val(),
            $thirdMax = $('#third-max').val(),
            $checkjinwei = $("input[name='jinwei']:radio:checked").val(),
            $checktuiwei = $("input[name='tuiwei']:radio:checked").val();

        alert($oneInput);
        alert($twoInput);
        alert($showLimit);
        alert($oneMin);
        alert($oneMax);
        alert($twoMin);
        alert($twoMax);
        alert($thirdMin);
        alert($thirdMax);
        alert($checkjinwei);
        alert($checktuiwei);




    });


    //parseInt()转换成数字的方法

})();