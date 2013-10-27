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
        $formMix = $('#form-mix'),
        $formKuohao = $('#form-kuohao'),
        $Operation =$('#operation'),
        $ksContent = $(".ks-content"),
        $itemNumber = $(".item-number");


    $cancelButton.click(function() {
        window.location.reload();
    });

    $runButton.click(function() {
        var $oneInput = $formOne.find("option:selected").text(),
            $twoInput = $formTwo.find("option:selected").text(),
            $kuohao = $formKuohao.find("option:selected").text(),
            $Input = $oneInput + $twoInput,
            $mixInput = $formMix.find("option:selected").text();

        var arrOne = randomNums(3,81,100),
            arrTwo = randomNums(1,81,100),
            arrThree = randomNums(1,81,100),
            kuohao = bracketSwitch($kuohao),
            oper = lowSwitch($Input);







        //混合运算的控制器并返回理想的数组
        function Mix(arrOne,arrTwo,arrThree,oper,kuohao) {
            return model.Mix(arrOne,arrTwo,arrThree,oper,kuohao);
        }

        //混合方式——临时办法
        function mixSwitch(Input) {
            switch(Input) {
                case '默认' :
                    break;

                case '加减平级混合' :
                    mixAddSub();
                    break;

                case '乘除平级混合' :
                    mixMulDiv();
                    break;

                case '加减乘除混合' :
                    mixAll();
                    break;
            }

        }

        //临时办法
        function mixAddSub() {
            var arra = randomNums(1,81,100),
                arrb = randomNums(2,9,10);
                kuohao = 0;

            var resAs = model.unIque(shuffle(model.AddSub(arra,arra,arra,kuohao))),
                resAa = model.unIque(shuffle(model.mixAdd(arra,arra,arra,kuohao))),
                resSa = model.unIque(shuffle(model.SubAdd(arra,arra,arra,kuohao))),
                resSs = model.unIque(shuffle(model.mixSub(arra,arra,arra,kuohao))),
                sresAs = model.unIque(shuffle(model.mixSub(arra,arrb,arrb,kuohao))),
                sresAa = model.unIque(shuffle(model.mixSub(arra,arrb,arrb,kuohao))),
                sresSa = model.unIque(shuffle(model.mixSub(arra,arrb,arrb,kuohao))),
                sresSs = model.unIque(shuffle(model.mixSub(arra,arrb,arrb,kuohao))),
                sresA = shuffle($.merge(sresAs , sresAa)),
                sresS = shuffle($.merge(sresSa , sresSs)),
                sresArr = shuffle($.merge(sresA , sresS)),
                resA = shuffle($.merge(resAs , resAa)),
                resS = shuffle($.merge(resSa , resSs)),
                resArr = shuffle($.merge(resA, resS)),
                finalresArr = shuffle($.merge(sresArr, resArr)),
                itemnumber = finalresArr.length;

            $ksContent.html(finalresArr);
            $itemNumber.html(itemnumber);
        }

        function mixMulDiv() {
            var arra = randomNums(1,81,100),
                arrb = randomNums(2,9,10);
                kuohao = 0;
            var resMd = model.unIque(shuffle(model.MulDiv(arrb,arra,arrb,kuohao))),
                resMm = model.unIque(shuffle(model.mixMul(arrb,arrb,arrb,kuohao))),
                resDm = model.unIque(shuffle(model.DivMul(arra,arrb,arrb,kuohao))),
                resDd = model.unIque(shuffle(model.mixDiv(arra,arrb,arrb,kuohao))),
                resM = shuffle($.merge(resMd , resMm)),
                resD = shuffle($.merge(resDm , resDd)),
                resArr = shuffle($.merge(resM, resD)),
                itemnumber = resArr.length;

            $ksContent.html(resArr);
            $itemNumber.html(itemnumber);
        }

        function mixAll() {
            var arra = randomNums(1,81,100),
                arrb = randomNums(2,9,10);
                kuohao = 0;

            var resAs = model.unIque(shuffle(model.AddSub(arra,arra,arra,kuohao))),
                resAa = model.unIque(shuffle(model.mixAdd(arra,arra,arra,kuohao))),
                resAm = model.unIque(shuffle(model.AddMul(arra,arrb,arrb,kuohao))),
                resAd = model.unIque(shuffle(model.AddDiv(arra,arra,arrb,kuohao))),
                resSa = model.unIque(shuffle(model.SubAdd(arra,arra,arra,kuohao))),
                resSs = model.unIque(shuffle(model.mixSub(arra,arra,arra,kuohao))),
                resSm = model.unIque(shuffle(model.SubMul(arra,arrb,arrb,kuohao))),
                resSd = model.unIque(shuffle(model.SubDiv(arra,arra,arrb,kuohao))),
                resMa = model.unIque(shuffle(model.MulAdd(arrb,arrb,arra,kuohao))),
                resMs = model.unIque(shuffle(model.MulSub(arrb,arrb,arra,kuohao))),
                resMm = model.unIque(shuffle(model.mixMul(arrb,arrb,arrb,kuohao))),
                resMd = model.unIque(shuffle(model.MulDiv(arrb,arra,arrb,kuohao))),
                resDa = model.unIque(shuffle(model.DivAdd(arra,arrb,arra,kuohao))),
                resDs = model.unIque(shuffle(model.DivSub(arra,arrb,arra,kuohao))),
                resDm = model.unIque(shuffle(model.DivMul(arra,arrb,arrb,kuohao))),
                resDd = model.unIque(shuffle(model.mixDiv(arra,arrb,arrb,kuohao))),
                resA = shuffle($.merge(resAs , resAa),$.merge(resAm , resAd)),
                resS = shuffle($.merge(resSa , resSs),$.merge(resSm , resSd)),
                resM = shuffle($.merge(resMd , resMm),$.merge(resMa , resMs)),
                resD = shuffle($.merge(resDm , resDd),$.merge(resDa , resDs)),
                resArrAs = shuffle($.merge(resA.slice(2,20), resS.slice(2,20))),
                resArrMd = shuffle($.merge(resM, resD)),
                resArr = shuffle($.merge(resArrAs, resArrMd)),
                itemnumber = resArr.length;

            $ksContent.html(resArr);
            $itemNumber.html(itemnumber);
        }

        //选取元算符号
        function lowSwitch(Input) {
            var oper = '';
            switch(Input) {
                case '默认默认' :
                    mixSwitch($mixInput);
                    break;

                case '加加' :
                    return oper = '++';
                    break;

                case '加减' :
                    return oper = '+-';
                    break;

                case '加乘' :
                    return oper = '+×';
                    break;

                case '加除' :
                    return oper = '+÷';
                    break;

                case '减加' :
                    return oper = '-+';
                    break;

                case '减减' :
                    return oper = '--';
                    break;

                case '减乘' :
                    return oper = '-×';
                    break;

                case '减除' :
                    return oper = '-÷';
                    break;

                case '乘加' :
                    return oper = '×+';
                    break;

                case '乘减' :
                    return oper = '×-';
                    break;

                case '乘乘' :
                    return oper = '××';
                    break;

                case '乘除' :
                    return oper = '×÷';
                    break;

                case '除加' :
                    return oper = '÷+';
                    break;

                case '除减' :
                    return oper = '÷-';
                    break;

                case '除乘' :
                    return oper = '÷×';
                    break;

                case '除除' :
                    return oper = '÷÷';
                    break;
            }
        }



        //最后做的事情
        var arrResult = Mix(arrOne,arrTwo,arrThree,oper,kuohao);
        $ksContent.html(shuffle(arrResult));
        $itemNumber.html(arrResult.length);

    });



    //加括号函数——开关
    function bracketSwitch(kuohao) {
        switch(kuohao) {
            case '前' :
                return kuohao = 1;
                break;

            case '后' :
                return kuohao = 2;
                break;

            case '默认' :
                return kuohao = 0;
                break;
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