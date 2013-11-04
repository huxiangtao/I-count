/**
 * Created with IntelliJ IDEA.
 * User: huxiangtao
 * Date: 13-11-4
 * Time: ����10:24
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

            var arrOne = randomNums(1,81,100),
                arrTwo = randomNums(1,81,100),
                arrThree = randomNums(1,81,100),
                kuohao = bracketSwitch($kuohao),
                oper = lowSwitch($Input);







            //�������Ŀ��������������������
            function Mix(arrOne,arrTwo,arrThree,oper,kuohao) {
                return model.Mix(arrOne,arrTwo,arrThree,oper,kuohao);
            }

            //��Ϸ�ʽ??��ʱ�취
            function mixSwitch(Input) {
                switch(Input) {
                    case 'Ĭ��' :
                        break;

                    case '�Ӽ�ƽ�����' :
                        mixAddSub();
                        break;

                    case '�˳�ƽ�����' :
                        mixMulDiv();
                        break;

                    case '�Ӽ��˳����' :
                        mixAll();
                        break;

                    case '���ټ�ʮ�Ӽ����' :
                        jibaiJishi();
                        break;

                    case '��ǧ���ټӼ����' :
                        jiqianjibai();
                        break;

                    case '��ĸ���һ���ļӼ���' :
                        linggeshu();
                        break;
                }

            }

            //��ʱ�취
            function mixAddSub() {
                var arra = randomNums(1,81,100),
                    arrb = randomNums(2,9,10),
                    k = [];
                    kuohao = 0;

                var resAs = model.unIque(shuffle(model.AddSub(arra,arra,arra,kuohao))),
                    resAa = model.unIque(shuffle(model.mixAdd(arra,arra,arra,kuohao))),
                    resSa = model.unIque(shuffle(model.SubAdd(arra,arra,arra,kuohao))),
                    resSs = model.unIque(shuffle(model.mixSub(arra,arra,arra,kuohao))),
                    sresAs = model.unIque(shuffle(model.mixSub(arra,arrb,arrb,kuohao))),
                    sresAa = model.unIque(shuffle(model.mixSub(arra,arrb,arrb,kuohao))),
                    sresSa = model.unIque(shuffle(model.mixSub(arra,arrb,arrb,kuohao))),
                    sresSs = model.unIque(shuffle(model.mixSub(arra,arrb,arrb,kuohao))),
                    resArr = shuffle(k.concat(resAs,resAa,resSa,resSs,sresAs,sresAa,sresSa,sresSs)),

                    itemnumber = resArr.length;

                $ksContent.html(resArr);
                $itemNumber.html(itemnumber);
            }

            function mixMulDiv() {
                var arra = randomNums(1,81,100),
                    arrb = randomNums(2,9,10),
                    k = [];
                    kuohao = 0;

                var resMd = model.unIque(shuffle(model.MulDiv(arrb,arra,arrb,kuohao))),
                    resMm = model.unIque(shuffle(model.mixMul(arrb,arrb,arrb,kuohao))),
                    resDm = model.unIque(shuffle(model.DivMul(arra,arrb,arrb,kuohao))),
                    resDd = model.unIque(shuffle(model.mixDiv(arra,arrb,arrb,kuohao))),
                    resArr = shuffle(k.concat(resMd,resMm,resDm,resDd)),
                    itemnumber = resArr.length;

                $ksContent.html(resArr);
                $itemNumber.html(itemnumber);
            }

            function mixAll() {
                var arra = randomNums(1,81,100),
                    arrb = randomNums(2,9,10),
                    k = [];
                    kuohao = 0;


                var resAs = (model.unIque(shuffle(model.AddSub(arra,arra,arra,kuohao)))).slice(2,20),
                    resAa = (model.unIque(shuffle(model.mixAdd(arra,arra,arra,kuohao)))).slice(2,20),
                    resAm = model.unIque(shuffle(model.AddMul(arra,arrb,arrb,kuohao))),
                    resAd = model.unIque(shuffle(model.AddDiv(arra,arra,arrb,kuohao))),
                    resSa = (model.unIque(shuffle(model.SubAdd(arra,arra,arra,kuohao)))).slice(2,20),
                    resSs = (model.unIque(shuffle(model.mixSub(arra,arra,arra,kuohao)))).slice(2,20),
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
                    resArr = shuffle(k.concat(resAs,resAa,resAm,resAd,resSa,resSs,resSm,resSd,resMa,resMs,resMm,resMd,resDa,resDs,resDm,resDd)),
                    itemnumber = resArr.length;

                $ksContent.html(resArr);
                $itemNumber.html(itemnumber);
            }

            function jibaiJishi() {
                var arrOne = model.filterNum(randomNums(10,1000,1000)),
                    arrTwo = model.filterNum(randomNums(10,1000,1000)),
                    k = [];

                var resAdd = model.unIque(shuffle(model.jbjsAdd(arrOne,arrTwo))),
                    resSub = model.unIque(shuffle(model.jbjsSub(arrOne,arrTwo))),
                    resArr = shuffle(k.concat(resAdd,resSub)),
                    itemnumber = resArr.length;

                $ksContent.html(resArr);
                $itemNumber.html(itemnumber);
            }

            //�����������
            var arrResult = Mix(arrOne,arrTwo,arrThree,oper,kuohao);
            $ksContent.html(shuffle(arrResult));
            $itemNumber.html(arrResult.length);

        });



        //�����ź���??����
        function bracketSwitch(kuohao) {
            switch(kuohao) {
                case 'ǰ' :
                    return kuohao = 1;
                    break;

                case '��' :
                    return kuohao = 2;
                    break;

                case 'Ĭ��' :
                    return kuohao = 0;
                    break;
            }
        }




        //shuffle ����
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

        //����������
        function randomNums(MinNum,MaxNum,Limit) {
            return model.unIque(model.RandomNums(MinNum,MaxNum,Limit));
        }
})(window.model);