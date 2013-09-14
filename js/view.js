/**
 * Created with IntelliJ IDEA.
 * User: huxiangtao
 * Date: 13-9-14
 * Time: 下午2:56
 * To change this template use File | Settings | File Templates.
 */

(function() {

    var runButton = $('#run'),
        $formOne = $('#form-one').find("option:selected").text(),
        $formTwo = $('#form-two').val()

    function testStatus() {

    }

    /*$('body').delegate(runButton,'click',function() {
        alert(1);
        alert($formOne);
        alert($formTwo);
    })*/
    runButton.click(function() {
        alert(2);
    })


})();