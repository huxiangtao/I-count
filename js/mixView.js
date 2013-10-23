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
            kuohao = 0,
            oper;




        if($oneInput === '加' && $twoInput === '加') {

            unImixAdd(arrOne,arrTwo,arrThree);

        } else if($oneInput === '加' && $twoInput === '减') {
            arrOne = randomNums(1,100,100);
            arrTwo = randomNums(1,9,9);
            arrThree = randomNums(1,9,9);
            oper = model.mixAddSub;

            if($kuohao === '前') {
                kuohao = 1;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '后') {
                kuohao = 2;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '默认') {
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            }

        } else if($oneInput === '加' && $twoInput === '乘') {

            arrOne = randomNums(1,100,100);
            arrTwo = randomNums(1,9,9);
            arrThree = randomNums(1,9,9);
            oper = model.mixAddMul;

            if($kuohao === '前') {
                kuohao = 1;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '后') {
                kuohao = 2;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '默认') {
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            }

        } else if($oneInput === '加' && $twoInput === '除') {

            arrOne = randomNums(1,100,100);
            arrTwo = randomNums(1,81,81);
            arrThree = randomNums(1,9,9);
            oper = model.mixAddDiv;

            if($kuohao === '前') {
                kuohao = 1;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '后') {
                kuohao = 2;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else {
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            }

        } else if($oneInput === '减' && $twoInput === '加') {

            arrOne = randomNums(1,100,100);
            arrTwo = randomNums(1,100,100);
            arrThree = randomNums(1,9,9);
            oper = model.mixSubAdd;

            if($kuohao === '前') {
                kuohao = 1;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '后') {
                kuohao = 2;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '默认') {
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            }

        } else if($oneInput === '减' && $twoInput === '减') {

            arrOne = randomNums(1,100,100);
            arrTwo = randomNums(1,100,100);
            arrThree = randomNums(1,9,10);
            oper = model.mixSub;

            if($kuohao === '前') {
                kuohao = 1;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '后') {
                kuohao = 2;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '默认') {
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            }

        } else if($oneInput === '减' && $twoInput === '乘') {

            arrOne = randomNums(1,100,100);
            arrTwo = randomNums(1,9,9);
            arrThree = randomNums(1,9,9);
            oper = model.mixSubMul;

            if($kuohao === '前') {
                kuohao = 1;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '后') {
                kuohao = 2;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '默认') {
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            }

        } else if($oneInput === '减' && $twoInput === '除') {

            arrOne = randomNums(1,100,100);
            arrTwo = randomNums(1,100,100);
            arrThree = randomNums(1,9,9);
            oper = model.mixSubDiv;

            if($kuohao === '前') {
                kuohao = 1;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '后') {
                kuohao = 2;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '默认') {
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            }

        } else if($oneInput === '乘' && $twoInput === '加') {

            arrOne = arrTwo = randomNums(1,9,9);
            arrThree = randomNums(1,9,9);
            oper = model.mixMulAdd;

            if($kuohao === '前') {
                kuohao = 1;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '后') {
                kuohao = 2;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '默认') {
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            }

        } else if($oneInput === '乘' && $twoInput === '减') {

            arrOne = arrTwo = randomNums(1,9,9);
            arrThree = randomNums(1,81,81);
            oper = model.mixMulSub;

            if($kuohao === '前') {
                kuohao = 1;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '后') {
                kuohao = 2;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '默认') {
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            }

        } else if($oneInput === '乘' && $twoInput === '乘') {

            arrOne = arrTwo = arrThree = randomNums(1,9,9);
            oper = model.mixMul;

            if($kuohao === '前') {
                kuohao = 1;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '后') {
                kuohao = 2;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '默认') {
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            }

        } else if($oneInput === '乘' && $twoInput === '除') {

            arrOne = randomNums(1,100,100);
            arrTwo = randomNums(1,100,100);
            arrThree = randomNums(1,9,9);
            oper = model.mixMulDiv;

            if($kuohao === '前') {
                kuohao = 1;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '后') {
                kuohao = 2;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '默认') {
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            }

        } else if($oneInput === '除' && $twoInput === '加') {

            arrOne = randomNums(1,100,100);
            arrTwo = randomNums(1,9,9);
            arrThree = randomNums(1,9,9);
            oper = model.mixDivAdd;

            if($kuohao === '前') {
                kuohao = 1;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '后') {
                kuohao = 2;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '默认') {
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            }

        } else if($oneInput === '除' && $twoInput === '减') {

            arrOne = randomNums(1,100,100);
            arrTwo = randomNums(1,9,9);
            arrThree = randomNums(1,9,9);
            oper = model.mixDivSub;

            if($kuohao === '前') {
                kuohao = 1;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '后') {
                kuohao = 2;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '默认') {
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            }

        } else if($oneInput === '除' && $twoInput === '乘') {

            arrOne = randomNums(1,100,100);
            arrTwo = randomNums(1,9,9);
            arrThree = randomNums(1,9,9);
            oper = model.mixDivMul;

            if($kuohao === '前') {
                kuohao = 1;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '后') {
                kuohao = 2;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '默认') {
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            }

        } else if($oneInput === '除' && $twoInput === '除') {

            arrOne = randomNums(1,100,100);
            arrTwo = randomNums(1,9,9);
            arrThree = randomNums(1,9,9);
            oper = model.mixDiv;

            if($kuohao === '前') {
                kuohao = 1;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '后') {
                kuohao = 2;
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            } else if($kuohao === '默认') {
                unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao);
            }

        }

    });



    function unMixFormula(arrOne,arrTwo,arrThree,oper,kuohao) {
        if(kuohao == 1) {
            var resultq = model.unIque(shuffle(oper(arrOne,arrTwo,arrThree,kuohao)));
            $ksContent.html(resultq);
        } else if(kuohao == 2) {
            var resulth = model.unIque(shuffle(oper(arrOne,arrTwo,arrThree,kuohao)));
            $ksContent.html(resulth);
        } else if(kuohao == 0) {
            var result = model.unIque(shuffle(oper(arrOne,arrTwo,arrThree,kuohao)));
            $ksContent.html(result);
        }
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