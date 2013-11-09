/**
 * Created with IntelliJ IDEA.
 * User: huxiangtao
 * Date: 13-11-4
 * Time: 上午10:24
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
        $ksContent = $(".ks-content"),
        $itemNumber = $(".item-number"),
        $formMix = $("#form-mix");


    $cancelButton.click(function() {
        window.location.reload();
    });


    $runButton.click(function() {
        var mixInput = $formMix.find("option:selected").text();

        mixSwitch(mixInput);
    });

    var arra = randomNums(1,81,100),
        arrb = randomNums(1,9,10),
        arrc = randomNums(1,1000,1000),
        kuohao = 0,
        kuohaoq = 1,
        kuohaoh = 2,
        opera = '﹢﹢',
        operb = '﹢﹣',
        operc = '﹢×',
        operd = '﹢÷',
        opere = '﹣﹢',
        operf = '﹣﹣',
        operg = '﹣×',
        operh = '﹣÷',
        operi = '×﹢',
        operj = '×﹣',
        operk = '××',
        operl = '×÷',
        operm = '÷﹢',
        opern = '÷﹣',
        opero = '÷×',
        operp = '÷÷';


    //混合方式_临时办法
    function mixSwitch(sInput) {
        switch(sInput) {
            case '默认' :
                break;

            case '加减平级混合' :
                mixAddSubw();
                break;

            case '乘除平级混合' :
                mixMulDivw();
                break;

            case '加减乘除混合' :
                mixAllw();
                break;

            case '加减平级混合带括号' :
                mixAddSub();
                break;

            case '乘除平级混合带括号' :
                mixMulDiv();
                break;

            case '加减乘除混合带括号' :
                mixAll();
                break;

            case '两级运算混合' :
                mixAsMdw();
                break;

            case '两级运算混合带括号' :
                mixAsMd();
                break;


            case '几百几十加减混合' :
                jibaiJishi();
                break;

            case '几千几百加减混合' :
                jiqianjibai();
                break;
        }

    }

    //此乃平级的计算
    function mixAddSubw() {
        var k = [];

        var arr = k.concat(importUse(opera,kuohao),importUse(operb,kuohao),importUse(opere,kuohao),importUse(operf,kuohao));

        var s = model.unIque(arr);
        $ksContent.html(shuffle(s));
        $itemNumber.html(s.length);
        return s;

    }

    function mixMulDivw() {
        var k = [];

        var arr = k.concat(importUse(operk,kuohao),importUse(operl,kuohao),importUse(opero,kuohao),importUse(operp,kuohao));

        var s = model.unIque(arr);
        $ksContent.html(shuffle(s));
        $itemNumber.html(s.length);
        return s;
    }

    function mixAllw() {

        var m = [];
        var n = m.concat(mixAddSubw(),mixMulDivw(),mixAsMdw());
        var s = model.unIque(n);
        $ksContent.html(shuffle(s));
        $itemNumber.html(s.length);

    }


    function mixAddSub() {
        var k = [];
                                                                                                                           //这里开始带括号
        var arr = k.concat(importUse(opera,kuohao),importUse(operb,kuohao),importUse(opere,kuohao),importUse(operf,kuohao),importUse(operb,kuohaoh),importUse(opere,kuohaoh),importUse(operf,kuohaoq),importUse(operf,kuohaoh));

        var s = model.unIque(arr);
        $ksContent.html(shuffle(s));
        $itemNumber.html(s.length);
        return s;

    }

    function mixMulDiv() {
        var k = [];
                                                                                                                           //这里开始带括号
        var arr = k.concat(importUse(operk,kuohao),importUse(operl,kuohao),importUse(opero,kuohao),importUse(operp,kuohao),importUse(operl,kuohaoh),importUse(opero,kuohaoh));

        var s = model.unIque(arr);
        $ksContent.html(shuffle(s));
        $itemNumber.html(s.length);
        return s;
    }

    function mixAll() {

        var m = [];

        var n = m.concat(mixAddSubw(),mixMulDivw(),mixAsMd());
        var s = model.unIque(n);
        $ksContent.html(shuffle(s));
        $itemNumber.html(s.length);

    }



    //此乃混合了两级的计算
    function mixAsMdw() {
        var k = [];

        var arr = k.concat(importUse(operc,kuohao),importUse(operd,kuohao),importUse(operg,kuohao),importUse(operh,kuohao),importUse(operi,kuohao),importUse(operj,kuohao),importUse(operm,kuohao),importUse(opern,kuohao));
        var s = model.unIque(arr);
        $ksContent.html(shuffle(s));
        $itemNumber.html(s.length);
        return s;

    }

    function mixAsMd() {
        var k = [];

        var arr = k.concat(importUse(operc,kuohao),importUse(operd,kuohao),importUse(operg,kuohao),importUse(operh,kuohao),importUse(operi,kuohao),importUse(operj,kuohao),importUse(operm,kuohao),importUse(opern,kuohao),
                //这里开始带前括号
                importUse(operc,kuohaoq),importUse(operd,kuohaoq),importUse(operg,kuohaoq),importUse(operh,kuohaoq),
                //这里开始带后括号
                importUse(operi,kuohaoh),importUse(operj,kuohaoh),importUse(operm,kuohaoh),importUse(opern,kuohaoh)
        );
        var s = model.unIque(arr);
        $ksContent.html(shuffle(s));
        $itemNumber.html(s.length);
        return s;

    }



    function jibaiJishi() {
        var arrOne = arrMulshi(randomNums(1,81,100)),
            arrTwo = arrMulshi(randomNums(1,81,100)),
            k = [];
        var arrAdd = model.unIque(shuffle(model.jbjsAdd(arrOne,arrTwo)));
        var arrSub = model.unIque(shuffle(model.jbjsSub(arrOne,arrTwo)));
        var n = k.concat(arrAdd,arrSub);

        $ksContent.html(shuffle(n));
        $itemNumber.html(n.length);

    }

    function jiqianjibai() {
        var arrOne = arrMulbai(randomNums(1,81,100)),
            arrTwo = arrMulbai(randomNums(1,81,100)),
            k = [];
        var arrAdd = model.unIque(shuffle(model.jqjbAdd(arrOne,arrTwo)));
        var arrSub = model.unIque(shuffle(model.jbjsSub(arrOne,arrTwo)));
        var n = k.concat(arrAdd,arrSub);

        $ksContent.html(shuffle(n));
        $itemNumber.html(n.length);
    }

    function arrMulshi(arr) {
        var n = [];
        for(var i = 0; i < arr.length; i++) {
            n.push(arr[i]*10);
        }
        return n;
    }

    function arrMulbai(arr) {
        var n = [];
        for(var i = 0; i < arr.length; i++) {
            n.push(arr[i]*100);
        }
        return n;
    }


    //重用方法
    function importUse(input,kuohao) {

        function niming() {
            var ZuiHou = [];
            //最后做的事情
            for(var i = 0; i < 50; i++) {
                var arrOne = randomNums(1,81,100),
                    arrTwo = randomNums(1,81,100),
                    arrThree = randomNums(1,81,100);

                var arrResult = model.unIque(Mix(arrOne,arrTwo,arrThree,input,kuohao));
                var a = superUnique(arrResult,0);
                var b = superUnique(a,1);
                var c = superUnique(b,2);
                ZuiHou.push(c[0]);
            }
            return ZuiHou;
        }

        return s = model.unIque(niming());
    }


    //混合运算的控制器并返回理想的数组
    function Mix(arrOne,arrTwo,arrThree,oper,kuohao) {
        return model.Mix(arrOne,arrTwo,arrThree,oper,kuohao);
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