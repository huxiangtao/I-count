/**
 * Created with IntelliJ IDEA.
 * User: huxiangtao
 * Date: 13-11-4
 * Time: 上午10:24
 * To change this template use File | Settings | File Templates.
 */

(function(model) {
    var $runButton = $('#run'),
            $cancelButton = $('#cancel'),
            $formMix = $('#form-mix'),
            $formKuohao = $('#form-kuohao'),
            $ksContent = $(".ks-content"),
            $itemNumber = $(".item-number");


        $cancelButton.click(function() {
            window.location.reload();
        });

        $runButton.click(function() {
            var $mixInput = $formMix.find("option:selected").text(),
                kuohao = 0;








            //混合方式_临时办法
            function mixSwitch(sInput) {
                switch(sInput) {
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

                    case '几百几十加减混合' :
                        jibaiJishi();
                        break;

                    case '几千几百加减混合' :
                        jiqianjibai();
                        break;

                    case '零的个数一样的加减法' :
                        linggeshu();
                        break;
                }

            }


            //Complex function
            function Complex(input) {

                var data = {
                    fn: {
                        mixAdd: model.mixAdd,
                        AddSub: model.AddSub,
                        AddMul: model.AddMul,
                        AddDiv: model.AddDiv,
                        SubAdd: model.SubAdd,
                        mixSub: model.mixSub,
                        SubMul: model.SubMul,
                        SubDiv: model.SubDiv,
                        MulAdd: model.MulAdd,
                        MulSub: model.MulSub,
                        mixMul: model.mixMul,
                        MulDiv: model.MulDiv,
                        DivAdd: model.DivAdd,
                        DivSub: model.DivSub,
                        DivMul: model.DivMul,
                        mixDiv: model.mixDiv
                    },

                    arrA: randomNums(1,81,100),

                    arrB: randomNums(1,9,10)

                };

                function makeFn(data) {
                    switch(input) {
                        case '++' :
                            return data.fn.mixAdd;
                            break;

                        case '+-' :
                            return data.fn.AddSub;
                            break;

                        case '+×' :
                            return data.fn.AddMul;
                            break;

                        case '+÷' :
                            return data.fn.AddDiv;
                            break;

                        case '-+' :
                            return data.fn.SubAdd;
                            break;

                        case '--' :
                            return data.fn.mixSub;
                            break;

                        case '-×' :
                            return data.fn.SubMul;
                            break;

                        case '-÷' :
                            return data.fn.SubDiv;
                            break;

                        case '×+' :
                            return data.fn.MulAdd;
                            break;

                        case '×-' :
                            return data.fn.MulSub;
                            break;

                        case '××' :
                            return data.fn.mixMul;
                            break;

                        case '×÷' :
                            return data.fn.MulDiv;
                            break;

                        case '÷+' :
                            return data.fn.DivAdd;
                            break;

                        case '÷-' :
                            return data.fn.DivSub;
                            break;

                        case '÷×' :
                            return data.fn.DivMul;
                            break;

                        case '÷÷' :
                            return data.fn.mixDiv;
                            break;

                    }
                }

                function makeArr(data) {
                    var n = [];

                    switch(input) {
                        case '++' || '+-' || '-+' || '--':
                            return n[0] = n[1] = n[2] = data.arrA;
                            break;

                        case '+×' || '+÷' || '-×' || '-÷':
                            return n[0] = n[1] = data.arrA;
                                   n[2] = data.arrB;
                                   break;

                        case '×+' || '×-':
                            return n[2] = n[1] = data.arrA;
                                   n[0] = data.arrB;
                                   break;

                        case '÷+' || '÷-':
                            return n[0] = n[2] = data.arrA;
                                   n[1] = data.arrB;
                                   break;

                        case '××' || '×÷' || '÷×' || '÷÷':
                            return n[0] = n[1] = n[2] = data.arrB;
                            break;
                    }

                    return n;
                }

                var fn = makeFn(data),
                    arr = makeArr(data);

                return resultArr = model.unIque(shuffle(fn(arr[0],arr[1],arr[2],kuohao)));
                debugger;
            }

            //临时办法
            function mixAddSub() {
                var k = [],
                    input = '+-';

                var resAs = Complex(input);
                    /*resArr = shuffle(k.concat(resAs,resAa,resSa,resSs,sresAs,sresAa,sresSa,sresSs)),

                    itemnumber = resArr.length;*/

                $ksContent.html(resAs);
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

            //最后做的事情
            var arrResult = mixSwitch($mixInput);
            $ksContent.html(shuffle(arrResult));

        });



/*
        //加括号函数??开关
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
*/




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