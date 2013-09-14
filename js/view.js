/**
 * Created with IntelliJ IDEA.
 * User: huxiangtao
 * Date: 13-9-14
 * Time: 下午2:56
 * To change this template use File | Settings | File Templates.
 */

(function() {

    var runButton = $('#run');

    function testStatus() {

    }

    runButton.click(function() {
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


        alert($checkjinwei);
        alert($checktuiwei);
        alert($twoInput);
        alert($showLimit);

    });


})();