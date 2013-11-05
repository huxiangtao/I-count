/**
 * Created with IntelliJ IDEA.
 * User: huxiangtao
 * Date: 13-9-14
 * Time: 下午2:56
 * To change this template use File | Settings | File Templates.
 */

(function(model) {

    RegExp.prototype.getIndex = function(str){
        var vArray = str.match(this);
        var indexArray = [];
        if(vArray!= null){
            for(var i =0,iLength=vArray.length;i<iLength;i++){
             var vIndex = str.indexOf(vArray[i]);
                if(vIndex>=0){
                    indexArray.push(vIndex);
                }
            }
        } else {
            return indexArray;
        }

        return indexArray;
    };


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


        function niming() {
            var ZuiHou = [];
            //最后做的事情
            for(var i = 0; i < 50; i++) {
                var arrOne = randomNums(1,81,100),
                    arrTwo = randomNums(1,81,100),
                    arrThree = randomNums(1,81,100),
                    kuohao = bracketSwitch($kuohao),
                    oper = lowSwitch($Input);

                var arrResult = model.unIque(Mix(arrOne,arrTwo,arrThree,oper,kuohao));
                var a = superUnique(arrResult,0);
                var b = superUnique(a,1);
                var c = superUnique(b,2);
                ZuiHou.push(c[0]);
            }
            return ZuiHou;
        }

        var s = model.unIque(niming());
        $ksContent.html(shuffle(s));
        $itemNumber.html(s.length);
    });




    //选取元算符号
    function lowSwitch(Input) {
            var oper = '';
            switch(Input) {
                case '加加' :
                    return oper = '﹢﹢';
                    break;

                case '加减' :
                    return oper = '﹢﹣';
                    break;

                case '加乘' :
                    return oper = '﹢×';
                    break;

                case '加除' :
                    return oper = '﹢÷';
                    break;

                case '减加' :
                    return oper = '﹣﹢';
                    break;

                case '减减' :
                    return oper = '﹣﹣';
                    break;

                case '减乘' :
                    return oper = '﹣×';
                    break;

                case '减除' :
                    return oper = '﹣÷';
                    break;

                case '乘加' :
                    return oper = '×﹢';
                    break;

                case '乘减' :
                    return oper = '×﹣';
                    break;

                case '乘乘' :
                    return oper = '××';
                    break;

                case '乘除' :
                    return oper = '×÷';
                    break;

                case '除加' :
                    return oper = '÷﹢';
                    break;

                case '除减' :
                    return oper = '÷﹣';
                    break;

                case '除乘' :
                    return oper = '÷×';
                    break;

                case '除除' :
                    return oper = '÷÷';
                    break;
            }
        }

    //混合运算的控制器并返回理想的数组
    function Mix(arrOne,arrTwo,arrThree,oper,kuohao) {
        return model.Mix(arrOne,arrTwo,arrThree,oper,kuohao);
    }


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

    //正则匹配_防止数字重复
    function superUnique(arr,p) {

        var pattern = new RegExp("[﹢﹣× ÷]","g"),
            vtt = [],
            n = [],
            itemq,
            hash = {};
        for(var i = 0; i < arr.length; i++) {
            var item = arr[i];
            vtt = pattern.getIndex(item);
            var qq = vtt[0] - 1,
                q = vtt[0] + 1,
                h = vtt[1] + 1;

            switch(p) {
                case 0 :
                    itemq = item[qq];
                    break;

                case 1 :
                    itemq = item[q];
                    break;

                case 2 :
                    itemq = item[h];
                    break;

            }

            var key = typeof(item) + itemq;
            if (hash[key] !== 1) {
                n.push(item);
                hash[key] = 1;
            }

        }
        return n;

    }

})(window.model);