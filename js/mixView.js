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
        $formKuohao = $('#form-kuohao'),
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
            $kuohao = $formKuohao.find("option:selected").text(),
            $showLimit = 100;/*parseInt($('#show-limit').val()),*/

        var arrOne = [],
            arrTwo = [],
            arrThree = [],
            kuohao = 0;




        if($oneInput === '加' && $twoInput === '加') {

            unImixAdd(arrOne,arrTwo,arrThree);

        } else if($oneInput === '加' && $twoInput === '减') {

            if($kuohao === '前') {
                kuohao = 1;
                unImixAs(arrOne,arrTwo,arrThree,kuohao);
            } else if($kuohao === '后') {
                kuohao = 2;
                unImixAs(arrOne,arrTwo,arrThree,kuohao);
            } else if($kuohao === '默认') {
                unImixAs(arrOne,arrTwo,arrThree,kuohao);
            }

        } else if($oneInput === '加' && $twoInput === '乘') {

            arrOne = randomNums(1,100,100);
            arrTwo = randomNums(1,10,10);
            arrThree = randomNums(1,9,10);

            if($kuohao === '前') {
                kuohao = 1;
                unImixAm(arrOne,arrTwo,arrThree,kuohao);
            } else if($kuohao === '后') {
                kuohao = 2;
                unImixAm(arrOne,arrTwo,arrThree,kuohao);
            } else if($kuohao === '默认') {
                unImixAm(arrOne,arrTwo,arrThree,kuohao);
            }

        } else if($oneInput === '加' && $twoInput === '除') {

            arrOne = randomNums(1,100,100);
            arrTwo = randomNums(1,81,10);
            arrThree = randomNums(1,9,10);

            if($kuohao === '前') {
                kuohao = 1;
                unImixAd(arrOne,arrTwo,arrThree,kuohao);
            } else if($kuohao === '后') {
                kuohao = 2;
                unImixAd(arrOne,arrTwo,arrThree,kuohao);
            } else {
                unImixAd(arrOne,arrTwo,arrThree,kuohao);
            }

        } else if($oneInput === '减' && $twoInput === '加') {

            arrOne = randomNums(1,100,100);
            arrTwo = randomNums(1,100,100);
            arrThree = randomNums(1,9,10);

            if($kuohao === '前') {
                kuohao = 1;
                unImixSa(arrOne,arrTwo,arrThree,kuohao);
            } else if($kuohao === '后') {
                kuohao = 2;
                unImixSa(arrOne,arrTwo,arrThree,kuohao);
            } else if($kuohao === '默认') {
                unImixSa(arrOne,arrTwo,arrThree,kuohao);
            }

        } else if($oneInput === '减' && $twoInput === '减') {

            unImixSub(arrOne,arrTwo,arrThree);

        } else if($oneInput === '减' && $twoInput === '乘') {

            if($kuohao === '前') {
                kuohao = 1;

            }

            unImixSm(arrOne,arrTwo,arrThree);

        } else if($oneInput === '减' && $twoInput === '除') {

            unImixSd(arrOne,arrTwo,arrThree);

        } else if($oneInput === '乘' && $twoInput === '加') {

            unImixMa(arrOne,arrTwo,arrThree);

        } else if($oneInput === '乘' && $twoInput === '减') {

            unImixMs(arrOne,arrTwo,arrThree);

        } else if($oneInput === '乘' && $twoInput === '乘') {

            unImixMul(arrOne,arrTwo,arrThree);

        } else if($oneInput === '乘' && $twoInput === '除') {

            unImixMd(arrOne,arrTwo,arrThree);

        } else if($oneInput === '除' && $twoInput === '加') {

            unImixDa(arrOne,arrTwo,arrThree);

        } else if($oneInput === '除' && $twoInput === '减') {

            unImixDs(arrOne,arrTwo,arrThree);

        } else if($oneInput === '除' && $twoInput === '乘') {

            unImixDm(arrOne,arrTwo,arrThree);

        } else if($oneInput === '除' && $twoInput === '除') {

            unImixDiv(arrOne,arrTwo,arrThree);

        }

    });


    //去重并且混合返回字符串

    function unImixAdd(arrOne,arrTwo,arrThree) {
        var result = model.unIque(shuffle(model.mixAdd(arrOne,arrTwo,arrThree)));
        $ksContent.html(result);
    }

    function unImixAs(arrOne,arrTwo,arrThree,kuohao) {
        if(kuohao == 1) {
            var resultq = model.unIque(shuffle(model.mixAddSub(arrOne,arrTwo,arrThree,kuohao)));
            $ksContent.html(resultq);
        } else if(kuohao == 2) {
            var resulth = model.unIque(shuffle(model.mixAddSub(arrOne,arrTwo,arrThree,kuohao)));
            $ksContent.html(resulth);
        } else if(kuohao == 0) {
            var result = model.unIque(shuffle(model.mixAddSub(arrOne,arrTwo,arrThree,kuohao)));
            $ksContent.html(result);
        }
    }

    function unImixAm(arrOne,arrTwo,arrThree,kuohao) {
        if(kuohao == 1) {
            var resultq = model.unIque(shuffle(model.mixAddMul(arrOne,arrTwo,arrThree,kuohao)));
            $ksContent.html(resultq);
        } else if(kuohao == 2) {
            var resulth = model.unIque(shuffle(model.mixAddMul(arrOne,arrTwo,arrThree,kuohao)));
            $ksContent.html(resulth);
        } else if(kuohao == 0) {
            var result = model.unIque(shuffle(model.mixAddMul(arrOne,arrTwo,arrThree,kuohao)));
            $ksContent.html(result);
        }
    }

    function unImixAd(arrOne,arrTwo,arrThree,kuohao) {
        if(kuohao == 1) {
            var resultq = model.unIque(shuffle(model.mixAddDiv(arrOne,arrTwo,arrThree,kuohao)));
            $ksContent.html(resultq);
        } else if(kuohao == 2) {
            var resulth = model.unIque(shuffle(model.mixAddDiv(arrOne,arrTwo,arrThree,kuohao)));
            $ksContent.html(resulth);
        } else if(kuohao == 0) {
            var result = model.unIque(shuffle(model.mixAddDiv(arrOne,arrTwo,arrThree,kuohao)));
            $ksContent.html(result);
        }
    }

    function unImixSa(arrOne,arrTwo,arrThree,kuohao) {
        if(kuohao == 1) {
            var resultq = model.unIque(shuffle(model.mixSubAdd(arrOne,arrTwo,arrThree,kuohao)));
            $ksContent.html(resultq);
        } else if(kuohao == 2) {
            var resulth = model.unIque(shuffle(model.mixSubAdd(arrOne,arrTwo,arrThree,kuohao)));
            $ksContent.html(resulth);
        } else if(kuohao == 0) {
            var result = model.unIque(shuffle(model.mixSubAdd(arrOne,arrTwo,arrThree,kuohao)));
            $ksContent.html(result);
        }

    }

    function unImixSub(arrOne,arrTwo,arrThree) {
        var result = model.unIque(shuffle(model.mixSub(arrOne,arrTwo,arrThree)));
        $ksContent.html(result);
    }

    function unImixSm(arrOne,arrTwo,arrThree) {
        var result = model.unIque(shuffle(model.mixSubMul(arrOne,arrTwo,arrThree)));
        $ksContent.html(result);
    }

    function unImixSd(arrOne,arrTwo,arrThree) {
        var result = model.unIque(shuffle(model.mixSubDiv(arrOne,arrTwo,arrThree)));
        $ksContent.html(result);
    }

    function unImixMa(arrOne,arrTwo,arrThree) {
        var result = model.unIque(shuffle(model.mixMulAdd(arrOne,arrTwo,arrThree)));
        $ksContent.html(result);
    }

    function unImixMs(arrOne,arrTwo,arrThree) {
        var result = model.unIque(shuffle(model.mixMulSub(arrOne,arrTwo,arrThree)));
        $ksContent.html(result);
    }

    function unImixMul(arrOne,arrTwo,arrThree) {
        var result = model.unIque(shuffle(model.mixMul(arrOne,arrTwo,arrThree)));
        $ksContent.html(result);
    }

    function unImixMd(arrOne,arrTwo,arrThree) {
        var result = model.unIque(shuffle(model.mixMulDiv(arrOne,arrTwo,arrThree)));
        $ksContent.html(result);
    }

    function unImixDa(arrOne,arrTwo,arrThree) {
        var result = model.unIque(shuffle(model.mixDivAdd(arrOne,arrTwo,arrThree)));
        $ksContent.html(result);
    }

    function unImixDs(arrOne,arrTwo,arrThree) {
        var result = model.unIque(shuffle(model.mixDivSub(arrOne,arrTwo,arrThree)));
        $ksContent.html(result);
    }

    function unImixDm(arrOne,arrTwo,arrThree) {
        var result = model.unIque(shuffle(model.mixDivMul(arrOne,arrTwo,arrThree)));
        $ksContent.html(result);
    }

    function unImixDiv(arrOne,arrTwo,arrThree) {
        var result = model.unIque(shuffle(model.mixDiv(arrOne,arrTwo,arrThree)));
        $ksContent.html(result);
    }





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

})(window.model);