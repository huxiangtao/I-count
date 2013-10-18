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


    function testStatus() {

    }

    $cancelButton.click(function() {
        window.location.reload();
    });

    $runButton.click(function() {
        var $oneInput = $formOne.find("option:selected").text(),
            $twoInput = $formTwo.find("option:selected").text(),
            $showLimit = 100,/*parseInt($('#show-limit').val()),*/
            $oneMinNum = parseInt($('#one-min').val()),
            $oneMaxNum = parseInt($('#one-max').val()),
            $twoMinNum = parseInt($('#two-min').val()),
            $twoMaxNum = parseInt($('#two-max').val()),
            $thirdMinNum = parseInt($('#third-min').val()),
            $thirdMaxNum = parseInt($('#third-max').val());



        if($oneInput === '加' && $twoInput === '加') {
            var arrOne = randomNums(1,100,100),
                arrTwo = randomNums(1,100,100),
                arrThree = randomNums(1,100,100),
                lianJia = unImixStr(arrOne,arrTwo,arrThree);//去重并且生成字符串——连加
            $ksContent.html(lianJia);
        } else if($oneInput === '加' && $twoInput === '减') {
            var jiajian = model.unIque(shuffle(model.mixAddSub(arrOne,arrTwo,arrThree)));//去重并且生成字符串——连加
            $ksContent.html(jiajian);
        } else if($oneInput === '加' && $twoInput === '乘') {
            var jiacheng = model.unIque(shuffle(model.mixAddMul(arrOne,arrTwo,arrThree)));//去重并且生成字符串——连加
            $ksContent.html(jiacheng);
        } else if($oneInput === '加' && $twoInput === '除') {
            var jiachu = model.unIque(shuffle(model.mixAddDiv(arrOne,arrTwo,arrThree)));//去重并且生成字符串——连加
            $ksContent.html(jiachu);
        } else if($oneInput === '减' && $twoInput === '加') {
            var jianjia = model.unIque(shuffle(model.mixSubAdd(arrOne,arrTwo,arrThree)));//去重并且生成字符串——连加
            $ksContent.html(jianjia);
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

    //去重并且混合返回字符串
    function unImixStr(arrOne,arrTwo,arrThree) {
        var result = model.unIque(shuffle(model.mixAdd(arrOne,arrTwo,arrThree)));
        $ksContent.html(result);
    }

    //获得随机数组
    function randomNums(MinNum,MaxNum,Limit) {
        return model.unIque(model.RandomNums(MinNum,MaxNum,Limit));
    }

    //parseInt()转换成数字的方法

})(window.model);