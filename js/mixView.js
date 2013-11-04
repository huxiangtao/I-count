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
        $ksContent = $(".ks-content"),
        $itemNumber = $(".item-number");


    $cancelButton.click(function() {
        window.location.reload();
    });

    $runButton.click(function() {
        var $oneInput = $formOne.find("option:selected").text(),
            $twoInput = $formTwo.find("option:selected").text(),
            $kuohao = $formKuohao.find("option:selected").text(),
            $Input = $oneInput + $twoInput;

        var arrOne = randomNums(1,81,100),
            arrTwo = randomNums(1,81,100),
            arrThree = randomNums(1,81,100),
            kuohao = bracketSwitch($kuohao),
            oper = lowSwitch($Input);







        //混合运算的控制器并返回理想的数组
        function Mix(arrOne,arrTwo,arrThree,oper,kuohao) {
            return model.Mix(arrOne,arrTwo,arrThree,oper,kuohao);
        }

        //选取元算符号
        function lowSwitch(Input) {
            var oper = '';
            switch(Input) {
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
        var arrResult = SunIque(sunIque(model.unIque(Mix(arrOne,arrTwo,arrThree,oper,kuohao))));

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

    //特殊的去重函数
    function sunIque(arr) {
        var n = [];
        var hash = {};

        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            var itemOne = item[4];
            var itemTwo = item[6];
            var key = typeof(item) + itemOne + itemTwo;
            if (hash[key] !== 1) {
                n.push(item);
                hash[key] = 1;
            }
        }
        return n;

    }

    function SunIque(arr) {
        var n = [];
        var hash = {};

        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            var itemOne = item[8];
            var itemTwo = item[9];
            var key = typeof(item) + itemOne + itemTwo;
            if (hash[key] !== 1) {
                n.push(item);
                hash[key] = 1;
            }
        }
        return n;
    }
})(window.model);