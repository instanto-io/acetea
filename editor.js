"use strict";
(function(module) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], function(exports)  {
            module(exports);
        });
    } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeName !== 'string') {
        module(exports);
    } else {
        module(typeof self !== 'undefined' ? self : this);
}
}(function($rt_exports) {
let $rt_seed = 2463534242,
$rt_nextId = () => {
    let x = $rt_seed;
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    $rt_seed = x;
    return x;
},
$rt_wrapFunction0 = f => function() {
    return f(this);
},
$rt_wrapFunction1 = f => function(p1) {
    return f(this, p1);
},
$rt_wrapFunction2 = f => function(p1, p2) {
    return f(this, p1, p2);
},
$rt_wrapFunction3 = f => function(p1, p2, p3) {
    return f(this, p1, p2, p3);
},
$rt_wrapFunction4 = f => function(p1, p2, p3, p4) {
    return f(this, p1, p2, p3, p4);
},
$rt_mainStarter = f => (args, callback) => {
    if (!args) {
        args = [];
    }
    let javaArgs = $rt_createArray($rt_objcls(), args.length);
    for (let i = 0;i < args.length;++i) {
        javaArgs.data[i] = $rt_str(args[i]);
    }
    $rt_startThread(() => {
        f.call(null, javaArgs);
    }, callback);
},
$rt_eraseClinit = target => target.$clinit = () => {
},
$dbg_class = obj => {
    let cls = obj.constructor;
    let arrayDegree = 0;
    while (cls[$rt_meta] && cls[$rt_meta].item) {
        ++arrayDegree;
        cls = cls[$rt_meta].item;
    }
    let clsName = "";
    if (cls[$rt_meta].primitiveKind !== 0) {
        clsName = cls[$rt_meta].name;
    } else {
        clsName = cls[$rt_meta] ? cls[$rt_meta].name || "a/" + cls.name : "@" + cls.name;
    }
    while (arrayDegree-- > 0) {
        clsName += "[]";
    }
    return clsName;
},
$rt_classWithoutFields = superclass => {
    if (superclass === 0) {
        return function() {
        };
    }
    if (superclass === void 0) {
        superclass = $rt_objcls();
    }
    return function() {
        superclass.call(this);
    };
},
$rt_meta = Symbol("teavm_meta"),
$rt_cls = cls => {
    if (cls[$rt_meta].classObject === null) {
        cls[$rt_meta].classObject = jl_Class_createClass(cls);
    }
    return cls[$rt_meta].classObject;
},
$rt_objcls = () => jl_Object,
$rt_callWithReceiver = f => function() {
    return f.apply(null, [this].concat(Array.prototype.slice.call(arguments)));
},
$rt_newClassMetadata = source => {
    return Object.assign({ name: null, binaryName: null, parent: null, superinterfaces: [], modifiers: 0, primitiveKind: 0, itemType: null, arrayType: null, enclosingClass: null, declaringClass: null, simpleName: null, clinit: () => {
    }, constructor: null, enumConstants: () => null, resolvedEnumConstants: null, reflection: null, classObject: null, assignableCache: null, valueToObject: o => o, objectToValue: o => o }, source || {  });
},
$rt_createPrimitiveCls = (name, binaryName, kind, config) => {
    let cls = () => {
    };
    let meta = $rt_newClassMetadata({ name: name, binaryName: binaryName, modifiers: 1 | 1 << 4, primitiveKind: kind });
    cls[$rt_meta] = meta;
    if (typeof config === 'function') {
        config(meta);
    }
    return cls;
},
$rt_bytecls = $rt_createPrimitiveCls("byte", "B", 2, meta => {
}),
$rt_charcls = $rt_createPrimitiveCls("char", "C", 4, meta => {
}),
$rt_intcls = $rt_createPrimitiveCls("int", "I", 5, meta => {
    {
        meta.valueToObject = o => jl_Integer_valueOf(o);
    }
    {
        meta.objectToValue = o => jl_Integer_intValue(o);
    }
}),
$rt_voidcls = $rt_createPrimitiveCls("void", "V", 9, meta => {
    meta.valueToObject = () => null;
}),
$rt_compare = (a, b) => a === b ? 0 : a < b ?  -1 : 1,
$rt_imul = Math.imul || function(a, b) {
    let ah = a >>> 16 & 0xFFFF;
    let al = a & 0xFFFF;
    let bh = b >>> 16 & 0xFFFF;
    let bl = b & 0xFFFF;
    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
},
$rt_udiv = (a, b) => (a >>> 0) / (b >>> 0) >>> 0,
$rt_umod = (a, b) => (a >>> 0) % (b >>> 0) >>> 0,
$rt_ucmp = (a, b) => {
    a >>>= 0;
    b >>>= 0;
    return a < b ?  -1 : a > b ? 1 : 0;
},
$rt_createArray = (cls, sz) => {
    let data = new Array(sz);
    data.fill(null);
    return new ($rt_arraycls(cls))(data);
},
$rt_wrapArray = (cls, data) => new ($rt_arraycls(cls))(data),
$rt_createCharArray = sz => new $rt_charArrayCls(new Uint16Array(sz)),
$rt_createCharArrayFromData = data => {
    let buffer = new Uint16Array(data.length);
    buffer.set(data);
    return new $rt_charArrayCls(buffer);
},
$rt_createByteArray = sz => new $rt_byteArrayCls(new Int8Array(sz)),
$rt_createIntArray = sz => new $rt_intArrayCls(new Int32Array(sz)),
$rt_createIntArrayFromData = data => {
    let buffer = new Int32Array(data.length);
    buffer.set(data);
    return new $rt_intArrayCls(buffer);
},
$rt_arraycls = cls => {
    let result = cls[$rt_meta].arrayType;
    if (result === null) {
        function JavaArray(data) {
            ($rt_objcls()).call(this);
            this.data = data;
        }
        JavaArray.prototype = Object.create(($rt_objcls()).prototype);
        JavaArray.prototype.type = cls;
        JavaArray.prototype.constructor = JavaArray;
        JavaArray.prototype.toString = function() {
            let str = "[";
            for (let i = 0;i < this.data.length;++i) {
                if (i > 0) {
                    str += ", ";
                }
                str += this.data[i].toString();
            }
            str += "]";
            return str;
        };
        JavaArray.prototype.$clone0 = function() {
            let dataCopy;
            if ('slice' in this.data) {
                dataCopy = this.data.slice();
            } else {
                dataCopy = new this.data.constructor(this.data.length);
                for (let i = 0;i < dataCopy.length;++i) {
                    dataCopy[i] = this.data[i];
                }
            }
            return new ($rt_arraycls(this.type))(dataCopy);
        };
        let name = "[" + cls[$rt_meta].binaryName;
        JavaArray[$rt_meta] = $rt_newClassMetadata({ name: name, binaryName: name, parent: $rt_objcls(), itemType: cls });
        result = JavaArray;
        cls[$rt_meta].arrayType = JavaArray;
    }
    return result;
};
function $rt_arrayLength(array) {
    return array.data.length;
}
let $rt_stringPool_instance,
$rt_stringPool = strings => {
    $rt_stringClassInit();
    $rt_stringPool_instance = new Array(strings.length);
    for (let i = 0;i < strings.length;++i) {
        $rt_stringPool_instance[i] = $rt_intern($rt_str(strings[i]));
    }
},
$rt_s = index => $rt_stringPool_instance[index],
$rt_charArrayToString = (array, offset, count) => {
    let result = "";
    let limit = offset + count;
    if (count <= 16) {
        for (let i = offset;i < limit;i = i + 1 | 0) {
            result += String.fromCharCode(array[i]);
        }
    } else {
        for (let i = offset;i < limit;i = i + 1024 | 0) {
            let next = Math.min(limit, i + 1024 | 0);
            result += String.fromCharCode.apply(null, array.subarray(i, next));
        }
    }
    return result;
},
$rt_str = str => str === null ? null : jl_String__init_(str),
$rt_ustr = str => str === null ? null : str.$nativeString,
$rt_stringClassInit = () => jl_String_$callClinit(),
$rt_intern;
{
    $rt_intern = str => str;
}
let $rt_isInstance = (obj, cls) => obj instanceof $rt_objcls() && !!obj.constructor[$rt_meta] && $rt_isAssignable(obj.constructor, cls),
$rt_isAssignable = (from, to) => {
    if (to === $rt_objcls()) {
        return from[$rt_meta].primitiveKind === 0;
    }
    if (from === to) {
        return true;
    }
    let map = from[$rt_meta].assignableCache;
    if (map === null) {
        map = new Map();
        from[$rt_meta].assignableCache = map;
    }
    let cachedResult = map.get(to);
    if (typeof cachedResult !== 'undefined') {
        return cachedResult;
    }
    if (to[$rt_meta].itemType !== null) {
        let result = from[$rt_meta].itemType !== null && $rt_isAssignable(from[$rt_meta].itemType, to[$rt_meta].itemType);
        map.set(to, result);
        return result;
    }
    let parent = from[$rt_meta].parent;
    if (parent !== null && parent !== from) {
        if ($rt_isAssignable(parent, to)) {
            map.set(to, true);
            return true;
        }
    }
    let superinterfaces = from[$rt_meta].superinterfaces;
    for (let i = 0;i < superinterfaces.length;i = i + 1 | 0) {
        if ($rt_isAssignable(superinterfaces[i], to)) {
            map.set(to, true);
            return true;
        }
    }
    map.set(to, false);
    return false;
},
$rt_throw = ex => {
    throw $rt_exception(ex);
},
$rt_javaExceptionProp = Symbol("javaException"),
$rt_exception = ex => {
    if (!ex.$jsException) {
        $rt_fillNativeException(ex);
    }
    return ex.$jsException;
},
$rt_fillNativeException = ex => {
    let javaCause = $rt_throwableCause(ex);
    let jsCause = javaCause !== null ? javaCause.$jsException : void 0;
    let cause = typeof jsCause === "object" ? { cause: jsCause } : void 0;
    let err = new JavaError("Java exception thrown", cause);
    if (typeof Error.captureStackTrace === "function") {
        Error.captureStackTrace(err);
    }
    err[$rt_javaExceptionProp] = ex;
    ex.$jsException = err;
    $rt_fillStack(err, ex);
},
$rt_fillStack = (err, ex) => {
    if (typeof $rt_decodeStack === "function" && err.stack) {
        let stack = $rt_decodeStack(err.stack);
        let javaStack = $rt_createArray($rt_stecls(), stack.length);
        let elem;
        let noStack = false;
        for (let i = 0;i < stack.length;++i) {
            let element = stack[i];
            elem = $rt_createStackElement($rt_str(element.className), $rt_str(element.methodName), $rt_str(element.fileName), element.lineNumber);
            if (elem == null) {
                noStack = true;
                break;
            }
            javaStack.data[i] = elem;
        }
        if (!noStack) {
            $rt_setStack(ex, javaStack);
        }
    }
},
JavaError;
if (typeof Reflect === 'object') {
    let defaultMessage = Symbol("defaultMessage");
    JavaError = function JavaError(message, cause) {
        let self = Reflect.construct(Error, [void 0, cause], JavaError);
        Object.setPrototypeOf(self, JavaError.prototype);
        self[defaultMessage] = message;
        return self;
    }
    ;
    JavaError.prototype = Object.create(Error.prototype, { constructor: { configurable: true, writable: true, value: JavaError }, message: { get() {
        try {
            let javaException = this[$rt_javaExceptionProp];
            if (typeof javaException === 'object') {
                let javaMessage = $rt_throwableMessage(javaException);
                if (typeof javaMessage === "object") {
                    return javaMessage !== null ? javaMessage.toString() : null;
                }
            }
            return this[defaultMessage];
        } catch (e){
            return "Exception occurred trying to extract Java exception message: " + e;
        }
    } } });
} else {
    JavaError = Error;
}
let $rt_javaException = e => e instanceof Error && typeof e[$rt_javaExceptionProp] === 'object' ? e[$rt_javaExceptionProp] : null,
$rt_wrapException = err => {
    let ex = err[$rt_javaExceptionProp];
    if (!ex) {
        ex = $rt_createException($rt_str("(JavaScript) " + err.toString()));
        err[$rt_javaExceptionProp] = ex;
        ex.$jsException = err;
        $rt_fillStack(err, ex);
    }
    return ex;
},
$rt_createException = message => jl_RuntimeException__init_2(message),
$rt_throwableMessage = t => jl_Throwable_getMessage(t),
$rt_throwableCause = t => jl_Throwable_getCause(t),
$rt_stecls = () => $rt_objcls(),
$rt_createStackElement = (className, methodName, fileName, lineNumber) => {
    {
        return null;
    }
},
$rt_setStack = (e, stack) => {
},
$rt_packageData = null,
$rt_packages = data => {
    let i = 0;
    let packages = new Array(data.length);
    for (let j = 0;j < data.length;++j) {
        let prefixIndex = data[i++];
        let prefix = prefixIndex >= 0 ? packages[prefixIndex] : "";
        packages[j] = prefix + data[i++] + ".";
    }
    $rt_packageData = packages;
},
$rt_allClasses = [],
$rt_metadata = data => {
    let packages = $rt_packageData;
    let i = 0;
    while (i < data.length) {
        let cls = data[i++];
        $rt_allClasses.push(cls);
        let m = $rt_newClassMetadata();
        cls[$rt_meta] = m;
        let className = data[i++];
        m.name = className !== 0 ? className : null;
        if (m.name !== null) {
            let packageIndex = data[i++];
            if (packageIndex >= 0) {
                m.name = packages[packageIndex] + m.name;
            }
        }
        m.binaryName = "L" + m.name + ";";
        let superclass = data[i++];
        m.parent = superclass !== 0 ? superclass : null;
        m.superinterfaces = data[i++];
        if (m.parent) {
            cls.prototype = Object.create(m.parent.prototype);
        } else {
            cls.prototype = {  };
        }
        cls.prototype.constructor = cls;
        m.modifiers = data[i++];
        m.primitiveKind = 0;
        if ((m.modifiers & 1 << 9) !== 0) {
            m.parent = null;
        }
        let innerClassInfo = data[i++];
        if (innerClassInfo !== 0) {
            let enclosingClass = innerClassInfo[0];
            m.enclosingClass = enclosingClass !== 0 ? enclosingClass : null;
            let declaringClass = innerClassInfo[1];
            m.declaringClass = declaringClass !== 0 ? declaringClass : null;
            let simpleName = innerClassInfo[2];
            m.simpleName = simpleName !== 0 ? simpleName : null;
        }
        let clinit = data[i++];
        m.clinit = clinit !== 0 ? () => {
            m.clinit = () => {
            };
            clinit();
        } : () => {
        };
        let virtualMethods = data[i++];
        if (virtualMethods !== 0) {
            for (let j = 0;j < virtualMethods.length;j += 2) {
                let name = virtualMethods[j];
                let func = virtualMethods[j + 1];
                if (typeof name === 'string') {
                    name = [name];
                }
                for (let k = 0;k < name.length;++k) {
                    cls.prototype[name[k]] = func;
                }
            }
        }
    }
},
$rt_startThread = (runner, callback) => {
    let result;
    try {
        result = runner();
    } catch (e){
        result = e;
    }
    if (typeof callback !== 'undefined') {
        callback(result);
    } else if (result instanceof Error) {
        throw result;
    }
};
function jl_Object() {
    this.$id$ = 0;
}
let jl_Object__init_ = $this => {
    return;
},
jl_Object__init_0 = () => {
    let var_0 = new jl_Object();
    jl_Object__init_(var_0);
    return var_0;
},
jl_Object_getClass = $this => {
    return $rt_cls(jl_Object_getObjectClassInfo($this));
},
jl_Object_getObjectClassInfo = var$1 => {
    return var$1.constructor;
},
jl_Object_hashCode = $this => {
    return jl_Object_identity($this);
},
jl_Object_equals = ($this, $other) => {
    return $this !== $other ? 0 : 1;
},
jl_Object_toString = $this => {
    let var$1, var$2, var$3;
    var$1 = jl_Class_getName(jl_Object_getClass($this));
    var$2 = jl_Integer_toHexString(jl_Object_identity($this));
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(var$3, var$1), 64), var$2);
    return jl_StringBuilder_toString(var$3);
},
jl_Object_identity = $this => {
    let $platformThis;
    $platformThis = $this;
    if (!$platformThis.$id$)
        $platformThis.$id$ = $rt_nextId();
    return $this.$id$;
},
jl_Object_clone = $this => {
    let $cls, $result, var$3, var$4;
    $cls = jl_Class_getClassInfo(jl_Object_getClass($this));
    if (!$rt_isInstance($this, jl_Cloneable) && $cls[$rt_meta].itemType === null)
        $rt_throw(jl_CloneNotSupportedException__init_0());
    $result = otp_Platform_clone($this);
    var$3 = $result;
    var$4 = $rt_nextId();
    var$3.$id$ = var$4;
    return $result;
};
function jur_AbstractCharClass$LazyCharClass() {
    let a = this; jl_Object.call(a);
    a.$posValue = null;
    a.$negValue = null;
}
let jur_AbstractCharClass$LazyCharClass__init_ = $this => {
    jl_Object__init_($this);
},
jur_AbstractCharClass$LazyCharClass_getValue = ($this, $negative) => {
    if (!$negative && $this.$posValue === null)
        $this.$posValue = $this.$computeValue();
    else if ($negative && $this.$negValue === null)
        $this.$negValue = ($this.$computeValue()).$setNegative(1);
    if (!$negative)
        return $this.$posValue;
    return $this.$negValue;
},
jur_AbstractCharClass$LazyBlank = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyBlank__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyBlank__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyBlank();
    jur_AbstractCharClass$LazyBlank__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyBlank_computeValue = $this => {
    return ((jur_CharClass__init_()).$add(32)).$add(9);
},
jur_AbstractCharClass$LazyCntrl = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyCntrl__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyCntrl__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyCntrl();
    jur_AbstractCharClass$LazyCntrl__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyCntrl_computeValue = $this => {
    return ((jur_CharClass__init_()).$add0(0, 31)).$add(127);
},
ji_Serializable = $rt_classWithoutFields(0),
jl_Number = $rt_classWithoutFields(),
jl_Number__init_ = $this => {
    jl_Object__init_($this);
},
jl_Comparable = $rt_classWithoutFields(0);
function jl_Integer() {
    jl_Number.call(this);
    this.$value0 = 0;
}
let jl_Integer_TYPE = null,
jl_Integer_integerCache = null,
jl_Integer_$callClinit = () => {
    jl_Integer_$callClinit = $rt_eraseClinit(jl_Integer);
    jl_Integer__clinit_();
},
jl_Integer__init_ = ($this, $value) => {
    jl_Integer_$callClinit();
    jl_Number__init_($this);
    $this.$value0 = $value;
},
jl_Integer__init_0 = var_0 => {
    let var_1 = new jl_Integer();
    jl_Integer__init_(var_1, var_0);
    return var_1;
},
jl_Integer_toString0 = ($i, $radix) => {
    jl_Integer_$callClinit();
    if (!($radix >= 2 && $radix <= 36))
        $radix = 10;
    return ((jl_AbstractStringBuilder__init_3(20)).$append1($i, $radix)).$toString();
},
jl_Integer_hashCode0 = $value => {
    jl_Integer_$callClinit();
    return $value;
},
jl_Integer_toHexString = $i => {
    jl_Integer_$callClinit();
    return otci_IntegerUtil_toUnsignedLogRadixString($i, 4);
},
jl_Integer_toString = $i => {
    jl_Integer_$callClinit();
    return jl_Integer_toString0($i, 10);
},
jl_Integer_parseInt = ($s, $radix) => {
    jl_Integer_$callClinit();
    if ($s === null)
        $rt_throw(jl_NumberFormatException__init_0($rt_s(0)));
    return jl_Integer_parseIntImpl($s, 0, jl_String_length($s), $radix);
},
jl_Integer_parseIntImpl = ($s, $beginIndex, $endIndex, $radix) => {
    let $negative, var$6, $value, $maxValue, var$9, $digit, var$11, var$12, var$13, var$14;
    jl_Integer_$callClinit();
    if ($beginIndex != $endIndex) {
        if ($radix >= 2 && $radix <= 36) {
            a: {
                b: {
                    c: {
                        $negative = 0;
                        switch ($s.$charAt($beginIndex)) {
                            case 43:
                                break c;
                            case 45:
                                break b;
                            default:
                        }
                        var$6 = $beginIndex;
                        break a;
                    }
                    var$6 = $beginIndex + 1 | 0;
                    break a;
                }
                $negative = 1;
                var$6 = $beginIndex + 1 | 0;
            }
            $value = 0;
            $maxValue = 1 + (2147483647 / $radix | 0) | 0;
            if (var$6 != $endIndex) {
                while (true) {
                    if (var$6 >= $endIndex) {
                        if ($negative)
                            $value =  -$value | 0;
                        return $value;
                    }
                    var$9 = var$6 + 1 | 0;
                    $digit = jl_Integer_decodeDigit($s.$charAt(var$6));
                    if ($digit < 0) {
                        var$11 = new jl_NumberFormatException;
                        var$12 = jl_String_valueOf($s.$subSequence($beginIndex, $endIndex));
                        var$13 = jl_StringBuilder__init_();
                        jl_StringBuilder_append(jl_StringBuilder_append(var$13, $rt_s(1)), var$12);
                        jl_NumberFormatException__init_(var$11, jl_StringBuilder_toString(var$13));
                        $rt_throw(var$11);
                    }
                    if ($digit >= $radix) {
                        var$12 = new jl_NumberFormatException;
                        var$13 = jl_String_valueOf($s.$subSequence($beginIndex, $endIndex));
                        var$14 = jl_StringBuilder__init_();
                        jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$14, $rt_s(2)), $radix), $rt_s(3)), var$13);
                        jl_NumberFormatException__init_(var$12, jl_StringBuilder_toString(var$14));
                        $rt_throw(var$12);
                    }
                    if ($value > $maxValue)
                        break;
                    $value = $rt_imul($radix, $value) + $digit | 0;
                    if ($value < 0) {
                        if (var$9 == $endIndex && $value == (-2147483648) && $negative)
                            return (-2147483648);
                        var$11 = new jl_NumberFormatException;
                        var$12 = jl_String_valueOf($s.$subSequence($beginIndex, $endIndex));
                        var$13 = jl_StringBuilder__init_();
                        jl_StringBuilder_append(jl_StringBuilder_append(var$13, $rt_s(4)), var$12);
                        jl_NumberFormatException__init_(var$11, jl_StringBuilder_toString(var$13));
                        $rt_throw(var$11);
                    }
                    var$6 = var$9;
                }
                $rt_throw(jl_NumberFormatException__init_0($rt_s(5)));
            }
            $rt_throw(jl_NumberFormatException__init_2());
        }
        var$11 = new jl_NumberFormatException;
        var$12 = jl_StringBuilder__init_();
        jl_StringBuilder_append0(jl_StringBuilder_append(var$12, $rt_s(6)), $radix);
        jl_NumberFormatException__init_(var$11, jl_StringBuilder_toString(var$12));
        $rt_throw(var$11);
    }
    $rt_throw(jl_NumberFormatException__init_0($rt_s(7)));
},
jl_Integer_valueOf = $i => {
    jl_Integer_$callClinit();
    if ($i >= (-128) && $i <= 127) {
        jl_Integer_ensureIntegerCache();
        return jl_Integer_integerCache.data[$i + 128 | 0];
    }
    return jl_Integer__init_0($i);
},
jl_Integer_ensureIntegerCache = () => {
    let $j;
    jl_Integer_$callClinit();
    a: {
        if (jl_Integer_integerCache === null) {
            jl_Integer_integerCache = $rt_createArray(jl_Integer, 256);
            $j = 0;
            while (true) {
                if ($j >= jl_Integer_integerCache.data.length)
                    break a;
                jl_Integer_integerCache.data[$j] = jl_Integer__init_0($j - 128 | 0);
                $j = $j + 1 | 0;
            }
        }
    }
},
jl_Integer_intValue = $this => {
    return $this.$value0;
},
jl_Integer_hashCode = $this => {
    return jl_Integer_hashCode0($this.$value0);
},
jl_Integer_equals = ($this, $other) => {
    if ($this !== $other)
        return !($other instanceof jl_Integer && $other.$value0 == $this.$value0) ? 0 : 1;
    return 1;
},
jl_Integer_decodeDigit = $c => {
    jl_Integer_$callClinit();
    if ($c >= 48 && $c <= 57)
        return $c - 48 | 0;
    if ($c >= 97 && $c <= 122)
        return ($c - 97 | 0) + 10 | 0;
    if ($c >= 65 && $c <= 90)
        return ($c - 65 | 0) + 10 | 0;
    return (-1);
},
jl_Integer_numberOfLeadingZeros = $i => {
    let $n, var$3, var$4;
    jl_Integer_$callClinit();
    if ($i) {
        $n = 0;
        var$3 = $i >>> 16 | 0;
        if (var$3)
            $n = 16;
        else
            var$3 = $i;
        var$4 = var$3 >>> 8 | 0;
        if (!var$4)
            var$4 = var$3;
        else
            $n = $n | 8;
        var$3 = var$4 >>> 4 | 0;
        if (!var$3)
            var$3 = var$4;
        else
            $n = $n | 4;
        var$4 = var$3 >>> 2 | 0;
        if (!var$4)
            var$4 = var$3;
        else
            $n = $n | 2;
        if (var$4 >>> 1 | 0)
            $n = $n | 1;
        return (32 - $n | 0) - 1 | 0;
    }
    return 32;
},
jl_Integer_numberOfTrailingZeros = $i => {
    let $n, var$3, var$4;
    jl_Integer_$callClinit();
    if ($i) {
        $n = 0;
        var$3 = $i << 16;
        if (var$3)
            $n = 16;
        else
            var$3 = $i;
        var$4 = var$3 << 8;
        if (!var$4)
            var$4 = var$3;
        else
            $n = $n | 8;
        var$3 = var$4 << 4;
        if (!var$3)
            var$3 = var$4;
        else
            $n = $n | 4;
        var$4 = var$3 << 2;
        if (!var$4)
            var$4 = var$3;
        else
            $n = $n | 2;
        if (var$4 << 1)
            $n = $n | 1;
        return (32 - $n | 0) - 1 | 0;
    }
    return 32;
},
jl_Integer_rotateLeft = ($i, $distance) => {
    let var$3;
    jl_Integer_$callClinit();
    var$3 = $distance & 31;
    return $i << var$3 | ($i >>> (32 - var$3 | 0) | 0);
},
jl_Integer__clinit_ = () => {
    jl_Integer_TYPE = $rt_cls($rt_intcls);
},
iic_NativeHandle = $rt_classWithoutFields(0);
function cggcc_JavaScriptObject() {
    jl_Object.call(this);
    this.$value1 = null;
}
let cggcc_JavaScriptObject_IDENTITIES = null,
cggcc_JavaScriptObject_$callClinit = () => {
    cggcc_JavaScriptObject_$callClinit = $rt_eraseClinit(cggcc_JavaScriptObject);
    cggcc_JavaScriptObject__clinit_();
},
cggcc_JavaScriptObject__init_ = ($this, $value) => {
    cggcc_JavaScriptObject_$callClinit();
    jl_Object__init_($this);
    $this.$value1 = $value;
},
cggcc_JavaScriptObject__init_0 = var_0 => {
    let var_1 = new cggcc_JavaScriptObject();
    cggcc_JavaScriptObject__init_(var_1, var_0);
    return var_1;
},
cggcc_JavaScriptObject_unwrap = $this => {
    return $this.$value1;
},
cggcc_JavaScriptObject_of = $value => {
    cggcc_JavaScriptObject_$callClinit();
    if ($value !== null && !($value == null ? 1 : 0)) {
        if (typeof $value.nodeType === 'number' ? 1 : 0)
            return cggdc_Node_wrap(otj_JSObject_cast$static($value));
        return cggcc_JavaScriptObject__init_0($value);
    }
    return null;
},
cggcc_JavaScriptObject_createObject = () => {
    cggcc_JavaScriptObject_$callClinit();
    return cggcc_JavaScriptObject_of(cggcc_JavaScriptObject_newObject$js_body$_16());
},
cggcc_JavaScriptObject__clinit_ = () => {
    cggcc_JavaScriptObject_IDENTITIES = cggcc_JavaScriptObject_identities$js_body$_8();
},
cggcc_JavaScriptObject_identities$js_body$_8 = () => {
    return { objects: new WeakMap(), next: 1 };
},
cggcc_JavaScriptObject_newObject$js_body$_16 = () => {
    return {  };
},
cggdc_Node = $rt_classWithoutFields(cggcc_JavaScriptObject),
cggdc_Node__init_ = $this => {
    cggcc_JavaScriptObject__init_($this, null);
},
cggdc_Node_wrap = $node => {
    if ($node !== null) {
        if ($node.nodeType != 1) {
            if ($node.nodeType == 3)
                return cggdc_Text__init_0($node);
            return cggdc_Node$1__init_0($node);
        }
        return cggdc_Element_wrap($node);
    }
    return null;
};
function cggdc_Text() {
    cggdc_Node.call(this);
    this.$node = null;
}
let cggdc_Text__init_ = ($this, $node) => {
    cggdc_Node__init_($this);
    $this.$node = $node;
},
cggdc_Text__init_0 = var_0 => {
    let var_1 = new cggdc_Text();
    cggdc_Text__init_(var_1, var_0);
    return var_1;
},
cggdc_Text_unwrap0 = $this => {
    return $this.$node;
},
cggdc_Text_unwrap = $this => {
    return $this.$unwrap();
};
function jur_AbstractSet() {
    let a = this; jl_Object.call(a);
    a.$next2 = null;
    a.$isSecondPassVisited = 0;
    a.$index4 = null;
    a.$type = 0;
}
let jur_AbstractSet_counter = 0,
jur_AbstractSet_$callClinit = () => {
    jur_AbstractSet_$callClinit = $rt_eraseClinit(jur_AbstractSet);
    jur_AbstractSet__clinit_();
},
jur_AbstractSet__init_ = $this => {
    let var$1;
    jur_AbstractSet_$callClinit();
    jl_Object__init_($this);
    var$1 = jur_AbstractSet_counter;
    jur_AbstractSet_counter = var$1 + 1 | 0;
    $this.$index4 = jl_Integer_toString(var$1);
},
jur_AbstractSet__init_0 = ($this, $n) => {
    let var$2;
    jur_AbstractSet_$callClinit();
    jl_Object__init_($this);
    var$2 = jur_AbstractSet_counter;
    jur_AbstractSet_counter = var$2 + 1 | 0;
    $this.$index4 = jl_Integer_toString(var$2);
    $this.$next2 = $n;
},
jur_AbstractSet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $length;
    $length = $matchResult.$getRightBound();
    while (true) {
        if ($stringIndex > $length)
            return (-1);
        if ($this.$matches($stringIndex, $testString, $matchResult) >= 0)
            break;
        $stringIndex = $stringIndex + 1 | 0;
    }
    return $stringIndex;
},
jur_AbstractSet_findBack = ($this, $stringIndex, $startSearch, $testString, $matchResult) => {
    while (true) {
        if ($startSearch < $stringIndex)
            return (-1);
        if ($this.$matches($startSearch, $testString, $matchResult) >= 0)
            break;
        $startSearch = $startSearch + (-1) | 0;
    }
    return $startSearch;
},
jur_AbstractSet_setType = ($this, $type) => {
    $this.$type = $type;
},
jur_AbstractSet_getType = $this => {
    return $this.$type;
},
jur_AbstractSet_getNext = $this => {
    return $this.$next2;
},
jur_AbstractSet_setNext = ($this, $next) => {
    $this.$next2 = $next;
},
jur_AbstractSet_first = ($this, $set) => {
    return 1;
},
jur_AbstractSet_processBackRefReplacement = $this => {
    return null;
},
jur_AbstractSet_processSecondPass = $this => {
    let $set;
    $this.$isSecondPassVisited = 1;
    if ($this.$next2 !== null) {
        if (!$this.$next2.$isSecondPassVisited) {
            $set = $this.$next2.$processBackRefReplacement();
            if ($set !== null) {
                $this.$next2.$isSecondPassVisited = 1;
                $this.$next2 = $set;
            }
            $this.$next2.$processSecondPass();
        } else if ($this.$next2 instanceof jur_SingleSet && $this.$next2.$fSet.$isBackReferenced)
            $this.$next2 = $this.$next2.$next2;
    }
},
jur_AbstractSet__clinit_ = () => {
    jur_AbstractSet_counter = 1;
};
function jur_JointSet() {
    let a = this; jur_AbstractSet.call(a);
    a.$children = null;
    a.$fSet = null;
    a.$groupIndex = 0;
}
let jur_JointSet__init_ = $this => {
    jur_AbstractSet__init_($this);
},
jur_JointSet__init_2 = () => {
    let var_0 = new jur_JointSet();
    jur_JointSet__init_(var_0);
    return var_0;
},
jur_JointSet__init_0 = ($this, $children, $fSet) => {
    jur_AbstractSet__init_($this);
    $this.$children = $children;
    $this.$fSet = $fSet;
    $this.$groupIndex = $fSet.$getGroupIndex();
},
jur_JointSet__init_1 = (var_0, var_1) => {
    let var_2 = new jur_JointSet();
    jur_JointSet__init_0(var_2, var_0, var_1);
    return var_2;
},
jur_JointSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $start, $size, $i, $e, $shift;
    if ($this.$children !== null) {
        $start = $matchResult.$getStart($this.$groupIndex);
        $matchResult.$setStart($this.$groupIndex, $stringIndex);
        $size = $this.$children.$size();
        $i = 0;
        while (true) {
            if ($i >= $size) {
                $matchResult.$setStart($this.$groupIndex, $start);
                return (-1);
            }
            $e = $this.$children.$get($i);
            $shift = $e.$matches($stringIndex, $testString, $matchResult);
            if ($shift >= 0)
                break;
            $i = $i + 1 | 0;
        }
        return $shift;
    }
    return (-1);
},
jur_JointSet_setNext = ($this, $next) => {
    $this.$fSet.$setNext($next);
},
jur_JointSet_first = ($this, $set) => {
    let $i;
    a: {
        if ($this.$children !== null) {
            $i = $this.$children.$iterator();
            while (true) {
                if (!$i.$hasNext())
                    break a;
                if (!($i.$next()).$first($set))
                    continue;
                else
                    return 1;
            }
        }
    }
    return 0;
},
jur_JointSet_hasConsumed = ($this, $matchResult) => {
    let var$2, var$3;
    a: {
        b: {
            if ($matchResult.$getEnd($this.$groupIndex) >= 0) {
                var$2 = $matchResult.$getStart($this.$groupIndex);
                var$3 = $this.$groupIndex;
                if (var$2 == $matchResult.$getEnd(var$3))
                    break b;
            }
            var$2 = 1;
            break a;
        }
        var$2 = 0;
    }
    return var$2;
},
jur_JointSet_processSecondPass = $this => {
    let $childrenSize, $i, $child, $set;
    $this.$isSecondPassVisited = 1;
    if ($this.$fSet !== null && !$this.$fSet.$isSecondPassVisited)
        $this.$fSet.$processSecondPass();
    a: {
        if ($this.$children !== null) {
            $childrenSize = $this.$children.$size();
            $i = 0;
            while (true) {
                if ($i >= $childrenSize)
                    break a;
                $child = $this.$children.$get($i);
                $set = $child.$processBackRefReplacement();
                if ($set === null)
                    $set = $child;
                else {
                    $child.$isSecondPassVisited = 1;
                    $this.$children.$remove($i);
                    $this.$children.$add1($i, $set);
                }
                if (!$set.$isSecondPassVisited)
                    $set.$processSecondPass();
                $i = $i + 1 | 0;
            }
        }
    }
    if ($this.$next2 !== null)
        jur_AbstractSet_processSecondPass($this);
};
function jur_SingleSet() {
    jur_JointSet.call(this);
    this.$kid = null;
}
let jur_SingleSet__init_ = ($this, $child, $fSet) => {
    jur_JointSet__init_($this);
    $this.$kid = $child;
    $this.$fSet = $fSet;
    $this.$groupIndex = $fSet.$getGroupIndex();
},
jur_SingleSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_SingleSet();
    jur_SingleSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_SingleSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $start, $shift;
    $start = $matchResult.$getStart($this.$groupIndex);
    $matchResult.$setStart($this.$groupIndex, $stringIndex);
    $shift = $this.$kid.$matches($stringIndex, $testString, $matchResult);
    if ($shift < 0) {
        $matchResult.$setStart($this.$groupIndex, $start);
        return (-1);
    }
    return $shift;
},
jur_SingleSet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $res;
    $res = $this.$kid.$find($stringIndex, $testString, $matchResult);
    if ($res >= 0)
        $matchResult.$setStart($this.$groupIndex, $res);
    return $res;
},
jur_SingleSet_findBack = ($this, $stringIndex, $lastIndex, $testString, $matchResult) => {
    let $res;
    $res = $this.$kid.$findBack($stringIndex, $lastIndex, $testString, $matchResult);
    if ($res >= 0)
        $matchResult.$setStart($this.$groupIndex, $res);
    return $res;
},
jur_SingleSet_first = ($this, $set) => {
    return $this.$kid.$first($set);
},
jur_SingleSet_processBackRefReplacement = $this => {
    let $set;
    $set = jur_BackReferencedSingleSet__init_0($this);
    $this.$next2 = $set;
    return $set;
},
jur_SingleSet_processSecondPass = $this => {
    let $set;
    $this.$isSecondPassVisited = 1;
    if ($this.$fSet !== null && !$this.$fSet.$isSecondPassVisited)
        $this.$fSet.$processSecondPass();
    if ($this.$kid !== null && !$this.$kid.$isSecondPassVisited) {
        $set = $this.$kid.$processBackRefReplacement();
        if ($set !== null) {
            $this.$kid.$isSecondPassVisited = 1;
            $this.$kid = $set;
        }
        $this.$kid.$processSecondPass();
    }
};
function cggdc_Style() {
    jl_Object.call(this);
    this.$element0 = null;
}
let cggdc_Style__init_ = ($this, $element) => {
    jl_Object__init_($this);
    $this.$element0 = $element;
},
cggdc_Style__init_0 = var_0 => {
    let var_1 = new cggdc_Style();
    cggdc_Style__init_(var_1, var_0);
    return var_1;
},
cggdc_Style_setProperty = ($this, $name, $value) => {
    let var$3, var$4;
    var$3 = $this.$element0.style;
    var$4 = cggdc_Style_cssProperty($name);
    if ($value === null)
        $value = $rt_s(8);
    var$3.setProperty($rt_ustr(var$4), $rt_ustr($value));
},
cggdc_Style_cssProperty = $name => {
    let $result, $i, $c;
    if (!jl_String_startsWith($name, $rt_s(9))) {
        if (!jl_String_equals($name, $rt_s(10)) && !jl_String_equals($name, $rt_s(11))) {
            $result = jl_StringBuilder__init_();
            $i = 0;
            while ($i < jl_String_length($name)) {
                $c = jl_String_charAt($name, $i);
                if (!($c >= 65 && $c <= 90))
                    $result.$append0($c);
                else
                    ($result.$append0(45)).$append0((($c + 97 | 0) - 65 | 0) & 65535);
                $i = $i + 1 | 0;
            }
            return $result.$toString();
        }
        return $rt_s(12);
    }
    return $name;
},
eycdaca_AceRange = $rt_classWithoutFields(cggcc_JavaScriptObject),
eycdaca_AceRange__init_0 = ($this, $value) => {
    cggcc_JavaScriptObject__init_($this, $value);
},
eycdaca_AceRange__init_ = var_0 => {
    let var_1 = new eycdaca_AceRange();
    eycdaca_AceRange__init_0(var_1, var_0);
    return var_1;
},
eycdaca_AceRange_create = ($a, $b, $c, $d) => {
    return eycdaca_AceRange__init_(eycdaca_AceRange_make$js_body$_4($a, $b, $c, $d));
},
eycdaca_AceRange_detach = $this => {
    eycdaca_AceRange_detachStart($this);
    eycdaca_AceRange_detachEnd($this);
},
eycdaca_AceRange_detachStart = $this => {
    eycdaca_AceRange_detach$js_body$_8($this.$unwrap0(), "start");
},
eycdaca_AceRange_detachEnd = $this => {
    eycdaca_AceRange_detach$js_body$_8($this.$unwrap0(), "end");
},
eycdaca_AceRange_make$js_body$_4 = (var$1, var$2, var$3, var$4) => {
    var R = (ace.require('ace/range')).Range;
    return new R(var$1, var$2, var$3, var$4);
},
eycdaca_AceRange_detach$js_body$_8 = (var$1, var$2) => {
    if (var$1[var$2] && typeof var$1[var$2].detach === 'function') var$1[var$2].detach();
},
jur_AbstractCharClass$LazyAlpha = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyAlpha__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyAlpha__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyAlpha();
    jur_AbstractCharClass$LazyAlpha__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyAlpha_computeValue = $this => {
    return ((jur_CharClass__init_()).$add0(97, 122)).$add0(65, 90);
};
function cggucu_UIObject() {
    jl_Object.call(this);
    this.$element1 = null;
}
let cggucu_UIObject__init_ = $this => {
    jl_Object__init_($this);
},
cggucu_UIObject_getElement = $this => {
    return $this.$element1;
},
cggucu_UIObject_setElement = ($this, $element) => {
    if ($element === null)
        $rt_throw(jl_IllegalArgumentException__init_0($rt_s(13)));
    $this.$element1 = $element;
},
cgguc_EventListener = $rt_classWithoutFields(0),
cggucu_IsWidget = $rt_classWithoutFields(0),
cgges_HasHandlers = $rt_classWithoutFields(0),
cggedc_HasClickHandlers = $rt_classWithoutFields(0),
cggedc_HasDoubleClickHandlers = $rt_classWithoutFields(0),
cggels_HasAttachHandlers = $rt_classWithoutFields(0);
function cggucu_Widget() {
    let a = this; cggucu_UIObject.call(a);
    a.$parent = null;
    a.$handlerManager = null;
    a.$attached = 0;
    a.$nativeListeners = null;
    a.$everAttached = 0;
}
let cggucu_Widget__init_ = $this => {
    cggucu_UIObject__init_($this);
    $this.$nativeListeners = ju_HashSet__init_1();
},
cggucu_Widget__init_0 = () => {
    let var_0 = new cggucu_Widget();
    cggucu_Widget__init_(var_0);
    return var_0;
},
cggucu_Widget_getParent = $this => {
    return $this.$parent;
},
cggucu_Widget_setParent = ($this, $parent) => {
    let $oldParent, var$3, $$je;
    a: {
        $oldParent = $this.$parent;
        if ($parent !== null) {
            if ($oldParent === null) {
                $this.$parent = $parent;
                if (!$parent.$isAttached())
                    break a;
                $this.$onAttach();
                break a;
            }
            $rt_throw(jl_IllegalStateException__init_0($rt_s(14)));
        }
        b: {
            c: {
                try {
                    if (!$this.$attached)
                        break b;
                    $this.$onDetach();
                    break b;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    var$3 = $$je;
                    break c;

                }
            }
            $this.$parent = null;
            $rt_throw(var$3);
        }
        $this.$parent = null;
    }
},
cggucu_Widget_isAttached = $this => {
    return $this.$attached;
},
cggucu_Widget_onBrowserEvent = ($this, $event) => {
    cggedc_DomEvent_fireNativeEvent($event, $this);
},
cggucu_Widget_onAttach = $this => {
    cgguc_DOM_setEventListener($this.$getElement(), $this);
    $this.$attached = 1;
    $this.$everAttached = 1;
    $this.$doAttachChildren();
    $this.$onLoad();
    cggels_AttachEvent_fire($this, 1);
},
cggucu_Widget_onDetach = $this => {
    let var$1, $$je;
    try {
        $this.$onUnload();
        cggels_AttachEvent_fire($this, 0);
    } catch ($$e) {
        $$je = $rt_wrapException($$e);
        var$1 = $$je;
        try {
            $this.$doDetachChildren();
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$1 = $$je;
            $this.$attached = 0;
            cgguc_DOM_releaseCapture($this.$getElement());
            cgguc_DOM_setEventListener($this.$getElement(), null);
            $rt_throw(var$1);

        }
        $this.$attached = 0;
        cgguc_DOM_releaseCapture($this.$getElement());
        cgguc_DOM_setEventListener($this.$getElement(), null);
        $rt_throw(var$1);

    }
    try {
        $this.$doDetachChildren();
    } catch ($$e) {
        $$je = $rt_wrapException($$e);
        var$1 = $$je;
        $this.$attached = 0;
        cgguc_DOM_releaseCapture($this.$getElement());
        cgguc_DOM_setEventListener($this.$getElement(), null);
        $rt_throw(var$1);

    }
    $this.$attached = 0;
    cgguc_DOM_releaseCapture($this.$getElement());
    cgguc_DOM_setEventListener($this.$getElement(), null);
},
cggucu_Widget_doAttachChildren = $this => {
    return;
},
cggucu_Widget_doDetachChildren = $this => {
    return;
},
cggucu_Widget_onLoad = $this => {
    return;
},
cggucu_Widget_onUnload = $this => {
    return;
},
cggucu_Widget_removeFromParent = $this => {
    if ($rt_isInstance($this.$parent, cggucu_HasWidgets))
        $this.$parent.$remove0($this);
    else if ($this.$getElement() !== null) {
        ($this.$getElement()).$removeFromParent();
        $this.$parent = null;
    }
},
cggucu_Widget_fireEvent = ($this, $event) => {
    if ($this.$handlerManager !== null)
        $this.$handlerManager.$fireEvent($event);
};
function cggucu_Composite() {
    cggucu_Widget.call(this);
    this.$widget = null;
}
let cggucu_Composite__init_ = $this => {
    cggucu_Widget__init_($this);
},
cggucu_Composite_initWidget = ($this, $widget) => {
    if ($this.$widget === null) {
        if ($widget !== null) {
            $widget.$removeFromParent();
            $this.$widget = $widget;
            $this.$setElement($widget.$getElement());
            $widget.$setParent($this);
            return;
        }
        $rt_throw(jl_IllegalArgumentException__init_0($rt_s(15)));
    }
    $rt_throw(jl_IllegalStateException__init_0($rt_s(16)));
},
cggucu_Composite_onAttach = $this => {
    if ($this.$widget !== null && !$this.$widget.$isAttached())
        $this.$widget.$onAttach();
    cggucu_Widget_onAttach($this);
},
cggucu_Composite_onDetach = $this => {
    let var$1, $$je;
    try {
        cggucu_Widget_onDetach($this);
    } catch ($$e) {
        $$je = $rt_wrapException($$e);
        var$1 = $$je;
        if ($this.$widget !== null && $this.$widget.$isAttached())
            $this.$widget.$onDetach();
        $rt_throw(var$1);

    }
    if ($this.$widget !== null && $this.$widget.$isAttached())
        $this.$widget.$onDetach();
},
cggucu_Composite_fireEvent = ($this, $event) => {
    cggucu_Widget_fireEvent($this, $event);
    if ($this.$widget !== null)
        $this.$widget.$fireEvent($event);
},
cggucu_RequiresResize = $rt_classWithoutFields(0),
cggucu_HasText = $rt_classWithoutFields(0),
cgguc_TakesValue = $rt_classWithoutFields(0);
function eycdaca_AceEditor() {
    let a = this; cggucu_Composite.call(a);
    a.$elementId = null;
    a.$editor = null;
    a.$annotations = null;
    a.$registryId = 0;
    a.$divElement = null;
    a.$markers = null;
    a.$selection0 = null;
    a.$commandLine = null;
}
let eycdaca_AceEditor_nextId = 0,
eycdaca_AceEditor_EDITORS = null,
eycdaca_AceEditor_$callClinit = () => {
    eycdaca_AceEditor_$callClinit = $rt_eraseClinit(eycdaca_AceEditor);
    eycdaca_AceEditor__clinit_();
},
eycdaca_AceEditor_setSize = ($this, $width, $height) => {
    cggdc_Style_setProperty(($this.$getElement()).$getStyle(), $rt_s(17), $width);
    cggdc_Style_setProperty(($this.$getElement()).$getStyle(), $rt_s(18), $height);
},
eycdaca_AceEditor__init_ = $this => {
    let var$1, var$2, $div;
    eycdaca_AceEditor_$callClinit();
    cggucu_Composite__init_($this);
    $this.$annotations = eycdaca_AceNative_array$js_body$_10();
    $this.$registryId = eycdaca_AceEditor_nextId;
    $this.$markers = ju_HashMap__init_();
    $this.$selection0 = null;
    $this.$commandLine = null;
    var$1 = eycdaca_AceEditor_nextId;
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append(var$2, $rt_s(19)), var$1);
    $this.$elementId = jl_StringBuilder_toString(var$2);
    eycdaca_AceEditor_nextId = eycdaca_AceEditor_nextId + 1 | 0;
    $div = cggucu_FlowPanel__init_1();
    ($div.$getElement()).$setId($this.$elementId);
    $this.$initWidget($div);
    $this.$divElement = $div.$getElement();
},
eycdaca_AceEditor__init_0 = () => {
    let var_0 = new eycdaca_AceEditor();
    eycdaca_AceEditor__init_(var_0);
    return var_0;
},
eycdaca_AceEditor_startEditor = $this => {
    if ($this.$editor === null) {
        $this.$editor = cggcc_JavaScriptObject_of(eycdaca_AceEditor_createEditor$js_body$_71($this.$divElement.$unwrap1(), $this.$registryId));
        eycdaca_AceEditor_EDITORS.$put(jl_Integer_valueOf($this.$registryId), $this);
        $this.$redisplay();
        return;
    }
},
eycdaca_AceEditor_redisplay = $this => {
    eycdaca_AceEditor_redisplayBridge1$js_body$_84($this.$editor.$unwrap0());
},
eycdaca_AceEditor_destroy = $this => {
    if ($this.$editor !== null) {
        $this.$removeAllMarkers();
        eycdaca_AceEditor_destroyEditor$js_body$_72($this.$editor.$unwrap0());
        $this.$editor = null;
        $this.$selection0 = null;
        eycdaca_AceEditor_resetAnnotations($this);
        eycdaca_AceEditor_EDITORS.$remove1(jl_Integer_valueOf($this.$registryId));
        return;
    }
},
eycdaca_AceEditor_setThemeByName = ($this, $themeName) => {
    ($this.$editor.$unwrap0()).setTheme("ace/theme/" + $rt_ustr($themeName));
},
eycdaca_AceEditor_setModeByName = ($this, $shortModeName) => {
    eycdaca_AceEditor_setModeByNameBridge3$js_body$_86($this.$editor.$unwrap0(), $rt_ustr($shortModeName));
},
eycdaca_AceEditor_addOnChangeHandler = ($this, $callback) => {
    let var$2, var$3, var$4;
    var$2 = $this.$editor;
    var$3 = var$2.$unwrap0();
    var$4 = eycdaca_AceEditor$addOnChangeHandler$lambda$_11_0__init_0($callback);
    eycdaca_AceEditor_listen$js_body$_73(var$3, "session", "change", otji_JS_function(otji_JSWrapper_unwrap(var$4), "fire"));
},
eycdaca_AceEditor_addOnCursorPositionChangeHandler = ($this, $callback) => {
    let var$2, var$3, var$4;
    var$2 = $this.$editor;
    var$3 = var$2.$unwrap0();
    var$4 = eycdaca_AceEditor$addOnCursorPositionChangeHandler$lambda$_12_0__init_0($callback);
    eycdaca_AceEditor_listen$js_body$_73(var$3, "selection", "changeCursor", otji_JS_function(otji_JSWrapper_unwrap(var$4), "fire"));
},
eycdaca_AceEditor_setFontSize = ($this, $fontSize) => {
    ($this.$editor.$unwrap0()).setFontSize($fontSize);
},
eycdaca_AceEditor_getText = $this => {
    return $rt_str((($this.$editor.$unwrap0()).getSession()).getValue());
},
eycdaca_AceEditor_focus = $this => {
    ($this.$editor.$unwrap0()).focus();
},
eycdaca_AceEditor_getLineCount = $this => {
    return ($this.$editor.$unwrap0()).session.getLength();
},
eycdaca_AceEditor_setText = ($this, $text) => {
    (($this.$editor.$unwrap0()).getSession()).setValue($rt_ustr($text));
},
eycdaca_AceEditor_getLine = ($this, $row) => {
    return $rt_str(((($this.$editor.$unwrap0()).getSession()).getDocument()).getLine($row));
},
eycdaca_AceEditor_getCursorPosition = $this => {
    return eycdaca_AceNative_position(($this.$editor.$unwrap0())["getCursorPosition"]());
},
eycdaca_AceEditor_getIndexFromPosition = ($this, $position) => {
    return eycdaca_AceEditor_getIndexFromPositionImpl($this, $position.$toJsObject());
},
eycdaca_AceEditor_getIndexFromPositionImpl = ($this, $jsPosition) => {
    return ((($this.$editor.$unwrap0()).getSession()).getDocument()).positionToIndex($jsPosition.$unwrap0());
},
eycdaca_AceEditor_getPositionFromIndex = ($this, $index) => {
    return eycdaca_AceNative_position(($this.$editor.$unwrap0()).session.doc.indexToPosition($index));
},
eycdaca_AceEditor_setUseSoftTabs = ($this, $useSoftTabs) => {
    (($this.$editor.$unwrap0()).getSession()).setUseSoftTabs(!!$useSoftTabs);
},
eycdaca_AceEditor_setTabSize = ($this, $tabSize) => {
    (($this.$editor.$unwrap0()).getSession()).setTabSize($tabSize);
},
eycdaca_AceEditor_gotoLine = ($this, $line) => {
    ($this.$editor.$unwrap0()).gotoLine($line);
},
eycdaca_AceEditor_setReadOnly = ($this, $readOnly) => {
    ($this.$editor.$unwrap0()).setReadOnly(!!$readOnly);
},
eycdaca_AceEditor_setShowPrintMargin = ($this, $showPrintMargin) => {
    ($this.$editor.$unwrap0()).renderer.setShowPrintMargin(!!$showPrintMargin);
},
eycdaca_AceEditor_addAnnotation = ($this, $row, $column, $text, $type) => {
    $this.$annotations.push((eycdaca_AceAnnotation_create($row, $column, $text, eycdaca_AceAnnotationType_getName($type))).$unwrap0());
},
eycdaca_AceEditor_setAnnotations = $this => {
    ($this.$editor.$unwrap0()).session.setAnnotations($this.$annotations);
},
eycdaca_AceEditor_clearAnnotations = $this => {
    eycdaca_AceEditor_resetAnnotations($this);
    ($this.$editor.$unwrap0()).session.setAnnotations($this.$annotations);
},
eycdaca_AceEditor_resetAnnotations = $this => {
    $this.$annotations = eycdaca_AceNative_array$js_body$_10();
},
eycdaca_AceEditor_execCommand0 = ($this, $command) => {
    let $parts, var$3;
    $parts = jl_String_split(jl_String_trim($command), $rt_s(20), 2);
    var$3 = $parts.data;
    $this.$execCommand(var$3[0], var$3.length <= 1 ? null : var$3[1]);
},
eycdaca_AceEditor_execCommand = ($this, $command, $arg) => {
    eycdaca_AceEditor_execCommandHidden($this, $command, $arg);
},
eycdaca_AceEditor_execCommandHidden = ($this, $command, $value) => {
    let var$3, var$4;
    if ($value instanceof eycdaca_AceCommandArgs)
        $value = $value.$getValue();
    var$3 = $this.$editor.$unwrap0();
    var$4 = eycdaca_AceNative_argument($value);
    eycdaca_AceEditor_execute$js_body$_76(var$3, $rt_ustr($command), var$4);
},
eycdaca_AceEditor_removeCommandByName = ($this, $command) => {
    ($this.$editor.$unwrap0()).commands.removeCommand($rt_ustr($command));
},
eycdaca_AceEditor_getCommandDescription = ($this, $command) => {
    let var$2;
    var$2 = $this.$editor;
    var$2 = cggcc_JavaScriptObject_of((var$2.$unwrap0()).commands.commands[$rt_ustr($command)] || null);
    return eycdaca_AceCommandDescription_fromJavaScript(var$2);
},
eycdaca_AceEditor_listCommands = $this => {
    return ju_Arrays_asList(otji_JS_unwrapStringArray(Object.keys(($this.$editor.$unwrap0()).commands.commands)));
},
eycdaca_AceEditor_addCommand = ($this, $description) => {
    ($this.$editor.$unwrap0()).commands.addCommand(($description.$toJavaScript($this)).$unwrap0());
},
eycdaca_AceEditor_onResize = $this => {
    if ($this.$editor !== null)
        $this.$redisplay();
},
eycdaca_AceEditor_setAutocompleteEnabled = ($this, $b) => {
    eycdaca_AceEditor_setAutocompleteEnabledBridge25$js_body$_108($this.$editor.$unwrap0(), !!$b);
},
eycdaca_AceEditor_removeAllExistingCompleters = () => {
    eycdaca_AceEditor_$callClinit();
    eycdaca_AceEditor_removeAllExistingCompletersBridge26$js_body$_109();
},
eycdaca_AceEditor_addCompletionProvider = $provider => {
    eycdaca_AceEditor_$callClinit();
    eycdaca_AceEditor_addCompleter$js_body$_80(otji_JS_function(otji_JSWrapper_unwrap(eycdaca_AceEditor$addCompletionProvider$lambda$_56_0__init_0($provider)), "complete"));
},
eycdaca_AceEditor_addMarker = ($this, $range, $clazz, $type, $inFront) => {
    let $id;
    $id = ($this.$editor.$unwrap0()).session.addMarker($range.$unwrap0(), $rt_ustr($clazz), $rt_ustr(eycdaca_AceMarkerType_getName($type)), !!$inFront);
    eycdaca_AceEditor_addMarker0($this, $id, $range);
    return $id;
},
eycdaca_AceEditor_addFloatingMarker = ($this, $range, $clazz, $type) => {
    eycdaca_AceEditor_anchor$js_body$_82($this.$editor.$unwrap0(), $range.$unwrap0());
    return $this.$addMarker0($range, $clazz, $type, 0);
},
eycdaca_AceEditor_removeMarker = ($this, $markerId) => {
    ($this.$editor.$unwrap0()).session.removeMarker($markerId);
    eycdaca_AceEditor_removeRegisteredMarker($this, $markerId);
},
eycdaca_AceEditor_getMarkers = $this => {
    return ju_Collections_unmodifiableMap($this.$markers);
},
eycdaca_AceEditor_removeAllMarkers = $this => {
    let $ids, var$2, var$3, var$4, $id;
    $ids = ($this.$markers.$keySet()).$toArray($rt_createArray(jl_Integer, $this.$markers.$size()));
    var$2 = $ids.data;
    var$3 = var$2.length;
    var$4 = 0;
    while (var$4 < var$3) {
        $id = var$2[var$4];
        $this.$removeMarker($id.$intValue());
        var$4 = var$4 + 1 | 0;
    }
},
eycdaca_AceEditor_addMarker0 = ($this, $id, $range) => {
    $this.$markers.$put(jl_Integer_valueOf($id), $range);
},
eycdaca_AceEditor_removeRegisteredMarker = ($this, $id) => {
    let $range;
    $range = $this.$markers.$remove1(jl_Integer_valueOf($id));
    if ($range !== null)
        eycdaca_AceRange_detach($range);
};
let eycdaca_AceEditor_getSelection = $this => {
    if ($this.$selection0 === null)
        $this.$selection0 = eycdaca_AceSelection__init_0(eycdaca_AceEditor_getSelectionJS($this));
    return $this.$selection0;
},
eycdaca_AceEditor_getSelectionJS = $this => {
    return cggcc_JavaScriptObject_of((($this.$editor.$unwrap0()).getSession()).getSelection());
},
eycdaca_AceEditor_wrapCompletionCallback = $jsCallback => {
    eycdaca_AceEditor_$callClinit();
    return eycdaca_AceCompletionCallbackImpl__init_0($jsCallback);
},
eycdaca_AceEditor_unwrapEditor = $this => {
    if ($this.$editor === null)
        $rt_throw(jl_IllegalStateException__init_0($rt_s(21)));
    return $this.$editor.$unwrap0();
},
eycdaca_AceEditor_onUnload = $this => {
    $this.$destroy();
    cggucu_Widget_onUnload($this);
},
eycdaca_AceEditor_lambda$addCompletionProvider$2 = ($provider, $id, $row, $column, $prefix, $callback) => {
    let $target, var$8, var$9;
    eycdaca_AceEditor_$callClinit();
    $target = eycdaca_AceEditor_EDITORS.$get0(jl_Integer_valueOf($id));
    if ($target !== null) {
        var$8 = eycdaca_AceEditorCursorPosition_create($row, $column);
        var$9 = eycdaca_AceEditor_wrapCompletionCallback(cggcc_JavaScriptObject_of($callback));
        $provider.$getProposals($target, var$8, $prefix, var$9);
        return;
    }
},
eycdaca_AceEditor_lambda$addOnCursorPositionChangeHandler$1 = ($callback, $e) => {
    eycdaca_AceEditor_$callClinit();
    $callback.$invokeAceCallback(cggcc_JavaScriptObject_of($e));
},
eycdaca_AceEditor_lambda$addOnChangeHandler$0 = ($callback, $e) => {
    eycdaca_AceEditor_$callClinit();
    $callback.$invokeAceCallback(cggcc_JavaScriptObject_of($e));
},
eycdaca_AceEditor__clinit_ = () => {
    eycdaca_AceEditor_nextId = 0;
    eycdaca_AceEditor_EDITORS = ju_HashMap__init_();
},
eycdaca_AceEditor_createEditor$js_body$_71 = (var$1, var$2) => {
    var e = ace.edit(var$1);
    e.session.setUseWorker(false);
    e.__aceGwtId = var$2;
    return e;
},
eycdaca_AceEditor_destroyEditor$js_body$_72 = var$1 => {
    var$1.destroy();
    var$1.container.textContent = '';
},
eycdaca_AceEditor_listen$js_body$_73 = (var$1, var$2, var$3, var$4) => {
    (var$2 === 'session' ? var$1.session : var$1.selection).on(var$3, var$4);
},
eycdaca_AceEditor_execute$js_body$_76 = (var$1, var$2, var$3) => {
    var$1.commands.exec(var$2, var$1, var$3);
    var$1.focus();
},
eycdaca_AceEditor_addCompleter$js_body$_80 = var$1 => {
    (ace.require('ace/ext/language_tools')).addCompleter({ getCompletions: function(e, s, p, prefix, cb) {
        var$1(e.__aceGwtId, p.row, p.column, prefix, cb);
    }, getDocTooltip: function(item) {
        if (!item.docHTML && item.aceGwtHtmlTooltip) item.docHTML = item.aceGwtHtmlTooltip;
    } });
},
eycdaca_AceEditor_anchor$js_body$_82 = (var$1, var$2) => {
    var$2.start = var$1.session.doc.createAnchor(var$2.start);
    var$2.end = var$1.session.doc.createAnchor(var$2.end);
},
eycdaca_AceEditor_redisplayBridge1$js_body$_84 = var$1 => {
    var$1.renderer.onResize(true);
    var$1.renderer.updateFull();
    var$1.resize();
    var$1.focus();
},
eycdaca_AceEditor_setModeByNameBridge3$js_body$_86 = (var$1, var$2) => {
    var modeName = "ace/mode/" + var$2;
    var TheMode = (window.ace.require(modeName)).Mode;
    (var$1.getSession()).setMode(new TheMode());
},
eycdaca_AceEditor_setAutocompleteEnabledBridge25$js_body$_108 = (var$1, var$2) => {
    if (var$2) {
        window.ace.require("ace/ext/language_tools");
        var$1.setOptions({ enableBasicAutocompletion: true });
    } else {
        var$1.setOptions({ enableBasicAutocompletion: false });
    }
},
eycdaca_AceEditor_removeAllExistingCompletersBridge26$js_body$_109 = () => {
    var langTools = window.ace.require("ace/ext/language_tools");
    langTools.setCompleters([]);
},
eycdaca_AceCommandDescription$ExecAction = $rt_classWithoutFields(0);
function eycdaca_AceCommandDescription$1() {
    jl_Object.call(this);
    this.$val$jsFunction = null;
}
let eycdaca_AceCommandDescription$1__init_ = ($this, var$1) => {
    $this.$val$jsFunction = var$1;
    jl_Object__init_($this);
},
eycdaca_AceCommandDescription$1__init_0 = var_0 => {
    let var_1 = new eycdaca_AceCommandDescription$1();
    eycdaca_AceCommandDescription$1__init_(var_1, var_0);
    return var_1;
},
eycdaca_AceCommandDescription$1_exec = ($this, $editor) => {
    return eycdaca_AceCommandDescription_invokeJavaScriptCommand($this.$val$jsFunction, $editor);
},
jur_BackReferencedSingleSet = $rt_classWithoutFields(jur_SingleSet),
jur_BackReferencedSingleSet__init_ = ($this, $node) => {
    jur_SingleSet__init_($this, $node.$kid, $node.$fSet);
},
jur_BackReferencedSingleSet__init_0 = var_0 => {
    let var_1 = new jur_BackReferencedSingleSet();
    jur_BackReferencedSingleSet__init_(var_1, var_0);
    return var_1;
},
jur_BackReferencedSingleSet_find = ($this, $startSearch, $testString, $matchResult) => {
    let $res, $lastIndex, $saveStart;
    $res = 0;
    $lastIndex = $matchResult.$getRightBound();
    a: {
        b: {
            while (true) {
                if ($startSearch > $lastIndex)
                    break b;
                $saveStart = $matchResult.$getStart($this.$groupIndex);
                $matchResult.$setStart($this.$groupIndex, $startSearch);
                $res = $this.$kid.$matches($startSearch, $testString, $matchResult);
                if ($res >= 0)
                    break;
                $matchResult.$setStart($this.$groupIndex, $saveStart);
                $startSearch = $startSearch + 1 | 0;
            }
            break a;
        }
        $startSearch = $res;
    }
    return $startSearch;
},
jur_BackReferencedSingleSet_findBack = ($this, $stringIndex, $startSearch, $testString, $matchResult) => {
    let $res, $saveStart;
    $res = 0;
    a: {
        b: {
            while (true) {
                if ($startSearch < $stringIndex)
                    break b;
                $saveStart = $matchResult.$getStart($this.$groupIndex);
                $matchResult.$setStart($this.$groupIndex, $startSearch);
                $res = $this.$kid.$matches($startSearch, $testString, $matchResult);
                if ($res >= 0)
                    break;
                $matchResult.$setStart($this.$groupIndex, $saveStart);
                $startSearch = $startSearch + (-1) | 0;
            }
            break a;
        }
        $startSearch = $res;
    }
    return $startSearch;
},
jur_BackReferencedSingleSet_processBackRefReplacement = $this => {
    return null;
};
function cggdc_Element() {
    let a = this; cggdc_Node.call(a);
    a.$element = null;
    a.$style = null;
}
let cggdc_Element__init_ = ($this, $element) => {
    cggdc_Node__init_($this);
    if ($element !== null) {
        $this.$element = $element;
        $this.$style = cggdc_Style__init_0($element);
        return;
    }
    $rt_throw(jl_IllegalArgumentException__init_0($rt_s(13)));
},
cggdc_Element__init_0 = var_0 => {
    let var_1 = new cggdc_Element();
    cggdc_Element__init_(var_1, var_0);
    return var_1;
},
cggdc_Element_unwrap = $this => {
    return $this.$element;
},
cggdc_Element_wrap = $nativeElement => {
    let var$2, var$3, var$4;
    if ($nativeElement !== null) {
        a: {
            b: {
                c: {
                    d: {
                        e: {
                            f: {
                                g: {
                                    h: {
                                        i: {
                                            j: {
                                                k: {
                                                    l: {
                                                        m: {
                                                            n: {
                                                                o: {
                                                                    p: {
                                                                        q: {
                                                                            r: {
                                                                                s: {
                                                                                    t: {
                                                                                        u: {
                                                                                            v: {
                                                                                                w: {
                                                                                                    x: {
                                                                                                        y: {
                                                                                                            z: {
                                                                                                                ba: {
                                                                                                                    bb: {
                                                                                                                        bc: {
                                                                                                                            var$2 = jl_String_toLowerCase($rt_str($nativeElement.tagName));
                                                                                                                            var$3 = (-1);
                                                                                                                            switch (jl_String_hashCode(var$2)) {
                                                                                                                                case -1377687758:
                                                                                                                                    break bc;
                                                                                                                                case -1367706280:
                                                                                                                                    break bb;
                                                                                                                                case -1191214428:
                                                                                                                                    break ba;
                                                                                                                                case -1010136971:
                                                                                                                                    break z;
                                                                                                                                case -1003243718:
                                                                                                                                    break y;
                                                                                                                                case -906021636:
                                                                                                                                    break x;
                                                                                                                                case -896505829:
                                                                                                                                    break w;
                                                                                                                                case -80773204:
                                                                                                                                    break v;
                                                                                                                                case 97:
                                                                                                                                    break u;
                                                                                                                                case 112:
                                                                                                                                    break t;
                                                                                                                                case 3696:
                                                                                                                                    break s;
                                                                                                                                case 3700:
                                                                                                                                    break r;
                                                                                                                                case 3710:
                                                                                                                                    break q;
                                                                                                                                case 99473:
                                                                                                                                    break p;
                                                                                                                                case 104387:
                                                                                                                                    break o;
                                                                                                                                case 3029410:
                                                                                                                                    break n;
                                                                                                                                case 3148996:
                                                                                                                                    break m;
                                                                                                                                case 3198432:
                                                                                                                                    break l;
                                                                                                                                case 3321850:
                                                                                                                                    break k;
                                                                                                                                case 3347973:
                                                                                                                                    break j;
                                                                                                                                case 3536714:
                                                                                                                                    break i;
                                                                                                                                case 100358090:
                                                                                                                                    break h;
                                                                                                                                case 102727412:
                                                                                                                                    break g;
                                                                                                                                case 109780401:
                                                                                                                                    break f;
                                                                                                                                case 110157846:
                                                                                                                                    break e;
                                                                                                                                case 110277346:
                                                                                                                                    break d;
                                                                                                                                case 110326868:
                                                                                                                                    break c;
                                                                                                                                case 112202875:
                                                                                                                                    break b;
                                                                                                                                default:
                                                                                                                            }
                                                                                                                            break a;
                                                                                                                        }
                                                                                                                        if (!jl_String_equals(var$2, $rt_s(22)))
                                                                                                                            break a;
                                                                                                                        var$3 = 17;
                                                                                                                        break a;
                                                                                                                    }
                                                                                                                    if (!jl_String_equals(var$2, $rt_s(23)))
                                                                                                                        break a;
                                                                                                                    var$3 = 8;
                                                                                                                    break a;
                                                                                                                }
                                                                                                                if (!jl_String_equals(var$2, $rt_s(24)))
                                                                                                                    break a;
                                                                                                                var$3 = 25;
                                                                                                                break a;
                                                                                                            }
                                                                                                            if (!jl_String_equals(var$2, $rt_s(25)))
                                                                                                                break a;
                                                                                                            var$3 = 13;
                                                                                                            break a;
                                                                                                        }
                                                                                                        if (!jl_String_equals(var$2, $rt_s(26)))
                                                                                                            break a;
                                                                                                        var$3 = 26;
                                                                                                        break a;
                                                                                                    }
                                                                                                    if (!jl_String_equals(var$2, $rt_s(27)))
                                                                                                        break a;
                                                                                                    var$3 = 6;
                                                                                                    break a;
                                                                                                }
                                                                                                if (!jl_String_equals(var$2, $rt_s(28)))
                                                                                                    break a;
                                                                                                var$3 = 15;
                                                                                                break a;
                                                                                            }
                                                                                            if (!jl_String_equals(var$2, $rt_s(29)))
                                                                                                break a;
                                                                                            var$3 = 10;
                                                                                            break a;
                                                                                        }
                                                                                        if (!jl_String_equals(var$2, $rt_s(30)))
                                                                                            break a;
                                                                                        var$3 = 23;
                                                                                        break a;
                                                                                    }
                                                                                    if (!jl_String_equals(var$2, $rt_s(31)))
                                                                                        break a;
                                                                                    var$3 = 24;
                                                                                    break a;
                                                                                }
                                                                                if (!jl_String_equals(var$2, $rt_s(32)))
                                                                                    break a;
                                                                                var$3 = 4;
                                                                                break a;
                                                                            }
                                                                            if (!jl_String_equals(var$2, $rt_s(33)))
                                                                                break a;
                                                                            var$3 = 5;
                                                                            break a;
                                                                        }
                                                                        if (!jl_String_equals(var$2, $rt_s(34)))
                                                                            break a;
                                                                        var$3 = 3;
                                                                        break a;
                                                                    }
                                                                    if (!jl_String_equals(var$2, $rt_s(35)))
                                                                        break a;
                                                                    var$3 = 9;
                                                                    break a;
                                                                }
                                                                if (!jl_String_equals(var$2, $rt_s(36)))
                                                                    break a;
                                                                var$3 = 14;
                                                                break a;
                                                            }
                                                            if (!jl_String_equals(var$2, $rt_s(37)))
                                                                break a;
                                                            var$3 = 16;
                                                            break a;
                                                        }
                                                        if (!jl_String_equals(var$2, $rt_s(38)))
                                                            break a;
                                                        var$3 = 22;
                                                        break a;
                                                    }
                                                    if (!jl_String_equals(var$2, $rt_s(39)))
                                                        break a;
                                                    var$3 = 21;
                                                    break a;
                                                }
                                                if (!jl_String_equals(var$2, $rt_s(40)))
                                                    break a;
                                                var$3 = 18;
                                                break a;
                                            }
                                            if (!jl_String_equals(var$2, $rt_s(41)))
                                                break a;
                                            var$3 = 19;
                                            break a;
                                        }
                                        if (!jl_String_equals(var$2, $rt_s(42)))
                                            break a;
                                        var$3 = 12;
                                        break a;
                                    }
                                    if (!jl_String_equals(var$2, $rt_s(43)))
                                        break a;
                                    var$3 = 20;
                                    break a;
                                }
                                if (!jl_String_equals(var$2, $rt_s(44)))
                                    break a;
                                var$3 = 11;
                                break a;
                            }
                            if (!jl_String_equals(var$2, $rt_s(45)))
                                break a;
                            var$3 = 27;
                            break a;
                        }
                        if (!jl_String_equals(var$2, $rt_s(46)))
                            break a;
                        var$3 = 1;
                        break a;
                    }
                    if (!jl_String_equals(var$2, $rt_s(47)))
                        break a;
                    var$3 = 2;
                    break a;
                }
                if (!jl_String_equals(var$2, $rt_s(48)))
                    break a;
                var$3 = 0;
                break a;
            }
            if (jl_String_equals(var$2, $rt_s(49)))
                var$3 = 7;
        }
        bd: {
            be: {
                bf: {
                    bg: {
                        bh: {
                            bi: {
                                bj: {
                                    bk: {
                                        bl: {
                                            bm: {
                                                bn: {
                                                    bo: {
                                                        bp: {
                                                            bq: {
                                                                br: {
                                                                    bs: {
                                                                        bt: {
                                                                            bu: {
                                                                                bv: {
                                                                                    bw: {
                                                                                        bx: {
                                                                                            by: {
                                                                                                bz: {
                                                                                                    bA: {
                                                                                                        bB: {
                                                                                                            bC: {
                                                                                                                switch (var$3) {
                                                                                                                    case 0:
                                                                                                                    case 1:
                                                                                                                    case 2:
                                                                                                                        break;
                                                                                                                    case 3:
                                                                                                                        break bC;
                                                                                                                    case 4:
                                                                                                                    case 5:
                                                                                                                        break bB;
                                                                                                                    case 6:
                                                                                                                        break bA;
                                                                                                                    case 7:
                                                                                                                        break bz;
                                                                                                                    case 8:
                                                                                                                        break by;
                                                                                                                    case 9:
                                                                                                                        break bx;
                                                                                                                    case 10:
                                                                                                                        break bw;
                                                                                                                    case 11:
                                                                                                                        break bv;
                                                                                                                    case 12:
                                                                                                                        break bu;
                                                                                                                    case 13:
                                                                                                                        break bt;
                                                                                                                    case 14:
                                                                                                                        break bs;
                                                                                                                    case 15:
                                                                                                                        break br;
                                                                                                                    case 16:
                                                                                                                        break bq;
                                                                                                                    case 17:
                                                                                                                        break bp;
                                                                                                                    case 18:
                                                                                                                        break bo;
                                                                                                                    case 19:
                                                                                                                        break bn;
                                                                                                                    case 20:
                                                                                                                        break bm;
                                                                                                                    case 21:
                                                                                                                        break bl;
                                                                                                                    case 22:
                                                                                                                        break bk;
                                                                                                                    case 23:
                                                                                                                        break bj;
                                                                                                                    case 24:
                                                                                                                        break bi;
                                                                                                                    case 25:
                                                                                                                        break bh;
                                                                                                                    case 26:
                                                                                                                        break bg;
                                                                                                                    case 27:
                                                                                                                        break bf;
                                                                                                                    default:
                                                                                                                        break be;
                                                                                                                }
                                                                                                                var$4 = cggdc_TableSectionElement__init_0($nativeElement);
                                                                                                                break bd;
                                                                                                            }
                                                                                                            var$4 = cggdc_TableRowElement__init_0($nativeElement);
                                                                                                            break bd;
                                                                                                        }
                                                                                                        var$4 = cggdc_TableCellElement__init_0($nativeElement);
                                                                                                        break bd;
                                                                                                    }
                                                                                                    var$4 = cggdc_SelectElement__init_0($nativeElement);
                                                                                                    break bd;
                                                                                                }
                                                                                                var$4 = cggdc_VideoElement__init_0($nativeElement);
                                                                                                break bd;
                                                                                            }
                                                                                            var$4 = cggdc_CanvasElement__init_0($nativeElement);
                                                                                            break bd;
                                                                                        }
                                                                                        var$4 = cggdc_DivElement__init_0($nativeElement);
                                                                                        break bd;
                                                                                    }
                                                                                    var$4 = cggdc_OptGroupElement__init_0($nativeElement);
                                                                                    break bd;
                                                                                }
                                                                                var$4 = cggdc_LabelElement__init_0($nativeElement);
                                                                                break bd;
                                                                            }
                                                                            var$4 = cggdc_SpanElement__init_0($nativeElement);
                                                                            break bd;
                                                                        }
                                                                        var$4 = cggdc_OptionElement__init_0($nativeElement);
                                                                        break bd;
                                                                    }
                                                                    var$4 = cggdc_ImageElement__init_0($nativeElement);
                                                                    break bd;
                                                                }
                                                                var$4 = cggdc_SourceElement__init_0($nativeElement);
                                                                break bd;
                                                            }
                                                            var$4 = cggdc_BodyElement__init_0($nativeElement);
                                                            break bd;
                                                        }
                                                        var$4 = cggdc_ButtonElement__init_0($nativeElement);
                                                        break bd;
                                                    }
                                                    var$4 = cggdc_LinkElement__init_0($nativeElement);
                                                    break bd;
                                                }
                                                var$4 = cggdc_MetaElement__init_0($nativeElement);
                                                break bd;
                                            }
                                            var$4 = cggdc_InputElement__init_0($nativeElement);
                                            break bd;
                                        }
                                        var$4 = cggdc_HeadElement__init_0($nativeElement);
                                        break bd;
                                    }
                                    var$4 = cggdc_FormElement__init_0($nativeElement);
                                    break bd;
                                }
                                var$4 = cggdc_AnchorElement__init_0($nativeElement);
                                break bd;
                            }
                            var$4 = cggdc_ParagraphElement__init_0($nativeElement);
                            break bd;
                        }
                        var$4 = cggdc_IFrameElement__init_0($nativeElement);
                        break bd;
                    }
                    var$4 = cggdc_TextAreaElement__init_0($nativeElement);
                    break bd;
                }
                var$4 = cggdc_StyleElement__init_0($nativeElement);
                break bd;
            }
            var$4 = cggdc_Element__init_0($nativeElement);
        }
        return var$4;
    }
    return null;
},
cggdc_Element_getStyle = $this => {
    return $this.$style;
},
cggdc_Element_setId = ($this, $id) => {
    let var$2, var$3;
    var$2 = $this.$element;
    if ($id === null)
        $id = $rt_s(8);
    var$3 = $rt_ustr($id);
    var$2.id = var$3;
},
cggdc_Element_appendChild = ($this, $child) => {
    let var$2, var$3;
    var$2 = $this.$element;
    var$3 = $child.$unwrap1();
    var$2.appendChild(var$3);
},
cggdc_Element_removeFromParent = $this => {
    let $parent;
    $parent = $this.$element.parentNode;
    if ($parent !== null)
        $parent.removeChild($this.$element);
},
cggdc_Element_unwrap0 = $this => {
    return $this.$unwrap1();
},
cggdc_TextAreaElement = $rt_classWithoutFields(cggdc_Element),
cggdc_TextAreaElement__init_ = ($this, $element) => {
    cggdc_Element__init_($this, $element);
},
cggdc_TextAreaElement__init_0 = var_0 => {
    let var_1 = new cggdc_TextAreaElement();
    cggdc_TextAreaElement__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyWord = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyWord__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyWord__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyWord();
    jur_AbstractCharClass$LazyWord__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyWord_computeValue = $this => {
    return ((((jur_CharClass__init_()).$add0(97, 122)).$add0(65, 90)).$add0(48, 57)).$add(95);
},
jur_AbstractCharClass$LazyNonWord = $rt_classWithoutFields(jur_AbstractCharClass$LazyWord),
jur_AbstractCharClass$LazyNonWord__init_ = $this => {
    jur_AbstractCharClass$LazyWord__init_($this);
},
jur_AbstractCharClass$LazyNonWord__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyNonWord();
    jur_AbstractCharClass$LazyNonWord__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyNonWord_computeValue = $this => {
    let $chCl;
    $chCl = (jur_AbstractCharClass$LazyWord_computeValue($this)).$setNegative(1);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
};
function jur_LeafSet() {
    jur_AbstractSet.call(this);
    this.$charCount0 = 0;
}
let jur_LeafSet__init_0 = ($this, $next) => {
    jur_AbstractSet__init_0($this, $next);
    $this.$charCount0 = 1;
    $this.$setType(1);
},
jur_LeafSet__init_ = $this => {
    jur_AbstractSet__init_($this);
    $this.$charCount0 = 1;
},
jur_LeafSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $shift;
    if (($stringIndex + $this.$charCount() | 0) <= $matchResult.$getRightBound()) {
        $shift = $this.$accepts($stringIndex, $testString);
        if ($shift >= 0)
            return $this.$next2.$matches($stringIndex + $shift | 0, $testString, $matchResult);
        return (-1);
    }
    $matchResult.$hitEnd = 1;
    return (-1);
},
jur_LeafSet_charCount = $this => {
    return $this.$charCount0;
},
jur_LeafSet_hasConsumed = ($this, $mr) => {
    return 1;
};
function jur_CISequenceSet() {
    jur_LeafSet.call(this);
    this.$string1 = null;
}
let jur_CISequenceSet__init_ = ($this, $substring) => {
    jur_LeafSet__init_($this);
    $this.$string1 = $substring.$toString();
    $this.$charCount0 = $substring.$length();
},
jur_CISequenceSet__init_0 = var_0 => {
    let var_1 = new jur_CISequenceSet();
    jur_CISequenceSet__init_(var_1, var_0);
    return var_1;
},
jur_CISequenceSet_accepts = ($this, $strIndex, $testString) => {
    let $i, var$4, var$5, var$6;
    $i = 0;
    while (true) {
        if ($i >= jl_String_length($this.$string1))
            return jl_String_length($this.$string1);
        var$4 = jl_String_charAt($this.$string1, $i);
        var$5 = $strIndex + $i | 0;
        if (var$4 != $testString.$charAt(var$5)) {
            var$6 = $this.$string1;
            if (jur_Pattern_getSupplement(jl_String_charAt(var$6, $i)) != $testString.$charAt(var$5))
                break;
        }
        $i = $i + 1 | 0;
    }
    return (-1);
};
function jl_Enum() {
    let a = this; jl_Object.call(a);
    a.$name2 = null;
    a.$ordinal = 0;
}
let jl_Enum__init_ = ($this, $name, $ordinal) => {
    jl_Object__init_($this);
    $this.$name2 = $name;
    $this.$ordinal = $ordinal;
},
jl_Enum_name = $this => {
    return $this.$name2;
},
jl_Enum_equals = ($this, $other) => {
    return $this !== $other ? 0 : 1;
},
eycdaca_AceCommandDescription$ScrollIntoView = $rt_classWithoutFields(jl_Enum),
eycdaca_AceCommandDescription$ScrollIntoView_animate = null,
eycdaca_AceCommandDescription$ScrollIntoView_center = null,
eycdaca_AceCommandDescription$ScrollIntoView_cursor = null,
eycdaca_AceCommandDescription$ScrollIntoView_selectionPart = null,
eycdaca_AceCommandDescription$ScrollIntoView_$VALUES = null,
eycdaca_AceCommandDescription$ScrollIntoView_$callClinit = () => {
    eycdaca_AceCommandDescription$ScrollIntoView_$callClinit = $rt_eraseClinit(eycdaca_AceCommandDescription$ScrollIntoView);
    eycdaca_AceCommandDescription$ScrollIntoView__clinit_();
},
eycdaca_AceCommandDescription$ScrollIntoView_values = () => {
    eycdaca_AceCommandDescription$ScrollIntoView_$callClinit();
    return eycdaca_AceCommandDescription$ScrollIntoView_$VALUES.$clone0();
},
eycdaca_AceCommandDescription$ScrollIntoView__init_0 = ($this, var$1, var$2) => {
    eycdaca_AceCommandDescription$ScrollIntoView_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
},
eycdaca_AceCommandDescription$ScrollIntoView__init_ = (var_0, var_1) => {
    let var_2 = new eycdaca_AceCommandDescription$ScrollIntoView();
    eycdaca_AceCommandDescription$ScrollIntoView__init_0(var_2, var_0, var_1);
    return var_2;
},
eycdaca_AceCommandDescription$ScrollIntoView_fromString = $value => {
    let var$2, var$3, var$4, $ret;
    eycdaca_AceCommandDescription$ScrollIntoView_$callClinit();
    var$2 = (eycdaca_AceCommandDescription$ScrollIntoView_values()).data;
    var$3 = var$2.length;
    var$4 = 0;
    while (true) {
        if (var$4 >= var$3)
            return null;
        $ret = var$2[var$4];
        if (jl_String_equals(jl_Enum_name($ret), $value))
            break;
        var$4 = var$4 + 1 | 0;
    }
    return $ret;
},
eycdaca_AceCommandDescription$ScrollIntoView_$values = () => {
    let var$1, var$2;
    eycdaca_AceCommandDescription$ScrollIntoView_$callClinit();
    var$1 = $rt_createArray(eycdaca_AceCommandDescription$ScrollIntoView, 4);
    var$2 = var$1.data;
    var$2[0] = eycdaca_AceCommandDescription$ScrollIntoView_animate;
    var$2[1] = eycdaca_AceCommandDescription$ScrollIntoView_center;
    var$2[2] = eycdaca_AceCommandDescription$ScrollIntoView_cursor;
    var$2[3] = eycdaca_AceCommandDescription$ScrollIntoView_selectionPart;
    return var$1;
},
eycdaca_AceCommandDescription$ScrollIntoView__clinit_ = () => {
    eycdaca_AceCommandDescription$ScrollIntoView_animate = eycdaca_AceCommandDescription$ScrollIntoView__init_($rt_s(50), 0);
    eycdaca_AceCommandDescription$ScrollIntoView_center = eycdaca_AceCommandDescription$ScrollIntoView__init_($rt_s(51), 1);
    eycdaca_AceCommandDescription$ScrollIntoView_cursor = eycdaca_AceCommandDescription$ScrollIntoView__init_($rt_s(52), 2);
    eycdaca_AceCommandDescription$ScrollIntoView_selectionPart = eycdaca_AceCommandDescription$ScrollIntoView__init_($rt_s(53), 3);
    eycdaca_AceCommandDescription$ScrollIntoView_$VALUES = eycdaca_AceCommandDescription$ScrollIntoView_$values();
},
cgwbes_Event = $rt_classWithoutFields(),
cgwbes_Event__init_ = $this => {
    jl_Object__init_($this);
},
cgges_GwtEvent = $rt_classWithoutFields(cgwbes_Event),
cgges_GwtEvent__init_ = $this => {
    cgwbes_Event__init_($this);
},
cggedc_DomEvent = $rt_classWithoutFields(cgges_GwtEvent),
cggedc_DomEvent_TYPES = null,
cggedc_DomEvent_$callClinit = () => {
    cggedc_DomEvent_$callClinit = $rt_eraseClinit(cggedc_DomEvent);
    cggedc_DomEvent__clinit_();
},
cggedc_DomEvent_fireNativeEvent = ($nativeEvent, $source) => {
    cggedc_DomEvent_$callClinit();
    cggedc_DomEvent_fireNativeEvent0($nativeEvent, $source, null);
},
cggedc_DomEvent_fireNativeEvent0 = ($nativeEvent, $source, $relativeElement) => {
    let $type, $event;
    cggedc_DomEvent_$callClinit();
    if ($nativeEvent !== null && $source !== null) {
        $type = cggedc_DomEvent_TYPES.$get0($nativeEvent.$getType());
        if ($type !== null) {
            $event = $type.$createEvent();
            $event.$setNativeEvent($nativeEvent);
            $event.$setRelativeElement($relativeElement);
            $source.$fireEvent($event);
            return;
        }
        return;
    }
},
cggedc_DomEvent__clinit_ = () => {
    cggedc_DomEvent_TYPES = ju_HashMap__init_();
},
jl_CharSequence = $rt_classWithoutFields(0),
ju_Map = $rt_classWithoutFields(0),
ju_Map_computeIfAbsent = ($this, $key, $mappingFunction) => {
    let $v, $newValue;
    ju_Objects_requireNonNull($mappingFunction);
    $v = $this.$get0($key);
    if ($v === null) {
        $newValue = $mappingFunction.$apply($key);
        if ($newValue !== null)
            $this.$put($key, $newValue);
        return $newValue;
    }
    return $v;
},
ju_SequencedMap = $rt_classWithoutFields(0),
juf_Predicate = $rt_classWithoutFields(0);
function cggucu_RootPanel$detachNow$lambda$_6_1() {
    jl_Object.call(this);
    this.$_01 = null;
}
let cggucu_RootPanel$detachNow$lambda$_6_1__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_01 = var$1;
},
cggucu_RootPanel$detachNow$lambda$_6_1__init_0 = var_0 => {
    let var_1 = new cggucu_RootPanel$detachNow$lambda$_6_1();
    cggucu_RootPanel$detachNow$lambda$_6_1__init_(var_1, var_0);
    return var_1;
},
cggucu_RootPanel$detachNow$lambda$_6_1_test0 = (var$0, var$1) => {
    return cggucu_RootPanel$detachNow$lambda$_6_1_test(var$0, var$1);
},
cggucu_RootPanel$detachNow$lambda$_6_1_test = (var$0, var$1) => {
    return cggucu_RootPanel_lambda$detachNow$0(var$0.$_01, var$1);
};
function cggucu_RootPanel$detachNow$lambda$_6_0() {
    jl_Object.call(this);
    this.$_06 = null;
}
let cggucu_RootPanel$detachNow$lambda$_6_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_06 = var$1;
},
cggucu_RootPanel$detachNow$lambda$_6_0__init_0 = var_0 => {
    let var_1 = new cggucu_RootPanel$detachNow$lambda$_6_0();
    cggucu_RootPanel$detachNow$lambda$_6_0__init_(var_1, var_0);
    return var_1;
},
cggucu_RootPanel$detachNow$lambda$_6_0_test0 = (var$0, var$1) => {
    return cggucu_RootPanel$detachNow$lambda$_6_0_test(var$0, var$1);
},
cggucu_RootPanel$detachNow$lambda$_6_0_test = (var$0, var$1) => {
    return cggucu_RootPanel_lambda$detachNow$0(var$0.$_06, var$1);
};
function jl_Throwable() {
    let a = this; jl_Object.call(a);
    a.$message = null;
    a.$cause = null;
    a.$suppressionEnabled = 0;
    a.$writableStackTrace = 0;
    a.$suppressed = null;
}
let jl_Throwable__init_ = $this => {
    $this.$suppressed = $rt_createArray(jl_Throwable, 0);
    jl_Throwable_initNativeException($this);
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$fillInStackTrace();
},
jl_Throwable__init_4 = () => {
    let var_0 = new jl_Throwable();
    jl_Throwable__init_(var_0);
    return var_0;
},
jl_Throwable__init_0 = ($this, $message) => {
    $this.$suppressed = $rt_createArray(jl_Throwable, 0);
    jl_Throwable_initNativeException($this);
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$fillInStackTrace();
    $this.$message = $message;
},
jl_Throwable__init_2 = var_0 => {
    let var_1 = new jl_Throwable();
    jl_Throwable__init_0(var_1, var_0);
    return var_1;
},
jl_Throwable__init_1 = ($this, $message, $cause) => {
    $this.$suppressed = $rt_createArray(jl_Throwable, 0);
    jl_Throwable_initNativeException($this);
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$fillInStackTrace();
    $this.$message = $message;
    $this.$cause = $cause;
},
jl_Throwable__init_3 = (var_0, var_1) => {
    let var_2 = new jl_Throwable();
    jl_Throwable__init_1(var_2, var_0, var_1);
    return var_2;
},
jl_Throwable_fillInStackTrace = $this => {
    return $this;
},
jl_Throwable_initNativeException = $this => {
    $rt_fillNativeException($this);
},
jl_Throwable_getMessage = $this => {
    return $this.$message;
},
jl_Throwable_getCause = $this => {
    return $this.$cause === $this ? null : $this.$cause;
},
jl_Throwable_addSuppressed = ($this, $exception) => {
    if ($this.$suppressionEnabled) {
        $this.$suppressed = ju_Arrays_copyOf0($this.$suppressed, $this.$suppressed.data.length + 1 | 0);
        $this.$suppressed.data[$this.$suppressed.data.length - 1 | 0] = $exception;
        return;
    }
},
jl_Exception = $rt_classWithoutFields(jl_Throwable),
jl_Exception__init_ = $this => {
    jl_Throwable__init_($this);
},
jl_Exception__init_2 = () => {
    let var_0 = new jl_Exception();
    jl_Exception__init_(var_0);
    return var_0;
},
jl_Exception__init_1 = ($this, $message, $cause) => {
    jl_Throwable__init_1($this, $message, $cause);
},
jl_Exception__init_4 = (var_0, var_1) => {
    let var_2 = new jl_Exception();
    jl_Exception__init_1(var_2, var_0, var_1);
    return var_2;
},
jl_Exception__init_0 = ($this, $message) => {
    jl_Throwable__init_0($this, $message);
},
jl_Exception__init_3 = var_0 => {
    let var_1 = new jl_Exception();
    jl_Exception__init_0(var_1, var_0);
    return var_1;
},
jl_RuntimeException = $rt_classWithoutFields(jl_Exception),
jl_RuntimeException__init_ = $this => {
    jl_Exception__init_($this);
},
jl_RuntimeException__init_3 = () => {
    let var_0 = new jl_RuntimeException();
    jl_RuntimeException__init_(var_0);
    return var_0;
},
jl_RuntimeException__init_1 = ($this, $message, $cause) => {
    jl_Exception__init_1($this, $message, $cause);
},
jl_RuntimeException__init_4 = (var_0, var_1) => {
    let var_2 = new jl_RuntimeException();
    jl_RuntimeException__init_1(var_2, var_0, var_1);
    return var_2;
},
jl_RuntimeException__init_0 = ($this, $message) => {
    jl_Exception__init_0($this, $message);
},
jl_RuntimeException__init_2 = var_0 => {
    let var_1 = new jl_RuntimeException();
    jl_RuntimeException__init_0(var_1, var_0);
    return var_1;
};
function ju_MissingResourceException() {
    let a = this; jl_RuntimeException.call(a);
    a.$className = null;
    a.$key0 = null;
}
let ju_MissingResourceException__init_ = ($this, $s, $className, $key) => {
    jl_RuntimeException__init_0($this, $s);
    $this.$className = $className;
    $this.$key0 = $key;
},
ju_MissingResourceException__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new ju_MissingResourceException();
    ju_MissingResourceException__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jl_IndexOutOfBoundsException = $rt_classWithoutFields(jl_RuntimeException),
jl_IndexOutOfBoundsException__init_1 = $this => {
    jl_RuntimeException__init_($this);
},
jl_IndexOutOfBoundsException__init_ = () => {
    let var_0 = new jl_IndexOutOfBoundsException();
    jl_IndexOutOfBoundsException__init_1(var_0);
    return var_0;
},
jl_IndexOutOfBoundsException__init_0 = ($this, $message) => {
    jl_RuntimeException__init_0($this, $message);
},
jl_IndexOutOfBoundsException__init_2 = var_0 => {
    let var_1 = new jl_IndexOutOfBoundsException();
    jl_IndexOutOfBoundsException__init_0(var_1, var_0);
    return var_1;
},
jl_StringIndexOutOfBoundsException = $rt_classWithoutFields(jl_IndexOutOfBoundsException),
jl_StringIndexOutOfBoundsException__init_0 = $this => {
    jl_IndexOutOfBoundsException__init_1($this);
},
jl_StringIndexOutOfBoundsException__init_ = () => {
    let var_0 = new jl_StringIndexOutOfBoundsException();
    jl_StringIndexOutOfBoundsException__init_0(var_0);
    return var_0;
},
jl_Iterable = $rt_classWithoutFields(0),
cggucu_HasWidgets = $rt_classWithoutFields(0),
cggucu_Panel = $rt_classWithoutFields(cggucu_Widget),
cggucu_Panel__init_ = $this => {
    cggucu_Widget__init_($this);
},
cggucu_Panel_adopt = ($this, $child) => {
    $child.$setParent($this);
},
cggucu_Panel_doAttachChildren = $this => {
    let var$1, $child;
    var$1 = $this.$iterator();
    while (var$1.$hasNext()) {
        $child = var$1.$next();
        if (!$child.$isAttached())
            $child.$onAttach();
    }
},
cggucu_Panel_doDetachChildren = $this => {
    let $children, var$2, $child;
    $children = ju_ArrayList__init_();
    var$2 = $this.$iterator();
    while (var$2.$hasNext()) {
        $child = var$2.$next();
        $children.$add2($child);
    }
    cggucu_Lifecycle_forEach($children, cggucu_Panel$doDetachChildren$lambda$_8_0__init_0());
},
cggucu_Panel_orphan = ($this, $child) => {
    if ($child.$getParent() === $this)
        $child.$setParent(null);
},
cggucu_Panel_lambda$doDetachChildren$1 = $child => {
    if ($child.$isAttached())
        $child.$onDetach();
},
cggucu_IndexedPanel = $rt_classWithoutFields(0),
cggucu_IndexedPanel$ForIsWidget = $rt_classWithoutFields(0);
function cggucu_ComplexPanel() {
    cggucu_Panel.call(this);
    this.$children0 = null;
}
let cggucu_ComplexPanel__init_ = $this => {
    cggucu_Panel__init_($this);
    $this.$children0 = cggucu_WidgetCollection__init_0($this);
},
cggucu_ComplexPanel_getChildren = $this => {
    return $this.$children0;
},
cggucu_ComplexPanel_add = ($this, $child) => {
    $this.$add3($child, $this.$getElement());
},
cggucu_ComplexPanel_add0 = ($this, $child, $container) => {
    $child.$removeFromParent();
    ($this.$getChildren()).$add4($child);
    $container.$appendChild($child.$getElement());
    cggucu_Panel_adopt($this, $child);
},
cggucu_ComplexPanel_remove = ($this, $child) => {
    let var$2, $$je;
    if ($child !== null && $child.$getParent() === $this) {
        try {
            cggucu_Panel_orphan($this, $child);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$2 = $$je;
            try {
                ($child.$getElement()).$removeFromParent();
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$2 = $$je;
                ($this.$getChildren()).$remove2($child);
                $rt_throw(var$2);

            }
            ($this.$getChildren()).$remove2($child);
            $rt_throw(var$2);

        }
        a: {
            try {
                ($child.$getElement()).$removeFromParent();
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$2 = $$je;

            }
            ($this.$getChildren()).$remove2($child);
            $rt_throw(var$2);
        }
        ($this.$getChildren()).$remove2($child);
        return 1;
    }
    return 0;
},
cggucu_ComplexPanel_getWidget = ($this, $index) => {
    return ($this.$getChildren()).$get1($index);
},
cggucu_ComplexPanel_getWidgetCount = $this => {
    return ($this.$getChildren()).$size();
},
cggucu_ComplexPanel_iterator = $this => {
    return cggucu_ComplexPanel$1__init_0($this);
},
cggucu_RootPanel = $rt_classWithoutFields(cggucu_ComplexPanel),
cggucu_RootPanel_ROOTS = null,
cggucu_RootPanel_TO_DETACH = null,
cggucu_RootPanel_bodyRoot = null,
cggucu_RootPanel_closeHooked = 0,
cggucu_RootPanel_$callClinit = () => {
    cggucu_RootPanel_$callClinit = $rt_eraseClinit(cggucu_RootPanel);
    cggucu_RootPanel__clinit_();
},
cggucu_RootPanel__init_0 = ($this, $element) => {
    cggucu_RootPanel_$callClinit();
    cggucu_ComplexPanel__init_($this);
    $this.$setElement($element);
    $this.$onAttach();
},
cggucu_RootPanel__init_ = var_0 => {
    let var_1 = new cggucu_RootPanel();
    cggucu_RootPanel__init_0(var_1, var_0);
    return var_1;
},
cggucu_RootPanel_get = $id => {
    let $element, $existing, $created;
    cggucu_RootPanel_$callClinit();
    $element = cggdc_Document_getElementById(cggdc_Document_get(), $id);
    if ($element !== null) {
        $existing = cggucu_RootPanel_ROOTS.$get0($id);
        if ($existing !== null && ($existing.$getElement()).$unwrap1() === $element.$unwrap1())
            return $existing;
        if ($existing !== null) {
            cggucu_RootPanel_ROOTS.$remove1($id);
            cggucu_RootPanel_detachNow($existing);
        }
        $created = cggucu_RootPanel__init_($element);
        cggucu_RootPanel_ROOTS.$put($id, $created);
        cggucu_RootPanel_detachOnWindowClose($created);
        return $created;
    }
    return null;
},
cggucu_RootPanel_detachOnWindowClose = $widget => {
    cggucu_RootPanel_$callClinit();
    if ($widget === null)
        $rt_throw(jl_IllegalArgumentException__init_0($rt_s(15)));
    cggucu_RootPanel_TO_DETACH.$add2($widget);
    cggucu_RootPanel_hookWindowClose();
},
cggucu_RootPanel_detachNow = $widget => {
    let var$2, $$je;
    cggucu_RootPanel_$callClinit();
    try {
        cggucu_RootPanel_detach($widget);
    } catch ($$e) {
        $$je = $rt_wrapException($$e);
        var$2 = $$je;
        cggucu_RootPanel_TO_DETACH.$remove3($widget);
        (cggucu_RootPanel_ROOTS.$values0()).$removeIf(cggucu_RootPanel$detachNow$lambda$_6_1__init_0($widget));
        if (cggucu_RootPanel_bodyRoot === $widget)
            cggucu_RootPanel_bodyRoot = null;
        $rt_throw(var$2);

    }
    cggucu_RootPanel_TO_DETACH.$remove3($widget);
    (cggucu_RootPanel_ROOTS.$values0()).$removeIf(cggucu_RootPanel$detachNow$lambda$_6_0__init_0($widget));
    if (cggucu_RootPanel_bodyRoot === $widget)
        cggucu_RootPanel_bodyRoot = null;
},
cggucu_RootPanel_detachWidgets = () => {
    cggucu_RootPanel_$callClinit();
    cggucu_Lifecycle_forEach(ju_LinkedHashSet__init_2(cggucu_RootPanel_TO_DETACH), cggucu_RootPanel$detachWidgets$lambda$_7_0__init_0());
},
cggucu_RootPanel_detach = $widget => {
    cggucu_RootPanel_$callClinit();
    if ($widget.$isAttached())
        $widget.$onDetach();
},
cggucu_RootPanel_hookWindowClose = () => {
    cggucu_RootPanel_$callClinit();
    if (!cggucu_RootPanel_closeHooked) {
        cggucu_RootPanel_closeHooked = 1;
        cggucu_RootPanel_onWindowClose$js_body$_10(otji_JSWrapper_unwrap(cggucu_RootPanel$hookWindowClose$lambda$_9_0__init_0()));
        return;
    }
},
cggucu_RootPanel_lambda$detachNow$0 = ($widget, $root) => {
    cggucu_RootPanel_$callClinit();
    return $root !== $widget ? 0 : 1;
},
cggucu_RootPanel__clinit_ = () => {
    cggucu_RootPanel_ROOTS = ju_HashMap__init_();
    cggucu_RootPanel_TO_DETACH = ju_LinkedHashSet__init_();
},
cggucu_RootPanel_onWindowClose$js_body$_10 = var$1 => {
    window.addEventListener('unload', function() {
        var$1.run();
    });
};
function jur_CIBackReferenceSet() {
    let a = this; jur_JointSet.call(a);
    a.$referencedGroup = 0;
    a.$consCounter1 = 0;
}
let jur_CIBackReferenceSet__init_ = ($this, var$1, $consCounter) => {
    jur_JointSet__init_($this);
    $this.$referencedGroup = var$1;
    $this.$consCounter1 = $consCounter;
},
jur_CIBackReferenceSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CIBackReferenceSet();
    jur_CIBackReferenceSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_CIBackReferenceSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $group, $i, var$6, var$7;
    $group = $this.$getString($matchResult);
    if ($group !== null && ($stringIndex + jl_String_length($group) | 0) <= $matchResult.$getRightBound()) {
        $i = 0;
        while (true) {
            if ($i >= jl_String_length($group)) {
                $matchResult.$setConsumed($this.$consCounter1, jl_String_length($group));
                return $this.$next2.$matches($stringIndex + jl_String_length($group) | 0, $testString, $matchResult);
            }
            var$6 = jl_String_charAt($group, $i);
            var$7 = $stringIndex + $i | 0;
            if (var$6 != $testString.$charAt(var$7) && jur_Pattern_getSupplement(jl_String_charAt($group, $i)) != $testString.$charAt(var$7))
                break;
            $i = $i + 1 | 0;
        }
        return (-1);
    }
    return (-1);
},
jur_CIBackReferenceSet_setNext = ($this, $next) => {
    $this.$next2 = $next;
},
jur_CIBackReferenceSet_getString = ($this, $matchResult) => {
    let $res;
    $res = $matchResult.$getGroupNoCheck($this.$referencedGroup);
    return $res;
},
jur_CIBackReferenceSet_hasConsumed = ($this, $matchResult) => {
    let $res;
    $res = !$matchResult.$getConsumed($this.$consCounter1) ? 0 : 1;
    $matchResult.$setConsumed($this.$consCounter1, (-1));
    return $res;
},
jur_UCIBackReferenceSet = $rt_classWithoutFields(jur_CIBackReferenceSet),
jur_UCIBackReferenceSet__init_ = ($this, $groupIndex, $consCounter) => {
    jur_CIBackReferenceSet__init_($this, $groupIndex, $consCounter);
},
jur_UCIBackReferenceSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_UCIBackReferenceSet();
    jur_UCIBackReferenceSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_UCIBackReferenceSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $group, $i, var$6, var$7;
    $group = $this.$getString($matchResult);
    if ($group !== null && ($stringIndex + jl_String_length($group) | 0) <= $matchResult.$getRightBound()) {
        $i = 0;
        while (true) {
            if ($i >= jl_String_length($group)) {
                $matchResult.$setConsumed($this.$consCounter1, jl_String_length($group));
                return $this.$next2.$matches($stringIndex + jl_String_length($group) | 0, $testString, $matchResult);
            }
            var$6 = jl_Character_toLowerCase(jl_Character_toUpperCase(jl_String_charAt($group, $i)));
            var$7 = $stringIndex + $i | 0;
            var$7 = jl_Character_toUpperCase($testString.$charAt(var$7));
            if (var$6 != jl_Character_toLowerCase(var$7))
                break;
            $i = $i + 1 | 0;
        }
        return (-1);
    }
    return (-1);
};
function jur_AbstractCharClass$LazyCategory() {
    let a = this; jur_AbstractCharClass$LazyCharClass.call(a);
    a.$category1 = 0;
    a.$mayContainSupplCodepoints1 = 0;
    a.$containsAllSurrogates0 = 0;
}
let jur_AbstractCharClass$LazyCategory__init_0 = ($this, $cat, $mayContainSupplCodepoints) => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
    $this.$mayContainSupplCodepoints1 = $mayContainSupplCodepoints;
    $this.$category1 = $cat;
},
jur_AbstractCharClass$LazyCategory__init_ = (var_0, var_1) => {
    let var_2 = new jur_AbstractCharClass$LazyCategory();
    jur_AbstractCharClass$LazyCategory__init_0(var_2, var_0, var_1);
    return var_2;
},
jur_AbstractCharClass$LazyCategory__init_1 = ($this, $cat, $mayContainSupplCodepoints, $containsAllSurrogates) => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
    $this.$containsAllSurrogates0 = $containsAllSurrogates;
    $this.$mayContainSupplCodepoints1 = $mayContainSupplCodepoints;
    $this.$category1 = $cat;
},
jur_AbstractCharClass$LazyCategory__init_2 = (var_0, var_1, var_2) => {
    let var_3 = new jur_AbstractCharClass$LazyCategory();
    jur_AbstractCharClass$LazyCategory__init_1(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_AbstractCharClass$LazyCategory_computeValue = $this => {
    let $chCl;
    $chCl = jur_UnicodeCategory__init_0($this.$category1);
    if ($this.$containsAllSurrogates0)
        $chCl.$lowHighSurrogates.$set(0, 2048);
    $chCl.$mayContainSupplCodepoints0 = $this.$mayContainSupplCodepoints1;
    return $chCl;
},
otj_JSObject = $rt_classWithoutFields(0),
otj_JSObject_cast$static = $this => {
    return $this;
},
eycdaca_AceSelection$Changed = $rt_classWithoutFields(0);
function jur_QuantifierSet() {
    jur_AbstractSet.call(this);
    this.$innerSet = null;
}
let jur_QuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_AbstractSet__init_0($this, $next);
    $this.$innerSet = $innerSet;
    $this.$setType($type);
},
jur_QuantifierSet_getInnerSet = $this => {
    return $this.$innerSet;
},
jur_QuantifierSet_first = ($this, $set) => {
    return !(!$this.$innerSet.$first($set) && !$this.$next2.$first($set)) ? 1 : 0;
},
jur_QuantifierSet_hasConsumed = ($this, $mr) => {
    return 1;
},
jur_QuantifierSet_processSecondPass = $this => {
    let $set;
    $this.$isSecondPassVisited = 1;
    if ($this.$next2 !== null && !$this.$next2.$isSecondPassVisited) {
        $set = $this.$next2.$processBackRefReplacement();
        if ($set !== null) {
            $this.$next2.$isSecondPassVisited = 1;
            $this.$next2 = $set;
        }
        $this.$next2.$processSecondPass();
    }
    if ($this.$innerSet !== null) {
        if (!$this.$innerSet.$isSecondPassVisited) {
            $set = $this.$innerSet.$processBackRefReplacement();
            if ($set !== null) {
                $this.$innerSet.$isSecondPassVisited = 1;
                $this.$innerSet = $set;
            }
            $this.$innerSet.$processSecondPass();
        } else if ($this.$innerSet instanceof jur_SingleSet && $this.$innerSet.$fSet.$isBackReferenced)
            $this.$innerSet = $this.$innerSet.$next2;
    }
},
jur_DotAllQuantifierSet = $rt_classWithoutFields(jur_QuantifierSet),
jur_DotAllQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_QuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_DotAllQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_DotAllQuantifierSet();
    jur_DotAllQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_DotAllQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength;
    $strLength = $matchResult.$getRightBound();
    if ($strLength <= $stringIndex)
        return $this.$next2.$matches($stringIndex, $testString, $matchResult);
    return $this.$next2.$findBack($stringIndex, $strLength, $testString, $matchResult);
},
jur_DotAllQuantifierSet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength;
    $strLength = $matchResult.$getRightBound();
    if ($this.$next2.$findBack($stringIndex, $strLength, $testString, $matchResult) < 0)
        return (-1);
    return $stringIndex;
},
ju_Comparator = $rt_classWithoutFields(0),
jl_String$_clinit_$lambda$_118_0 = $rt_classWithoutFields(),
jl_String$_clinit_$lambda$_118_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
jl_String$_clinit_$lambda$_118_0__init_0 = () => {
    let var_0 = new jl_String$_clinit_$lambda$_118_0();
    jl_String$_clinit_$lambda$_118_0__init_(var_0);
    return var_0;
};
function jur_FSet() {
    let a = this; jur_AbstractSet.call(a);
    a.$isBackReferenced = 0;
    a.$groupIndex0 = 0;
}
let jur_FSet_posFSet = null,
jur_FSet_$callClinit = () => {
    jur_FSet_$callClinit = $rt_eraseClinit(jur_FSet);
    jur_FSet__clinit_();
},
jur_FSet__init_ = ($this, $groupIndex) => {
    jur_FSet_$callClinit();
    jur_AbstractSet__init_($this);
    $this.$groupIndex0 = $groupIndex;
},
jur_FSet__init_0 = var_0 => {
    let var_1 = new jur_FSet();
    jur_FSet__init_(var_1, var_0);
    return var_1;
},
jur_FSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $end, $shift;
    $end = $matchResult.$getEnd($this.$groupIndex0);
    $matchResult.$setEnd($this.$groupIndex0, $stringIndex);
    $shift = $this.$next2.$matches($stringIndex, $testString, $matchResult);
    if ($shift < 0)
        $matchResult.$setEnd($this.$groupIndex0, $end);
    return $shift;
},
jur_FSet_getGroupIndex = $this => {
    return $this.$groupIndex0;
},
jur_FSet_hasConsumed = ($this, $mr) => {
    return 0;
},
jur_FSet__clinit_ = () => {
    jur_FSet_posFSet = jur_FSet$PossessiveFSet__init_0();
},
jur_BehindFSet = $rt_classWithoutFields(jur_FSet),
jur_BehindFSet__init_ = ($this, $groupIndex) => {
    jur_FSet__init_($this, $groupIndex);
},
jur_BehindFSet__init_0 = var_0 => {
    let var_1 = new jur_BehindFSet();
    jur_BehindFSet__init_(var_1, var_0);
    return var_1;
},
jur_BehindFSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $gr, $rightBound;
    $gr = $this.$getGroupIndex();
    $rightBound = $matchResult.$getConsumed($gr);
    if ($rightBound != $stringIndex)
        $stringIndex = (-1);
    return $stringIndex;
};
function cggdc_Node$1() {
    cggdc_Node.call(this);
    this.$val$node = null;
}
let cggdc_Node$1__init_ = ($this, var$1) => {
    $this.$val$node = var$1;
    cggdc_Node__init_($this);
},
cggdc_Node$1__init_0 = var_0 => {
    let var_1 = new cggdc_Node$1();
    cggdc_Node$1__init_(var_1, var_0);
    return var_1;
},
cggdc_Node$1_unwrap = $this => {
    return $this.$val$node;
},
cggdc_Node$1_unwrap0 = $this => {
    return $this.$unwrap3();
},
cggdc_ParagraphElement = $rt_classWithoutFields(cggdc_Element),
cggdc_ParagraphElement__init_ = ($this, $element) => {
    cggdc_Element__init_($this, $element);
},
cggdc_ParagraphElement__init_0 = var_0 => {
    let var_1 = new cggdc_ParagraphElement();
    cggdc_ParagraphElement__init_(var_1, var_0);
    return var_1;
};
function jur_LowHighSurrogateRangeSet() {
    let a = this; jur_JointSet.call(a);
    a.$surrChars = null;
    a.$alt0 = 0;
}
let jur_LowHighSurrogateRangeSet__init_ = ($this, $surrChars) => {
    jur_JointSet__init_($this);
    $this.$surrChars = $surrChars.$getInstance();
    $this.$alt0 = $surrChars.$alt;
},
jur_LowHighSurrogateRangeSet__init_0 = var_0 => {
    let var_1 = new jur_LowHighSurrogateRangeSet();
    jur_LowHighSurrogateRangeSet__init_(var_1, var_0);
    return var_1;
},
jur_LowHighSurrogateRangeSet_setNext = ($this, $next) => {
    $this.$next2 = $next;
},
jur_LowHighSurrogateRangeSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $startStr, $strLength, var$6, var$7, $ch, $low, $high;
    $startStr = $matchResult.$getLeftBound();
    $strLength = $matchResult.$getRightBound();
    var$6 = $stringIndex + 1 | 0;
    var$7 = $rt_compare(var$6, $strLength);
    if (var$7 <= 0) {
        $ch = $testString.$charAt($stringIndex);
        if ($this.$surrChars.$contains($ch)) {
            a: {
                if (jl_Character_isHighSurrogate($ch)) {
                    if (var$7 >= 0)
                        break a;
                    $low = $testString.$charAt(var$6);
                    if (!jl_Character_isLowSurrogate($low))
                        break a;
                    return (-1);
                }
                if (jl_Character_isLowSurrogate($ch) && $stringIndex > $startStr) {
                    $high = $testString.$charAt($stringIndex - 1 | 0);
                    if (jl_Character_isHighSurrogate($high))
                        return (-1);
                }
            }
            return $this.$next2.$matches(var$6, $testString, $matchResult);
        }
        return (-1);
    }
    $matchResult.$hitEnd = 1;
    return (-1);
},
eycdaca_AceNative$Event = $rt_classWithoutFields(0),
jur_GroupQuantifierSet = $rt_classWithoutFields(jur_QuantifierSet),
jur_GroupQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_QuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_GroupQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_GroupQuantifierSet();
    jur_GroupQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_GroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $nextIndex;
    if ($this.$innerSet.$hasConsumed($matchResult)) {
        $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
        if ($nextIndex < 0)
            return $this.$next2.$matches($stringIndex, $testString, $matchResult);
        return $nextIndex;
    }
    return $this.$next2.$matches($stringIndex, $testString, $matchResult);
},
jur_ReluctantGroupQuantifierSet = $rt_classWithoutFields(jur_GroupQuantifierSet),
jur_ReluctantGroupQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_GroupQuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_ReluctantGroupQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_ReluctantGroupQuantifierSet();
    jur_ReluctantGroupQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_ReluctantGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $res;
    if ($this.$innerSet.$hasConsumed($matchResult)) {
        $res = $this.$next2.$matches($stringIndex, $testString, $matchResult);
        if ($res < 0)
            return $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
        return $res;
    }
    return $this.$next2.$matches($stringIndex, $testString, $matchResult);
},
jl_ClassCastException = $rt_classWithoutFields(jl_RuntimeException);
function ju_AbstractMap() {
    let a = this; jl_Object.call(a);
    a.$cachedKeySet = null;
    a.$cachedValues = null;
}
let ju_AbstractMap__init_ = $this => {
    jl_Object__init_($this);
},
ju_AbstractMap_put = ($this, $key, $value) => {
    $rt_throw(jl_UnsupportedOperationException__init_0());
},
jl_Cloneable = $rt_classWithoutFields(0);
function ju_HashMap() {
    let a = this; ju_AbstractMap.call(a);
    a.$elementCount = 0;
    a.$elementData = null;
    a.$modCount = 0;
    a.$loadFactor = 0.0;
    a.$threshold = 0;
}
let ju_HashMap_newElementArray = ($this, $s) => {
    return $rt_createArray(ju_HashMap$HashEntry, $s);
},
ju_HashMap__init_1 = $this => {
    ju_HashMap__init_0($this, 16);
},
ju_HashMap__init_ = () => {
    let var_0 = new ju_HashMap();
    ju_HashMap__init_1(var_0);
    return var_0;
},
ju_HashMap__init_0 = ($this, $capacity) => {
    ju_HashMap__init_2($this, $capacity, 0.75);
},
ju_HashMap__init_3 = var_0 => {
    let var_1 = new ju_HashMap();
    ju_HashMap__init_0(var_1, var_0);
    return var_1;
},
ju_HashMap_calculateCapacity = $x => {
    let var$2, var$3;
    if ($x < 1073741824) {
        if ($x) {
            var$2 = $x - 1 | 0;
            var$3 = var$2 | var$2 >> 1;
            var$3 = var$3 | var$3 >> 2;
            var$3 = var$3 | var$3 >> 4;
            var$3 = var$3 | var$3 >> 8;
            var$3 = var$3 | var$3 >> 16;
            return var$3 + 1 | 0;
        }
        return 16;
    }
    return 1073741824;
},
ju_HashMap__init_2 = ($this, $capacity, $loadFactor) => {
    let var$3;
    ju_AbstractMap__init_($this);
    if ($capacity >= 0 && $loadFactor > 0.0) {
        var$3 = ju_HashMap_calculateCapacity($capacity);
        $this.$elementCount = 0;
        $this.$elementData = $this.$newElementArray(var$3);
        $this.$loadFactor = $loadFactor;
        ju_HashMap_computeThreshold($this);
        return;
    }
    $rt_throw(jl_IllegalArgumentException__init_());
},
ju_HashMap__init_4 = (var_0, var_1) => {
    let var_2 = new ju_HashMap();
    ju_HashMap__init_2(var_2, var_0, var_1);
    return var_2;
},
ju_HashMap_computeThreshold = $this => {
    $this.$threshold = $this.$elementData.data.length * $this.$loadFactor | 0;
},
ju_HashMap_get = ($this, $key) => {
    let $m;
    $m = ju_HashMap_entryByKey($this, $key);
    if ($m !== null)
        return $m.$value;
    return null;
},
ju_HashMap_entryByKey = ($this, $key) => {
    let $m, $hash, $index;
    if ($key === null)
        $m = ju_HashMap_findNullKeyEntry($this);
    else {
        $hash = $key.$hashCode0();
        $index = $hash & ($this.$elementData.data.length - 1 | 0);
        $m = ju_HashMap_findNonNullKeyEntry($this, $key, $index, $hash);
    }
    return $m;
},
ju_HashMap_findNonNullKeyEntry = ($this, $key, $index, $keyHash) => {
    let $m;
    $m = $this.$elementData.data[$index];
    while ($m !== null && !($m.$origKeyHash == $keyHash && ju_HashMap_areEqualKeys($key, $m.$key))) {
        $m = $m.$next3;
    }
    return $m;
},
ju_HashMap_findNullKeyEntry = $this => {
    let $m;
    $m = $this.$elementData.data[0];
    while ($m !== null && $m.$key !== null) {
        $m = $m.$next3;
    }
    return $m;
},
ju_HashMap_isEmpty = $this => {
    return $this.$elementCount ? 0 : 1;
},
ju_HashMap_keySet = $this => {
    if ($this.$cachedKeySet === null)
        $this.$cachedKeySet = ju_HashMap$1__init_0($this);
    return $this.$cachedKeySet;
},
ju_HashMap_put = ($this, $key, $value) => {
    return ju_HashMap_putImpl($this, $key, $value);
},
ju_HashMap_putImpl = ($this, $key, $value) => {
    let $entry, var$4, $hash, $index, $result;
    if ($key === null) {
        $entry = ju_HashMap_findNullKeyEntry($this);
        if ($entry === null) {
            $this.$modCount = $this.$modCount + 1 | 0;
            $entry = ju_HashMap_createHashedEntry($this, null, 0, 0);
            var$4 = $this.$elementCount + 1 | 0;
            $this.$elementCount = var$4;
            if (var$4 > $this.$threshold)
                $this.$rehash();
        }
    } else {
        $hash = $key.$hashCode0();
        $index = $hash & ($this.$elementData.data.length - 1 | 0);
        $entry = ju_HashMap_findNonNullKeyEntry($this, $key, $index, $hash);
        if ($entry === null) {
            $this.$modCount = $this.$modCount + 1 | 0;
            $entry = ju_HashMap_createHashedEntry($this, $key, $index, $hash);
            var$4 = $this.$elementCount + 1 | 0;
            $this.$elementCount = var$4;
            if (var$4 > $this.$threshold)
                $this.$rehash();
        }
    }
    $result = $entry.$value;
    $entry.$value = $value;
    return $result;
},
ju_HashMap_createHashedEntry = ($this, $key, $index, $hash) => {
    let $entry;
    $entry = ju_HashMap$HashEntry__init_0($key, $hash);
    $entry.$next3 = $this.$elementData.data[$index];
    $this.$elementData.data[$index] = $entry;
    return $entry;
},
ju_HashMap_rehash0 = ($this, $capacity) => {
    let $length, $newData, $i, $entry, var$6, $index, $next;
    $length = ju_HashMap_calculateCapacity(!$capacity ? 1 : $capacity << 1);
    $newData = $this.$newElementArray($length);
    $i = 0;
    while ($i < $this.$elementData.data.length) {
        $entry = $this.$elementData.data[$i];
        $this.$elementData.data[$i] = null;
        while ($entry !== null) {
            var$6 = $newData.data;
            $index = $entry.$origKeyHash & ($length - 1 | 0);
            $next = $entry.$next3;
            $entry.$next3 = var$6[$index];
            var$6[$index] = $entry;
            $entry = $next;
        }
        $i = $i + 1 | 0;
    }
    $this.$elementData = $newData;
    ju_HashMap_computeThreshold($this);
},
ju_HashMap_rehash = $this => {
    $this.$rehash0($this.$elementData.data.length);
},
ju_HashMap_remove = ($this, $key) => {
    let $entry;
    $entry = ju_HashMap_removeByKey($this, $key);
    if ($entry !== null)
        return $entry.$value;
    return null;
},
ju_HashMap_removeEntry = ($this, $entry) => {
    let $index, $m;
    $index = $entry.$origKeyHash & ($this.$elementData.data.length - 1 | 0);
    $m = $this.$elementData.data[$index];
    if ($m === $entry)
        $this.$elementData.data[$index] = $entry.$next3;
    else {
        while ($m.$next3 !== $entry) {
            $m = $m.$next3;
        }
        $m.$next3 = $entry.$next3;
    }
    $this.$modCount = $this.$modCount + 1 | 0;
    $this.$elementCount = $this.$elementCount - 1 | 0;
},
ju_HashMap_removeByKey = ($this, $key) => {
    let $index, $last, $entry, $entry_0, $hash;
    a: {
        $index = 0;
        $last = null;
        if ($key === null) {
            $entry = $this.$elementData.data[0];
            b: {
                while ($entry !== null) {
                    if ($entry.$key === null)
                        break b;
                    $entry_0 = $entry.$next3;
                    $last = $entry;
                    $entry = $entry_0;
                }
                break a;
            }
        } else {
            $hash = $key.$hashCode0();
            $index = $hash & ($this.$elementData.data.length - 1 | 0);
            $entry = $this.$elementData.data[$index];
            while ($entry !== null && !($entry.$origKeyHash == $hash && ju_HashMap_areEqualKeys($key, $entry.$key))) {
                $entry_0 = $entry.$next3;
                $last = $entry;
                $entry = $entry_0;
            }
        }
    }
    if ($entry !== null) {
        if ($last !== null)
            $last.$next3 = $entry.$next3;
        else
            $this.$elementData.data[$index] = $entry.$next3;
        $this.$modCount = $this.$modCount + 1 | 0;
        $this.$elementCount = $this.$elementCount - 1 | 0;
        return $entry;
    }
    return null;
},
ju_HashMap_size = $this => {
    return $this.$elementCount;
},
ju_HashMap_values = $this => {
    if ($this.$cachedValues === null)
        $this.$cachedValues = ju_HashMap$2__init_0($this);
    return $this.$cachedValues;
},
ju_HashMap_areEqualKeys = ($key1, $key2) => {
    return !($key1 !== $key2 && !$key1.$equals($key2)) ? 1 : 0;
};
function ju_LinkedHashMap() {
    let a = this; ju_HashMap.call(a);
    a.$accessOrder = 0;
    a.$head = null;
    a.$tail = null;
}
let ju_LinkedHashMap__init_ = $this => {
    ju_HashMap__init_1($this);
    $this.$accessOrder = 0;
    $this.$head = null;
},
ju_LinkedHashMap__init_1 = () => {
    let var_0 = new ju_LinkedHashMap();
    ju_LinkedHashMap__init_(var_0);
    return var_0;
},
ju_LinkedHashMap__init_0 = ($this, $s) => {
    ju_HashMap__init_0($this, $s);
    $this.$accessOrder = 0;
    $this.$head = null;
},
ju_LinkedHashMap__init_2 = var_0 => {
    let var_1 = new ju_LinkedHashMap();
    ju_LinkedHashMap__init_0(var_1, var_0);
    return var_1;
},
ju_LinkedHashMap_newElementArray = ($this, $s) => {
    return $rt_createArray(ju_LinkedHashMap$LinkedHashMapEntry, $s);
},
ju_LinkedHashMap_createHashedEntry = ($this, $key, $index, $hash, $first) => {
    let $entry;
    $entry = ju_LinkedHashMap$LinkedHashMapEntry__init_0($key, $hash);
    $entry.$next3 = $this.$elementData.data[$index];
    $this.$elementData.data[$index] = $entry;
    if (!$first) {
        if ($this.$tail === null)
            $this.$head = $entry;
        else
            $this.$tail.$chainForward = $entry;
        $entry.$chainBackward = $this.$tail;
        $this.$tail = $entry;
    } else {
        if ($this.$head === null)
            $this.$tail = $entry;
        else
            $this.$head.$chainBackward = $entry;
        $entry.$chainForward = $this.$head;
        $this.$head = $entry;
    }
    return $entry;
},
ju_LinkedHashMap_put = ($this, $key, $value) => {
    let $oldSize, $existing;
    $oldSize = $this.$size();
    $existing = $this.$putImpl0($key, $value, 0, $this.$accessOrder);
    if ($this.$size() != $oldSize && $this.$removeEldestEntry($this.$head))
        $this.$removeLinkedEntry($this.$head);
    return $existing;
},
ju_LinkedHashMap_putImpl = ($this, $key, $value, $first, $forceMotion) => {
    let $hash, var$6, $index, $entry, var$9, $existing;
    if (!$this.$elementCount) {
        $this.$head = null;
        $this.$tail = null;
    }
    $hash = ju_Objects_hashCode($key);
    var$6 = $hash & 2147483647;
    $index = var$6 % $this.$elementData.data.length | 0;
    $entry = $key === null ? ju_HashMap_findNullKeyEntry($this) : ju_HashMap_findNonNullKeyEntry($this, $key, $index, $hash);
    if ($entry === null) {
        $this.$modCount = $this.$modCount + 1 | 0;
        var$9 = $this.$elementCount + 1 | 0;
        $this.$elementCount = var$9;
        if (var$9 > $this.$threshold) {
            $this.$rehash();
            $index = var$6 % $this.$elementData.data.length | 0;
        }
        $entry = ju_LinkedHashMap_createHashedEntry($this, $key, $index, $hash, $first);
    } else if ($forceMotion)
        ju_LinkedHashMap_linkEntry($this, $entry, $first);
    $existing = $entry.$value;
    $entry.$value = $value;
    return $existing;
},
ju_LinkedHashMap_linkEntry = ($this, $entry, $first) => {
    let $n, $p;
    a: {
        if (!$first) {
            $n = $entry.$chainForward;
            if ($n !== null) {
                $p = $entry.$chainBackward;
                if ($p === null)
                    $this.$head = $n;
                else
                    $p.$chainForward = $n;
                $n.$chainBackward = $p;
                if ($this.$tail !== null)
                    $this.$tail.$chainForward = $entry;
                $entry.$chainBackward = $this.$tail;
                $entry.$chainForward = null;
                $this.$tail = $entry;
                break a;
            }
            return;
        }
        $p = $entry.$chainBackward;
        if ($p !== null) {
            $n = $entry.$chainForward;
            if ($n === null)
                $this.$tail = $p;
            else
                $n.$chainBackward = $p;
            $p.$chainForward = $n;
            if ($this.$head !== null)
                $this.$head.$chainBackward = $entry;
            $entry.$chainForward = $this.$head;
            $entry.$chainBackward = null;
            $this.$head = $entry;
        } else
            return;
    }
},
ju_LinkedHashMap_keySet = $this => {
    return $this.$sequencedKeySet();
},
ju_LinkedHashMap_sequencedKeySet = $this => {
    if ($this.$cachedKeySet === null)
        $this.$cachedKeySet = ju_LinkedHashMapKeySet__init_0($this, 0);
    return $this.$cachedKeySet;
},
ju_LinkedHashMap_remove = ($this, $key) => {
    let $m;
    $m = ju_HashMap_removeByKey($this, $key);
    if ($m !== null) {
        ju_LinkedHashMap_unlinkEntry($this, $m);
        return $m.$value;
    }
    return null;
},
ju_LinkedHashMap_removeLinkedEntry = ($this, $entry) => {
    ju_HashMap_removeEntry($this, $entry);
    ju_LinkedHashMap_unlinkEntry($this, $entry);
},
ju_LinkedHashMap_unlinkEntry = ($this, $entry) => {
    let $p, $n;
    $p = $entry.$chainBackward;
    $n = $entry.$chainForward;
    if ($p !== null) {
        $p.$chainForward = $n;
        if ($n === null)
            $this.$tail = $p;
        else
            $n.$chainBackward = $p;
    } else {
        $this.$head = $n;
        if ($n === null)
            $this.$tail = null;
        else
            $n.$chainBackward = null;
    }
},
ju_LinkedHashMap_removeEldestEntry = ($this, $eldest) => {
    return 0;
},
jur_PosPlusGroupQuantifierSet = $rt_classWithoutFields(jur_GroupQuantifierSet),
jur_PosPlusGroupQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_GroupQuantifierSet__init_($this, $innerSet, $next, $type);
    jur_FSet_$callClinit();
    $innerSet.$setNext(jur_FSet_posFSet);
},
jur_PosPlusGroupQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_PosPlusGroupQuantifierSet();
    jur_PosPlusGroupQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_PosPlusGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $nextIndex, var$5;
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex >= 0) {
        if ($nextIndex > $stringIndex) {
            while (true) {
                var$5 = $this.$innerSet.$matches($nextIndex, $testString, $matchResult);
                if (var$5 <= $nextIndex)
                    break;
                $nextIndex = var$5;
            }
            $stringIndex = $nextIndex;
        }
        return $this.$next2.$matches($stringIndex, $testString, $matchResult);
    }
    return (-1);
};
function jl_AbstractStringBuilder() {
    let a = this; jl_Object.call(a);
    a.$buffer = null;
    a.$length1 = 0;
}
let jl_AbstractStringBuilder__init_0 = $this => {
    jl_AbstractStringBuilder__init_($this, 16);
},
jl_AbstractStringBuilder__init_6 = () => {
    let var_0 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_0(var_0);
    return var_0;
},
jl_AbstractStringBuilder__init_ = ($this, $capacity) => {
    jl_Object__init_($this);
    $this.$buffer = $rt_createCharArray($capacity);
},
jl_AbstractStringBuilder__init_3 = var_0 => {
    let var_1 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_(var_1, var_0);
    return var_1;
},
jl_AbstractStringBuilder__init_2 = ($this, $value) => {
    jl_AbstractStringBuilder__init_1($this, $value);
},
jl_AbstractStringBuilder__init_5 = var_0 => {
    let var_1 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_2(var_1, var_0);
    return var_1;
},
jl_AbstractStringBuilder__init_1 = ($this, $value) => {
    let $i;
    jl_Object__init_($this);
    $this.$buffer = $rt_createCharArray($value.$length());
    $i = 0;
    while ($i < $this.$buffer.data.length) {
        $this.$buffer.data[$i] = $value.$charAt($i);
        $i = $i + 1 | 0;
    }
    $this.$length1 = $value.$length();
},
jl_AbstractStringBuilder__init_4 = var_0 => {
    let var_1 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_1(var_1, var_0);
    return var_1;
},
jl_AbstractStringBuilder_append4 = ($this, $obj) => {
    return $this.$insert($this.$length1, $obj);
},
jl_AbstractStringBuilder_append2 = ($this, $string) => {
    return $this.$insert0($this.$length1, $string);
},
jl_AbstractStringBuilder_insert1 = ($this, $index, $string) => {
    let $i, var$4, var$5;
    if ($index >= 0 && $index <= $this.$length1) {
        if ($string === null)
            $string = $rt_s(54);
        else if (jl_String_isEmpty($string))
            return $this;
        $this.$ensureCapacity($this.$length1 + jl_String_length($string) | 0);
        $i = $this.$length1 - 1 | 0;
        while ($i >= $index) {
            $this.$buffer.data[$i + jl_String_length($string) | 0] = $this.$buffer.data[$i];
            $i = $i + (-1) | 0;
        }
        $this.$length1 = $this.$length1 + jl_String_length($string) | 0;
        $i = 0;
        while ($i < jl_String_length($string)) {
            var$4 = $this.$buffer.data;
            var$5 = $index + 1 | 0;
            var$4[$index] = jl_String_charAt($string, $i);
            $i = $i + 1 | 0;
            $index = var$5;
        }
        return $this;
    }
    $rt_throw(jl_StringIndexOutOfBoundsException__init_());
},
jl_AbstractStringBuilder_append3 = ($this, $value) => {
    return $this.$append1($value, 10);
},
jl_AbstractStringBuilder_append5 = ($this, $value, $radix) => {
    return $this.$insert1($this.$length1, $value, $radix);
},
jl_AbstractStringBuilder_insert3 = ($this, $target, $value, $radix) => {
    let $positive, var$5, var$6, $pos, $sz, $posLimit, var$10, var$11;
    $positive = 1;
    if ($value < 0) {
        $positive = 0;
        $value =  -$value | 0;
    }
    a: {
        if ($rt_ucmp($value, $radix) < 0) {
            if ($positive)
                jl_AbstractStringBuilder_insertSpace($this, $target, $target + 1 | 0);
            else {
                jl_AbstractStringBuilder_insertSpace($this, $target, $target + 2 | 0);
                var$5 = $this.$buffer.data;
                var$6 = $target + 1 | 0;
                var$5[$target] = 45;
                $target = var$6;
            }
            $this.$buffer.data[$target] = jl_Character_forDigit($value, $radix);
        } else {
            $pos = 1;
            $sz = 1;
            $posLimit = $rt_udiv((-1), $radix);
            b: {
                c: {
                    while (true) {
                        var$10 = $rt_imul($pos, $radix);
                        if ($rt_ucmp(var$10, $value) > 0)
                            break c;
                        $sz = $sz + 1 | 0;
                        if ($rt_ucmp(var$10, $posLimit) > 0)
                            break;
                        $pos = var$10;
                    }
                    break b;
                }
                var$10 = $pos;
            }
            if (!$positive)
                $sz = $sz + 1 | 0;
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + $sz | 0);
            if ($positive)
                var$11 = $target;
            else {
                var$5 = $this.$buffer.data;
                var$11 = $target + 1 | 0;
                var$5[$target] = 45;
            }
            while (true) {
                if (!var$10)
                    break a;
                var$5 = $this.$buffer.data;
                var$6 = var$11 + 1 | 0;
                var$5[var$11] = jl_Character_forDigit($rt_udiv($value, var$10), $radix);
                $value = $rt_umod($value, var$10);
                var$10 = $rt_udiv(var$10, $radix);
                var$11 = var$6;
            }
        }
    }
    return $this;
},
jl_AbstractStringBuilder_append1 = ($this, $c) => {
    return $this.$insert2($this.$length1, $c);
},
jl_AbstractStringBuilder_insert0 = ($this, $index, $c) => {
    jl_AbstractStringBuilder_insertSpace($this, $index, $index + 1 | 0);
    $this.$buffer.data[$index] = $c;
    return $this;
},
jl_AbstractStringBuilder_insert2 = ($this, $index, $obj) => {
    return $this.$insert0($index, $obj === null ? $rt_s(54) : $obj.$toString());
},
jl_AbstractStringBuilder_ensureCapacity = ($this, $capacity) => {
    let $newLength;
    if ($this.$buffer.data.length < $capacity) {
        $newLength = $this.$buffer.data.length >= 1073741823 ? 2147483647 : jl_Math_max($capacity, jl_Math_max($this.$buffer.data.length * 2 | 0, 5));
        $this.$buffer = ju_Arrays_copyOf1($this.$buffer, $newLength);
        return;
    }
},
jl_AbstractStringBuilder_toString = $this => {
    return jl_String__init_2($this.$buffer, 0, $this.$length1);
},
jl_AbstractStringBuilder_length = $this => {
    return $this.$length1;
},
jl_AbstractStringBuilder_charAt = ($this, $index) => {
    if ($index >= 0 && $index < $this.$length1)
        return $this.$buffer.data[$index];
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
jl_AbstractStringBuilder_append0 = ($this, $chars, $offset, $len) => {
    return $this.$insert3($this.$length1, $chars, $offset, $len);
},
jl_AbstractStringBuilder_insert = ($this, $index, $chars, $offset, $len) => {
    let var$5, var$6, var$7, var$8, var$9;
    jl_AbstractStringBuilder_insertSpace($this, $index, $index + $len | 0);
    var$5 = $len + $offset | 0;
    while ($offset < var$5) {
        var$6 = $chars.data;
        var$7 = $this.$buffer.data;
        var$8 = $index + 1 | 0;
        var$9 = $offset + 1 | 0;
        var$7[$index] = var$6[$offset];
        $index = var$8;
        $offset = var$9;
    }
    return $this;
},
jl_AbstractStringBuilder_append = ($this, $chars) => {
    return $this.$append3($chars, 0, $chars.data.length);
},
jl_AbstractStringBuilder_deleteCharAt = ($this, $i) => {
    let var$2, var$3, $i_0;
    if ($i >= 0 && $i < $this.$length1) {
        $this.$length1 = $this.$length1 - 1 | 0;
        while ($i < $this.$length1) {
            var$2 = $this.$buffer.data;
            var$3 = $this.$buffer.data;
            $i_0 = $i + 1 | 0;
            var$2[$i] = var$3[$i_0];
            $i = $i_0;
        }
        return $this;
    }
    $rt_throw(jl_StringIndexOutOfBoundsException__init_());
},
jl_AbstractStringBuilder_delete = ($this, $start, $end) => {
    let var$3, $sz, $i, var$6, var$7, var$8;
    if ($start >= 0) {
        var$3 = $rt_compare($start, $end);
        if (var$3 <= 0 && $start <= $this.$length1) {
            if (var$3) {
                if ($end > $this.$length1)
                    $end = $this.$length1;
                $sz = $this.$length1 - $end | 0;
                $this.$length1 = $this.$length1 - ($end - $start | 0) | 0;
                $i = 0;
                while ($i < $sz) {
                    var$6 = $this.$buffer.data;
                    var$3 = $start + 1 | 0;
                    var$7 = $this.$buffer.data;
                    var$8 = $end + 1 | 0;
                    var$6[$start] = var$7[$end];
                    $i = $i + 1 | 0;
                    $start = var$3;
                    $end = var$8;
                }
                return $this;
            }
            return $this;
        }
    }
    $rt_throw(jl_StringIndexOutOfBoundsException__init_());
},
jl_AbstractStringBuilder_insertSpace = ($this, $start, $end) => {
    let $sz, $i;
    $sz = $this.$length1 - $start | 0;
    $this.$ensureCapacity(($this.$length1 + $end | 0) - $start | 0);
    $i = $sz - 1 | 0;
    while ($i >= 0) {
        $this.$buffer.data[$end + $i | 0] = $this.$buffer.data[$start + $i | 0];
        $i = $i + (-1) | 0;
    }
    $this.$length1 = $this.$length1 + ($end - $start | 0) | 0;
},
jl_Appendable = $rt_classWithoutFields(0),
jl_StringBuffer = $rt_classWithoutFields(jl_AbstractStringBuilder),
jl_StringBuffer__init_ = $this => {
    jl_AbstractStringBuilder__init_0($this);
},
jl_StringBuffer__init_0 = () => {
    let var_0 = new jl_StringBuffer();
    jl_StringBuffer__init_(var_0);
    return var_0;
},
jl_StringBuffer_append1 = ($this, $c) => {
    jl_AbstractStringBuilder_append1($this, $c);
    return $this;
},
jl_StringBuffer_append2 = ($this, $chars, $offset, $len) => {
    jl_AbstractStringBuilder_append0($this, $chars, $offset, $len);
    return $this;
},
jl_StringBuffer_append0 = ($this, $chars) => {
    jl_AbstractStringBuilder_append($this, $chars);
    return $this;
},
jl_StringBuffer_insert = ($this, $index, $chars, $offset, $len) => {
    jl_AbstractStringBuilder_insert($this, $index, $chars, $offset, $len);
    return $this;
},
jl_StringBuffer_insert2 = ($this, $index, $c) => {
    jl_AbstractStringBuilder_insert0($this, $index, $c);
    return $this;
},
jl_StringBuffer_insert1 = ($this, var$1, var$2, var$3, var$4) => {
    return $this.$insert4(var$1, var$2, var$3, var$4);
},
jl_StringBuffer_append = ($this, var$1, var$2, var$3) => {
    return $this.$append6(var$1, var$2, var$3);
},
jl_StringBuffer_charAt = ($this, var$1) => {
    return jl_AbstractStringBuilder_charAt($this, var$1);
},
jl_StringBuffer_length = $this => {
    return jl_AbstractStringBuilder_length($this);
},
jl_StringBuffer_toString = $this => {
    return jl_AbstractStringBuilder_toString($this);
},
jl_StringBuffer_ensureCapacity = ($this, var$1) => {
    jl_AbstractStringBuilder_ensureCapacity($this, var$1);
},
jl_StringBuffer_insert0 = ($this, var$1, var$2) => {
    return $this.$insert5(var$1, var$2);
},
jur_SpecialToken = $rt_classWithoutFields(),
jur_SpecialToken__init_ = $this => {
    jl_Object__init_($this);
};
function jur_AbstractCharClass() {
    let a = this; jur_SpecialToken.call(a);
    a.$alt = 0;
    a.$altSurrogates = 0;
    a.$lowHighSurrogates = null;
    a.$charClassWithoutSurrogates = null;
    a.$charClassWithSurrogates = null;
    a.$mayContainSupplCodepoints0 = 0;
}
let jur_AbstractCharClass_charClasses = null,
jur_AbstractCharClass_$callClinit = () => {
    jur_AbstractCharClass_$callClinit = $rt_eraseClinit(jur_AbstractCharClass);
    jur_AbstractCharClass__clinit_();
},
jur_AbstractCharClass__init_ = $this => {
    jur_AbstractCharClass_$callClinit();
    jur_SpecialToken__init_($this);
    $this.$lowHighSurrogates = ju_BitSet__init_2(2048);
},
jur_AbstractCharClass_getBits = $this => {
    return null;
},
jur_AbstractCharClass_getLowHighSurrogates = $this => {
    return $this.$lowHighSurrogates;
},
jur_AbstractCharClass_hasLowHighSurrogates = $this => {
    return !$this.$altSurrogates ? ($this.$lowHighSurrogates.$nextSetBit(0) >= 2048 ? 0 : 1) : $this.$lowHighSurrogates.$nextClearBit(0) >= 2048 ? 0 : 1;
},
jur_AbstractCharClass_mayContainSupplCodepoints = $this => {
    return $this.$mayContainSupplCodepoints0;
},
jur_AbstractCharClass_getInstance = $this => {
    return $this;
},
jur_AbstractCharClass_getSurrogates = $this => {
    let $lHS;
    if ($this.$charClassWithSurrogates === null) {
        $lHS = $this.$getLowHighSurrogates();
        $this.$charClassWithSurrogates = jur_AbstractCharClass$1__init_0($this, $lHS);
        $this.$charClassWithSurrogates.$setNegative($this.$altSurrogates);
    }
    return $this.$charClassWithSurrogates;
},
jur_AbstractCharClass_getWithoutSurrogates = $this => {
    let $lHS;
    if ($this.$charClassWithoutSurrogates === null) {
        $lHS = $this.$getLowHighSurrogates();
        $this.$charClassWithoutSurrogates = jur_AbstractCharClass$2__init_0($this, $lHS, $this);
        $this.$charClassWithoutSurrogates.$setNegative($this.$isNegative());
        $this.$charClassWithoutSurrogates.$mayContainSupplCodepoints0 = $this.$mayContainSupplCodepoints0;
    }
    return $this.$charClassWithoutSurrogates;
},
jur_AbstractCharClass_hasUCI = $this => {
    return 0;
},
jur_AbstractCharClass_setNegative = ($this, $value) => {
    if ($this.$alt ^ $value) {
        $this.$alt = $this.$alt ? 0 : 1;
        $this.$altSurrogates = $this.$altSurrogates ? 0 : 1;
    }
    if (!$this.$mayContainSupplCodepoints0)
        $this.$mayContainSupplCodepoints0 = 1;
    return $this;
},
jur_AbstractCharClass_isNegative = $this => {
    return $this.$alt;
},
jur_AbstractCharClass_intersects0 = ($cc, $ch) => {
    jur_AbstractCharClass_$callClinit();
    return $cc.$contains($ch);
},
jur_AbstractCharClass_intersects = ($cc1, $cc2) => {
    jur_AbstractCharClass_$callClinit();
    if ($cc1.$getBits() !== null && $cc2.$getBits() !== null)
        return ($cc1.$getBits()).$intersects($cc2.$getBits());
    return 1;
},
jur_AbstractCharClass_getPredefinedClass = ($name, $negative) => {
    jur_AbstractCharClass_$callClinit();
    return (jur_AbstractCharClass$PredefinedCharacterClasses_getObject(jur_AbstractCharClass_charClasses, $name)).$getValue0($negative);
},
jur_AbstractCharClass__clinit_ = () => {
    jur_AbstractCharClass_charClasses = jur_AbstractCharClass$PredefinedCharacterClasses__init_0();
};
function jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1() {
    jur_AbstractCharClass.call(this);
    this.$this$012 = null;
}
let jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1__init_ = ($this, $this$0) => {
    $this.$this$012 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1();
    jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1_contains = ($this, $ch) => {
    return jl_Character_isUnicodeIdentifierPart($ch);
},
jur_AbstractCharClass$PredefinedCharacterClasses = $rt_classWithoutFields(),
jur_AbstractCharClass$PredefinedCharacterClasses_space = null,
jur_AbstractCharClass$PredefinedCharacterClasses_digit = null,
jur_AbstractCharClass$PredefinedCharacterClasses_contents = null,
jur_AbstractCharClass$PredefinedCharacterClasses_$callClinit = () => {
    jur_AbstractCharClass$PredefinedCharacterClasses_$callClinit = $rt_eraseClinit(jur_AbstractCharClass$PredefinedCharacterClasses);
    jur_AbstractCharClass$PredefinedCharacterClasses__clinit_();
},
jur_AbstractCharClass$PredefinedCharacterClasses__init_ = $this => {
    jur_AbstractCharClass$PredefinedCharacterClasses_$callClinit();
    jl_Object__init_($this);
},
jur_AbstractCharClass$PredefinedCharacterClasses__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$PredefinedCharacterClasses();
    jur_AbstractCharClass$PredefinedCharacterClasses__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$PredefinedCharacterClasses_getObject = ($this, $name) => {
    let $i, $row, var$4;
    $i = 0;
    while (true) {
        jur_AbstractCharClass$PredefinedCharacterClasses_$callClinit();
        if ($i >= jur_AbstractCharClass$PredefinedCharacterClasses_contents.data.length)
            $rt_throw(ju_MissingResourceException__init_0($rt_s(8), $rt_s(8), $name));
        $row = jur_AbstractCharClass$PredefinedCharacterClasses_contents.data[$i];
        var$4 = $row.data;
        if (jl_String_equals($name, var$4[0]))
            break;
        $i = $i + 1 | 0;
    }
    return var$4[1];
},
jur_AbstractCharClass$PredefinedCharacterClasses__clinit_ = () => {
    let var$1, var$2, var$3, var$4;
    jur_AbstractCharClass$PredefinedCharacterClasses_space = jur_AbstractCharClass$LazySpace__init_0();
    jur_AbstractCharClass$PredefinedCharacterClasses_digit = jur_AbstractCharClass$LazyDigit__init_0();
    var$1 = $rt_createArray($rt_arraycls(jl_Object), 194);
    var$2 = var$1.data;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(55);
    var$4[1] = jur_AbstractCharClass$LazyLower__init_0();
    var$2[0] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(56);
    var$4[1] = jur_AbstractCharClass$LazyUpper__init_0();
    var$2[1] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(57);
    var$4[1] = jur_AbstractCharClass$LazyASCII__init_0();
    var$2[2] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(58);
    var$4[1] = jur_AbstractCharClass$LazyAlpha__init_0();
    var$2[3] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(59);
    var$4[1] = jur_AbstractCharClass$PredefinedCharacterClasses_digit;
    var$2[4] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(60);
    var$4[1] = jur_AbstractCharClass$LazyAlnum__init_0();
    var$2[5] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(61);
    var$4[1] = jur_AbstractCharClass$LazyPunct__init_0();
    var$2[6] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(62);
    var$4[1] = jur_AbstractCharClass$LazyGraph__init_0();
    var$2[7] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(63);
    var$4[1] = jur_AbstractCharClass$LazyPrint__init_0();
    var$2[8] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(64);
    var$4[1] = jur_AbstractCharClass$LazyBlank__init_0();
    var$2[9] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(65);
    var$4[1] = jur_AbstractCharClass$LazyCntrl__init_0();
    var$2[10] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(66);
    var$4[1] = jur_AbstractCharClass$LazyXDigit__init_0();
    var$2[11] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(67);
    var$4[1] = jur_AbstractCharClass$LazyJavaLowerCase__init_0();
    var$2[12] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(68);
    var$4[1] = jur_AbstractCharClass$LazyJavaUpperCase__init_0();
    var$2[13] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(69);
    var$4[1] = jur_AbstractCharClass$LazyJavaWhitespace__init_0();
    var$2[14] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(70);
    var$4[1] = jur_AbstractCharClass$LazyJavaMirrored__init_0();
    var$2[15] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(71);
    var$4[1] = jur_AbstractCharClass$LazyJavaDefined__init_0();
    var$2[16] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(72);
    var$4[1] = jur_AbstractCharClass$LazyJavaDigit__init_0();
    var$2[17] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(73);
    var$4[1] = jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_0();
    var$2[18] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(74);
    var$4[1] = jur_AbstractCharClass$LazyJavaISOControl__init_0();
    var$2[19] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(75);
    var$4[1] = jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_0();
    var$2[20] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(76);
    var$4[1] = jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_0();
    var$2[21] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(77);
    var$4[1] = jur_AbstractCharClass$LazyJavaLetter__init_0();
    var$2[22] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(78);
    var$4[1] = jur_AbstractCharClass$LazyJavaLetterOrDigit__init_0();
    var$2[23] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(79);
    var$4[1] = jur_AbstractCharClass$LazyJavaSpaceChar__init_0();
    var$2[24] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(80);
    var$4[1] = jur_AbstractCharClass$LazyJavaTitleCase__init_0();
    var$2[25] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(81);
    var$4[1] = jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_0();
    var$2[26] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(82);
    var$4[1] = jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_0();
    var$2[27] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(83);
    var$4[1] = jur_AbstractCharClass$PredefinedCharacterClasses_space;
    var$2[28] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(84);
    var$4[1] = jur_AbstractCharClass$LazyWord__init_0();
    var$2[29] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(85);
    var$4[1] = jur_AbstractCharClass$LazyNonWord__init_0();
    var$2[30] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(86);
    var$4[1] = jur_AbstractCharClass$PredefinedCharacterClasses_space;
    var$2[31] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(87);
    var$4[1] = jur_AbstractCharClass$LazyNonSpace__init_0();
    var$2[32] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(88);
    var$4[1] = jur_AbstractCharClass$PredefinedCharacterClasses_digit;
    var$2[33] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(89);
    var$4[1] = jur_AbstractCharClass$LazyNonDigit__init_0();
    var$2[34] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(90);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(0, 127);
    var$2[35] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(91);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(128, 255);
    var$2[36] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(92);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(256, 383);
    var$2[37] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(93);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(384, 591);
    var$2[38] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(94);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(592, 687);
    var$2[39] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(95);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(688, 767);
    var$2[40] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(96);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(768, 879);
    var$2[41] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(97);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(880, 1023);
    var$2[42] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(98);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1024, 1279);
    var$2[43] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(99);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1280, 1327);
    var$2[44] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(100);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1328, 1423);
    var$2[45] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(101);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1424, 1535);
    var$2[46] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(102);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1536, 1791);
    var$2[47] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(103);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1792, 1871);
    var$2[48] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(104);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1872, 1919);
    var$2[49] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(105);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1920, 1983);
    var$2[50] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(106);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2304, 2431);
    var$2[51] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(107);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2432, 2559);
    var$2[52] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(108);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2560, 2687);
    var$2[53] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(109);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2688, 2815);
    var$2[54] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(110);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2816, 2943);
    var$2[55] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(111);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2944, 3071);
    var$2[56] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(112);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3072, 3199);
    var$2[57] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(113);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3200, 3327);
    var$2[58] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(114);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3328, 3455);
    var$2[59] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(115);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3456, 3583);
    var$2[60] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(116);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3584, 3711);
    var$2[61] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(117);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3712, 3839);
    var$2[62] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(118);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3840, 4095);
    var$2[63] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(119);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(4096, 4255);
    var$2[64] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(120);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(4256, 4351);
    var$2[65] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(121);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(4352, 4607);
    var$2[66] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(122);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(4608, 4991);
    var$2[67] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(123);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(4992, 5023);
    var$2[68] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(124);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5024, 5119);
    var$2[69] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(125);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5120, 5759);
    var$2[70] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(126);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5760, 5791);
    var$2[71] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(127);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5792, 5887);
    var$2[72] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(128);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5888, 5919);
    var$2[73] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(129);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5920, 5951);
    var$2[74] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(130);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5952, 5983);
    var$2[75] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(131);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5984, 6015);
    var$2[76] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(132);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6016, 6143);
    var$2[77] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(133);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6144, 6319);
    var$2[78] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(134);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6400, 6479);
    var$2[79] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(135);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6480, 6527);
    var$2[80] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(136);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6528, 6623);
    var$2[81] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(137);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6624, 6655);
    var$2[82] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(138);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6656, 6687);
    var$2[83] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(139);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(7424, 7551);
    var$2[84] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(140);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(7552, 7615);
    var$2[85] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(141);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(7616, 7679);
    var$2[86] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(142);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(7680, 7935);
    var$2[87] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(143);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(7936, 8191);
    var$2[88] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(144);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8192, 8303);
    var$2[89] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(145);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8304, 8351);
    var$2[90] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(146);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8352, 8399);
    var$2[91] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(147);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8400, 8447);
    var$2[92] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(148);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8448, 8527);
    var$2[93] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(149);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8528, 8591);
    var$2[94] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(150);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8592, 8703);
    var$2[95] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(151);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8704, 8959);
    var$2[96] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(152);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8960, 9215);
    var$2[97] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(153);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9216, 9279);
    var$2[98] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(154);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9280, 9311);
    var$2[99] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(155);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9312, 9471);
    var$2[100] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(156);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9472, 9599);
    var$2[101] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(157);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9600, 9631);
    var$2[102] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(158);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9632, 9727);
    var$2[103] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(159);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9728, 9983);
    var$2[104] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(160);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9984, 10175);
    var$2[105] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(161);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10176, 10223);
    var$2[106] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(162);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10224, 10239);
    var$2[107] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(163);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10240, 10495);
    var$2[108] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(164);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10496, 10623);
    var$2[109] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(165);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10624, 10751);
    var$2[110] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(166);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10752, 11007);
    var$2[111] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(167);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11008, 11263);
    var$2[112] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(168);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11264, 11359);
    var$2[113] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(169);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11392, 11519);
    var$2[114] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(170);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11520, 11567);
    var$2[115] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(171);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11568, 11647);
    var$2[116] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(172);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11648, 11743);
    var$2[117] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(173);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11776, 11903);
    var$2[118] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(174);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11904, 12031);
    var$2[119] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(175);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12032, 12255);
    var$2[120] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(176);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12272, 12287);
    var$2[121] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(177);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12288, 12351);
    var$2[122] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(178);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12352, 12447);
    var$2[123] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(179);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12448, 12543);
    var$2[124] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(180);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12544, 12591);
    var$2[125] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(181);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12592, 12687);
    var$2[126] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(182);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12688, 12703);
    var$2[127] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(183);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12704, 12735);
    var$2[128] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(184);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12736, 12783);
    var$2[129] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(185);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12784, 12799);
    var$2[130] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(186);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12800, 13055);
    var$2[131] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(187);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(13056, 13311);
    var$2[132] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(188);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(13312, 19893);
    var$2[133] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(189);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(19904, 19967);
    var$2[134] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(190);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(19968, 40959);
    var$2[135] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(191);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(40960, 42127);
    var$2[136] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(192);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(42128, 42191);
    var$2[137] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(193);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(42752, 42783);
    var$2[138] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(194);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(43008, 43055);
    var$2[139] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(195);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(44032, 55203);
    var$2[140] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(196);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(55296, 56191);
    var$2[141] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(197);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(56192, 56319);
    var$2[142] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(198);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(56320, 57343);
    var$2[143] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(199);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(57344, 63743);
    var$2[144] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(200);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(63744, 64255);
    var$2[145] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(201);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(64256, 64335);
    var$2[146] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(202);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(64336, 65023);
    var$2[147] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(203);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65024, 65039);
    var$2[148] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(204);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65040, 65055);
    var$2[149] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(205);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65056, 65071);
    var$2[150] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(206);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65072, 65103);
    var$2[151] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(207);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65104, 65135);
    var$2[152] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(208);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65136, 65279);
    var$2[153] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(209);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65280, 65519);
    var$2[154] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(210);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(0, 1114111);
    var$2[155] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(211);
    var$4[1] = jur_AbstractCharClass$LazySpecialsBlock__init_0();
    var$2[156] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(212);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(0, 1);
    var$2[157] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(213);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(62, 1);
    var$2[158] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(214);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(1, 1);
    var$2[159] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(215);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(2, 1);
    var$2[160] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(216);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(3, 0);
    var$2[161] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(217);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(4, 0);
    var$2[162] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(218);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(5, 1);
    var$2[163] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(219);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(448, 1);
    var$2[164] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(220);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(6, 1);
    var$2[165] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(221);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(7, 0);
    var$2[166] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(222);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(8, 1);
    var$2[167] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(223);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(3584, 1);
    var$2[168] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(224);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(9, 1);
    var$2[169] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(225);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(10, 1);
    var$2[170] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(226);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(11, 1);
    var$2[171] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(227);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(28672, 0);
    var$2[172] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(228);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(12, 0);
    var$2[173] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(229);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(13, 0);
    var$2[174] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(230);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(14, 0);
    var$2[175] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(231);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_2(983040, 1, 1);
    var$2[176] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(232);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(15, 0);
    var$2[177] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(233);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(16, 1);
    var$2[178] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(234);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(18, 1);
    var$2[179] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(235);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_2(19, 0, 1);
    var$2[180] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(236);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(1643118592, 1);
    var$2[181] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(237);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(20, 0);
    var$2[182] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(238);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(21, 0);
    var$2[183] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(239);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(22, 0);
    var$2[184] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(240);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(23, 0);
    var$2[185] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(241);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(24, 1);
    var$2[186] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(242);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(2113929216, 1);
    var$2[187] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(243);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(25, 1);
    var$2[188] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(244);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(26, 0);
    var$2[189] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(245);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(27, 0);
    var$2[190] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(246);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(28, 1);
    var$2[191] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(247);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(29, 0);
    var$2[192] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(248);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(30, 0);
    var$2[193] = var$3;
    jur_AbstractCharClass$PredefinedCharacterClasses_contents = var$1;
},
cggdc_BodyElement = $rt_classWithoutFields(cggdc_Element),
cggdc_BodyElement__init_ = ($this, $element) => {
    cggdc_Element__init_($this, $element);
},
cggdc_BodyElement__init_0 = var_0 => {
    let var_1 = new cggdc_BodyElement();
    cggdc_BodyElement__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyDigit__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyDigit__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyDigit();
    jur_AbstractCharClass$LazyDigit__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyDigit_computeValue = $this => {
    return (jur_CharClass__init_()).$add0(48, 57);
},
jur_AbstractCharClass$LazyJavaLetter = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaLetter__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaLetter__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaLetter();
    jur_AbstractCharClass$LazyJavaLetter__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaLetter_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaLetter$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
};
function jur_DecomposedCharSet() {
    let a = this; jur_JointSet.call(a);
    a.$readCharsForCodePoint = 0;
    a.$decomposedCharUTF160 = null;
    a.$decomposedChar0 = null;
    a.$decomposedCharLength0 = 0;
}
let jur_DecomposedCharSet__init_ = ($this, $decomposedChar, $decomposedCharLength) => {
    jur_JointSet__init_($this);
    $this.$readCharsForCodePoint = 1;
    $this.$decomposedChar0 = $decomposedChar;
    $this.$decomposedCharLength0 = $decomposedCharLength;
},
jur_DecomposedCharSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_DecomposedCharSet();
    jur_DecomposedCharSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_DecomposedCharSet_setNext = ($this, $next) => {
    $this.$next2 = $next;
},
jur_DecomposedCharSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $decCodePoint, $readCodePoints, $rightBound, $curChar, var$8, $decCurCodePoint, var$10, var$11, var$12, var$13, var$14, var$15;
    $decCodePoint = $rt_createIntArray(4);
    $readCodePoints = 0;
    $rightBound = $matchResult.$getRightBound();
    if ($strIndex < $rightBound) {
        $curChar = $this.$codePointAt($strIndex, $testString, $rightBound);
        var$8 = $strIndex + $this.$readCharsForCodePoint | 0;
        $decCurCodePoint = jur_Lexer_getDecomposition($curChar);
        if ($decCurCodePoint === null) {
            var$10 = $decCodePoint.data;
            var$11 = 1;
            var$10[$readCodePoints] = $curChar;
        } else {
            var$11 = $decCurCodePoint.data.length;
            jl_System_fastArraycopy($decCurCodePoint, 0, $decCodePoint, 0, var$11);
            var$11 = $readCodePoints + var$11 | 0;
        }
        a: {
            if (var$8 < $rightBound) {
                var$12 = $this.$codePointAt(var$8, $testString, $rightBound);
                b: {
                    while (var$11 < 4) {
                        if (!jur_Lexer_hasDecompositionNonNullCanClass(var$12)) {
                            var$10 = $decCodePoint.data;
                            var$13 = var$11 + 1 | 0;
                            var$10[var$11] = var$12;
                        } else {
                            var$10 = (jur_Lexer_getDecomposition(var$12)).data;
                            if (var$10.length != 2) {
                                var$14 = $decCodePoint.data;
                                var$13 = var$11 + 1 | 0;
                                var$14[var$11] = var$10[0];
                            } else {
                                var$14 = $decCodePoint.data;
                                var$12 = var$11 + 1 | 0;
                                var$14[var$11] = var$10[0];
                                var$13 = var$12 + 1 | 0;
                                var$14[var$12] = var$10[1];
                            }
                        }
                        var$8 = var$8 + $this.$readCharsForCodePoint | 0;
                        if (var$8 >= $rightBound)
                            break b;
                        var$12 = $this.$codePointAt(var$8, $testString, $rightBound);
                        var$11 = var$13;
                    }
                    break a;
                }
                var$11 = var$13;
            }
        }
        if (var$11 == $this.$decomposedCharLength0) {
            var$15 = 0;
            while (true) {
                if (var$15 >= var$11)
                    return $this.$next2.$matches(var$8, $testString, $matchResult);
                if ($decCodePoint.data[var$15] != $this.$decomposedChar0.data[var$15])
                    break;
                var$15 = var$15 + 1 | 0;
            }
            return (-1);
        }
        return (-1);
    }
    return (-1);
},
jur_DecomposedCharSet_getDecomposedChar = $this => {
    let $strBuff, $i;
    if ($this.$decomposedCharUTF160 === null) {
        $strBuff = jl_StringBuilder__init_();
        $i = 0;
        while ($i < $this.$decomposedCharLength0) {
            $strBuff.$append7(jl_Character_toChars($this.$decomposedChar0.data[$i]));
            $i = $i + 1 | 0;
        }
        $this.$decomposedCharUTF160 = $strBuff.$toString();
    }
    return $this.$decomposedCharUTF160;
},
jur_DecomposedCharSet_codePointAt = ($this, $strIndex, $testString, $rightBound) => {
    let $curChar, var$5, $low, $curCodePointUTF16;
    $this.$readCharsForCodePoint = 1;
    if ($strIndex >= ($rightBound - 1 | 0))
        $curChar = $testString.$charAt($strIndex);
    else {
        var$5 = $strIndex + 1 | 0;
        $curChar = $testString.$charAt($strIndex);
        $low = $testString.$charAt(var$5);
        if (jl_Character_isSurrogatePair($curChar, $low)) {
            $curCodePointUTF16 = $rt_createCharArrayFromData([$curChar, $low]);
            $curChar = jl_Character_codePointAt($curCodePointUTF16, 0);
            $this.$readCharsForCodePoint = 2;
        }
    }
    return $curChar;
},
jur_DecomposedCharSet_first = ($this, $set) => {
    let var$2, var$3;
    a: {
        b: {
            if ($set instanceof jur_DecomposedCharSet) {
                var$2 = $set;
                if (!jl_String_equals(jur_DecomposedCharSet_getDecomposedChar(var$2), jur_DecomposedCharSet_getDecomposedChar($this)))
                    break b;
            }
            var$3 = 1;
            break a;
        }
        var$3 = 0;
    }
    return var$3;
},
jur_DecomposedCharSet_hasConsumed = ($this, $matchResult) => {
    return 1;
},
jur_CIDecomposedCharSet = $rt_classWithoutFields(jur_DecomposedCharSet),
jur_CIDecomposedCharSet__init_ = ($this, $decomp, $decomposedCharLength) => {
    jur_DecomposedCharSet__init_($this, $decomp, $decomposedCharLength);
},
jur_CIDecomposedCharSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CIDecomposedCharSet();
    jur_CIDecomposedCharSet__init_(var_2, var_0, var_1);
    return var_2;
},
cgguc_BrowserEventBridge$NativeHandler = $rt_classWithoutFields(0),
eycdaca_AceEditorCallback = $rt_classWithoutFields(0),
jur_AheadFSet = $rt_classWithoutFields(jur_FSet),
jur_AheadFSet__init_ = $this => {
    jur_FSet__init_($this, (-1));
},
jur_AheadFSet__init_0 = () => {
    let var_0 = new jur_AheadFSet();
    jur_AheadFSet__init_(var_0);
    return var_0;
},
jur_AheadFSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    return $stringIndex;
},
jur_NonCapJointSet = $rt_classWithoutFields(jur_JointSet),
jur_NonCapJointSet__init_ = ($this, $children, $fSet) => {
    jur_JointSet__init_0($this, $children, $fSet);
},
jur_NonCapJointSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_NonCapJointSet();
    jur_NonCapJointSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_NonCapJointSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $start, $size, $i, $e, $shift;
    $start = $matchResult.$getConsumed($this.$groupIndex);
    $matchResult.$setConsumed($this.$groupIndex, $stringIndex);
    $size = $this.$children.$size();
    $i = 0;
    while (true) {
        if ($i >= $size) {
            $matchResult.$setConsumed($this.$groupIndex, $start);
            return (-1);
        }
        $e = $this.$children.$get($i);
        $shift = $e.$matches($stringIndex, $testString, $matchResult);
        if ($shift >= 0)
            break;
        $i = $i + 1 | 0;
    }
    return $shift;
},
jur_NonCapJointSet_hasConsumed = ($this, $matchResult) => {
    let $cons;
    $cons = $matchResult.$getConsumed($this.$groupIndex);
    return !$cons ? 0 : 1;
},
jur_AtomicJointSet = $rt_classWithoutFields(jur_NonCapJointSet),
jur_AtomicJointSet__init_ = ($this, $children, $fSet) => {
    jur_NonCapJointSet__init_($this, $children, $fSet);
},
jur_AtomicJointSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_AtomicJointSet();
    jur_AtomicJointSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_AtomicJointSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $start, $size, $i, $e, $shift;
    $start = $matchResult.$getConsumed($this.$groupIndex);
    $matchResult.$setConsumed($this.$groupIndex, $stringIndex);
    $size = $this.$children.$size();
    $i = 0;
    while ($i < $size) {
        $e = $this.$children.$get($i);
        $shift = $e.$matches($stringIndex, $testString, $matchResult);
        if ($shift >= 0)
            return $this.$next2.$matches($this.$fSet.$getIndex(), $testString, $matchResult);
        $i = $i + 1 | 0;
    }
    $matchResult.$setConsumed($this.$groupIndex, $start);
    return (-1);
},
jur_AtomicJointSet_setNext = ($this, $next) => {
    $this.$next2 = $next;
},
jur_PositiveLookAhead = $rt_classWithoutFields(jur_AtomicJointSet),
jur_PositiveLookAhead__init_ = ($this, $children, $fSet) => {
    jur_AtomicJointSet__init_($this, $children, $fSet);
},
jur_PositiveLookAhead__init_0 = (var_0, var_1) => {
    let var_2 = new jur_PositiveLookAhead();
    jur_PositiveLookAhead__init_(var_2, var_0, var_1);
    return var_2;
},
jur_PositiveLookAhead_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $size, $i, $e, $shift;
    $size = $this.$children.$size();
    $i = 0;
    while ($i < $size) {
        $e = $this.$children.$get($i);
        $shift = $e.$matches($stringIndex, $testString, $matchResult);
        if ($shift >= 0)
            return $this.$next2.$matches($stringIndex, $testString, $matchResult);
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_PositiveLookAhead_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_NegativeLookAhead = $rt_classWithoutFields(jur_AtomicJointSet),
jur_NegativeLookAhead__init_ = ($this, $children, $fSet) => {
    jur_AtomicJointSet__init_($this, $children, $fSet);
},
jur_NegativeLookAhead__init_0 = (var_0, var_1) => {
    let var_2 = new jur_NegativeLookAhead();
    jur_NegativeLookAhead__init_(var_2, var_0, var_1);
    return var_2;
},
jur_NegativeLookAhead_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $size, $i, $e;
    $size = $this.$children.$size();
    $i = 0;
    while (true) {
        if ($i >= $size)
            return $this.$next2.$matches($stringIndex, $testString, $matchResult);
        $e = $this.$children.$get($i);
        if ($e.$matches($stringIndex, $testString, $matchResult) >= 0)
            break;
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_NegativeLookAhead_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jlr_Array = $rt_classWithoutFields(),
jlr_Array_getLength = $array => {
    let $cls;
    $cls = jl_Class_getClassInfo(jl_Object_getClass($array));
    if ($cls[$rt_meta].itemType === null)
        $rt_throw(jl_IllegalArgumentException__init_());
    return $rt_arrayLength($array);
},
jlr_Array_newInstance = ($componentType, $length) => {
    let $cls;
    if ($componentType !== null) {
        if ($componentType !== $rt_cls($rt_voidcls)) {
            if ($length >= 0) {
                $cls = jl_Class_getClassInfo($componentType);
                return otrr_ClassInfo_newArrayInstance($cls, $length);
            }
            $rt_throw(jl_NegativeArraySizeException__init_0());
        }
        $rt_throw(jl_IllegalArgumentException__init_());
    }
    $rt_throw(jl_NullPointerException__init_2());
},
jur_AbstractCharClass$LazyJavaDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaDigit__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaDigit__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaDigit();
    jur_AbstractCharClass$LazyJavaDigit__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaDigit_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaDigit$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
},
ju_Collection = $rt_classWithoutFields(0),
ju_Collection_removeIf = ($this, $filter) => {
    let $iterator, $removed, $element, $match;
    $iterator = $this.$iterator();
    $removed = 0;
    while ($iterator.$hasNext()) {
        $element = $iterator.$next();
        $match = $filter.$test0($element);
        if ($match) {
            $iterator.$remove4();
            $removed = 1;
        }
    }
    return $removed;
},
ju_AbstractCollection = $rt_classWithoutFields(),
ju_AbstractCollection__init_ = $this => {
    jl_Object__init_($this);
},
ju_AbstractCollection_isEmpty = $this => {
    return $this.$size() ? 0 : 1;
},
ju_AbstractCollection_contains = ($this, $o) => {
    let $iter, $e;
    $iter = $this.$iterator();
    while ($iter.$hasNext()) {
        $e = $iter.$next();
        if (ju_Objects_equals($e, $o))
            return 1;
    }
    return 0;
};
let ju_AbstractCollection_toArray = ($this, $a) => {
    let var$2, $i, var$4, $iter;
    var$2 = $a.data;
    $i = $this.$size();
    var$4 = var$2.length;
    if (var$4 < $i)
        $a = jlr_Array_newInstance(jl_Class_getComponentType(jl_Object_getClass($a)), $i);
    else
        while ($i < var$4) {
            var$2[$i] = null;
            $i = $i + 1 | 0;
        }
    $i = 0;
    $iter = $this.$iterator();
    while ($iter.$hasNext()) {
        var$2 = $a.data;
        var$4 = $i + 1 | 0;
        var$2[$i] = $iter.$next();
        $i = var$4;
    }
    return $a;
},
ju_AbstractCollection_addAll = ($this, $c) => {
    let $changed, $iter;
    $changed = 0;
    $iter = $c.$iterator();
    while ($iter.$hasNext()) {
        if (!$this.$add2($iter.$next()))
            continue;
        $changed = 1;
    }
    return $changed;
},
otci_IntegerUtil = $rt_classWithoutFields(),
otci_IntegerUtil_toUnsignedLogRadixString = ($value, $radixLog2) => {
    let $radix, $mask, $sz, $chars, $pos, $target, var$9, $target_0;
    if ($value) {
        $radix = 1 << $radixLog2;
        $mask = $radix - 1 | 0;
        $sz = (((32 - jl_Integer_numberOfLeadingZeros($value) | 0) + $radixLog2 | 0) - 1 | 0) / $radixLog2 | 0;
        $chars = $rt_createCharArray($sz);
        $pos = $rt_imul($sz - 1 | 0, $radixLog2);
        $target = 0;
        while ($pos >= 0) {
            var$9 = $chars.data;
            $target_0 = $target + 1 | 0;
            var$9[$target] = jl_Character_forDigit(($value >>> $pos | 0) & $mask, $radix);
            $pos = $pos - $radixLog2 | 0;
            $target = $target_0;
        }
        return jl_String__init_0($chars);
    }
    return $rt_s(249);
};
function jur_LeafQuantifierSet() {
    jur_QuantifierSet.call(this);
    this.$leaf = null;
}
let jur_LeafQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_QuantifierSet__init_($this, $innerSet, $next, $type);
    $this.$leaf = $innerSet;
},
jur_LeafQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_LeafQuantifierSet();
    jur_LeafQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_LeafQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $i, var$5;
    $i = 0;
    a: {
        b: {
            while (($stringIndex + $this.$leaf.$charCount() | 0) <= $matchResult.$getRightBound()) {
                var$5 = $this.$leaf.$accepts($stringIndex, $testString);
                if (var$5 <= 0)
                    break b;
                $stringIndex = $stringIndex + var$5 | 0;
                $i = $i + 1 | 0;
            }
            break a;
        }
    }
    while (true) {
        if ($i < 0)
            return (-1);
        var$5 = $this.$next2.$matches($stringIndex, $testString, $matchResult);
        if (var$5 >= 0)
            break;
        $stringIndex = $stringIndex - $this.$leaf.$charCount() | 0;
        $i = $i + (-1) | 0;
    }
    return var$5;
},
jur_AltQuantifierSet = $rt_classWithoutFields(jur_LeafQuantifierSet),
jur_AltQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_LeafQuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_AltQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_AltQuantifierSet();
    jur_AltQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_AltQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $shift;
    $shift = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($shift < 0)
        $shift = $this.$next2.$matches($stringIndex, $testString, $matchResult);
    return $shift;
},
jur_AltQuantifierSet_setNext = ($this, $next) => {
    jur_AbstractSet_setNext($this, $next);
    $this.$innerSet.$setNext($next);
},
jur_PossessiveAltQuantifierSet = $rt_classWithoutFields(jur_AltQuantifierSet),
jur_PossessiveAltQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_AltQuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_PossessiveAltQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_PossessiveAltQuantifierSet();
    jur_PossessiveAltQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_PossessiveAltQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4;
    if (($stringIndex + $this.$leaf.$charCount() | 0) <= $matchResult.$getRightBound()) {
        var$4 = $this.$leaf.$accepts($stringIndex, $testString);
        if (var$4 >= 1)
            $stringIndex = $stringIndex + var$4 | 0;
    }
    return $this.$next2.$matches($stringIndex, $testString, $matchResult);
},
eycdaca_AceCompletionCallback = $rt_classWithoutFields(0),
otji_JS = $rt_classWithoutFields(),
otji_JS_unwrapStringArray = $array => {
    let $result, $i, var$4;
    if ($array !== null) {
        $result = $rt_createArray(jl_String, $array.length);
        $i = 0;
        while (true) {
            var$4 = $result.data;
            if ($i >= var$4.length)
                break;
            var$4[$i] = otjc_JSString_stringValue$static(otji_JSWrapper_maybeUnwrap($array[$i]));
            $i = $i + 1 | 0;
        }
        return $result;
    }
    return null;
},
otji_JS_function = (var$1, var$2) => {
    if (var$1 === null || var$1 === undefined) {
        return null;
    }
    let name = 'jso$functor$' + var$2;
    let result = var$1[name];
    if (typeof result !== 'function') {
        let fn = function() {
            return var$1[var$2].apply(var$1, arguments);
        };
        result = () => fn;
        var$1[name] = result;
    }
    return result();
};
function jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1() {
    jur_AbstractCharClass.call(this);
    this.$this$037 = null;
}
let jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1__init_ = ($this, var$1) => {
    $this.$this$037 = var$1;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1();
    jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1_contains = ($this, $ch) => {
    return jl_Character_isUnicodeIdentifierStart($ch);
},
iiad_EditorDemo$create$lambda$_3_1 = $rt_classWithoutFields(),
iiad_EditorDemo$create$lambda$_3_1__init_ = var$0 => {
    jl_Object__init_(var$0);
},
iiad_EditorDemo$create$lambda$_3_1__init_0 = () => {
    let var_0 = new iiad_EditorDemo$create$lambda$_3_1();
    iiad_EditorDemo$create$lambda$_3_1__init_(var_0);
    return var_0;
},
iiad_EditorDemo$create$lambda$_3_1_invokeAceCallback = (var$0, var$1) => {
    iiad_EditorDemo_lambda$create$15(var$1);
},
iiad_EditorDemo$create$lambda$_3_0 = $rt_classWithoutFields(),
iiad_EditorDemo$create$lambda$_3_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
iiad_EditorDemo$create$lambda$_3_0__init_0 = () => {
    let var_0 = new iiad_EditorDemo$create$lambda$_3_0();
    iiad_EditorDemo$create$lambda$_3_0__init_(var_0);
    return var_0;
},
iiad_EditorDemo$create$lambda$_3_0_invokeAceCallback = (var$0, var$1) => {
    iiad_EditorDemo_lambda$create$14(var$1);
},
iiad_EditorDemo$create$lambda$_3_3 = $rt_classWithoutFields(),
iiad_EditorDemo$create$lambda$_3_3__init_ = var$0 => {
    jl_Object__init_(var$0);
},
iiad_EditorDemo$create$lambda$_3_3__init_0 = () => {
    let var_0 = new iiad_EditorDemo$create$lambda$_3_3();
    iiad_EditorDemo$create$lambda$_3_3__init_(var_0);
    return var_0;
},
iiad_EditorDemo$create$lambda$_3_3_exec = (var$0, var$1) => {
    return iiad_EditorDemo_lambda$create$17(var$1);
},
eycdaca_AceSelectionListener = $rt_classWithoutFields(0),
iiad_EditorDemo$create$lambda$_3_2 = $rt_classWithoutFields(),
iiad_EditorDemo$create$lambda$_3_2__init_ = var$0 => {
    jl_Object__init_(var$0);
},
iiad_EditorDemo$create$lambda$_3_2__init_0 = () => {
    let var_0 = new iiad_EditorDemo$create$lambda$_3_2();
    iiad_EditorDemo$create$lambda$_3_2__init_(var_0);
    return var_0;
},
iiad_EditorDemo$create$lambda$_3_2_onChangeSelection = (var$0, var$1) => {
    iiad_EditorDemo_lambda$create$16(var$1);
},
otciu_UnicodeHelper = $rt_classWithoutFields(),
otciu_UnicodeHelper_decodeIntPairsDiff = $text => {
    let $flow, $sz, $data, $j, $lastKey, $lastValue, $i, var$9, var$10;
    $flow = otci_CharFlow__init_0(jl_String_toCharArray($text));
    $sz = otci_Base46_decodeUnsigned($flow);
    $data = $rt_createIntArray($sz * 2 | 0);
    $j = 0;
    $lastKey = 0;
    $lastValue = 0;
    $i = 0;
    while ($i < $sz) {
        var$9 = $data.data;
        $lastKey = $lastKey + otci_Base46_decode($flow) | 0;
        $lastValue = $lastValue + otci_Base46_decode($flow) | 0;
        var$10 = $j + 1 | 0;
        var$9[$j] = $lastKey;
        $j = var$10 + 1 | 0;
        var$9[var$10] = $lastValue;
        $i = $i + 1 | 0;
    }
    return $data;
},
otciu_UnicodeHelper_decodeCaseMapping = $text => {
    let $flow, $sz, $data, $last, $i, var$7, var$8;
    $flow = otci_CharFlow__init_0(jl_String_toCharArray($text));
    $sz = otci_Base46_decodeUnsigned($flow);
    $data = $rt_createIntArray($sz * 2 | 0);
    $last = 0;
    $i = 0;
    while ($i < $sz) {
        var$7 = $data.data;
        $last = $last + otci_Base46_decodeUnsigned($flow) | 0;
        var$8 = $i * 2 | 0;
        var$7[var$8] = $last;
        var$7[var$8 + 1 | 0] = otci_Base46_decode($flow);
        $i = $i + 1 | 0;
    }
    return $data;
},
otciu_UnicodeHelper_createCharMapping = $data => {
    let $result, $last, $lastValue, $i, var$6, var$7, $key, $value, var$10;
    $result = $rt_createIntArray(65536);
    $last = 0;
    $lastValue = 0;
    $i = 0;
    a: {
        while (true) {
            var$6 = $data.data;
            if ($i >= var$6.length)
                break a;
            var$7 = $result.data;
            $key = var$6[$i];
            $value = var$6[$i + 1 | 0];
            var$10 = var$7.length;
            if ($key < var$10)
                var$10 = $key;
            else if ($key == $last)
                break;
            ju_Arrays_fill0($result, $last, var$10, $lastValue);
            $i = $i + 2 | 0;
            $last = var$10;
            $lastValue = $value;
        }
    }
    return otciu_CharMapping__init_0($data, $result);
},
otciu_UnicodeHelper_decodeByte = $c => {
    if ($c <= 92) {
        if ($c > 34)
            return (($c - 32 | 0) - 1 | 0) << 24 >> 24;
        return ($c - 32 | 0) << 24 >> 24;
    }
    return (($c - 32 | 0) - 2 | 0) << 24 >> 24;
},
otciu_UnicodeHelper_extractRle = $encoded => {
    let $ranges, $buffer, $index, $rangeIndex, $codePoint, $i, $b, $count, $pos, $j, $digit, var$13, var$14, var$15, var$16, var$17, var$18, $chunk;
    $ranges = $rt_createArray(otciu_UnicodeHelper$Range, 16384);
    $buffer = $rt_createByteArray(16384);
    $index = 0;
    $rangeIndex = 0;
    $codePoint = 0;
    $i = 0;
    while ($i < jl_String_length($encoded)) {
        $b = otciu_UnicodeHelper_decodeByte(jl_String_charAt($encoded, $i));
        if ($b == 64) {
            $i = $i + 1 | 0;
            $b = otciu_UnicodeHelper_decodeByte(jl_String_charAt($encoded, $i));
            $count = 0;
            $pos = 1;
            $j = 0;
            while ($j < 3) {
                $i = $i + 1 | 0;
                $digit = otciu_UnicodeHelper_decodeByte(jl_String_charAt($encoded, $i));
                $count = $count | $rt_imul($pos, $digit);
                $pos = $pos * 64 | 0;
                $j = $j + 1 | 0;
            }
        } else if ($b < 32)
            $count = 1;
        else {
            $b = ($b - 32 | 0) << 24 >> 24;
            $i = $i + 1 | 0;
            $count = otciu_UnicodeHelper_decodeByte(jl_String_charAt($encoded, $i));
        }
        if (!$b && $count >= 128) {
            if ($index > 0) {
                var$13 = $ranges.data;
                var$14 = $rangeIndex + 1 | 0;
                var$13[$rangeIndex] = otciu_UnicodeHelper$Range__init_0($codePoint, $codePoint + $index | 0, ju_Arrays_copyOf($buffer, $index));
                $rangeIndex = var$14;
            }
            $codePoint = $codePoint + ($index + $count | 0) | 0;
            $index = 0;
        } else
            while ($count > 0) {
                var$14 = $buffer.data.length;
                if ($index != var$14)
                    var$15 = $index;
                else {
                    var$13 = $ranges.data;
                    var$16 = $rangeIndex + 1 | 0;
                    var$17 = new otciu_UnicodeHelper$Range;
                    var$18 = $codePoint + $index | 0;
                    otciu_UnicodeHelper$Range__init_(var$17, $codePoint, var$18, ju_Arrays_copyOf($buffer, $index));
                    var$13[$rangeIndex] = var$17;
                    var$15 = 0;
                    $rangeIndex = var$16;
                    $codePoint = var$18;
                }
                $chunk = jl_Math_min($count, var$14 - var$15 | 0);
                $index = var$15 + $chunk | 0;
                ju_Arrays_fill1($buffer, var$15, $index, $b);
                $count = $count - $chunk | 0;
            }
        $i = $i + 1 | 0;
    }
    if ($index <= 0)
        var$14 = $rangeIndex;
    else {
        var$13 = $ranges.data;
        var$14 = $rangeIndex + 1 | 0;
        var$13[$rangeIndex] = otciu_UnicodeHelper$Range__init_0($codePoint, $codePoint + $index | 0, ju_Arrays_copyOf($buffer, $index));
    }
    return ju_Arrays_copyOf0($ranges, var$14);
},
cggdc_ButtonElement = $rt_classWithoutFields(cggdc_Element),
cggdc_ButtonElement__init_ = ($this, $element) => {
    cggdc_Element__init_($this, $element);
},
cggdc_ButtonElement__init_0 = var_0 => {
    let var_1 = new cggdc_ButtonElement();
    cggdc_ButtonElement__init_(var_1, var_0);
    return var_1;
},
ju_Objects = $rt_classWithoutFields(),
ju_Objects_equals = ($a, $b) => {
    if ($a !== $b)
        return $a !== null ? $a.$equals($b) : $b !== null ? 0 : 1;
    return 1;
},
ju_Objects_hashCode = $o => {
    return $o !== null ? $o.$hashCode0() : 0;
},
ju_Objects_requireNonNull = $obj => {
    return ju_Objects_requireNonNull0($obj, $rt_s(8));
},
ju_Objects_requireNonNull0 = ($obj, $message) => {
    if ($obj === null)
        $rt_throw(jl_NullPointerException__init_($message));
    return $obj;
},
ju_Objects_checkFromIndexSize = ($fromIndex, $size, $length) => {
    if ($fromIndex >= 0 && $size >= 0 && $size <= ($length - $fromIndex | 0))
        return $fromIndex;
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
cggdc_OptGroupElement = $rt_classWithoutFields(cggdc_Element),
cggdc_OptGroupElement__init_ = ($this, $element) => {
    cggdc_Element__init_($this, $element);
},
cggdc_OptGroupElement__init_0 = var_0 => {
    let var_1 = new cggdc_OptGroupElement();
    cggdc_OptGroupElement__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyAlnum = $rt_classWithoutFields(jur_AbstractCharClass$LazyAlpha),
jur_AbstractCharClass$LazyAlnum__init_ = $this => {
    jur_AbstractCharClass$LazyAlpha__init_($this);
},
jur_AbstractCharClass$LazyAlnum__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyAlnum();
    jur_AbstractCharClass$LazyAlnum__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyAlnum_computeValue = $this => {
    return (jur_AbstractCharClass$LazyAlpha_computeValue($this)).$add0(48, 57);
},
jur_AbstractCharClass$LazyGraph = $rt_classWithoutFields(jur_AbstractCharClass$LazyAlnum),
jur_AbstractCharClass$LazyGraph__init_ = $this => {
    jur_AbstractCharClass$LazyAlnum__init_($this);
},
jur_AbstractCharClass$LazyGraph__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyGraph();
    jur_AbstractCharClass$LazyGraph__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyGraph_computeValue = $this => {
    return (((jur_AbstractCharClass$LazyAlnum_computeValue($this)).$add0(33, 64)).$add0(91, 96)).$add0(123, 126);
},
jur_AbstractCharClass$LazyPrint = $rt_classWithoutFields(jur_AbstractCharClass$LazyGraph),
jur_AbstractCharClass$LazyPrint__init_ = $this => {
    jur_AbstractCharClass$LazyGraph__init_($this);
},
jur_AbstractCharClass$LazyPrint__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyPrint();
    jur_AbstractCharClass$LazyPrint__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyPrint_computeValue = $this => {
    return (jur_AbstractCharClass$LazyGraph_computeValue($this)).$add(32);
};
let jur_AbstractCharClass$LazyJavaSpaceChar = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaSpaceChar__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaSpaceChar__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaSpaceChar();
    jur_AbstractCharClass$LazyJavaSpaceChar__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaSpaceChar_computeValue = $this => {
    return jur_AbstractCharClass$LazyJavaSpaceChar$1__init_0($this);
},
jur_PositiveLookBehind = $rt_classWithoutFields(jur_AtomicJointSet),
jur_PositiveLookBehind__init_ = ($this, $children, $fSet) => {
    jur_AtomicJointSet__init_($this, $children, $fSet);
},
jur_PositiveLookBehind__init_0 = (var_0, var_1) => {
    let var_2 = new jur_PositiveLookBehind();
    jur_PositiveLookBehind__init_(var_2, var_0, var_1);
    return var_2;
},
jur_PositiveLookBehind_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $size, $leftBound, $shift, $i, $e;
    $size = $this.$children.$size();
    $leftBound = !$matchResult.$hasTransparentBounds() ? $matchResult.$getLeftBound() : 0;
    a: {
        $shift = $this.$next2.$matches($stringIndex, $testString, $matchResult);
        if ($shift >= 0) {
            $matchResult.$setConsumed($this.$groupIndex, $stringIndex);
            $i = 0;
            while (true) {
                if ($i >= $size)
                    break a;
                $e = $this.$children.$get($i);
                if ($e.$findBack($leftBound, $stringIndex, $testString, $matchResult) >= 0) {
                    $matchResult.$setConsumed($this.$groupIndex, (-1));
                    return $shift;
                }
                $i = $i + 1 | 0;
            }
        }
    }
    return (-1);
},
jur_PositiveLookBehind_hasConsumed = ($this, $matchResult) => {
    return 0;
};
function jur_SequenceSet() {
    let a = this; jur_LeafSet.call(a);
    a.$string = null;
    a.$leftToRight = null;
    a.$rightToLeft = null;
}
let jur_SequenceSet__init_ = ($this, $substring) => {
    let $j;
    jur_LeafSet__init_($this);
    $this.$string = $substring.$toString();
    $this.$charCount0 = $substring.$length();
    $this.$leftToRight = jur_SequenceSet$IntHash__init_($this.$charCount0);
    $this.$rightToLeft = jur_SequenceSet$IntHash__init_($this.$charCount0);
    $j = 0;
    while ($j < ($this.$charCount0 - 1 | 0)) {
        $this.$leftToRight.$put0(jl_String_charAt($this.$string, $j), ($this.$charCount0 - $j | 0) - 1 | 0);
        $this.$rightToLeft.$put0(jl_String_charAt($this.$string, ($this.$charCount0 - $j | 0) - 1 | 0), ($this.$charCount0 - $j | 0) - 1 | 0);
        $j = $j + 1 | 0;
    }
},
jur_SequenceSet__init_0 = var_0 => {
    let var_1 = new jur_SequenceSet();
    jur_SequenceSet__init_(var_1, var_0);
    return var_1;
},
jur_SequenceSet_accepts = ($this, $strIndex, $testString) => {
    return !$this.$startsWith0($testString, $strIndex) ? (-1) : $this.$charCount0;
},
jur_SequenceSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $strLength, var$5;
    $strLength = $matchResult.$getRightBound();
    while (true) {
        if ($strIndex > $strLength)
            return (-1);
        var$5 = $this.$indexOf($testString, $strIndex, $strLength);
        if (var$5 < 0)
            return (-1);
        if ($this.$next2.$matches(var$5 + $this.$charCount0 | 0, $testString, $matchResult) >= 0)
            break;
        $strIndex = var$5 + 1 | 0;
    }
    return var$5;
},
jur_SequenceSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let var$5;
    while (true) {
        if ($lastIndex < $strIndex)
            return (-1);
        var$5 = $this.$lastIndexOf($testString, $strIndex, $lastIndex);
        if (var$5 < 0)
            return (-1);
        if ($this.$next2.$matches(var$5 + $this.$charCount0 | 0, $testString, $matchResult) >= 0)
            break;
        $lastIndex = var$5 + (-1) | 0;
    }
    return var$5;
},
jur_SequenceSet_first = ($this, $set) => {
    let var$2, var$3, var$4, var$5, var$6;
    if (!($set instanceof jur_CharSet)) {
        if (!($set instanceof jur_RangeSet)) {
            if ($set instanceof jur_SupplRangeSet) {
                a: {
                    b: {
                        var$2 = $set;
                        if (!var$2.$contains(jl_String_charAt($this.$string, 0))) {
                            var$3 = $this.$string;
                            if (jl_String_length(var$3) <= 1)
                                break b;
                            var$3 = $this.$string;
                            var$4 = jl_Character_toCodePoint(jl_String_charAt(var$3, 0), jl_String_charAt($this.$string, 1));
                            if (!var$2.$contains(var$4))
                                break b;
                        }
                        var$4 = 1;
                        break a;
                    }
                    var$4 = 0;
                }
                return var$4;
            }
            if ($set instanceof jur_SupplCharSet) {
                c: {
                    d: {
                        if (jl_String_length($this.$string) > 1) {
                            var$2 = $set;
                            var$5 = var$2.$getCodePoint();
                            var$4 = jl_String_charAt($this.$string, 0);
                            var$2 = $this.$string;
                            var$6 = jl_String_charAt(var$2, 1);
                            if (var$5 == jl_Character_toCodePoint(var$4, var$6))
                                break d;
                        }
                        var$4 = 0;
                        break c;
                    }
                    var$4 = 1;
                }
                return var$4;
            }
            return 1;
        }
        return $set.$accepts(0, jl_String_substring($this.$string, 0, 1)) <= 0 ? 0 : 1;
    }
    return $set.$getChar() != jl_String_charAt($this.$string, 0) ? 0 : 1;
},
jur_SequenceSet_indexOf = ($this, $str, $i, $to) => {
    let $last, $ch;
    $last = jl_String_charAt($this.$string, $this.$charCount0 - 1 | 0);
    while (true) {
        if ($i > ($to - $this.$charCount0 | 0))
            return (-1);
        $ch = $str.$charAt(($i + $this.$charCount0 | 0) - 1 | 0);
        if ($ch == $last && $this.$startsWith0($str, $i))
            break;
        $i = $i + $this.$leftToRight.$get3($ch) | 0;
    }
    return $i;
},
jur_SequenceSet_lastIndexOf = ($this, $str, $to, $i) => {
    let $first, $size, $delta, $ch;
    $first = jl_String_charAt($this.$string, 0);
    $size = $str.$length();
    $delta = ($size - $i | 0) - $this.$charCount0 | 0;
    if ($delta <= 0)
        $i = $i + $delta | 0;
    while (true) {
        if ($i < $to)
            return (-1);
        $ch = $str.$charAt($i);
        if ($ch == $first && $this.$startsWith0($str, $i))
            break;
        $i = $i - $this.$rightToLeft.$get3($ch) | 0;
    }
    return $i;
},
jur_SequenceSet_startsWith = ($this, $str, $from) => {
    let $i;
    $i = 0;
    while ($i < $this.$charCount0) {
        if ($str.$charAt($i + $from | 0) != jl_String_charAt($this.$string, $i))
            return 0;
        $i = $i + 1 | 0;
    }
    return 1;
},
jl_ArrayStoreException = $rt_classWithoutFields(jl_RuntimeException),
jl_ArrayStoreException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
jl_ArrayStoreException__init_ = () => {
    let var_0 = new jl_ArrayStoreException();
    jl_ArrayStoreException__init_0(var_0);
    return var_0;
};
function cggucu_WidgetCollection() {
    let a = this; jl_Object.call(a);
    a.$widgets = null;
    a.$parent0 = null;
}
let cggucu_WidgetCollection__init_ = ($this, $parent) => {
    jl_Object__init_($this);
    $this.$widgets = ju_ArrayList__init_();
    $this.$parent0 = $parent;
},
cggucu_WidgetCollection__init_0 = var_0 => {
    let var_1 = new cggucu_WidgetCollection();
    cggucu_WidgetCollection__init_(var_1, var_0);
    return var_1;
},
cggucu_WidgetCollection_add = ($this, $widget) => {
    $this.$insert6($widget, $this.$size());
},
cggucu_WidgetCollection_insert = ($this, $widget, $beforeIndex) => {
    let var$3, var$4, var$5;
    if ($beforeIndex >= 0 && $beforeIndex <= $this.$size()) {
        $this.$widgets.$add1($beforeIndex, $widget);
        return;
    }
    var$3 = new jl_IndexOutOfBoundsException;
    var$4 = $this.$size();
    var$5 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$5, $rt_s(250)), $beforeIndex), $rt_s(251)), var$4);
    jl_IndexOutOfBoundsException__init_0(var$3, jl_StringBuilder_toString(var$5));
    $rt_throw(var$3);
},
cggucu_WidgetCollection_indexOf = ($this, $widget) => {
    let $index;
    $index = 0;
    while (true) {
        if ($index >= $this.$widgets.$size())
            return (-1);
        if ($this.$widgets.$get($index) === $widget)
            break;
        $index = $index + 1 | 0;
    }
    return $index;
},
cggucu_WidgetCollection_get = ($this, $index) => {
    let var$2, var$3, var$4;
    if ($index >= 0 && $index < $this.$size())
        return $this.$widgets.$get($index);
    var$2 = new jl_IndexOutOfBoundsException;
    var$3 = $this.$size();
    var$4 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$4, $rt_s(252)), $index), $rt_s(251)), var$3);
    jl_IndexOutOfBoundsException__init_0(var$2, jl_StringBuilder_toString(var$4));
    $rt_throw(var$2);
},
cggucu_WidgetCollection_remove = ($this, $widget) => {
    let $index;
    $index = $this.$indexOf0($widget);
    if ($index == (-1))
        $rt_throw(ju_NoSuchElementException__init_());
    $this.$remove5($index);
},
cggucu_WidgetCollection_remove0 = ($this, $index) => {
    let var$2, var$3, var$4;
    if ($index >= 0 && $index < $this.$size()) {
        $this.$widgets.$remove($index);
        return;
    }
    var$2 = new jl_IndexOutOfBoundsException;
    var$3 = $this.$size();
    var$4 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$4, $rt_s(252)), $index), $rt_s(251)), var$3);
    jl_IndexOutOfBoundsException__init_0(var$2, jl_StringBuilder_toString(var$4));
    $rt_throw(var$2);
},
cggucu_WidgetCollection_size = $this => {
    return $this.$widgets.$size();
},
ju_SequencedCollection = $rt_classWithoutFields(0),
jur_AltGroupQuantifierSet = $rt_classWithoutFields(jur_GroupQuantifierSet),
jur_AltGroupQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_GroupQuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_AltGroupQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_AltGroupQuantifierSet();
    jur_AltGroupQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_AltGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $nextIndex;
    if ($this.$innerSet.$hasConsumed($matchResult)) {
        $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
        if ($nextIndex < 0)
            return $this.$next2.$matches($stringIndex, $testString, $matchResult);
        return $nextIndex;
    }
    return $this.$next2.$matches($stringIndex, $testString, $matchResult);
},
jur_AltGroupQuantifierSet_setNext = ($this, $next) => {
    jur_AbstractSet_setNext($this, $next);
    $this.$innerSet.$setNext($next);
},
jur_MatchResult = $rt_classWithoutFields(0);
function jur_MatchResultImpl() {
    let a = this; jl_Object.call(a);
    a.$groupBounds = null;
    a.$consumers = null;
    a.$compQuantCounters = null;
    a.$string3 = null;
    a.$groupCount0 = 0;
    a.$valid = 0;
    a.$leftBound0 = 0;
    a.$rightBound0 = 0;
    a.$startIndex = 0;
    a.$transparentBounds = 0;
    a.$anchoringBounds = 0;
    a.$hitEnd = 0;
    a.$requireEnd = 0;
    a.$previousMatch = 0;
    a.$mode1 = 0;
    a.$namedGroups1 = null;
}
let jur_MatchResultImpl__init_ = ($this, $string, $leftBound, $rightBound, $groupCount, $compQuantCount, $consumersCount, $namedGroups) => {
    let var$8;
    jl_Object__init_($this);
    $this.$previousMatch = (-1);
    var$8 = $groupCount + 1 | 0;
    $this.$groupCount0 = var$8;
    $this.$groupBounds = $rt_createIntArray(var$8 * 2 | 0);
    $this.$namedGroups1 = $namedGroups;
    $this.$consumers = $rt_createIntArray($consumersCount);
    ju_Arrays_fill($this.$consumers, (-1));
    if ($compQuantCount > 0)
        $this.$compQuantCounters = $rt_createIntArray($compQuantCount);
    ju_Arrays_fill($this.$groupBounds, (-1));
    $this.$reset($string, $leftBound, $rightBound);
},
jur_MatchResultImpl__init_0 = (var_0, var_1, var_2, var_3, var_4, var_5, var_6) => {
    let var_7 = new jur_MatchResultImpl();
    jur_MatchResultImpl__init_(var_7, var_0, var_1, var_2, var_3, var_4, var_5, var_6);
    return var_7;
},
jur_MatchResultImpl_setConsumed = ($this, $counter, $value) => {
    $this.$consumers.data[$counter] = $value;
},
jur_MatchResultImpl_getConsumed = ($this, $counter) => {
    return $this.$consumers.data[$counter];
},
jur_MatchResultImpl_end = $this => {
    return $this.$end(0);
},
jur_MatchResultImpl_end0 = ($this, $group) => {
    jur_MatchResultImpl_checkGroup($this, $group);
    return $this.$groupBounds.data[($group * 2 | 0) + 1 | 0];
},
jur_MatchResultImpl_setStart = ($this, $group, $offset) => {
    $this.$groupBounds.data[$group * 2 | 0] = $offset;
},
jur_MatchResultImpl_setEnd = ($this, $group, $offset) => {
    $this.$groupBounds.data[($group * 2 | 0) + 1 | 0] = $offset;
},
jur_MatchResultImpl_getStart = ($this, $group) => {
    return $this.$groupBounds.data[$group * 2 | 0];
},
jur_MatchResultImpl_getEnd = ($this, $group) => {
    return $this.$groupBounds.data[($group * 2 | 0) + 1 | 0];
},
jur_MatchResultImpl_getGroupNoCheck = ($this, $group) => {
    let $st, $end;
    $st = $this.$getStart($group);
    $end = $this.$getEnd($group);
    if (($end | $st | ($end - $st | 0)) >= 0 && $end <= $this.$string3.$length())
        return ($this.$string3.$subSequence($st, $end)).$toString();
    return null;
},
jur_MatchResultImpl_start = $this => {
    return $this.$start(0);
},
jur_MatchResultImpl_start0 = ($this, $group) => {
    jur_MatchResultImpl_checkGroup($this, $group);
    return $this.$groupBounds.data[$group * 2 | 0];
},
jur_MatchResultImpl_finalizeMatch = $this => {
    if ($this.$groupBounds.data[0] == (-1)) {
        $this.$groupBounds.data[0] = $this.$startIndex;
        $this.$groupBounds.data[1] = $this.$startIndex;
    }
    $this.$previousMatch = $this.$end0();
},
jur_MatchResultImpl_getEnterCounter = ($this, $setCounter) => {
    return $this.$compQuantCounters.data[$setCounter];
},
jur_MatchResultImpl_setEnterCounter = ($this, $setCounter, $value) => {
    $this.$compQuantCounters.data[$setCounter] = $value;
},
jur_MatchResultImpl_checkGroup = ($this, $group) => {
    if ($this.$valid) {
        if ($group >= 0 && $group < $this.$groupCount0)
            return;
        $rt_throw(jl_IndexOutOfBoundsException__init_2(jl_String_valueOf0($group)));
    }
    $rt_throw(jl_IllegalStateException__init_1());
},
jur_MatchResultImpl_setValid = $this => {
    $this.$valid = 1;
},
jur_MatchResultImpl_isValid = $this => {
    return $this.$valid;
},
jur_MatchResultImpl_reset0 = ($this, $newSequence, $leftBound, $rightBound) => {
    $this.$valid = 0;
    $this.$mode1 = 2;
    ju_Arrays_fill($this.$groupBounds, (-1));
    ju_Arrays_fill($this.$consumers, (-1));
    if ($newSequence !== null)
        $this.$string3 = $newSequence;
    if ($leftBound >= 0)
        jur_MatchResultImpl_setBounds($this, $leftBound, $rightBound);
    $this.$startIndex = $this.$leftBound0;
},
jur_MatchResultImpl_reset = $this => {
    $this.$reset(null, (-1), (-1));
},
jur_MatchResultImpl_setBounds = ($this, $leftBound, $rightBound) => {
    $this.$leftBound0 = $leftBound;
    $this.$rightBound0 = $rightBound;
},
jur_MatchResultImpl_setStartIndex = ($this, $startIndex) => {
    $this.$startIndex = $startIndex;
    if ($this.$previousMatch >= 0)
        $startIndex = $this.$previousMatch;
    $this.$previousMatch = $startIndex;
},
jur_MatchResultImpl_getLeftBound = $this => {
    return $this.$leftBound0;
},
jur_MatchResultImpl_getRightBound = $this => {
    return $this.$rightBound0;
},
jur_MatchResultImpl_setMode = ($this, $mode) => {
    $this.$mode1 = $mode;
},
jur_MatchResultImpl_mode = $this => {
    return $this.$mode1;
},
jur_MatchResultImpl_useAnchoringBounds = ($this, $value) => {
    $this.$anchoringBounds = $value;
},
jur_MatchResultImpl_hasAnchoringBounds = $this => {
    return $this.$anchoringBounds;
},
jur_MatchResultImpl_hasTransparentBounds = $this => {
    return $this.$transparentBounds;
},
jur_MatchResultImpl_getPreviousMatchEnd = $this => {
    return $this.$previousMatch;
};
function jur_UCIRangeSet() {
    let a = this; jur_LeafSet.call(a);
    a.$chars1 = null;
    a.$alt2 = 0;
}
let jur_UCIRangeSet__init_ = ($this, $cc) => {
    jur_LeafSet__init_($this);
    $this.$chars1 = $cc.$getInstance();
    $this.$alt2 = $cc.$alt;
},
jur_UCIRangeSet__init_0 = var_0 => {
    let var_1 = new jur_UCIRangeSet();
    jur_UCIRangeSet__init_(var_1, var_0);
    return var_1;
},
jur_UCIRangeSet_accepts = ($this, $strIndex, $testString) => {
    let var$3, var$4;
    var$3 = $this.$chars1;
    var$4 = jl_Character_toUpperCase($testString.$charAt($strIndex));
    return !var$3.$contains(jl_Character_toLowerCase(var$4)) ? (-1) : 1;
},
iiad_EditorDemo$Action = $rt_classWithoutFields(0);
function eycdaca_AceSelection$_init_$lambda$_0_0() {
    jl_Object.call(this);
    this.$_010 = null;
}
let eycdaca_AceSelection$_init_$lambda$_0_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_010 = var$1;
},
eycdaca_AceSelection$_init_$lambda$_0_0__init_0 = var_0 => {
    let var_1 = new eycdaca_AceSelection$_init_$lambda$_0_0();
    eycdaca_AceSelection$_init_$lambda$_0_0__init_(var_1, var_0);
    return var_1;
},
eycdaca_AceSelection$_init_$lambda$_0_0_changed = var$0 => {
    eycdaca_AceSelection_lambda$new$0(var$0.$_010);
},
eycdaca_AceSelection$_init_$lambda$_0_0_changed$exported$0 = var$1 => {
    var$1.$changed();
},
juf_Function = $rt_classWithoutFields(0);
function jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1() {
    jur_AbstractCharClass.call(this);
    this.$this$010 = null;
}
let jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1__init_ = ($this, $this$0) => {
    $this.$this$010 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1();
    jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1_contains = ($this, $ch) => {
    return jl_Character_isJavaIdentifierPart($ch);
},
otp_Platform = $rt_classWithoutFields(),
otp_Platform_clone = var$1 => {
    let copy = new var$1.constructor();
    for (let field in var$1) {
        if (var$1.hasOwnProperty(field)) {
            copy[field] = var$1[field];
        }
    }
    return copy;
},
cggdc_SourceElement = $rt_classWithoutFields(cggdc_Element),
cggdc_SourceElement__init_ = ($this, var$1) => {
    cggdc_Element__init_($this, var$1);
},
cggdc_SourceElement__init_0 = var_0 => {
    let var_1 = new cggdc_SourceElement();
    cggdc_SourceElement__init_(var_1, var_0);
    return var_1;
},
ju_NoSuchElementException = $rt_classWithoutFields(jl_RuntimeException),
ju_NoSuchElementException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
ju_NoSuchElementException__init_ = () => {
    let var_0 = new ju_NoSuchElementException();
    ju_NoSuchElementException__init_0(var_0);
    return var_0;
},
jlr_AnnotatedElement = $rt_classWithoutFields(0),
jlr_GenericDeclaration = $rt_classWithoutFields(0),
jur_NegativeLookBehind = $rt_classWithoutFields(jur_AtomicJointSet),
jur_NegativeLookBehind__init_ = ($this, $children, $fSet) => {
    jur_AtomicJointSet__init_($this, $children, $fSet);
},
jur_NegativeLookBehind__init_0 = (var_0, var_1) => {
    let var_2 = new jur_NegativeLookBehind();
    jur_NegativeLookBehind__init_(var_2, var_0, var_1);
    return var_2;
},
jur_NegativeLookBehind_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $size, $i, $e, $shift;
    $size = $this.$children.$size();
    $matchResult.$setConsumed($this.$groupIndex, $stringIndex);
    $i = 0;
    while (true) {
        if ($i >= $size)
            return $this.$next2.$matches($stringIndex, $testString, $matchResult);
        $e = $this.$children.$get($i);
        $shift = $e.$findBack(0, $stringIndex, $testString, $matchResult);
        if ($shift >= 0)
            break;
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_NegativeLookBehind_hasConsumed = ($this, $matchResult) => {
    return 0;
},
eycdaca_AceAnnotation = $rt_classWithoutFields(cggcc_JavaScriptObject),
eycdaca_AceAnnotation__init_ = ($this, $value) => {
    cggcc_JavaScriptObject__init_($this, $value);
},
eycdaca_AceAnnotation__init_0 = var_0 => {
    let var_1 = new eycdaca_AceAnnotation();
    eycdaca_AceAnnotation__init_(var_1, var_0);
    return var_1;
},
eycdaca_AceAnnotation_create = ($row, $column, $text, $type) => {
    return eycdaca_AceAnnotation__init_0(eycdaca_AceAnnotation_make$js_body$_3($row, $column, $rt_ustr($text), $rt_ustr($type)));
},
eycdaca_AceAnnotation_make$js_body$_3 = (var$1, var$2, var$3, var$4) => {
    return { row: var$1, column: var$2, text: var$3, type: var$4 };
},
jur_BackReferenceSet = $rt_classWithoutFields(jur_CIBackReferenceSet),
jur_BackReferenceSet__init_ = ($this, var$1, var$2) => {
    jur_CIBackReferenceSet__init_($this, var$1, var$2);
},
jur_BackReferenceSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_BackReferenceSet();
    jur_BackReferenceSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_BackReferenceSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $group, $shift;
    $group = $this.$getString($matchResult);
    if ($group !== null && ($stringIndex + jl_String_length($group) | 0) <= $matchResult.$getRightBound()) {
        $shift = !jl_String_startsWith0($testString.$toString(), $group, $stringIndex) ? (-1) : jl_String_length($group);
        if ($shift >= 0) {
            $matchResult.$setConsumed($this.$consCounter1, $shift);
            return $this.$next2.$matches($stringIndex + $shift | 0, $testString, $matchResult);
        }
        return (-1);
    }
    return (-1);
},
jur_BackReferenceSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $group, $strLength, $testStr, var$7;
    $group = $this.$getString($matchResult);
    $strLength = $matchResult.$getLeftBound();
    if ($group !== null && ($strIndex + jl_String_length($group) | 0) <= $strLength) {
        $testStr = $testString.$toString();
        while (true) {
            if ($strIndex > $strLength)
                return (-1);
            var$7 = jl_String_indexOf0($testStr, $group, $strIndex);
            if (var$7 < 0)
                return (-1);
            if ($this.$next2.$matches(var$7 + jl_String_length($group) | 0, $testString, $matchResult) >= 0)
                break;
            $strIndex = var$7 + 1 | 0;
        }
        return var$7;
    }
    return (-1);
},
jur_BackReferenceSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let $group, $testStr, var$7;
    $group = $this.$getString($matchResult);
    if ($group !== null) {
        $testStr = $testString.$toString();
        a: {
            while (true) {
                if ($lastIndex < $strIndex)
                    return (-1);
                var$7 = jl_String_lastIndexOf0($testStr, $group, $lastIndex);
                if (var$7 < 0)
                    break a;
                if (var$7 < $strIndex)
                    break a;
                if ($this.$next2.$matches(var$7 + jl_String_length($group) | 0, $testString, $matchResult) >= 0)
                    break;
                $lastIndex = var$7 + (-1) | 0;
            }
            return var$7;
        }
        return (-1);
    }
    return (-1);
},
jur_BackReferenceSet_first = ($this, $set) => {
    return 1;
};
function jur_DotQuantifierSet() {
    jur_QuantifierSet.call(this);
    this.$lt = null;
}
let jur_DotQuantifierSet__init_ = ($this, $innerSet, $next, $type, $lt) => {
    jur_QuantifierSet__init_($this, $innerSet, $next, $type);
    $this.$lt = $lt;
},
jur_DotQuantifierSet__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_DotQuantifierSet();
    jur_DotQuantifierSet__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_DotQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, $startSearch;
    $strLength = $matchResult.$getRightBound();
    $startSearch = jur_DotQuantifierSet_findLineTerminator($this, $stringIndex, $strLength, $testString);
    if ($startSearch >= 0)
        $strLength = $startSearch;
    if ($strLength <= $stringIndex)
        return $this.$next2.$matches($stringIndex, $testString, $matchResult);
    return $this.$next2.$findBack($stringIndex, $strLength, $testString, $matchResult);
},
jur_DotQuantifierSet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, $res, $nextSearch, var$7, $leftBound;
    $strLength = $matchResult.$getRightBound();
    $res = $this.$next2.$find($stringIndex, $testString, $matchResult);
    if ($res >= 0) {
        $nextSearch = jur_DotQuantifierSet_findLineTerminator($this, $res, $strLength, $testString);
        if ($nextSearch >= 0)
            $strLength = $nextSearch;
        var$7 = $this.$next2.$findBack($res, $strLength, $testString, $matchResult);
        var$7 = jl_Math_max($res, var$7);
        $leftBound = var$7 > 0 ? jur_DotQuantifierSet_findBackLineTerminator($this, $stringIndex, var$7 - 1 | 0, $testString) : var$7 ? (-1) : 0;
        if ($leftBound >= $stringIndex)
            $stringIndex = $leftBound >= var$7 ? $leftBound : $leftBound + 1 | 0;
        return $stringIndex;
    }
    return (-1);
},
jur_DotQuantifierSet_findLineTerminator = ($this, $i, $to, $testString) => {
    while (true) {
        if ($i >= $to)
            return (-1);
        if ($this.$lt.$isLineTerminator($testString.$charAt($i)))
            break;
        $i = $i + 1 | 0;
    }
    return $i;
},
jur_DotQuantifierSet_findBackLineTerminator = ($this, $from, $i, $testString) => {
    while (true) {
        if ($i < $from)
            return (-1);
        if ($this.$lt.$isLineTerminator($testString.$charAt($i)))
            break;
        $i = $i + (-1) | 0;
    }
    return $i;
},
jur_AbstractCharClass$LazyJavaJavaIdentifierPart = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaJavaIdentifierPart();
    jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaJavaIdentifierPart_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
},
juf_Consumer = $rt_classWithoutFields(0),
cggucu_Panel$doDetachChildren$lambda$_8_0 = $rt_classWithoutFields(),
cggucu_Panel$doDetachChildren$lambda$_8_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cggucu_Panel$doDetachChildren$lambda$_8_0__init_0 = () => {
    let var_0 = new cggucu_Panel$doDetachChildren$lambda$_8_0();
    cggucu_Panel$doDetachChildren$lambda$_8_0__init_(var_0);
    return var_0;
},
cggucu_Panel$doDetachChildren$lambda$_8_0_accept0 = (var$0, var$1) => {
    cggucu_Panel$doDetachChildren$lambda$_8_0_accept(var$0, var$1);
},
cggucu_Panel$doDetachChildren$lambda$_8_0_accept = (var$0, var$1) => {
    cggucu_Panel_lambda$doDetachChildren$1(var$1);
};
function ju_HashMap$AbstractMapIterator() {
    let a = this; jl_Object.call(a);
    a.$position0 = 0;
    a.$expectedModCount = 0;
    a.$futureEntry = null;
    a.$currentEntry = null;
    a.$prevEntry = null;
    a.$associatedMap = null;
}
let ju_HashMap$AbstractMapIterator__init_ = ($this, $hm) => {
    jl_Object__init_($this);
    $this.$associatedMap = $hm;
    $this.$expectedModCount = $hm.$modCount;
    $this.$futureEntry = null;
},
ju_HashMap$AbstractMapIterator__init_0 = var_0 => {
    let var_1 = new ju_HashMap$AbstractMapIterator();
    ju_HashMap$AbstractMapIterator__init_(var_1, var_0);
    return var_1;
},
ju_HashMap$AbstractMapIterator_hasNext = $this => {
    if ($this.$futureEntry === null) {
        while ($this.$position0 < $this.$associatedMap.$elementData.data.length) {
            if ($this.$associatedMap.$elementData.data[$this.$position0] !== null)
                return 1;
            $this.$position0 = $this.$position0 + 1 | 0;
        }
        return 0;
    }
    return 1;
},
ju_HashMap$AbstractMapIterator_checkConcurrentMod = $this => {
    if ($this.$expectedModCount != $this.$associatedMap.$modCount)
        $rt_throw(ju_ConcurrentModificationException__init_());
},
ju_HashMap$AbstractMapIterator_makeNext = $this => {
    let var$1, var$2;
    ju_HashMap$AbstractMapIterator_checkConcurrentMod($this);
    if ($this.$hasNext()) {
        if ($this.$futureEntry === null) {
            var$1 = $this.$associatedMap.$elementData.data;
            var$2 = $this.$position0;
            $this.$position0 = var$2 + 1 | 0;
            $this.$currentEntry = var$1[var$2];
            $this.$futureEntry = $this.$currentEntry.$next3;
            $this.$prevEntry = null;
        } else {
            if ($this.$currentEntry !== null)
                $this.$prevEntry = $this.$currentEntry;
            $this.$currentEntry = $this.$futureEntry;
            $this.$futureEntry = $this.$futureEntry.$next3;
        }
        return;
    }
    $rt_throw(ju_NoSuchElementException__init_());
},
ju_HashMap$AbstractMapIterator_remove = $this => {
    let $index, var$2;
    ju_HashMap$AbstractMapIterator_checkConcurrentMod($this);
    if ($this.$currentEntry !== null) {
        if ($this.$prevEntry !== null)
            $this.$prevEntry.$next3 = $this.$currentEntry.$next3;
        else {
            $index = $this.$currentEntry.$origKeyHash & ($this.$associatedMap.$elementData.data.length - 1 | 0);
            $this.$associatedMap.$elementData.data[$index] = $this.$associatedMap.$elementData.data[$index].$next3;
        }
        $this.$currentEntry = null;
        $this.$expectedModCount = $this.$expectedModCount + 1 | 0;
        var$2 = $this.$associatedMap;
        var$2.$modCount = var$2.$modCount + 1 | 0;
        var$2 = $this.$associatedMap;
        var$2.$elementCount = var$2.$elementCount - 1 | 0;
        return;
    }
    $rt_throw(jl_IllegalStateException__init_1());
},
ju_Iterator = $rt_classWithoutFields(0),
ju_HashMap$ValueIterator = $rt_classWithoutFields(ju_HashMap$AbstractMapIterator),
ju_HashMap$ValueIterator__init_ = ($this, $map) => {
    ju_HashMap$AbstractMapIterator__init_($this, $map);
},
ju_HashMap$ValueIterator__init_0 = var_0 => {
    let var_1 = new ju_HashMap$ValueIterator();
    ju_HashMap$ValueIterator__init_(var_1, var_0);
    return var_1;
},
ju_HashMap$ValueIterator_next = $this => {
    ju_HashMap$AbstractMapIterator_makeNext($this);
    return $this.$currentEntry.$value;
},
jur_UnifiedQuantifierSet = $rt_classWithoutFields(jur_LeafQuantifierSet),
jur_UnifiedQuantifierSet__init_ = ($this, $quant) => {
    jur_LeafQuantifierSet__init_($this, $quant.$getInnerSet(), $quant.$getNext(), $quant.$getType0());
    $this.$innerSet.$setNext($this);
},
jur_UnifiedQuantifierSet__init_0 = var_0 => {
    let var_1 = new jur_UnifiedQuantifierSet();
    jur_UnifiedQuantifierSet__init_(var_1, var_0);
    return var_1;
},
jur_UnifiedQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4;
    while (($stringIndex + $this.$leaf.$charCount() | 0) <= $matchResult.$getRightBound()) {
        var$4 = $this.$leaf;
        if (var$4.$accepts($stringIndex, $testString) <= 0)
            break;
        $stringIndex = $stringIndex + $this.$leaf.$charCount() | 0;
    }
    return $this.$next2.$matches($stringIndex, $testString, $matchResult);
},
jur_UnifiedQuantifierSet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $startSearch, $newSearch, $newSearch_0;
    $startSearch = $this.$next2.$find($stringIndex, $testString, $matchResult);
    if ($startSearch >= 0) {
        $newSearch = $startSearch - $this.$leaf.$charCount() | 0;
        while ($newSearch >= $stringIndex && $this.$leaf.$accepts($newSearch, $testString) > 0) {
            $newSearch_0 = $newSearch - $this.$leaf.$charCount() | 0;
            $startSearch = $newSearch;
            $newSearch = $newSearch_0;
        }
        return $startSearch;
    }
    return (-1);
},
jlr_Type = $rt_classWithoutFields(0);
function jl_Class() {
    let a = this; jl_Object.call(a);
    a.$flags1 = 0;
    a.$classInfo = null;
    a.$name3 = null;
}
let jl_Class__init_0 = ($this, $classInfo) => {
    jl_Object__init_($this);
    $this.$classInfo = $classInfo;
},
jl_Class__init_ = var_0 => {
    let var_1 = new jl_Class();
    jl_Class__init_0(var_1, var_0);
    return var_1;
},
jl_Class_createClass = $classInfo => {
    return jl_Class__init_($classInfo);
},
jl_Class_getClassInfo = $this => {
    return $this.$classInfo;
},
jl_Class_isInstance = ($this, $obj) => {
    return !($obj !== null && jl_Class_isAssignableFrom($this, jl_Object_getClass($obj))) ? 0 : 1;
},
jl_Class_isAssignableFrom = ($this, $obj) => {
    return $rt_isAssignable($obj.$classInfo, $this.$classInfo);
},
jl_Class_getName = $this => {
    let $metadataName, $result, $itemType, $itemName, var$5;
    if (!($this.$flags1 & 1)) {
        $this.$flags1 = $this.$flags1 | 1;
        $metadataName = $this.$classInfo[$rt_meta].name;
        $result = $metadataName === null ? null : $rt_str($metadataName);
        if ($result === null) {
            $itemType = $this.$classInfo[$rt_meta].itemType;
            if ($itemType !== null) {
                $itemName = jl_Class_getName($rt_cls($itemType));
                if ($itemName !== null) {
                    if ($itemType[$rt_meta].itemType !== null) {
                        var$5 = jl_StringBuilder__init_();
                        jl_StringBuilder_append(jl_StringBuilder_append1(var$5, 91), $itemName);
                        $result = jl_StringBuilder_toString(var$5);
                    } else {
                        var$5 = jl_StringBuilder__init_();
                        jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append(var$5, $rt_s(253)), $itemName), 59);
                        $result = jl_StringBuilder_toString(var$5);
                    }
                }
            }
        }
        $this.$name3 = $result;
    }
    return $this.$name3;
},
jl_Class_isPrimitive = $this => {
    return !$this.$classInfo[$rt_meta].primitiveKind ? 0 : 1;
},
jl_Class_getComponentType = $this => {
    let $itemTypeInfo;
    $itemTypeInfo = $this.$classInfo[$rt_meta].itemType;
    return $itemTypeInfo === null ? null : $rt_cls($itemTypeInfo);
};
function ju_BitSet() {
    let a = this; jl_Object.call(a);
    a.$data = null;
    a.$length0 = 0;
}
let ju_BitSet__init_0 = $this => {
    jl_Object__init_($this);
    $this.$data = $rt_createIntArray(2);
},
ju_BitSet__init_1 = () => {
    let var_0 = new ju_BitSet();
    ju_BitSet__init_0(var_0);
    return var_0;
},
ju_BitSet__init_ = ($this, $nbits) => {
    jl_Object__init_($this);
    if ($nbits >= 0) {
        $this.$data = $rt_createIntArray((($nbits + 32 | 0) - 1 | 0) / 32 | 0);
        return;
    }
    $rt_throw(jl_NegativeArraySizeException__init_0());
},
ju_BitSet__init_2 = var_0 => {
    let var_1 = new ju_BitSet();
    ju_BitSet__init_(var_1, var_0);
    return var_1;
},
ju_BitSet_set = ($this, $bitIndex) => {
    let $index, var$3;
    if ($bitIndex >= 0) {
        $index = $bitIndex / 32 | 0;
        if ($bitIndex >= $this.$length0) {
            ju_BitSet_ensureCapacity($this, $index + 1 | 0);
            $this.$length0 = $bitIndex + 1 | 0;
        }
        var$3 = $this.$data.data;
        var$3[$index] = var$3[$index] | 1 << ($bitIndex % 32 | 0);
        return;
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
ju_BitSet_set0 = ($this, $fromIndex, $toIndex) => {
    let var$3, $fromDataIndex, $toDataIndex, var$6, $i;
    if ($fromIndex >= 0) {
        var$3 = $rt_compare($fromIndex, $toIndex);
        if (var$3 <= 0) {
            if (var$3) {
                $fromDataIndex = $fromIndex / 32 | 0;
                $toDataIndex = $toIndex / 32 | 0;
                if ($toIndex > $this.$length0) {
                    ju_BitSet_ensureCapacity($this, $toDataIndex + 1 | 0);
                    $this.$length0 = $toIndex;
                }
                if ($fromDataIndex == $toDataIndex) {
                    var$6 = $this.$data.data;
                    var$6[$fromDataIndex] = var$6[$fromDataIndex] | ju_BitSet_trailingZeroBits($this, $fromIndex) & ju_BitSet_trailingOneBits($this, $toIndex);
                } else {
                    var$6 = $this.$data.data;
                    var$6[$fromDataIndex] = var$6[$fromDataIndex] | ju_BitSet_trailingZeroBits($this, $fromIndex);
                    $i = $fromDataIndex + 1 | 0;
                    while ($i < $toDataIndex) {
                        $this.$data.data[$i] = (-1);
                        $i = $i + 1 | 0;
                    }
                    if ($toIndex & 31) {
                        var$6 = $this.$data.data;
                        var$6[$toDataIndex] = var$6[$toDataIndex] | ju_BitSet_trailingOneBits($this, $toIndex);
                    }
                }
                return;
            }
            return;
        }
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
ju_BitSet_trailingZeroBits = ($this, $num) => {
    let var$2;
    var$2 = $num % 32 | 0;
    return (-1) << var$2;
},
ju_BitSet_trailingOneBits = ($this, $num) => {
    let var$2;
    var$2 = $num % 32 | 0;
    return !var$2 ? 0 : (-1) >>> (32 - var$2 | 0) | 0;
},
ju_BitSet_clear0 = ($this, $bitIndex) => {
    let $index, var$3;
    if ($bitIndex >= 0) {
        $index = $bitIndex / 32 | 0;
        if ($index < $this.$data.data.length) {
            var$3 = $this.$data.data;
            var$3[$index] = var$3[$index] & jl_Integer_rotateLeft((-2), $bitIndex % 32 | 0);
            if ($bitIndex == ($this.$length0 - 1 | 0))
                ju_BitSet_recalculateLength($this);
        }
        return;
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
ju_BitSet_clear = ($this, $fromIndex, $toIndex) => {
    let var$3, $fromDataIndex, $toDataIndex, var$6, $i;
    if ($fromIndex >= 0 && $fromIndex <= $toIndex) {
        if ($fromIndex < $this.$length0) {
            var$3 = jl_Math_min($this.$length0, $toIndex);
            if ($fromIndex != var$3) {
                $fromDataIndex = $fromIndex / 32 | 0;
                $toDataIndex = var$3 / 32 | 0;
                if ($fromDataIndex == $toDataIndex) {
                    var$6 = $this.$data.data;
                    var$6[$fromDataIndex] = var$6[$fromDataIndex] & (ju_BitSet_trailingOneBits($this, $fromIndex) | ju_BitSet_trailingZeroBits($this, var$3));
                } else {
                    var$6 = $this.$data.data;
                    var$6[$fromDataIndex] = var$6[$fromDataIndex] & ju_BitSet_trailingOneBits($this, $fromIndex);
                    $i = $fromDataIndex + 1 | 0;
                    while ($i < $toDataIndex) {
                        $this.$data.data[$i] = 0;
                        $i = $i + 1 | 0;
                    }
                    if (var$3 & 31) {
                        var$6 = $this.$data.data;
                        var$6[$toDataIndex] = var$6[$toDataIndex] & ju_BitSet_trailingZeroBits($this, var$3);
                    }
                }
                ju_BitSet_recalculateLength($this);
                return;
            }
            return;
        }
        return;
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
ju_BitSet_get = ($this, $bitIndex) => {
    let $index;
    if ($bitIndex >= 0) {
        $index = $bitIndex / 32 | 0;
        return !($index < $this.$data.data.length && $this.$data.data[$index] & 1 << ($bitIndex % 32 | 0)) ? 0 : 1;
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
ju_BitSet_nextSetBit = ($this, $fromIndex) => {
    let $index, $val, var$4, $top, $i;
    if ($fromIndex >= 0) {
        if ($fromIndex < $this.$length0) {
            $index = $fromIndex / 32 | 0;
            $val = $this.$data.data[$index];
            var$4 = $val >>> ($fromIndex % 32 | 0) | 0;
            if (!var$4) {
                $top = ($this.$length0 + 31 | 0) / 32 | 0;
                $i = $index + 1 | 0;
                while ($i < $top) {
                    if ($this.$data.data[$i])
                        return ($i * 32 | 0) + jl_Integer_numberOfTrailingZeros($this.$data.data[$i]) | 0;
                    $i = $i + 1 | 0;
                }
                return (-1);
            }
            return jl_Integer_numberOfTrailingZeros(var$4) + $fromIndex | 0;
        }
        return (-1);
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
ju_BitSet_nextClearBit = ($this, $fromIndex) => {
    let $index, $val, var$4, $top, $i;
    if ($fromIndex >= 0) {
        if ($fromIndex < $this.$length0) {
            $index = $fromIndex / 32 | 0;
            $val = $this.$data.data[$index] ^ (-1);
            var$4 = $val >>> ($fromIndex % 32 | 0) | 0;
            if (!var$4) {
                $top = ($this.$length0 + 31 | 0) / 32 | 0;
                $i = $index + 1 | 0;
                while ($i < $top) {
                    if ($this.$data.data[$i] != (-1))
                        return ($i * 32 | 0) + jl_Integer_numberOfTrailingZeros($this.$data.data[$i] ^ (-1)) | 0;
                    $i = $i + 1 | 0;
                }
                return $this.$length0;
            }
            return jl_Integer_numberOfTrailingZeros(var$4) + $fromIndex | 0;
        }
        return $fromIndex;
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
ju_BitSet_ensureCapacity = ($this, $capacity) => {
    let $newArrayLength;
    if ($this.$data.data.length < $capacity) {
        $newArrayLength = jl_Math_max(($capacity * 3 | 0) / 2 | 0, ($this.$data.data.length * 2 | 0) + 1 | 0);
        $this.$data = ju_Arrays_copyOf2($this.$data, $newArrayLength);
        return;
    }
},
ju_BitSet_recalculateLength = $this => {
    let $top, $i, $sz;
    $top = ($this.$length0 + 31 | 0) / 32 | 0;
    $this.$length0 = $top * 32 | 0;
    $i = $top - 1 | 0;
    a: {
        while (true) {
            if ($i < 0)
                break a;
            $sz = jl_Integer_numberOfLeadingZeros($this.$data.data[$i]);
            if ($sz < 32)
                break;
            $i = $i + (-1) | 0;
            $this.$length0 = $this.$length0 - 32 | 0;
        }
        $this.$length0 = $this.$length0 - $sz | 0;
    }
},
ju_BitSet_intersects = ($this, $set) => {
    let $sz, $i;
    $sz = jl_Math_min($this.$data.data.length, $set.$data.data.length);
    $i = 0;
    while ($i < $sz) {
        if ($this.$data.data[$i] & $set.$data.data[$i])
            return 1;
        $i = $i + 1 | 0;
    }
    return 0;
},
ju_BitSet_and = ($this, $set) => {
    let $i, $i_0, var$4;
    $i = jl_Math_min($this.$data.data.length, $set.$data.data.length);
    $i_0 = 0;
    while ($i_0 < $i) {
        var$4 = $this.$data.data;
        var$4[$i_0] = var$4[$i_0] & $set.$data.data[$i_0];
        $i_0 = $i_0 + 1 | 0;
    }
    while ($i < $this.$data.data.length) {
        $this.$data.data[$i] = 0;
        $i = $i + 1 | 0;
    }
    $this.$length0 = jl_Math_min($this.$length0, $set.$length0);
    ju_BitSet_recalculateLength($this);
},
ju_BitSet_andNot = ($this, $set) => {
    let $sz, $i, var$4;
    $sz = jl_Math_min($this.$data.data.length, $set.$data.data.length);
    $i = 0;
    while ($i < $sz) {
        var$4 = $this.$data.data;
        var$4[$i] = var$4[$i] & ($set.$data.data[$i] ^ (-1));
        $i = $i + 1 | 0;
    }
    ju_BitSet_recalculateLength($this);
},
ju_BitSet_or = ($this, $set) => {
    let $sz, $i, var$4;
    $this.$length0 = jl_Math_max($this.$length0, $set.$length0);
    ju_BitSet_ensureCapacity($this, ($this.$length0 + 31 | 0) / 32 | 0);
    $sz = jl_Math_min($this.$data.data.length, $set.$data.data.length);
    $i = 0;
    while ($i < $sz) {
        var$4 = $this.$data.data;
        var$4[$i] = var$4[$i] | $set.$data.data[$i];
        $i = $i + 1 | 0;
    }
},
ju_BitSet_xor = ($this, $set) => {
    let $sz, $i, var$4;
    $this.$length0 = jl_Math_max($this.$length0, $set.$length0);
    ju_BitSet_ensureCapacity($this, ($this.$length0 + 31 | 0) / 32 | 0);
    $sz = jl_Math_min($this.$data.data.length, $set.$data.data.length);
    $i = 0;
    while ($i < $sz) {
        var$4 = $this.$data.data;
        var$4[$i] = var$4[$i] ^ $set.$data.data[$i];
        $i = $i + 1 | 0;
    }
    ju_BitSet_recalculateLength($this);
},
ju_BitSet_isEmpty = $this => {
    return $this.$length0 ? 0 : 1;
};
function jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1() {
    jur_AbstractCharClass.call(this);
    this.$this$017 = null;
}
let jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1__init_ = ($this, $this$0) => {
    $this.$this$017 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1();
    jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1_contains = ($this, $ch) => {
    return jl_Character_isJavaIdentifierStart($ch);
},
ju_Arrays = $rt_classWithoutFields(),
ju_Arrays_copyOf1 = ($array, $length) => {
    let var$3, $result, $sz, $i;
    var$3 = $array.data;
    $result = $rt_createCharArray($length);
    $sz = jl_Math_min($length, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
ju_Arrays_copyOf = ($array, $length) => {
    let var$3, $result, $sz, $i;
    var$3 = $array.data;
    $result = $rt_createByteArray($length);
    $sz = jl_Math_min($length, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
ju_Arrays_copyOf2 = ($array, $length) => {
    let var$3, $result, $sz, $i;
    var$3 = $array.data;
    $result = $rt_createIntArray($length);
    $sz = jl_Math_min($length, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
ju_Arrays_copyOf0 = ($original, $newLength) => {
    let var$3, $result, $sz, $i;
    var$3 = $original.data;
    $result = jlr_Array_newInstance(jl_Class_getComponentType(jl_Object_getClass($original)), $newLength);
    $sz = jl_Math_min($newLength, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
ju_Arrays_fill0 = ($a, $fromIndex, $toIndex, $val) => {
    let var$5, var$6;
    if ($fromIndex <= $toIndex) {
        while ($fromIndex < $toIndex) {
            var$5 = $a.data;
            var$6 = $fromIndex + 1 | 0;
            var$5[$fromIndex] = $val;
            $fromIndex = var$6;
        }
        return;
    }
    $rt_throw(jl_IllegalArgumentException__init_());
},
ju_Arrays_fill = ($a, $val) => {
    ju_Arrays_fill0($a, 0, $a.data.length, $val);
},
ju_Arrays_fill4 = ($a, $fromIndex, $toIndex, $val) => {
    let var$5, var$6;
    if ($fromIndex <= $toIndex) {
        while ($fromIndex < $toIndex) {
            var$5 = $a.data;
            var$6 = $fromIndex + 1 | 0;
            var$5[$fromIndex] = $val;
            $fromIndex = var$6;
        }
        return;
    }
    $rt_throw(jl_IllegalArgumentException__init_());
},
ju_Arrays_fill2 = ($a, $val) => {
    ju_Arrays_fill4($a, 0, $a.data.length, $val);
},
ju_Arrays_fill1 = ($a, $fromIndex, $toIndex, $val) => {
    let var$5, var$6;
    if ($fromIndex <= $toIndex) {
        while ($fromIndex < $toIndex) {
            var$5 = $a.data;
            var$6 = $fromIndex + 1 | 0;
            var$5[$fromIndex] = $val;
            $fromIndex = var$6;
        }
        return;
    }
    $rt_throw(jl_IllegalArgumentException__init_());
},
ju_Arrays_fill3 = ($a, $fromIndex, $toIndex, $val) => {
    let var$5, var$6;
    if ($fromIndex <= $toIndex) {
        while ($fromIndex < $toIndex) {
            var$5 = $a.data;
            var$6 = $fromIndex + 1 | 0;
            var$5[$fromIndex] = $val;
            $fromIndex = var$6;
        }
        return;
    }
    $rt_throw(jl_IllegalArgumentException__init_());
},
ju_Arrays_asList = $a => {
    ju_Objects_requireNonNull($a);
    return ju_Arrays$ArrayAsList__init_0($a);
},
otjdx_Node = $rt_classWithoutFields(0),
otjdx_Document = $rt_classWithoutFields(0);
function jur_CharSet() {
    jur_LeafSet.call(this);
    this.$ch0 = 0;
}
let jur_CharSet__init_0 = ($this, $ch) => {
    jur_LeafSet__init_($this);
    $this.$ch0 = $ch;
},
jur_CharSet__init_ = var_0 => {
    let var_1 = new jur_CharSet();
    jur_CharSet__init_0(var_1, var_0);
    return var_1;
},
jur_CharSet_charCount = $this => {
    return 1;
},
jur_CharSet_accepts = ($this, $strIndex, $testString) => {
    return $this.$ch0 != $testString.$charAt($strIndex) ? (-1) : 1;
},
jur_CharSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $testStr, $strLength, var$6, var$7;
    if ($testString instanceof jl_String) {
        $testStr = $testString;
        $strLength = $matchResult.$getRightBound();
        while (true) {
            if ($strIndex >= $strLength)
                return (-1);
            var$6 = jl_String_indexOf($testStr, $this.$ch0, $strIndex);
            if (var$6 < 0)
                return (-1);
            var$7 = $this.$next2;
            $strIndex = var$6 + 1 | 0;
            if (var$7.$matches($strIndex, $testString, $matchResult) >= 0)
                break;
        }
        return var$6;
    }
    return jur_AbstractSet_find($this, $strIndex, $testString, $matchResult);
},
jur_CharSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let $testStr, var$6;
    if ($testString instanceof jl_String) {
        $testStr = $testString;
        a: {
            while (true) {
                if ($lastIndex < $strIndex)
                    return (-1);
                var$6 = jl_String_lastIndexOf($testStr, $this.$ch0, $lastIndex);
                if (var$6 < 0)
                    break a;
                if (var$6 < $strIndex)
                    break a;
                if ($this.$next2.$matches(var$6 + 1 | 0, $testString, $matchResult) >= 0)
                    break;
                $lastIndex = var$6 + (-1) | 0;
            }
            return var$6;
        }
        return (-1);
    }
    return jur_AbstractSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult);
},
jur_CharSet_getChar = $this => {
    return $this.$ch0;
},
jur_CharSet_first = ($this, $set) => {
    if (!($set instanceof jur_CharSet)) {
        if ($set instanceof jur_RangeSet)
            return $set.$accepts(0, jl_Character_toString($this.$ch0)) <= 0 ? 0 : 1;
        if (!($set instanceof jur_SupplRangeSet)) {
            if ($set instanceof jur_SupplCharSet)
                return 0;
            return 1;
        }
        return $set.$contains($this.$ch0);
    }
    return $set.$getChar() != $this.$ch0 ? 0 : 1;
};
function jur_CharClass$3() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt = 0;
    a.$val$cc = null;
    a.$this$03 = null;
}
let jur_CharClass$3__init_ = ($this, $this$0, var$2, var$3) => {
    $this.$this$03 = $this$0;
    $this.$val$curAlt = var$2;
    $this.$val$cc = var$3;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$3__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_CharClass$3();
    jur_CharClass$3__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_CharClass$3_contains = ($this, $ch) => {
    return !(!($this.$val$curAlt ^ $this.$this$03.$bits.$get4($ch)) && !($this.$val$curAlt ^ $this.$this$03.$inverted ^ $this.$val$cc.$contains($ch))) ? 1 : 0;
};
function jur_CharClass$4() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt9 = 0;
    a.$val$nb4 = null;
    a.$val$cc2 = null;
    a.$this$035 = null;
}
let jur_CharClass$4__init_ = ($this, $this$0, var$2, var$3, var$4) => {
    $this.$this$035 = $this$0;
    $this.$val$curAlt9 = var$2;
    $this.$val$nb4 = var$3;
    $this.$val$cc2 = var$4;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$4__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_CharClass$4();
    jur_CharClass$4__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_CharClass$4_contains = ($this, $ch) => {
    return $this.$val$curAlt9 ^ (!(!$this.$val$nb4.$contains($ch) && !$this.$val$cc2.$contains($ch)) ? 1 : 0) ? 0 : 1;
};
function jur_CharClass$1() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$cc3 = null;
    a.$this$011 = null;
}
let jur_CharClass$1__init_ = ($this, $this$0, var$2) => {
    $this.$this$011 = $this$0;
    $this.$val$cc3 = var$2;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$1__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CharClass$1();
    jur_CharClass$1__init_(var_2, var_0, var_1);
    return var_2;
},
jur_CharClass$1_contains = ($this, $ch) => {
    return $this.$val$cc3.$contains($ch);
};
function jur_CharClass$2() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt0 = 0;
    a.$val$cc1 = null;
    a.$this$00 = null;
}
let jur_CharClass$2__init_ = ($this, $this$0, var$2, var$3) => {
    $this.$this$00 = $this$0;
    $this.$val$curAlt0 = var$2;
    $this.$val$cc1 = var$3;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$2__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_CharClass$2();
    jur_CharClass$2__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_CharClass$2_contains = ($this, $ch) => {
    return !(!($this.$val$curAlt0 ^ $this.$this$00.$bits.$get4($ch)) && !($this.$val$curAlt0 ^ $this.$this$00.$inverted ^ $this.$val$cc1.$contains($ch))) ? 0 : 1;
};
function jur_CharClass$7() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz7 = null;
    a.$this$036 = null;
}
let jur_CharClass$7__init_ = ($this, $this$0, var$2) => {
    $this.$this$036 = $this$0;
    $this.$val$clazz7 = var$2;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$7__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CharClass$7();
    jur_CharClass$7__init_(var_2, var_0, var_1);
    return var_2;
},
jur_CharClass$7_contains = ($this, $ch) => {
    return $this.$val$clazz7.$contains($ch);
},
cggdc_VideoElement = $rt_classWithoutFields(cggdc_Element),
cggdc_VideoElement__init_ = ($this, $element) => {
    cggdc_Element__init_($this, $element);
},
cggdc_VideoElement__init_0 = var_0 => {
    let var_1 = new cggdc_VideoElement();
    cggdc_VideoElement__init_(var_1, var_0);
    return var_1;
};
function jur_CharClass$8() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz1 = null;
    a.$val$curAlt2 = 0;
    a.$this$05 = null;
}
let jur_CharClass$8__init_ = ($this, $this$0, var$2, var$3) => {
    $this.$this$05 = $this$0;
    $this.$val$clazz1 = var$2;
    $this.$val$curAlt2 = var$3;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$8__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_CharClass$8();
    jur_CharClass$8__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_CharClass$8_contains = ($this, $ch) => {
    return !(!$this.$val$clazz1.$contains($ch) && !($this.$val$curAlt2 ^ $this.$this$05.$bits.$get4($ch))) ? 0 : 1;
};
function jur_CharClass$5() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt7 = 0;
    a.$val$nb3 = null;
    a.$val$cc0 = null;
    a.$this$021 = null;
}
let jur_CharClass$5__init_ = ($this, $this$0, var$2, var$3, var$4) => {
    $this.$this$021 = $this$0;
    $this.$val$curAlt7 = var$2;
    $this.$val$nb3 = var$3;
    $this.$val$cc0 = var$4;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$5__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_CharClass$5();
    jur_CharClass$5__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_CharClass$5_contains = ($this, $ch) => {
    return $this.$val$curAlt7 ^ (!(!$this.$val$nb3.$contains($ch) && !$this.$val$cc0.$contains($ch)) ? 1 : 0);
};
function jur_CharClass$6() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz6 = null;
    a.$this$023 = null;
}
let jur_CharClass$6__init_ = ($this, $this$0, var$2) => {
    $this.$this$023 = $this$0;
    $this.$val$clazz6 = var$2;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$6__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CharClass$6();
    jur_CharClass$6__init_(var_2, var_0, var_1);
    return var_2;
},
jur_CharClass$6_contains = ($this, $ch) => {
    return $this.$val$clazz6.$contains($ch) ? 0 : 1;
},
ju_ListIterator = $rt_classWithoutFields(0),
ju_Collections$5 = $rt_classWithoutFields(),
ju_Collections$5__init_ = $this => {
    jl_Object__init_($this);
},
ju_Collections$5__init_0 = () => {
    let var_0 = new ju_Collections$5();
    ju_Collections$5__init_(var_0);
    return var_0;
};
function jur_DotSet() {
    jur_JointSet.call(this);
    this.$lt0 = null;
}
let jur_DotSet__init_ = ($this, $lt) => {
    jur_JointSet__init_($this);
    $this.$lt0 = $lt;
},
jur_DotSet__init_0 = var_0 => {
    let var_1 = new jur_DotSet();
    jur_DotSet__init_(var_1, var_0);
    return var_1;
},
jur_DotSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, var$5, $high, var$7, $low;
    $strLength = $matchResult.$getRightBound();
    var$5 = $stringIndex + 1 | 0;
    if (var$5 <= $strLength) {
        $high = $testString.$charAt($stringIndex);
        if (jl_Character_isHighSurrogate($high)) {
            var$7 = $stringIndex + 2 | 0;
            if (var$7 <= $strLength) {
                $low = $testString.$charAt(var$5);
                if (jl_Character_isSurrogatePair($high, $low))
                    return $this.$lt0.$isLineTerminator(jl_Character_toCodePoint($high, $low)) ? (-1) : $this.$next2.$matches(var$7, $testString, $matchResult);
            }
        }
        return $this.$lt0.$isLineTerminator($high) ? (-1) : $this.$next2.$matches(var$5, $testString, $matchResult);
    }
    $matchResult.$hitEnd = 1;
    return (-1);
},
jur_DotSet_setNext = ($this, $next) => {
    $this.$next2 = $next;
},
jur_DotSet_getType = $this => {
    return (-2147483602);
},
jur_DotSet_hasConsumed = ($this, $matchResult) => {
    return 1;
},
ju_List = $rt_classWithoutFields(0);
function ju_AbstractList() {
    ju_AbstractCollection.call(this);
    this.$modCount0 = 0;
}
let ju_AbstractList__init_ = $this => {
    ju_AbstractCollection__init_($this);
},
ju_AbstractList_iterator = $this => {
    return ju_AbstractList$1__init_0($this);
},
ju_RandomAccess = $rt_classWithoutFields(0),
ju_TemplateCollections$AbstractImmutableList = $rt_classWithoutFields(ju_AbstractList),
ju_TemplateCollections$AbstractImmutableList__init_ = $this => {
    ju_AbstractList__init_($this);
},
ju_Collections$3 = $rt_classWithoutFields(ju_TemplateCollections$AbstractImmutableList),
ju_Collections$3__init_ = $this => {
    ju_TemplateCollections$AbstractImmutableList__init_($this);
},
ju_Collections$3__init_0 = () => {
    let var_0 = new ju_Collections$3();
    ju_Collections$3__init_(var_0);
    return var_0;
};
function jur_CharClass$9() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz = null;
    a.$val$curAlt8 = 0;
    a.$this$07 = null;
}
let jur_CharClass$9__init_ = ($this, $this$0, var$2, var$3) => {
    $this.$this$07 = $this$0;
    $this.$val$clazz = var$2;
    $this.$val$curAlt8 = var$3;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$9__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_CharClass$9();
    jur_CharClass$9__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_CharClass$9_contains = ($this, $ch) => {
    return !(!$this.$val$clazz.$contains($ch) && !($this.$val$curAlt8 ^ $this.$this$07.$bits.$get4($ch))) ? 1 : 0;
},
ju_Collections$4 = $rt_classWithoutFields(),
ju_Collections$4__init_ = $this => {
    jl_Object__init_($this);
},
ju_Collections$4__init_0 = () => {
    let var_0 = new ju_Collections$4();
    ju_Collections$4__init_(var_0);
    return var_0;
},
jl_Character = $rt_classWithoutFields(),
jl_Character_TYPE = null,
jl_Character_digitMapping = null,
jl_Character_upperCaseMapping = null,
jl_Character_lowerCaseMapping = null,
jl_Character_classMapping = null,
jl_Character_characterCache = null,
jl_Character_$$metadata$$0 = null,
jl_Character_$$metadata$$1 = null,
jl_Character_$$metadata$$3 = null,
jl_Character_$$metadata$$4 = null,
jl_Character_$callClinit = () => {
    jl_Character_$callClinit = $rt_eraseClinit(jl_Character);
    jl_Character__clinit_();
},
jl_Character_toString = $c => {
    let var$2, var$3;
    jl_Character_$callClinit();
    var$2 = new jl_String;
    var$3 = $rt_createCharArray(1);
    var$3.data[0] = $c;
    jl_String__init_1(var$2, var$3);
    return var$2;
},
jl_Character_isValidCodePoint = $codePoint => {
    jl_Character_$callClinit();
    return !($codePoint >= 0 && $codePoint <= 1114111) ? 0 : 1;
},
jl_Character_isBmpCodePoint = $codePoint => {
    jl_Character_$callClinit();
    return !($codePoint > 0 && $codePoint <= 65535) ? 0 : 1;
},
jl_Character_isSupplementaryCodePoint = $codePoint => {
    jl_Character_$callClinit();
    return !($codePoint >= 65536 && $codePoint <= 1114111) ? 0 : 1;
},
jl_Character_isHighSurrogate = $ch => {
    jl_Character_$callClinit();
    return ($ch & 64512) != 55296 ? 0 : 1;
},
jl_Character_isLowSurrogate = $ch => {
    jl_Character_$callClinit();
    return ($ch & 64512) != 56320 ? 0 : 1;
},
jl_Character_isSurrogate = $ch => {
    jl_Character_$callClinit();
    return !(!jl_Character_isHighSurrogate($ch) && !jl_Character_isLowSurrogate($ch)) ? 1 : 0;
},
jl_Character_isSurrogatePair = ($high, $low) => {
    jl_Character_$callClinit();
    return !(jl_Character_isHighSurrogate($high) && jl_Character_isLowSurrogate($low)) ? 0 : 1;
},
jl_Character_toCodePoint = ($high, $low) => {
    jl_Character_$callClinit();
    return (($high & 1023) << 10 | $low & 1023) + 65536 | 0;
},
jl_Character_codePointAt = ($a, $index) => {
    jl_Character_$callClinit();
    return jl_Character_codePointAt0($a, $index, $a.data.length);
},
jl_Character_codePointAt0 = ($a, $index, $limit) => {
    let var$4, var$5;
    jl_Character_$callClinit();
    if ($index < $limit && $index >= 0) {
        var$4 = $a.data;
        if ($limit <= var$4.length) {
            if ($index < ($limit - 1 | 0) && jl_Character_isHighSurrogate(var$4[$index])) {
                var$5 = $index + 1 | 0;
                if (jl_Character_isLowSurrogate(var$4[var$5]))
                    return jl_Character_toCodePoint(var$4[$index], var$4[var$5]);
            }
            return var$4[$index];
        }
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
jl_Character_highSurrogate = $codePoint => {
    let var$2;
    jl_Character_$callClinit();
    var$2 = $codePoint - 65536 | 0;
    return (55296 | var$2 >> 10 & 1023) & 65535;
},
jl_Character_lowSurrogate = $codePoint => {
    jl_Character_$callClinit();
    return (56320 | $codePoint & 1023) & 65535;
},
jl_Character_toLowerCase = $ch => {
    jl_Character_$callClinit();
    return jl_Character_toLowerCase0($ch) & 65535;
},
jl_Character_toLowerCase0 = $ch => {
    jl_Character_$callClinit();
    return jl_Character_mapChar(jl_Character_getLowerCaseMapping(), $ch);
},
jl_Character_getLowerCaseMapping = () => {
    let var$1;
    jl_Character_$callClinit();
    if (jl_Character_lowerCaseMapping === null) {
        var$1 = otciu_UnicodeHelper_decodeCaseMapping(((jl_Character_acquireLowerCaseMapping()).value !== null ? $rt_str((jl_Character_acquireLowerCaseMapping()).value) : null));
        jl_Character_lowerCaseMapping = otciu_UnicodeHelper_createCharMapping(var$1);
    }
    return jl_Character_lowerCaseMapping;
},
jl_Character_acquireLowerCaseMapping = () => {
    jl_Character_$callClinit();
    if (jl_Character_$$metadata$$0 === null)
        jl_Character_$$metadata$$0 = jl_Character_acquireLowerCaseMapping$$create();
    return jl_Character_$$metadata$$0;
},
jl_Character_toUpperCase = $ch => {
    jl_Character_$callClinit();
    return jl_Character_toUpperCase0($ch) & 65535;
},
jl_Character_toUpperCase0 = $codePoint => {
    jl_Character_$callClinit();
    return jl_Character_mapChar(jl_Character_getUpperCaseMapping(), $codePoint);
},
jl_Character_getUpperCaseMapping = () => {
    let var$1;
    jl_Character_$callClinit();
    if (jl_Character_upperCaseMapping === null) {
        var$1 = otciu_UnicodeHelper_decodeCaseMapping(((jl_Character_acquireUpperCaseMapping()).value !== null ? $rt_str((jl_Character_acquireUpperCaseMapping()).value) : null));
        jl_Character_upperCaseMapping = otciu_UnicodeHelper_createCharMapping(var$1);
    }
    return jl_Character_upperCaseMapping;
},
jl_Character_acquireUpperCaseMapping = () => {
    jl_Character_$callClinit();
    if (jl_Character_$$metadata$$1 === null)
        jl_Character_$$metadata$$1 = jl_Character_acquireUpperCaseMapping$$create();
    return jl_Character_$$metadata$$1;
},
jl_Character_mapChar = ($table, $codePoint) => {
    let $binSearchTable, $index, var$5, var$6;
    jl_Character_$callClinit();
    if ($codePoint >= $table.$fastTable.data.length) {
        $binSearchTable = $table.$binarySearchTable0;
        $index = jl_Character_binarySearchTable($binSearchTable, $codePoint);
        if ($index >= 0) {
            var$5 = $binSearchTable.data;
            var$6 = $index * 2 | 0;
            if (var$6 < var$5.length)
                return $codePoint + var$5[var$6 + 1 | 0] | 0;
        }
        return 0;
    }
    return $codePoint + $table.$fastTable.data[$codePoint] | 0;
},
jl_Character_binarySearchTable = ($data, $key) => {
    let var$3, $l, $u, $i, $e, var$8;
    jl_Character_$callClinit();
    var$3 = $data.data;
    $l = 0;
    $u = (var$3.length / 2 | 0) - 1 | 0;
    while (true) {
        $i = ($l + $u | 0) / 2 | 0;
        $e = var$3[$i * 2 | 0];
        var$8 = $rt_compare($e, $key);
        if (!var$8)
            break;
        if (var$8 <= 0) {
            $l = $i + 1 | 0;
            if ($l > $u)
                return $i;
        } else {
            $u = $i - 1 | 0;
            if ($u < $l)
                return $u;
        }
    }
    return $i;
},
jl_Character_digit = ($ch, $radix) => {
    jl_Character_$callClinit();
    return jl_Character_digit0($ch, $radix);
},
jl_Character_digit0 = ($codePoint, $radix) => {
    let $d;
    jl_Character_$callClinit();
    if ($radix >= 2 && $radix <= 36) {
        $d = jl_Character_getNumericValue($codePoint);
        if ($d >= $radix)
            $d = (-1);
        return $d;
    }
    return (-1);
},
jl_Character_getNumericValue = $codePoint => {
    let $digitMapping, var$3, $l, $u, $idx, var$7, $val, var$9;
    jl_Character_$callClinit();
    $digitMapping = jl_Character_getDigitMapping();
    var$3 = $digitMapping.data;
    $l = 0;
    $u = (var$3.length / 2 | 0) - 1 | 0;
    while ($u >= $l) {
        $idx = ($l + $u | 0) / 2 | 0;
        var$7 = $idx * 2 | 0;
        $val = var$3[var$7];
        var$9 = $rt_compare($codePoint, $val);
        if (var$9 > 0)
            $l = $idx + 1 | 0;
        else {
            if (var$9 >= 0)
                return var$3[var$7 + 1 | 0];
            $u = $idx - 1 | 0;
        }
    }
    return (-1);
},
jl_Character_forDigit = ($digit, $radix) => {
    jl_Character_$callClinit();
    if ($radix >= 2 && $radix <= 36 && $digit >= 0 && $digit < $radix)
        return $digit < 10 ? (48 + $digit | 0) & 65535 : ((97 + $digit | 0) - 10 | 0) & 65535;
    return 0;
},
jl_Character_isDigit = $codePoint => {
    jl_Character_$callClinit();
    return jl_Character_getType($codePoint) != 9 ? 0 : 1;
},
jl_Character_getDigitMapping = () => {
    jl_Character_$callClinit();
    if (jl_Character_digitMapping === null)
        jl_Character_digitMapping = otciu_UnicodeHelper_decodeIntPairsDiff(((jl_Character_obtainDigitMapping()).value !== null ? $rt_str((jl_Character_obtainDigitMapping()).value) : null));
    return jl_Character_digitMapping;
},
jl_Character_obtainDigitMapping = () => {
    jl_Character_$callClinit();
    if (jl_Character_$$metadata$$3 === null)
        jl_Character_$$metadata$$3 = jl_Character_obtainDigitMapping$$create();
    return jl_Character_$$metadata$$3;
},
jl_Character_getClasses = () => {
    jl_Character_$callClinit();
    if (jl_Character_classMapping === null)
        jl_Character_classMapping = otciu_UnicodeHelper_extractRle(((jl_Character_obtainClasses()).value !== null ? $rt_str((jl_Character_obtainClasses()).value) : null));
    return jl_Character_classMapping;
},
jl_Character_obtainClasses = () => {
    jl_Character_$callClinit();
    if (jl_Character_$$metadata$$4 === null)
        jl_Character_$$metadata$$4 = jl_Character_obtainClasses$$create();
    return jl_Character_$$metadata$$4;
};
let jl_Character_toChars = $codePoint => {
    let var$2;
    jl_Character_$callClinit();
    if (jl_Character_isValidCodePoint($codePoint)) {
        if ($codePoint >= 65536)
            return $rt_createCharArrayFromData([jl_Character_highSurrogate($codePoint), jl_Character_lowSurrogate($codePoint)]);
        var$2 = $rt_createCharArray(1);
        var$2.data[0] = $codePoint & 65535;
        return var$2;
    }
    $rt_throw(jl_IllegalArgumentException__init_());
},
jl_Character_isISOControl = $codePoint => {
    let var$2;
    jl_Character_$callClinit();
    a: {
        b: {
            if (!($codePoint >= 0 && $codePoint <= 31)) {
                if ($codePoint < 127)
                    break b;
                if ($codePoint > 159)
                    break b;
            }
            var$2 = 1;
            break a;
        }
        var$2 = 0;
    }
    return var$2;
},
jl_Character_getType0 = $c => {
    jl_Character_$callClinit();
    return jl_Character_getType($c);
},
jl_Character_getType = $codePoint => {
    let $classes, var$3, $l, $u, $i, $range;
    jl_Character_$callClinit();
    if (jl_Character_isBmpCodePoint($codePoint) && jl_Character_isSurrogate($codePoint & 65535))
        return 19;
    $classes = jl_Character_getClasses();
    var$3 = $classes.data;
    $l = 0;
    $u = var$3.length - 1 | 0;
    while ($l <= $u) {
        $i = ($l + $u | 0) / 2 | 0;
        $range = var$3[$i];
        if ($codePoint >= $range.$end1)
            $l = $i + 1 | 0;
        else {
            if ($codePoint >= $range.$start4)
                return $range.$data0.data[$codePoint - $range.$start4 | 0];
            $u = $i - 1 | 0;
        }
    }
    return 0;
},
jl_Character_isLowerCase = $codePoint => {
    jl_Character_$callClinit();
    return jl_Character_getType($codePoint) != 2 ? 0 : 1;
},
jl_Character_isUpperCase = $codePoint => {
    jl_Character_$callClinit();
    return jl_Character_getType($codePoint) != 1 ? 0 : 1;
},
jl_Character_isTitleCase = $codePoint => {
    jl_Character_$callClinit();
    return jl_Character_getType($codePoint) != 3 ? 0 : 1;
},
jl_Character_isDefined = $codePoint => {
    jl_Character_$callClinit();
    return !jl_Character_getType($codePoint) ? 0 : 1;
},
jl_Character_isLetter = $codePoint => {
    jl_Character_$callClinit();
    switch (jl_Character_getType($codePoint)) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            return 0;
    }
    return 1;
},
jl_Character_isLetterOrDigit0 = $ch => {
    jl_Character_$callClinit();
    return jl_Character_isLetterOrDigit($ch);
},
jl_Character_isLetterOrDigit = $codePoint => {
    jl_Character_$callClinit();
    a: {
        switch (jl_Character_getType($codePoint)) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 9:
                break;
            case 6:
            case 7:
            case 8:
                break a;
            default:
                break a;
        }
        return 1;
    }
    return 0;
},
jl_Character_isJavaIdentifierStart = $codePoint => {
    jl_Character_$callClinit();
    a: {
        switch (jl_Character_getType($codePoint)) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 10:
            case 23:
            case 26:
                break;
            case 6:
            case 7:
            case 8:
            case 9:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 24:
            case 25:
                break a;
            default:
                break a;
        }
        return 1;
    }
    return jl_Character_isIdentifierIgnorable($codePoint);
},
jl_Character_isJavaIdentifierPart = $codePoint => {
    jl_Character_$callClinit();
    a: {
        switch (jl_Character_getType($codePoint)) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 8:
            case 9:
            case 10:
            case 23:
            case 26:
                break;
            case 7:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 24:
            case 25:
                break a;
            default:
                break a;
        }
        return 1;
    }
    return jl_Character_isIdentifierIgnorable($codePoint);
},
jl_Character_isUnicodeIdentifierStart = $codePoint => {
    jl_Character_$callClinit();
    a: {
        switch (jl_Character_getType($codePoint)) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 10:
                break;
            case 6:
            case 7:
            case 8:
            case 9:
                break a;
            default:
                break a;
        }
        return 1;
    }
    return jl_Character_isIdentifierIgnorable($codePoint);
},
jl_Character_isUnicodeIdentifierPart = $codePoint => {
    jl_Character_$callClinit();
    a: {
        switch (jl_Character_getType($codePoint)) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 8:
            case 9:
            case 10:
            case 23:
                break;
            case 7:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
                break a;
            default:
                break a;
        }
        return 1;
    }
    return jl_Character_isIdentifierIgnorable($codePoint);
},
jl_Character_isIdentifierIgnorable = $codePoint => {
    jl_Character_$callClinit();
    a: {
        if (!($codePoint >= 0 && $codePoint <= 8) && !($codePoint >= 14 && $codePoint <= 27)) {
            if ($codePoint < 127)
                break a;
            if ($codePoint > 159)
                break a;
        }
        return 1;
    }
    return jl_Character_getType($codePoint) != 16 ? 0 : 1;
},
jl_Character_isSpaceChar = $codePoint => {
    jl_Character_$callClinit();
    switch (jl_Character_getType($codePoint)) {
        case 12:
        case 13:
        case 14:
            break;
        default:
            return 0;
    }
    return 1;
},
jl_Character_isWhitespace0 = $ch => {
    jl_Character_$callClinit();
    return jl_Character_isWhitespace($ch);
},
jl_Character_isWhitespace = $codePoint => {
    jl_Character_$callClinit();
    switch ($codePoint) {
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 28:
        case 29:
        case 30:
        case 31:
            break;
        case 160:
        case 8199:
        case 8239:
            return 0;
        default:
            return jl_Character_isSpaceChar($codePoint);
    }
    return 1;
},
jl_Character__clinit_ = () => {
    jl_Character_TYPE = $rt_cls($rt_charcls);
    jl_Character_characterCache = $rt_createArray(jl_Character, 128);
},
jl_Character_acquireLowerCaseMapping$$create = () => {
    return {"value" : "NY  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
    + "%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
    + "# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%p kB#oq-&# _?gejg#A1 a$#%# -mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%"
    + "# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
    + "#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%"
    + "# #%# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# #$$r#%# #%# #%# #%# #%# #%# #%# #%# #P6r#}!rI )%# :GL#) i,5F#U TUg#r {%g#r >\'c#p Lnk%F# .\'F#S HB#F#b o@5F#b F#2#W 4Z;%# /%# #%# %%# \'%# M%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# u.#N#f "};
},
jl_Character_acquireUpperCaseMapping$$create = () => {
    return {"value" : "L[  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/#N6r# %_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
    + " #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3#!$r#:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# #{!r# ){!r#F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# "
    + "#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d# #\'- (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
    + "\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D4"
    + "5#845# #\'# #\'# #\'# -\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
    + " #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# U\'# REJ#% -Dr# Yiejg# e*5H#U eUi#r {%i#r <\'e#t {nm%:# V%H#^ >B#H#b o@5H#b <#4#P# eV;\'# /\'# #\'# %\'# \'\'# M\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# Z0#P#f "};
},
jl_Character_obtainDigitMapping$$create = () => {
    return {"value" : "6G*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
    + "%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
    + "%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%_fG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%B\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%oYG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%F%G%%%%%%%%%%%%%%%%%%Z?G%%%%%%%%%%%%%%%%%%ow?G%%%%%%%%%%%%%%%%%%s4%G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%"
    + "%%%%s+G%%%%%%%%%%%%%%%%%%:OG%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%N&OG%%%%%%%%%%%%%%%%%%VZ%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%k5G%%%%%%%%%%%%%%%%%%.lG%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};
},
jl_Character_obtainClasses$$create = () => {
    return {"value" : "PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!CgF#C;E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!"
    + "#!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BG E#Y\'CJ95E#^#; GN5\'9G#9G#9G$A\'F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91Y$FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,A&F9<F(Q#A&G*FJ%G91GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I#\'F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'& G#) F\'A%F#A#F7 F( F# F"
    + "# F#A#\' I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A&G%)A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A#\'&G$I% G$ G%A(G# F$ F#A#F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A&F$ F#G#A#J+ F#)A-G#I#F* F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\' \'I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G( J+A#F%AA&^$Y0=9^$G#^\'J"
    + "+L+=\'=\'=\'6767I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F3G$)A*F4G#)Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1\'J+A\'FD%FWA\'F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(GSA0G%)FP\')G&)\'I&\'I#F) Y#J+Y(^+G*^*Y$G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y"
    + "%FEI)G)I#G#A$Y&J+A$F$J+F?E\'Y#C*!#A&BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFGb!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67E2[FA,G."
    + "H%\'H$G-A0^#!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^jA7^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#b=+# BQCQ!#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?67676767Y&%Y"
    + "+U#Y%596Y.^#Y$676767675A#Y#67A=^; b=:! A-b=7$ A;^1-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+FA^GA*=F1^@ L+^?L)=L0^AL+^HL0b= & b& H!^bb&  %b&6)!%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#!#!#B%#!#B##!#!#!#!#!#!#!#B#A%!A/E%!#&"
    + "E##F(\'F$\'F%\'F8I#G#)^%\'A$L\'^#;=A\'FUY%A)I#FSI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C*%]#B#A#b#1! FDI#\'I#\'I#9)\'A#J+A\'b&EO#A-F8A%FRA%b4 A b3 E!b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]2^1b&L& 76^1Fb^#FW^)AAF-;^$G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F\'A#F\'A#F$A$[#:<=[# "
    + "=Z%^#A+Q$^#A#F- F; F4 F# F0A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^.A$=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9B, B0 B( B# C, C0 C( C#A$FUA-b&X% A*F7A+F)A9E\' EK E/AbF\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9F;AGFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+A\'J+F%%&B7A$G&5%C7A)Z#b 1$ L@ FK G#5A#F#A1F$%F# ]#G&9^)F7 G1F>L+&A)F7G,L%Y&A7F3G%Y%AGF6L(A5F8A*)\')FVG0Y(A%L5J+\'F#G#&"
    + "A*G$)FNI$G%I#G#Y#1Y%\'A+1A#F:A(J+A\'G$FEG&)G) J+Y%&I#&A)FD\'Y#&A*G#)FQI$G*I#F%Y%G%9)\'J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'F#\'A`F( & F% F0 F+9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&A,F+ &A#& FG &I$G\' )A#) I% I#\')\'&\'&Y# Y#A)G#A>FVI$G)I#G$)\'F%Y&J+Y# 9\'F$A?FQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&9A\'J+A\'J5A=F<A#\')\'I#G%)G&A%J+L#Y$=F(b Z# FMI$G*)G#9b E! BACAJ+L*A-F)A#&A#F) F# F9I\' I#A#G#)\'&)&)\'Y$A*J+AhF)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%Y)\'A)"
    + "&G\'I#G$FOG.)G#Y$&Y&A.FkA(Y+&b 6! \')G$)\')b 9! FB9A/J+A\'F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF( F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+A\'FJ%F#A%J+b W$ F4G#I#Y#A(G#&)F. FCI#G&A$I#\')\'Y.J+\'b 6! &A0L6^)[%^2A.9b&;/ b G! b+Q! Y&K,b&%$ A-b+X% b *E b&B! Y#A.b&Q1 Q1\'F\'G0A+b&<` A&b&(* b ZK!F?G-I$G$J+b \'< b&Z) A(F@ J+A%Y#Fq J+A\'F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q\' E$FIE#Y$J+A\'F9\'F%\'A#J+b 7# BACAL8Y%A&B:A#C:AMFmA%\'&IXA(G%E.AbE#9%\'A,I#E#K$A*b&<T!AEFCb @! b&T! A.b&3/ A/FTb >Y!E% E( E# b&J% A*&A>F$A#&A/F&"
    + "A(b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =_ b=Q$ J+^$A$b=U\' A\'^8 ^$A)Z$^1Z/A#GOA#G8A*b=U! A^b=W$ A+^HG#^^I#G$^$I\'Q)G)^#G(^?G%b=5# G$=A+I$^)G#^#)^AI#A`L5A-L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) B( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C> B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 1! Z>b D0 C+&CV!C(!#!C#!C$!C7!#!#!#!C$!#!#!#!#!#!#!#F#A/C(AWETG( G2A#G( G# G&A&E`AB\'b Q! FNA$G(E(A#J+A%&=b  & F?\'A2FMG%J+A&;b 1( F<%G%J+b 7$ F?G#&J+A%9b  $ F@ F$\'"
    + "F#\'F(G#F&\'A)&%b A$ F( F% F# F0 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN=L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.b=C# AX^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=;, A#^2A$^.A$b==$ A%^-A%^=A%^YA)^+A\'^IA)^?A#^-A%^#A/Z*AHb=9& A)^/A#^.A$^i =A$^3 ^.A$^-A&b=4#  b==! J+=b &1 b&  %b&  %b&A<#AAb&@%! b&/;!A#b&RU!A0b&O* b CG b&?) b C8 b&,.!A&b&K%#b   %b   %b \'O!b& R#b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   "
    + "%b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b !0 1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$b3  %b3  %b3  %b3`a$A#b3  %b3  %b3  %b3`a$"};
},
ju_Set = $rt_classWithoutFields(0),
ju_AbstractSet = $rt_classWithoutFields(ju_AbstractCollection),
ju_AbstractSet__init_ = $this => {
    ju_AbstractCollection__init_($this);
},
ju_TemplateCollections$AbstractImmutableSet = $rt_classWithoutFields(ju_AbstractSet),
ju_TemplateCollections$AbstractImmutableSet__init_ = $this => {
    ju_AbstractSet__init_($this);
},
ju_Collections$1 = $rt_classWithoutFields(ju_TemplateCollections$AbstractImmutableSet),
ju_Collections$1__init_ = $this => {
    ju_TemplateCollections$AbstractImmutableSet__init_($this);
},
ju_Collections$1__init_0 = () => {
    let var_0 = new ju_Collections$1();
    ju_Collections$1__init_(var_0);
    return var_0;
};
function jur_CICharSet() {
    let a = this; jur_LeafSet.call(a);
    a.$ch3 = 0;
    a.$supplement = 0;
}
let jur_CICharSet__init_0 = ($this, $ch) => {
    jur_LeafSet__init_($this);
    $this.$ch3 = $ch;
    $this.$supplement = jur_Pattern_getSupplement($ch);
},
jur_CICharSet__init_ = var_0 => {
    let var_1 = new jur_CICharSet();
    jur_CICharSet__init_0(var_1, var_0);
    return var_1;
},
jur_CICharSet_accepts = ($this, $strIndex, $testString) => {
    return !($this.$ch3 != $testString.$charAt($strIndex) && $this.$supplement != $testString.$charAt($strIndex)) ? 1 : (-1);
},
ju_TemplateCollections$AbstractImmutableMap = $rt_classWithoutFields(ju_AbstractMap),
ju_TemplateCollections$AbstractImmutableMap__init_ = $this => {
    ju_AbstractMap__init_($this);
},
ju_TemplateCollections$AbstractImmutableMap_put = ($this, $key, $value) => {
    $rt_throw(jl_UnsupportedOperationException__init_0());
},
ju_Collections$2 = $rt_classWithoutFields(ju_TemplateCollections$AbstractImmutableMap),
ju_Collections$2__init_ = $this => {
    ju_TemplateCollections$AbstractImmutableMap__init_($this);
},
ju_Collections$2__init_0 = () => {
    let var_0 = new ju_Collections$2();
    ju_Collections$2__init_(var_0);
    return var_0;
},
ju_Collections$2_size = $this => {
    return 0;
},
ju_Collections$2_isEmpty = $this => {
    return 1;
};
function jur_SupplCharSet() {
    let a = this; jur_LeafSet.call(a);
    a.$high0 = 0;
    a.$low0 = 0;
    a.$ch1 = 0;
}
let jur_SupplCharSet__init_ = ($this, $ch) => {
    let $chUTF16, var$3;
    jur_LeafSet__init_($this);
    $this.$charCount0 = 2;
    $this.$ch1 = $ch;
    $chUTF16 = jl_Character_toChars($ch);
    var$3 = $chUTF16.data;
    $this.$high0 = var$3[0];
    $this.$low0 = var$3[1];
},
jur_SupplCharSet__init_0 = var_0 => {
    let var_1 = new jur_SupplCharSet();
    jur_SupplCharSet__init_(var_1, var_0);
    return var_1;
},
jur_SupplCharSet_accepts = ($this, $strIndex, $testString) => {
    let var$3, $high, $low;
    var$3 = $strIndex + 1 | 0;
    $high = $testString.$charAt($strIndex);
    $low = $testString.$charAt(var$3);
    return !($this.$high0 == $high && $this.$low0 == $low) ? (-1) : 2;
},
jur_SupplCharSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $testStr, $strLength, var$6, $ch;
    if ($testString instanceof jl_String) {
        $testStr = $testString;
        $strLength = $matchResult.$getRightBound();
        while ($strIndex < $strLength) {
            var$6 = jl_String_indexOf($testStr, $this.$high0, $strIndex);
            if (var$6 < 0)
                return (-1);
            $strIndex = var$6 + 1 | 0;
            if ($strIndex >= $strLength)
                continue;
            $ch = jl_String_charAt($testStr, $strIndex);
            if ($this.$low0 == $ch && $this.$next2.$matches($strIndex + 1 | 0, $testString, $matchResult) >= 0)
                return $strIndex + (-1) | 0;
            $strIndex = $strIndex + 1 | 0;
        }
        return (-1);
    }
    return jur_AbstractSet_find($this, $strIndex, $testString, $matchResult);
},
jur_SupplCharSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let $testStr, var$6, var$7;
    if ($testString instanceof jl_String) {
        $testStr = $testString;
        a: {
            while (true) {
                if ($lastIndex < $strIndex)
                    return (-1);
                var$6 = jl_String_lastIndexOf($testStr, $this.$low0, $lastIndex);
                var$7 = var$6 + (-1) | 0;
                if (var$7 < 0)
                    break a;
                if (var$7 < $strIndex)
                    break a;
                if ($this.$high0 == jl_String_charAt($testStr, var$7) && $this.$next2.$matches(var$7 + 2 | 0, $testString, $matchResult) >= 0)
                    break;
                $lastIndex = var$7 + (-1) | 0;
            }
            return var$7;
        }
        return (-1);
    }
    return jur_AbstractSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult);
},
jur_SupplCharSet_getCodePoint = $this => {
    return $this.$ch1;
},
jur_SupplCharSet_first = ($this, $set) => {
    if (!($set instanceof jur_SupplCharSet)) {
        if (!($set instanceof jur_SupplRangeSet)) {
            if (!($set instanceof jur_CharSet)) {
                if ($set instanceof jur_RangeSet)
                    return 0;
                return 1;
            }
            return 0;
        }
        return $set.$contains($this.$ch1);
    }
    return $set.$getCodePoint() != $this.$ch1 ? 0 : 1;
},
eycdaca_AceCommandArgs = $rt_classWithoutFields(),
otrr_ReflectionInfo = $rt_classWithoutFields();
function jur_AbstractCharClass$LazyCategoryScope() {
    let a = this; jur_AbstractCharClass$LazyCharClass.call(a);
    a.$category0 = 0;
    a.$mayContainSupplCodepoints2 = 0;
    a.$containsAllSurrogates = 0;
}
let jur_AbstractCharClass$LazyCategoryScope__init_1 = ($this, $cat, $mayContainSupplCodepoints) => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
    $this.$mayContainSupplCodepoints2 = $mayContainSupplCodepoints;
    $this.$category0 = $cat;
},
jur_AbstractCharClass$LazyCategoryScope__init_ = (var_0, var_1) => {
    let var_2 = new jur_AbstractCharClass$LazyCategoryScope();
    jur_AbstractCharClass$LazyCategoryScope__init_1(var_2, var_0, var_1);
    return var_2;
},
jur_AbstractCharClass$LazyCategoryScope__init_0 = ($this, $cat, $mayContainSupplCodepoints, $containsAllSurrogates) => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
    $this.$containsAllSurrogates = $containsAllSurrogates;
    $this.$mayContainSupplCodepoints2 = $mayContainSupplCodepoints;
    $this.$category0 = $cat;
},
jur_AbstractCharClass$LazyCategoryScope__init_2 = (var_0, var_1, var_2) => {
    let var_3 = new jur_AbstractCharClass$LazyCategoryScope();
    jur_AbstractCharClass$LazyCategoryScope__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_AbstractCharClass$LazyCategoryScope_computeValue = $this => {
    let $chCl;
    $chCl = jur_UnicodeCategoryScope__init_0($this.$category0);
    if ($this.$containsAllSurrogates)
        $chCl.$lowHighSurrogates.$set(0, 2048);
    $chCl.$mayContainSupplCodepoints0 = $this.$mayContainSupplCodepoints2;
    return $chCl;
};
function cgguc_BrowserEventBridge$setListener$lambda$_7_0() {
    jl_Object.call(this);
    this.$_05 = null;
}
let cgguc_BrowserEventBridge$setListener$lambda$_7_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_05 = var$1;
},
cgguc_BrowserEventBridge$setListener$lambda$_7_0__init_0 = var_0 => {
    let var_1 = new cgguc_BrowserEventBridge$setListener$lambda$_7_0();
    cgguc_BrowserEventBridge$setListener$lambda$_7_0__init_(var_1, var_0);
    return var_1;
},
cgguc_BrowserEventBridge$setListener$lambda$_7_0_handle = (var$0, var$1) => {
    cgguc_BrowserEventBridge_lambda$setListener$2(var$0.$_05, var$1);
},
cgguc_BrowserEventBridge$setListener$lambda$_7_0_handle$exported$0 = (var$1, var$2) => {
    var$1.$handle(var$2);
},
ju_SequencedSet = $rt_classWithoutFields(0),
jur_AbstractLineTerminator = $rt_classWithoutFields(),
jur_AbstractLineTerminator_unixLT = null,
jur_AbstractLineTerminator_unicodeLT = null,
jur_AbstractLineTerminator__init_ = $this => {
    jl_Object__init_($this);
},
jur_AbstractLineTerminator_getInstance = $flag => {
    if ($flag & 1) {
        if (jur_AbstractLineTerminator_unixLT === null) {
            jur_AbstractLineTerminator_unixLT = jur_AbstractLineTerminator$1__init_0();
            return jur_AbstractLineTerminator_unixLT;
        }
        return jur_AbstractLineTerminator_unixLT;
    }
    if (jur_AbstractLineTerminator_unicodeLT === null) {
        jur_AbstractLineTerminator_unicodeLT = jur_AbstractLineTerminator$2__init_0();
        return jur_AbstractLineTerminator_unicodeLT;
    }
    return jur_AbstractLineTerminator_unicodeLT;
},
iitm_ScriptModule$Presence = $rt_classWithoutFields(0),
eycdaca_AceResources$whenReady$lambda$_2_1 = $rt_classWithoutFields(),
eycdaca_AceResources$whenReady$lambda$_2_1__init_ = var$0 => {
    jl_Object__init_(var$0);
},
eycdaca_AceResources$whenReady$lambda$_2_1__init_0 = () => {
    let var_0 = new eycdaca_AceResources$whenReady$lambda$_2_1();
    eycdaca_AceResources$whenReady$lambda$_2_1__init_(var_0);
    return var_0;
},
eycdaca_AceResources$whenReady$lambda$_2_1_isPresent = var$0 => {
    return !!(window.ace && window.ace.edit) ? 1 : 0;
};
function jur_AbstractCharClass$LazyJavaTitleCase$1() {
    jur_AbstractCharClass.call(this);
    this.$this$018 = null;
}
let jur_AbstractCharClass$LazyJavaTitleCase$1__init_ = ($this, $this$0) => {
    $this.$this$018 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaTitleCase$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaTitleCase$1();
    jur_AbstractCharClass$LazyJavaTitleCase$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaTitleCase$1_contains = ($this, $ch) => {
    return jl_Character_isTitleCase($ch);
},
jl_Runnable = $rt_classWithoutFields(0);
function eycdaca_AceResources$whenReady$lambda$_2_0() {
    let a = this; jl_Object.call(a);
    a.$_012 = null;
    a.$_14 = null;
    a.$_20 = null;
}
let eycdaca_AceResources$whenReady$lambda$_2_0__init_ = (var$0, var$1, var$2, var$3) => {
    jl_Object__init_(var$0);
    var$0.$_012 = var$1;
    var$0.$_14 = var$2;
    var$0.$_20 = var$3;
},
eycdaca_AceResources$whenReady$lambda$_2_0__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new eycdaca_AceResources$whenReady$lambda$_2_0();
    eycdaca_AceResources$whenReady$lambda$_2_0__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
eycdaca_AceResources$whenReady$lambda$_2_0_run = var$0 => {
    eycdaca_AceResources_lambda$whenReady$0(var$0.$_012, var$0.$_14, var$0.$_20);
},
ju_Collections$_clinit_$lambda$_59_0 = $rt_classWithoutFields(),
ju_Collections$_clinit_$lambda$_59_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
ju_Collections$_clinit_$lambda$_59_0__init_0 = () => {
    let var_0 = new ju_Collections$_clinit_$lambda$_59_0();
    ju_Collections$_clinit_$lambda$_59_0__init_(var_0);
    return var_0;
};
function jur_AbstractCharClass$LazyJavaMirrored$1() {
    jur_AbstractCharClass.call(this);
    this.$this$025 = null;
}
let jur_AbstractCharClass$LazyJavaMirrored$1__init_ = ($this, $this$0) => {
    $this.$this$025 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaMirrored$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaMirrored$1();
    jur_AbstractCharClass$LazyJavaMirrored$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaMirrored$1_contains = ($this, $ch) => {
    return 0;
},
cggucu_InsertPanel = $rt_classWithoutFields(0),
cggucu_InsertPanel$ForIsWidget = $rt_classWithoutFields(0),
cggucu_FlowPanel = $rt_classWithoutFields(cggucu_ComplexPanel),
cggucu_FlowPanel__init_0 = $this => {
    cggucu_FlowPanel__init_($this, cggdc_Document_createDivElement(cggdc_Document_get()));
},
cggucu_FlowPanel__init_1 = () => {
    let var_0 = new cggucu_FlowPanel();
    cggucu_FlowPanel__init_0(var_0);
    return var_0;
},
cggucu_FlowPanel__init_ = ($this, $element) => {
    cggucu_ComplexPanel__init_($this);
    $this.$setElement($element);
},
cggucu_FlowPanel__init_2 = var_0 => {
    let var_1 = new cggucu_FlowPanel();
    cggucu_FlowPanel__init_(var_1, var_0);
    return var_1;
};
function ju_LinkedHashMapIterator() {
    let a = this; jl_Object.call(a);
    a.$base0 = null;
    a.$reversed0 = 0;
    a.$expectedModCount0 = 0;
    a.$futureEntry0 = null;
    a.$currentEntry0 = null;
}
let ju_LinkedHashMapIterator__init_ = ($this, $base, $reversed) => {
    jl_Object__init_($this);
    $this.$base0 = $base;
    $this.$reversed0 = $reversed;
    $this.$expectedModCount0 = $base.$modCount;
    $this.$futureEntry0 = !$reversed ? $base.$head : $base.$tail;
},
ju_LinkedHashMapIterator__init_0 = (var_0, var_1) => {
    let var_2 = new ju_LinkedHashMapIterator();
    ju_LinkedHashMapIterator__init_(var_2, var_0, var_1);
    return var_2;
},
ju_LinkedHashMapIterator_hasNext = $this => {
    return $this.$futureEntry0 === null ? 0 : 1;
},
ju_LinkedHashMapIterator_checkConcurrentMod = $this => {
    if ($this.$expectedModCount0 != $this.$base0.$modCount)
        $rt_throw(ju_ConcurrentModificationException__init_());
},
ju_LinkedHashMapIterator_makeNext = $this => {
    ju_LinkedHashMapIterator_checkConcurrentMod($this);
    if ($this.$hasNext()) {
        $this.$currentEntry0 = $this.$futureEntry0;
        $this.$futureEntry0 = !$this.$reversed0 ? $this.$futureEntry0.$chainForward : $this.$futureEntry0.$chainBackward;
        return;
    }
    $rt_throw(ju_NoSuchElementException__init_());
};
function jur_AbstractCharClass$LazyJavaISOControl$1() {
    jur_AbstractCharClass.call(this);
    this.$this$039 = null;
}
let jur_AbstractCharClass$LazyJavaISOControl$1__init_ = ($this, $this$0) => {
    $this.$this$039 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaISOControl$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaISOControl$1();
    jur_AbstractCharClass$LazyJavaISOControl$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaISOControl$1_contains = ($this, $ch) => {
    return jl_Character_isISOControl($ch);
};
function jur_UEOLSet() {
    jur_AbstractSet.call(this);
    this.$consCounter3 = 0;
}
let jur_UEOLSet__init_ = ($this, $counter) => {
    jur_AbstractSet__init_($this);
    $this.$consCounter3 = $counter;
},
jur_UEOLSet__init_0 = var_0 => {
    let var_1 = new jur_UEOLSet();
    jur_UEOLSet__init_(var_1, var_0);
    return var_1;
},
jur_UEOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $rightBound;
    $rightBound = !$matchResult.$hasAnchoringBounds() ? $testString.$length() : $matchResult.$getRightBound();
    if ($strIndex < $rightBound) {
        if (($rightBound - $strIndex | 0) == 1 && $testString.$charAt($strIndex) == 10) {
            $matchResult.$setConsumed($this.$consCounter3, 1);
            return $this.$next2.$matches($strIndex + 1 | 0, $testString, $matchResult);
        }
        return (-1);
    }
    $matchResult.$setConsumed($this.$consCounter3, 0);
    return $this.$next2.$matches($strIndex, $testString, $matchResult);
},
jur_UEOLSet_hasConsumed = ($this, $matchResult) => {
    let $res;
    $res = !$matchResult.$getConsumed($this.$consCounter3) ? 0 : 1;
    $matchResult.$setConsumed($this.$consCounter3, (-1));
    return $res;
};
function jur_UCICharSet() {
    jur_LeafSet.call(this);
    this.$ch2 = 0;
}
let jur_UCICharSet__init_ = ($this, $ch) => {
    jur_LeafSet__init_($this);
    $this.$ch2 = jl_Character_toLowerCase(jl_Character_toUpperCase($ch));
},
jur_UCICharSet__init_0 = var_0 => {
    let var_1 = new jur_UCICharSet();
    jur_UCICharSet__init_(var_1, var_0);
    return var_1;
},
jur_UCICharSet_accepts = ($this, $strIndex, $testString) => {
    return $this.$ch2 != jl_Character_toLowerCase(jl_Character_toUpperCase($testString.$charAt($strIndex))) ? (-1) : 1;
};
function jur_AtomicFSet() {
    jur_FSet.call(this);
    this.$index3 = 0;
}
let jur_AtomicFSet__init_ = ($this, $groupIndex) => {
    jur_FSet__init_($this, $groupIndex);
},
jur_AtomicFSet__init_0 = var_0 => {
    let var_1 = new jur_AtomicFSet();
    jur_AtomicFSet__init_(var_1, var_0);
    return var_1;
},
jur_AtomicFSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $gr;
    $gr = $this.$getGroupIndex();
    $matchResult.$setConsumed($gr, $stringIndex - $matchResult.$getConsumed($gr) | 0);
    $this.$index3 = $stringIndex;
    return $stringIndex;
},
jur_AtomicFSet_getIndex = $this => {
    return $this.$index3;
},
jur_AtomicFSet_hasConsumed = ($this, $mr) => {
    return 0;
};
function jur_LowSurrogateCharSet() {
    jur_JointSet.call(this);
    this.$low = 0;
}
let jur_LowSurrogateCharSet__init_0 = ($this, $low) => {
    jur_JointSet__init_($this);
    $this.$low = $low;
},
jur_LowSurrogateCharSet__init_ = var_0 => {
    let var_1 = new jur_LowSurrogateCharSet();
    jur_LowSurrogateCharSet__init_0(var_1, var_0);
    return var_1;
},
jur_LowSurrogateCharSet_setNext = ($this, $next) => {
    $this.$next2 = $next;
},
jur_LowSurrogateCharSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4, $low, $high;
    var$4 = $stringIndex + 1 | 0;
    if (var$4 <= $matchResult.$getRightBound()) {
        $low = $testString.$charAt($stringIndex);
        if ($stringIndex > $matchResult.$getLeftBound()) {
            $high = $testString.$charAt($stringIndex - 1 | 0);
            if (jl_Character_isHighSurrogate($high))
                return (-1);
        }
        if ($this.$low == $low)
            return $this.$next2.$matches(var$4, $testString, $matchResult);
        return (-1);
    }
    $matchResult.$hitEnd = 1;
    return (-1);
},
jur_LowSurrogateCharSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $testStr, $startStr, $strLength, var$7, var$8;
    if ($testString instanceof jl_String) {
        $testStr = $testString;
        $startStr = $matchResult.$getLeftBound();
        $strLength = $matchResult.$getRightBound();
        while (true) {
            if ($strIndex >= $strLength)
                return (-1);
            var$7 = jl_String_indexOf($testStr, $this.$low, $strIndex);
            if (var$7 < 0)
                return (-1);
            if (var$7 > $startStr && jl_Character_isHighSurrogate(jl_String_charAt($testStr, var$7 - 1 | 0))) {
                $strIndex = var$7 + 1 | 0;
                continue;
            }
            var$8 = $this.$next2;
            $strIndex = var$7 + 1 | 0;
            if (var$8.$matches($strIndex, $testString, $matchResult) >= 0)
                break;
        }
        return var$7;
    }
    return jur_AbstractSet_find($this, $strIndex, $testString, $matchResult);
},
jur_LowSurrogateCharSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let $startStr, $testStr, var$7;
    if ($testString instanceof jl_String) {
        $startStr = $matchResult.$getLeftBound();
        $testStr = $testString;
        a: {
            while (true) {
                if ($lastIndex < $strIndex)
                    return (-1);
                var$7 = jl_String_lastIndexOf($testStr, $this.$low, $lastIndex);
                if (var$7 < 0)
                    break a;
                if (var$7 < $strIndex)
                    break a;
                if (var$7 > $startStr && jl_Character_isHighSurrogate(jl_String_charAt($testStr, var$7 - 1 | 0))) {
                    $lastIndex = var$7 + (-2) | 0;
                    continue;
                }
                if ($this.$next2.$matches(var$7 + 1 | 0, $testString, $matchResult) >= 0)
                    break;
                $lastIndex = var$7 + (-1) | 0;
            }
            return var$7;
        }
        return (-1);
    }
    return jur_AbstractSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult);
},
jur_LowSurrogateCharSet_first = ($this, $set) => {
    if (!($set instanceof jur_CharSet)) {
        if (!($set instanceof jur_RangeSet)) {
            if (!($set instanceof jur_SupplRangeSet)) {
                if (!($set instanceof jur_SupplCharSet)) {
                    if (!($set instanceof jur_HighSurrogateCharSet)) {
                        if ($set instanceof jur_LowSurrogateCharSet)
                            return $set.$low != $this.$low ? 0 : 1;
                        return 1;
                    }
                    return 0;
                }
                return 0;
            }
            return 0;
        }
        return 0;
    }
    return 0;
},
jur_LowSurrogateCharSet_hasConsumed = ($this, $matchResult) => {
    return 1;
};
function jur_CompositeGroupQuantifierSet() {
    let a = this; jur_GroupQuantifierSet.call(a);
    a.$quantifier0 = null;
    a.$setCounter = 0;
}
let jur_CompositeGroupQuantifierSet__init_ = ($this, $quant, $innerSet, $next, $type, $setCounter) => {
    jur_GroupQuantifierSet__init_($this, $innerSet, $next, $type);
    $this.$quantifier0 = $quant;
    $this.$setCounter = $setCounter;
},
jur_CompositeGroupQuantifierSet__init_0 = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new jur_CompositeGroupQuantifierSet();
    jur_CompositeGroupQuantifierSet__init_(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
jur_CompositeGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $enterCounter, var$5, var$6, $nextIndex;
    $enterCounter = $matchResult.$getEnterCounter($this.$setCounter);
    if ($this.$innerSet.$hasConsumed($matchResult)) {
        if ($enterCounter < $this.$quantifier0.$max0()) {
            var$5 = $this.$setCounter;
            var$6 = $enterCounter + 1 | 0;
            $matchResult.$setEnterCounter(var$5, var$6);
            $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
            if ($nextIndex < 0) {
                var$5 = $this.$setCounter;
                var$6 = var$6 + (-1) | 0;
                $matchResult.$setEnterCounter(var$5, var$6);
                if (var$6 < $this.$quantifier0.$min0()) {
                    $matchResult.$setEnterCounter($this.$setCounter, 0);
                    return (-1);
                }
                return $this.$next2.$matches($stringIndex, $testString, $matchResult);
            }
            $matchResult.$setEnterCounter($this.$setCounter, 0);
            return $nextIndex;
        }
        return $this.$next2.$matches($stringIndex, $testString, $matchResult);
    }
    return $this.$next2.$matches($stringIndex, $testString, $matchResult);
},
jur_RelCompositeGroupQuantifierSet = $rt_classWithoutFields(jur_CompositeGroupQuantifierSet),
jur_RelCompositeGroupQuantifierSet__init_ = ($this, $quant, $innerSet, $next, $type, $setCounter) => {
    jur_CompositeGroupQuantifierSet__init_($this, $quant, $innerSet, $next, $type, $setCounter);
},
jur_RelCompositeGroupQuantifierSet__init_0 = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new jur_RelCompositeGroupQuantifierSet();
    jur_RelCompositeGroupQuantifierSet__init_(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
jur_RelCompositeGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $enterCounter, $nextIndex;
    $enterCounter = $matchResult.$getEnterCounter($this.$setCounter);
    if ($this.$innerSet.$hasConsumed($matchResult)) {
        if ($enterCounter < $this.$quantifier0.$max0()) {
            if ($enterCounter < $this.$quantifier0.$min0()) {
                $matchResult.$setEnterCounter($this.$setCounter, $enterCounter + 1 | 0);
                $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
            } else {
                $nextIndex = $this.$next2.$matches($stringIndex, $testString, $matchResult);
                if ($nextIndex < 0) {
                    $matchResult.$setEnterCounter($this.$setCounter, $enterCounter + 1 | 0);
                    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
                } else {
                    $matchResult.$setEnterCounter($this.$setCounter, 0);
                    return $nextIndex;
                }
            }
            return $nextIndex;
        }
        $matchResult.$setEnterCounter($this.$setCounter, 0);
        return $this.$next2.$matches($stringIndex, $testString, $matchResult);
    }
    return $this.$next2.$matches($stringIndex, $testString, $matchResult);
};
function ju_ArrayList() {
    let a = this; ju_AbstractList.call(a);
    a.$array = null;
    a.$size0 = 0;
}
let ju_ArrayList__init_3 = $this => {
    ju_ArrayList__init_0($this, 10);
},
ju_ArrayList__init_ = () => {
    let var_0 = new ju_ArrayList();
    ju_ArrayList__init_3(var_0);
    return var_0;
},
ju_ArrayList__init_0 = ($this, $initialCapacity) => {
    ju_AbstractList__init_($this);
    if ($initialCapacity < 0)
        $rt_throw(jl_IllegalArgumentException__init_());
    $this.$array = $rt_createArray(jl_Object, $initialCapacity);
},
ju_ArrayList__init_4 = var_0 => {
    let var_1 = new ju_ArrayList();
    ju_ArrayList__init_0(var_1, var_0);
    return var_1;
},
ju_ArrayList__init_2 = ($this, $c) => {
    let $iter, $i;
    ju_ArrayList__init_0($this, $c.$size());
    $iter = $c.$iterator();
    $i = 0;
    while ($i < $this.$array.data.length) {
        $this.$array.data[$i] = $iter.$next();
        $i = $i + 1 | 0;
    }
    $this.$size0 = $this.$array.data.length;
},
ju_ArrayList__init_1 = var_0 => {
    let var_1 = new ju_ArrayList();
    ju_ArrayList__init_2(var_1, var_0);
    return var_1;
},
ju_ArrayList_ensureCapacity = ($this, $minCapacity) => {
    let $newLength;
    if ($this.$array.data.length < $minCapacity) {
        $newLength = $this.$array.data.length >= 1073741823 ? 2147483647 : jl_Math_max($minCapacity, jl_Math_max($this.$array.data.length * 2 | 0, 5));
        $this.$array = ju_Arrays_copyOf0($this.$array, $newLength);
    }
},
ju_ArrayList_get = ($this, $index) => {
    ju_ArrayList_checkIndex($this, $index);
    return $this.$array.data[$index];
},
ju_ArrayList_size = $this => {
    return $this.$size0;
},
ju_ArrayList_add = ($this, $element) => {
    let var$2, var$3;
    $this.$ensureCapacity($this.$size0 + 1 | 0);
    var$2 = $this.$array.data;
    var$3 = $this.$size0;
    $this.$size0 = var$3 + 1 | 0;
    var$2[var$3] = $element;
    $this.$modCount0 = $this.$modCount0 + 1 | 0;
    return 1;
},
ju_ArrayList_add0 = ($this, $index, $element) => {
    let $i;
    ju_ArrayList_checkIndexForAdd($this, $index);
    $this.$ensureCapacity($this.$size0 + 1 | 0);
    $i = $this.$size0;
    while ($i > $index) {
        $this.$array.data[$i] = $this.$array.data[$i - 1 | 0];
        $i = $i + (-1) | 0;
    }
    $this.$array.data[$index] = $element;
    $this.$size0 = $this.$size0 + 1 | 0;
    $this.$modCount0 = $this.$modCount0 + 1 | 0;
},
ju_ArrayList_remove = ($this, $i) => {
    let $old, var$3, var$4, $i_0;
    ju_ArrayList_checkIndex($this, $i);
    $old = $this.$array.data[$i];
    $this.$size0 = $this.$size0 - 1 | 0;
    while ($i < $this.$size0) {
        var$3 = $this.$array.data;
        var$4 = $this.$array.data;
        $i_0 = $i + 1 | 0;
        var$3[$i] = var$4[$i_0];
        $i = $i_0;
    }
    $this.$array.data[$this.$size0] = null;
    $this.$modCount0 = $this.$modCount0 + 1 | 0;
    return $old;
},
ju_ArrayList_clear = $this => {
    ju_Arrays_fill3($this.$array, 0, $this.$size0, null);
    $this.$size0 = 0;
    $this.$modCount0 = $this.$modCount0 + 1 | 0;
},
ju_ArrayList_checkIndex = ($this, $index) => {
    if ($index >= 0 && $index < $this.$size0)
        return;
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
ju_ArrayList_checkIndexForAdd = ($this, $index) => {
    if ($index >= 0 && $index <= $this.$size0)
        return;
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
cggdc_LabelElement = $rt_classWithoutFields(cggdc_Element),
cggdc_LabelElement__init_ = ($this, $element) => {
    cggdc_Element__init_($this, $element);
},
cggdc_LabelElement__init_0 = var_0 => {
    let var_1 = new cggdc_LabelElement();
    cggdc_LabelElement__init_(var_1, var_0);
    return var_1;
};
function jur_CompositeQuantifierSet() {
    jur_LeafQuantifierSet.call(this);
    this.$quantifier = null;
}
let jur_CompositeQuantifierSet__init_ = ($this, $quant, $innerSet, $next, $type) => {
    jur_LeafQuantifierSet__init_($this, $innerSet, $next, $type);
    $this.$quantifier = $quant;
},
jur_CompositeQuantifierSet__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_CompositeQuantifierSet();
    jur_CompositeQuantifierSet__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_CompositeQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $min, $max, $i, $shift;
    $min = $this.$quantifier.$min0();
    $max = $this.$quantifier.$max0();
    $i = 0;
    while (true) {
        if ($i >= $min) {
            a: {
                b: {
                    c: {
                        while ($i < $max) {
                            if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$getRightBound())
                                break b;
                            $shift = $this.$leaf.$accepts($stringIndex, $testString);
                            if ($shift < 1)
                                break c;
                            $stringIndex = $stringIndex + $shift | 0;
                            $i = $i + 1 | 0;
                        }
                        break a;
                    }
                    break a;
                }
            }
            while (true) {
                if ($i < $min)
                    return (-1);
                $shift = $this.$next2.$matches($stringIndex, $testString, $matchResult);
                if ($shift >= 0)
                    break;
                $stringIndex = $stringIndex - $this.$leaf.$charCount() | 0;
                $i = $i + (-1) | 0;
            }
            return $shift;
        }
        if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$getRightBound()) {
            $matchResult.$hitEnd = 1;
            return (-1);
        }
        $shift = $this.$leaf.$accepts($stringIndex, $testString);
        if ($shift < 1)
            break;
        $stringIndex = $stringIndex + $shift | 0;
        $i = $i + 1 | 0;
    }
    return (-1);
};
function jur_SupplRangeSet() {
    let a = this; jur_JointSet.call(a);
    a.$chars = null;
    a.$alt3 = 0;
}
let jur_SupplRangeSet__init_ = ($this, $cc) => {
    jur_JointSet__init_($this);
    $this.$chars = $cc.$getInstance();
    $this.$alt3 = $cc.$alt;
},
jur_SupplRangeSet__init_0 = var_0 => {
    let var_1 = new jur_SupplRangeSet();
    jur_SupplRangeSet__init_(var_1, var_0);
    return var_1;
},
jur_SupplRangeSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, var$5, $high, $offset, var$8, $low;
    $strLength = $matchResult.$getRightBound();
    if ($stringIndex < $strLength) {
        var$5 = $stringIndex + 1 | 0;
        $high = $testString.$charAt($stringIndex);
        if ($this.$contains($high)) {
            $offset = $this.$next2.$matches(var$5, $testString, $matchResult);
            if ($offset > 0)
                return $offset;
        }
        if (var$5 < $strLength) {
            var$8 = var$5 + 1 | 0;
            $low = $testString.$charAt(var$5);
            if (jl_Character_isSurrogatePair($high, $low) && $this.$contains(jl_Character_toCodePoint($high, $low)))
                return $this.$next2.$matches(var$8, $testString, $matchResult);
        }
    }
    return (-1);
},
jur_SupplRangeSet_contains = ($this, $ch) => {
    return $this.$chars.$contains($ch);
},
jur_SupplRangeSet_first = ($this, $set) => {
    if (!($set instanceof jur_SupplCharSet)) {
        if (!($set instanceof jur_CharSet)) {
            if (!($set instanceof jur_SupplRangeSet)) {
                if ($set instanceof jur_RangeSet)
                    return jur_AbstractCharClass_intersects($this.$chars, $set.$getChars());
                return 1;
            }
            return jur_AbstractCharClass_intersects($this.$chars, $set.$chars);
        }
        return jur_AbstractCharClass_intersects0($this.$chars, $set.$getChar());
    }
    return jur_AbstractCharClass_intersects0($this.$chars, $set.$getCodePoint());
},
jur_SupplRangeSet_getChars = $this => {
    return $this.$chars;
},
jur_SupplRangeSet_setNext = ($this, $next) => {
    $this.$next2 = $next;
},
jur_SupplRangeSet_hasConsumed = ($this, $mr) => {
    return 1;
},
jur_RelAltGroupQuantifierSet = $rt_classWithoutFields(jur_AltGroupQuantifierSet),
jur_RelAltGroupQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_AltGroupQuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_RelAltGroupQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_RelAltGroupQuantifierSet();
    jur_RelAltGroupQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_RelAltGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $nextIndex;
    if ($this.$innerSet.$hasConsumed($matchResult)) {
        $nextIndex = $this.$next2.$matches($stringIndex, $testString, $matchResult);
        if ($nextIndex < 0)
            $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
        return $nextIndex;
    }
    return $this.$next2.$matches($stringIndex, $testString, $matchResult);
};
function jl_String() {
    jl_Object.call(this);
    this.$hashCode2 = 0;
}
let jl_String_EMPTY_CHARS = null,
jl_String_EMPTY = null,
jl_String_CASE_INSENSITIVE_ORDER = null,
jl_String_$callClinit = () => {
    jl_String_$callClinit = $rt_eraseClinit(jl_String);
    jl_String__clinit_();
},
jl_String__init_3 = $this => {
    jl_String_$callClinit();
    jl_Object__init_($this);
    $this.$nativeString = "";
},
jl_String__init_6 = () => {
    let var_0 = new jl_String();
    jl_String__init_3(var_0);
    return var_0;
},
jl_String__init_1 = ($this, $characters) => {
    let var$2;
    jl_String_$callClinit();
    var$2 = $characters.data;
    jl_Object__init_($this);
    $this.$nativeString = $rt_charArrayToString($characters.data, 0, var$2.length);
},
jl_String__init_0 = var_0 => {
    let var_1 = new jl_String();
    jl_String__init_1(var_1, var_0);
    return var_1;
},
jl_String__init_4 = (var$0, var$1) => {
    var$0.$nativeString = var$1;
},
jl_String__init_ = var_0 => {
    let var_1 = new jl_String();
    jl_String__init_4(var_1, var_0);
    return var_1;
},
jl_String__init_5 = (var$0, var$1, $offset, $count) => {
    let var$4;
    jl_String_$callClinit();
    var$4 = var$1.data;
    jl_Object__init_(var$0);
    ju_Objects_checkFromIndexSize($offset, $count, var$4.length);
    var$0.$nativeString = $rt_charArrayToString(var$1.data, $offset, $count);
},
jl_String__init_2 = (var_0, var_1, var_2) => {
    let var_3 = new jl_String();
    jl_String__init_5(var_3, var_0, var_1, var_2);
    return var_3;
},
jl_String_charAt = ($this, $index) => {
    if ($index >= 0 && $index < $this.$nativeString.length)
        return $this.$nativeString.charCodeAt($index);
    $rt_throw(jl_StringIndexOutOfBoundsException__init_());
},
jl_String_length = $this => {
    return $this.$nativeString.length;
},
jl_String_isEmpty = $this => {
    return $this.$nativeString.length ? 0 : 1;
},
jl_String_startsWith0 = ($this, $prefix, $toffset) => {
    let $i, var$4, var$5;
    if (($toffset + jl_String_length($prefix) | 0) <= jl_String_length($this)) {
        $i = 0;
        while ($i < jl_String_length($prefix)) {
            var$4 = $prefix.$nativeString.charCodeAt($i);
            var$5 = $toffset + 1 | 0;
            if (var$4 != $this.$nativeString.charCodeAt($toffset))
                return 0;
            $i = $i + 1 | 0;
            $toffset = var$5;
        }
        return 1;
    }
    return 0;
},
jl_String_startsWith = ($this, $prefix) => {
    if ($this !== $prefix)
        return jl_String_startsWith0($this, $prefix, 0);
    return 1;
},
jl_String_indexOf = ($this, $ch, $fromIndex) => {
    let $i, $hi, $lo, $bmpChar;
    $i = jl_Math_max(0, $fromIndex);
    if ($ch >= 65536) {
        $hi = jl_Character_highSurrogate($ch);
        $lo = jl_Character_lowSurrogate($ch);
        while (true) {
            if ($i >= ($this.$nativeString.length - 1 | 0))
                return (-1);
            if ($this.$nativeString.charCodeAt($i) == $hi && $this.$nativeString.charCodeAt(($i + 1 | 0)) == $lo)
                break;
            $i = $i + 1 | 0;
        }
        return $i;
    }
    $bmpChar = $ch & 65535;
    while (true) {
        if ($i >= $this.$nativeString.length)
            return (-1);
        if ($this.$nativeString.charCodeAt($i) == $bmpChar)
            break;
        $i = $i + 1 | 0;
    }
    return $i;
},
jl_String_lastIndexOf = ($this, $ch, $fromIndex) => {
    let $i, $hi, $lo, var$6, $bmpChar;
    $i = jl_Math_min($fromIndex, jl_String_length($this) - 1 | 0);
    if ($ch >= 65536) {
        $hi = jl_Character_highSurrogate($ch);
        $lo = jl_Character_lowSurrogate($ch);
        while (true) {
            if ($i < 1)
                return (-1);
            if ($this.$nativeString.charCodeAt($i) == $lo) {
                var$6 = $i - 1 | 0;
                if ($this.$nativeString.charCodeAt(var$6) == $hi)
                    break;
            }
            $i = $i + (-1) | 0;
        }
        return var$6;
    }
    $bmpChar = $ch & 65535;
    while (true) {
        if ($i < 0)
            return (-1);
        if ($this.$nativeString.charCodeAt($i) == $bmpChar)
            break;
        $i = $i + (-1) | 0;
    }
    return $i;
},
jl_String_indexOf0 = ($this, $str, $fromIndex) => {
    let $i, $toIndex, $j;
    $i = jl_Math_max(0, $fromIndex);
    $toIndex = jl_String_length($this) - jl_String_length($str) | 0;
    a: while (true) {
        if ($i > $toIndex)
            return (-1);
        $j = 0;
        while (true) {
            if ($j >= jl_String_length($str))
                break a;
            if ($this.$nativeString.charCodeAt(($i + $j | 0)) != $str.$nativeString.charCodeAt($j))
                break;
            $j = $j + 1 | 0;
        }
        $i = $i + 1 | 0;
    }
    return $i;
},
jl_String_lastIndexOf0 = ($this, $str, $fromIndex) => {
    let $i, $j;
    $i = jl_Math_min($fromIndex, jl_String_length($this) - jl_String_length($str) | 0);
    a: while (true) {
        if ($i < 0)
            return (-1);
        $j = 0;
        while (true) {
            if ($j >= jl_String_length($str))
                break a;
            if ($this.$nativeString.charCodeAt(($i + $j | 0)) != $str.$nativeString.charCodeAt($j))
                break;
            $j = $j + 1 | 0;
        }
        $i = $i + (-1) | 0;
    }
    return $i;
},
jl_String_substring = ($this, $beginIndex, $endIndex) => {
    let $length, var$4;
    $length = $this.$nativeString.length;
    var$4 = $rt_compare($beginIndex, $endIndex);
    if (var$4) {
        if (!$beginIndex && $endIndex == $length)
            return $this;
        if ($beginIndex >= 0 && var$4 <= 0 && $endIndex <= $length)
            return jl_String__init_($this.$nativeString.substring($beginIndex, $endIndex));
        $rt_throw(jl_StringIndexOutOfBoundsException__init_());
    }
    return jl_String_EMPTY;
},
jl_String_substring0 = ($this, $beginIndex) => {
    return jl_String_substring($this, $beginIndex, jl_String_length($this));
},
jl_String_subSequence = ($this, $beginIndex, $endIndex) => {
    return jl_String_substring($this, $beginIndex, $endIndex);
},
jl_String_trim = $this => {
    let $lower, $upper;
    $lower = 0;
    $upper = jl_String_length($this) - 1 | 0;
    a: {
        b: {
            while ($lower <= $upper) {
                if ($this.$nativeString.charCodeAt($lower) > 32)
                    break b;
                $lower = $lower + 1 | 0;
            }
            break a;
        }
    }
    while ($lower <= $upper && $this.$nativeString.charCodeAt($upper) <= 32) {
        $upper = $upper + (-1) | 0;
    }
    return jl_String_substring($this, $lower, $upper + 1 | 0);
},
jl_String_toString = $this => {
    return $this;
},
jl_String_toCharArray = $this => {
    let $array, $i, var$3;
    $array = $rt_createCharArray($this.$nativeString.length);
    $i = 0;
    while (true) {
        var$3 = $array.data;
        if ($i >= var$3.length)
            break;
        var$3[$i] = $this.$nativeString.charCodeAt($i);
        $i = $i + 1 | 0;
    }
    return $array;
},
jl_String_valueOf = $obj => {
    jl_String_$callClinit();
    return $obj === null ? $rt_s(54) : $obj.$toString();
},
jl_String_valueOf0 = $i => {
    jl_String_$callClinit();
    return ((jl_StringBuilder__init_()).$append2($i)).$toString();
},
jl_String_equals = ($this, $other) => {
    let $str;
    if ($this !== $other) {
        if ($other instanceof jl_String) {
            $str = $other;
            return $this.$nativeString !== $str.$nativeString ? 0 : 1;
        }
        return 0;
    }
    return 1;
},
jl_String_hashCode = $this => {
    let $i;
    a: {
        if (!$this.$hashCode2) {
            $i = 0;
            while (true) {
                if ($i >= $this.$nativeString.length)
                    break a;
                $this.$hashCode2 = (31 * $this.$hashCode2 | 0) + $this.$nativeString.charCodeAt($i) | 0;
                $i = $i + 1 | 0;
            }
        }
    }
    return $this.$hashCode2;
},
jl_String_toLowerCase = $this => {
    let $lowerCase;
    $lowerCase = $this.$nativeString.toLowerCase();
    if ($lowerCase !== $this.$nativeString)
        $this = jl_String__init_($lowerCase);
    return $this;
},
jl_String_toUpperCase = $this => {
    let $upperCase;
    $upperCase = $this.$nativeString.toUpperCase();
    if ($upperCase !== $this.$nativeString)
        $this = jl_String__init_($upperCase);
    return $this;
},
jl_String_matches = ($this, $regex) => {
    return jur_Pattern_matches($regex, jl_String_toString($this));
},
jl_String_split = ($this, $regex, $limit) => {
    return jur_Pattern_split(jur_Pattern_compile($regex), jl_String_toString($this), $limit);
},
jl_String__clinit_ = () => {
    jl_String_EMPTY_CHARS = $rt_createCharArray(0);
    jl_String_EMPTY = jl_String__init_6();
    jl_String_CASE_INSENSITIVE_ORDER = jl_String$_clinit_$lambda$_118_0__init_0();
};
function ju_HashSet() {
    ju_AbstractSet.call(this);
    this.$backingMap = null;
}
let ju_HashSet__init_0 = $this => {
    ju_HashSet__init_($this, ju_HashMap__init_());
},
ju_HashSet__init_1 = () => {
    let var_0 = new ju_HashSet();
    ju_HashSet__init_0(var_0);
    return var_0;
},
ju_HashSet__init_ = ($this, $backingMap) => {
    ju_AbstractSet__init_($this);
    $this.$backingMap = $backingMap;
},
ju_HashSet__init_2 = var_0 => {
    let var_1 = new ju_HashSet();
    ju_HashSet__init_(var_1, var_0);
    return var_1;
},
ju_HashSet_add = ($this, $object) => {
    return $this.$backingMap.$put($object, $this) !== null ? 0 : 1;
},
ju_HashSet_isEmpty = $this => {
    return $this.$backingMap.$isEmpty();
},
ju_HashSet_iterator = $this => {
    return ($this.$backingMap.$keySet()).$iterator();
},
ju_HashSet_remove = ($this, $object) => {
    return $this.$backingMap.$remove1($object) === null ? 0 : 1;
},
ju_HashSet_size = $this => {
    return $this.$backingMap.$size();
},
ju_LinkedHashSet = $rt_classWithoutFields(ju_HashSet),
ju_LinkedHashSet__init_0 = $this => {
    ju_HashSet__init_($this, ju_LinkedHashMap__init_1());
},
ju_LinkedHashSet__init_ = () => {
    let var_0 = new ju_LinkedHashSet();
    ju_LinkedHashSet__init_0(var_0);
    return var_0;
},
ju_LinkedHashSet__init_1 = ($this, $collection) => {
    let $iter;
    ju_HashSet__init_($this, ju_LinkedHashMap__init_2($collection.$size() < 6 ? 11 : $collection.$size() * 2 | 0));
    $iter = $collection.$iterator();
    while ($iter.$hasNext()) {
        $this.$add2($iter.$next());
    }
},
ju_LinkedHashSet__init_2 = var_0 => {
    let var_1 = new ju_LinkedHashSet();
    ju_LinkedHashSet__init_1(var_1, var_0);
    return var_1;
};
function eycdaca_AceEditor$addOnCursorPositionChangeHandler$lambda$_12_0() {
    jl_Object.call(this);
    this.$_09 = null;
}
let eycdaca_AceEditor$addOnCursorPositionChangeHandler$lambda$_12_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_09 = var$1;
},
eycdaca_AceEditor$addOnCursorPositionChangeHandler$lambda$_12_0__init_0 = var_0 => {
    let var_1 = new eycdaca_AceEditor$addOnCursorPositionChangeHandler$lambda$_12_0();
    eycdaca_AceEditor$addOnCursorPositionChangeHandler$lambda$_12_0__init_(var_1, var_0);
    return var_1;
},
eycdaca_AceEditor$addOnCursorPositionChangeHandler$lambda$_12_0_fire = (var$0, var$1) => {
    eycdaca_AceEditor_lambda$addOnCursorPositionChangeHandler$1(var$0.$_09, var$1);
},
eycdaca_AceEditor$addOnCursorPositionChangeHandler$lambda$_12_0_fire$exported$0 = (var$1, var$2) => {
    var$1.$fire0(var$2);
},
jur_FSet$PossessiveFSet = $rt_classWithoutFields(jur_AbstractSet),
jur_FSet$PossessiveFSet__init_ = $this => {
    jur_AbstractSet__init_($this);
},
jur_FSet$PossessiveFSet__init_0 = () => {
    let var_0 = new jur_FSet$PossessiveFSet();
    jur_FSet$PossessiveFSet__init_(var_0);
    return var_0;
},
jur_FSet$PossessiveFSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    return $stringIndex;
},
jur_FSet$PossessiveFSet_hasConsumed = ($this, $mr) => {
    return 0;
},
jur_PosCompositeGroupQuantifierSet = $rt_classWithoutFields(jur_CompositeGroupQuantifierSet),
jur_PosCompositeGroupQuantifierSet__init_ = ($this, $quant, $innerSet, $next, $type, $setCounter) => {
    jur_CompositeGroupQuantifierSet__init_($this, $quant, $innerSet, $next, $type, $setCounter);
    jur_FSet_$callClinit();
    $innerSet.$setNext(jur_FSet_posFSet);
},
jur_PosCompositeGroupQuantifierSet__init_0 = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new jur_PosCompositeGroupQuantifierSet();
    jur_PosCompositeGroupQuantifierSet__init_(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
jur_PosCompositeGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $counter, $max, $nextIndex;
    $counter = 0;
    $max = $this.$quantifier0.$max0();
    a: {
        while (true) {
            $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
            if ($nextIndex <= $stringIndex)
                break a;
            if ($counter >= $max)
                break;
            $counter = $counter + 1 | 0;
            $stringIndex = $nextIndex;
        }
    }
    if ($nextIndex < 0 && $counter < $this.$quantifier0.$min0())
        return (-1);
    return $this.$next2.$matches($stringIndex, $testString, $matchResult);
};
function jur_MultiLineEOLSet() {
    jur_AbstractSet.call(this);
    this.$consCounter = 0;
}
let jur_MultiLineEOLSet__init_ = ($this, $counter) => {
    jur_AbstractSet__init_($this);
    $this.$consCounter = $counter;
},
jur_MultiLineEOLSet__init_0 = var_0 => {
    let var_1 = new jur_MultiLineEOLSet();
    jur_MultiLineEOLSet__init_(var_1, var_0);
    return var_1;
},
jur_MultiLineEOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $strDif, $ch1, $ch2;
    $strDif = !$matchResult.$hasAnchoringBounds() ? $testString.$length() - $strIndex | 0 : $matchResult.$getRightBound() - $strIndex | 0;
    if ($strDif) {
        if ($strDif < 2) {
            $ch1 = $testString.$charAt($strIndex);
            $ch2 = 97;
        } else {
            $ch1 = $testString.$charAt($strIndex);
            $ch2 = $testString.$charAt($strIndex + 1 | 0);
        }
        switch ($ch1) {
            case 10:
            case 133:
            case 8232:
            case 8233:
                $matchResult.$setConsumed($this.$consCounter, 0);
                return $this.$next2.$matches($strIndex, $testString, $matchResult);
            case 13:
                if ($ch2 == 10) {
                    $matchResult.$setConsumed($this.$consCounter, 0);
                    return $this.$next2.$matches($strIndex, $testString, $matchResult);
                }
                $matchResult.$setConsumed($this.$consCounter, 0);
                return $this.$next2.$matches($strIndex, $testString, $matchResult);
            default:
        }
        return (-1);
    }
    $matchResult.$setConsumed($this.$consCounter, 0);
    return $this.$next2.$matches($strIndex, $testString, $matchResult);
},
jur_MultiLineEOLSet_hasConsumed = ($this, $matchResult) => {
    let $res;
    $res = !$matchResult.$getConsumed($this.$consCounter) ? 0 : 1;
    $matchResult.$setConsumed($this.$consCounter, (-1));
    return $res;
},
ju_Queue = $rt_classWithoutFields(0),
ju_Deque = $rt_classWithoutFields(0);
function ju_ArrayDeque() {
    let a = this; ju_AbstractCollection.call(a);
    a.$version = 0;
    a.$array0 = null;
    a.$head0 = 0;
    a.$tail0 = 0;
}
let ju_ArrayDeque__init_0 = $this => {
    ju_ArrayDeque__init_($this, 8);
},
ju_ArrayDeque__init_1 = () => {
    let var_0 = new ju_ArrayDeque();
    ju_ArrayDeque__init_0(var_0);
    return var_0;
},
ju_ArrayDeque__init_ = ($this, $numElements) => {
    ju_AbstractCollection__init_($this);
    $this.$array0 = $rt_createArray(jl_Object, $numElements + 1 | 0);
},
ju_ArrayDeque__init_2 = var_0 => {
    let var_1 = new ju_ArrayDeque();
    ju_ArrayDeque__init_(var_1, var_0);
    return var_1;
},
ju_ArrayDeque_addLast = ($this, $e) => {
    ju_Objects_requireNonNull($e);
    ju_ArrayDeque_ensureCapacity($this, $this.$size() + 1 | 0);
    $this.$array0.data[$this.$tail0] = $e;
    $this.$tail0 = ju_ArrayDeque_modInc($this.$tail0, $this.$array0.data.length);
    $this.$version = $this.$version + 1 | 0;
},
ju_ArrayDeque_removeFirst = $this => {
    let $value;
    $value = $this.$pollFirst();
    if ($value === null)
        $rt_throw(ju_NoSuchElementException__init_());
    return $value;
},
ju_ArrayDeque_pollFirst = $this => {
    let $result;
    if ($this.$head0 != $this.$tail0) {
        $result = $this.$array0.data[$this.$head0];
        $this.$array0.data[$this.$head0] = null;
        $this.$head0 = ju_ArrayDeque_modInc($this.$head0, $this.$array0.data.length);
        $this.$version = $this.$version + 1 | 0;
        return $result;
    }
    return null;
},
ju_ArrayDeque_add = ($this, $e) => {
    $this.$addLast($e);
    return 1;
},
ju_ArrayDeque_remove = $this => {
    return $this.$removeFirst();
},
ju_ArrayDeque_size = $this => {
    return $this.$tail0 >= $this.$head0 ? $this.$tail0 - $this.$head0 | 0 : ($this.$array0.data.length - $this.$head0 | 0) + $this.$tail0 | 0;
},
ju_ArrayDeque_isEmpty = $this => {
    return $this.$head0 != $this.$tail0 ? 0 : 1;
},
ju_ArrayDeque_modInc = ($i, $mod) => {
    let var$3;
    var$3 = $i + 1 | 0;
    if (var$3 == $mod)
        var$3 = 0;
    return var$3;
},
ju_ArrayDeque_ensureCapacity = ($this, $capacity) => {
    let $newArraySize, $newArray, $j, $i, var$6, var$7, var$8;
    if ($capacity >= $this.$array0.data.length) {
        $newArraySize = jl_Math_max($this.$array0.data.length * 2 | 0, (($capacity * 3 | 0) / 2 | 0) + 1 | 0);
        if ($newArraySize < 1)
            $newArraySize = 2147483647;
        $newArray = $rt_createArray(jl_Object, $newArraySize);
        $j = 0;
        if ($this.$head0 <= $this.$tail0) {
            $i = $this.$head0;
            while ($i < $this.$tail0) {
                var$6 = $newArray.data;
                var$7 = $j + 1 | 0;
                var$6[$j] = $this.$array0.data[$i];
                $i = $i + 1 | 0;
                $j = var$7;
            }
        } else {
            $i = $this.$head0;
            while ($i < $this.$array0.data.length) {
                var$8 = $newArray.data;
                var$7 = $j + 1 | 0;
                var$8[$j] = $this.$array0.data[$i];
                $i = $i + 1 | 0;
                $j = var$7;
            }
            $i = 0;
            while ($i < $this.$tail0) {
                var$6 = $newArray.data;
                var$7 = $j + 1 | 0;
                var$6[$j] = $this.$array0.data[$i];
                $i = $i + 1 | 0;
                $j = var$7;
            }
        }
        $this.$head0 = 0;
        $this.$tail0 = $j;
        $this.$array0 = $newArray;
        return;
    }
};
function jur_AbstractCharClass$LazyJavaDigit$1() {
    jur_AbstractCharClass.call(this);
    this.$this$016 = null;
}
let jur_AbstractCharClass$LazyJavaDigit$1__init_ = ($this, $this$0) => {
    $this.$this$016 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaDigit$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaDigit$1();
    jur_AbstractCharClass$LazyJavaDigit$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaDigit$1_contains = ($this, $ch) => {
    return jl_Character_isDigit($ch);
},
jl_NullPointerException = $rt_classWithoutFields(jl_RuntimeException),
jl_NullPointerException__init_1 = ($this, $message) => {
    jl_RuntimeException__init_0($this, $message);
},
jl_NullPointerException__init_ = var_0 => {
    let var_1 = new jl_NullPointerException();
    jl_NullPointerException__init_1(var_1, var_0);
    return var_1;
},
jl_NullPointerException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
jl_NullPointerException__init_2 = () => {
    let var_0 = new jl_NullPointerException();
    jl_NullPointerException__init_0(var_0);
    return var_0;
},
cgwbes_Event$Type = $rt_classWithoutFields(),
cgwbes_Event$Type__init_ = $this => {
    jl_Object__init_($this);
},
cgwbes_Event$Type__init_0 = () => {
    let var_0 = new cgwbes_Event$Type();
    cgwbes_Event$Type__init_(var_0);
    return var_0;
},
cgges_GwtEvent$Type = $rt_classWithoutFields(cgwbes_Event$Type),
cgges_GwtEvent$Type__init_ = $this => {
    cgwbes_Event$Type__init_($this);
},
cgges_GwtEvent$Type__init_0 = () => {
    let var_0 = new cgges_GwtEvent$Type();
    cgges_GwtEvent$Type__init_(var_0);
    return var_0;
},
cggedc_DomEvent$Type = $rt_classWithoutFields(cgges_GwtEvent$Type);
function jur_AbstractCharClass$LazyJavaSpaceChar$1() {
    jur_AbstractCharClass.call(this);
    this.$this$032 = null;
}
let jur_AbstractCharClass$LazyJavaSpaceChar$1__init_ = ($this, $this$0) => {
    $this.$this$032 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaSpaceChar$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaSpaceChar$1();
    jur_AbstractCharClass$LazyJavaSpaceChar$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaSpaceChar$1_contains = ($this, $ch) => {
    return jl_Character_isSpaceChar($ch);
};
function eycdaca_AceResources$loadModules$lambda$_3_1() {
    let a = this; jl_Object.call(a);
    a.$_00 = null;
    a.$_10 = 0;
    a.$_2 = null;
    a.$_3 = null;
}
let eycdaca_AceResources$loadModules$lambda$_3_1__init_ = (var$0, var$1, var$2, var$3, var$4) => {
    jl_Object__init_(var$0);
    var$0.$_00 = var$1;
    var$0.$_10 = var$2;
    var$0.$_2 = var$3;
    var$0.$_3 = var$4;
},
eycdaca_AceResources$loadModules$lambda$_3_1__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new eycdaca_AceResources$loadModules$lambda$_3_1();
    eycdaca_AceResources$loadModules$lambda$_3_1__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
eycdaca_AceResources$loadModules$lambda$_3_1_run = var$0 => {
    eycdaca_AceResources_lambda$loadModules$2(var$0.$_00, var$0.$_10, var$0.$_2, var$0.$_3);
},
cgges_EventHandler = $rt_classWithoutFields(0),
jl_Math = $rt_classWithoutFields(),
jl_Math_min = ($a, $b) => {
    if ($a < $b)
        $b = $a;
    return $b;
},
jl_Math_max = ($a, $b) => {
    if ($a > $b)
        $b = $a;
    return $b;
},
eycdaca_AceResources$loadModules$lambda$_3_0 = $rt_classWithoutFields(),
eycdaca_AceResources$loadModules$lambda$_3_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
eycdaca_AceResources$loadModules$lambda$_3_0__init_0 = () => {
    let var_0 = new eycdaca_AceResources$loadModules$lambda$_3_0();
    eycdaca_AceResources$loadModules$lambda$_3_0__init_(var_0);
    return var_0;
},
eycdaca_AceResources$loadModules$lambda$_3_0_apply0 = (var$0, var$1) => {
    return eycdaca_AceResources$loadModules$lambda$_3_0_apply(var$0, var$1);
},
eycdaca_AceResources$loadModules$lambda$_3_0_apply = (var$0, var$1) => {
    return eycdaca_AceResources_lambda$loadModules$1(var$1);
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart();
    jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
},
jl_IllegalArgumentException = $rt_classWithoutFields(jl_RuntimeException),
jl_IllegalArgumentException__init_1 = $this => {
    jl_RuntimeException__init_($this);
},
jl_IllegalArgumentException__init_ = () => {
    let var_0 = new jl_IllegalArgumentException();
    jl_IllegalArgumentException__init_1(var_0);
    return var_0;
},
jl_IllegalArgumentException__init_2 = ($this, $message) => {
    jl_RuntimeException__init_0($this, $message);
},
jl_IllegalArgumentException__init_0 = var_0 => {
    let var_1 = new jl_IllegalArgumentException();
    jl_IllegalArgumentException__init_2(var_1, var_0);
    return var_1;
};
function jur_PatternSyntaxException() {
    let a = this; jl_IllegalArgumentException.call(a);
    a.$desc = null;
    a.$pattern1 = null;
    a.$index0 = 0;
}
let jur_PatternSyntaxException__init_0 = ($this, $description, $pattern, $index) => {
    jl_IllegalArgumentException__init_1($this);
    $this.$index0 = (-1);
    $this.$desc = $description;
    $this.$pattern1 = $pattern;
    $this.$index0 = $index;
},
jur_PatternSyntaxException__init_ = (var_0, var_1, var_2) => {
    let var_3 = new jur_PatternSyntaxException();
    jur_PatternSyntaxException__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_PatternSyntaxException_getMessage = $this => {
    let $filler, $temp, var$3, var$4, var$5, var$6;
    $filler = $rt_s(8);
    if ($this.$index0 >= 1) {
        $temp = $rt_createCharArray($this.$index0);
        ju_Arrays_fill2($temp, 32);
        $filler = jl_String__init_0($temp);
    }
    var$3 = $this.$desc;
    if (!($this.$pattern1 !== null && jl_String_length($this.$pattern1)))
        var$4 = $rt_s(8);
    else {
        var$5 = $this.$index0;
        var$4 = $this.$pattern1;
        var$6 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(var$6, var$5), $rt_s(254)), var$4), $rt_s(254)), $filler);
        var$4 = jl_StringBuilder_toString(var$6);
    }
    var$6 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$6, var$3), var$4);
    return jl_StringBuilder_toString(var$6);
},
iitm_ScriptModule$JsAction = $rt_classWithoutFields(0),
cgguc_BrowserEventBridge$updateDocumentListener$lambda$_5_0 = $rt_classWithoutFields(),
cgguc_BrowserEventBridge$updateDocumentListener$lambda$_5_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cgguc_BrowserEventBridge$updateDocumentListener$lambda$_5_0__init_0 = () => {
    let var_0 = new cgguc_BrowserEventBridge$updateDocumentListener$lambda$_5_0();
    cgguc_BrowserEventBridge$updateDocumentListener$lambda$_5_0__init_(var_0);
    return var_0;
},
cgguc_BrowserEventBridge$updateDocumentListener$lambda$_5_0_handle = (var$0, var$1) => {
    cgguc_BrowserEventBridge_previewAndCapture(var$1);
},
cgguc_BrowserEventBridge$updateDocumentListener$lambda$_5_0_handle$exported$0 = (var$1, var$2) => {
    var$1.$handle(var$2);
},
jur_AbstractCharClass$LazyJavaDefined = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaDefined__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaDefined__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaDefined();
    jur_AbstractCharClass$LazyJavaDefined__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaDefined_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaDefined$1__init_0($this);
    $chCl.$lowHighSurrogates.$set(0, 2048);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
};
function jur_Pattern() {
    let a = this; jl_Object.call(a);
    a.$lexemes = null;
    a.$flags = 0;
    a.$backRefs = null;
    a.$needsBackRefReplacement = 0;
    a.$globalGroupIndex = 0;
    a.$compCount0 = 0;
    a.$consCount0 = 0;
    a.$start2 = null;
    a.$namedGroups0 = null;
}
let jur_Pattern_matcher = ($this, $input) => {
    return jur_Matcher__init_0($this, $input);
},
jur_Pattern_split = ($this, $inputSeq, $limit) => {
    let $res, $mat, $index, $curPos, var$7, var$8;
    $res = ju_ArrayList__init_();
    $mat = jur_Pattern_matcher($this, $inputSeq);
    $index = 0;
    $curPos = 0;
    if ($inputSeq.$length()) {
        while (jur_Matcher_find0($mat)) {
            var$7 = $index + 1 | 0;
            if (var$7 >= $limit && $limit > 0)
                break;
            $res.$add2(($inputSeq.$subSequence($curPos, jur_Matcher_start($mat))).$toString());
            $curPos = jur_Matcher_end0($mat);
            $index = var$7;
        }
        a: {
            $res.$add2(($inputSeq.$subSequence($curPos, $inputSeq.$length())).$toString());
            var$7 = $index + 1 | 0;
            if (!$limit)
                b: {
                    while (true) {
                        var$7 = var$7 + (-1) | 0;
                        if (var$7 < 0)
                            break;
                        if (jl_String_length(jl_String_toString($res.$get(var$7))))
                            break b;
                        $res.$remove(var$7);
                    }
                    break a;
                }
        }
        if (var$7 < 0)
            var$7 = 0;
        return $res.$toArray($rt_createArray(jl_String, var$7));
    }
    var$8 = $rt_createArray(jl_String, 1);
    var$8.data[0] = $rt_s(8);
    return var$8;
},
jur_Pattern_pattern = $this => {
    return $this.$lexemes.$toString();
},
jur_Pattern_compile0 = ($pattern, $flags) => {
    if ($pattern !== null) {
        if ($flags && ($flags | 255) != 255)
            $rt_throw(jl_IllegalArgumentException__init_0($rt_s(8)));
        jur_AbstractSet_$callClinit();
        jur_AbstractSet_counter = 1;
        return jur_Pattern_compileImpl(jur_Pattern__init_0(), $pattern, $flags);
    }
    $rt_throw(jl_NullPointerException__init_($rt_s(255)));
},
jur_Pattern_compileImpl = ($this, $pattern, $flags) => {
    $this.$lexemes = jur_Lexer__init_0($pattern, $flags);
    $this.$flags = $flags;
    $this.$start2 = jur_Pattern_processExpression($this, (-1), $this.$flags, null);
    if (!$this.$lexemes.$isEmpty())
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(8), $this.$lexemes.$toString(), $this.$lexemes.$getIndex()));
    jur_Pattern_finalizeCompile($this);
    return $this;
},
jur_Pattern_processAlternations = ($this, $last) => {
    let $auxRange, var$3, $rangeSet;
    $auxRange = jur_CharClass__init_4(jur_Pattern_hasFlag($this, 2), jur_Pattern_hasFlag($this, 64));
    while (!$this.$lexemes.$isEmpty()) {
        var$3 = $this.$lexemes;
        if (!var$3.$isLetter())
            break;
        var$3 = $this.$lexemes;
        if (var$3.$lookAhead() && $this.$lexemes.$lookAhead() != (-536870788)) {
            var$3 = $this.$lexemes;
            if (var$3.$lookAhead() != (-536870871))
                break;
        }
        $auxRange.$add($this.$lexemes.$next0());
        if ($this.$lexemes.$peek() != (-536870788))
            continue;
        $this.$lexemes.$next0();
    }
    $rangeSet = jur_Pattern_processRangeSet($this, $auxRange);
    $rangeSet.$setNext($last);
    return $rangeSet;
},
jur_Pattern_processExpression = ($this, $ch, $newFlags, $last) => {
    let $children, $saveFlags, $saveChangedFlags, $fSet, var$8, $child;
    $children = ju_ArrayList__init_();
    $saveFlags = $this.$flags;
    $saveChangedFlags = 0;
    if ($newFlags != $this.$flags)
        $this.$flags = $newFlags;
    a: {
        b: {
            c: {
                d: {
                    e: {
                        switch ($ch) {
                            case -1073741784:
                                break e;
                            case -536870872:
                            case -268435416:
                                break;
                            case -134217688:
                            case -67108824:
                                break d;
                            case -33554392:
                                break c;
                            default:
                                break b;
                        }
                        $fSet = jur_AheadFSet__init_0();
                        break a;
                    }
                    $fSet = new jur_NonCapFSet;
                    var$8 = $this.$consCount0 + 1 | 0;
                    $this.$consCount0 = var$8;
                    jur_NonCapFSet__init_($fSet, var$8);
                    break a;
                }
                $fSet = new jur_BehindFSet;
                var$8 = $this.$consCount0 + 1 | 0;
                $this.$consCount0 = var$8;
                jur_BehindFSet__init_($fSet, var$8);
                break a;
            }
            $fSet = new jur_AtomicFSet;
            var$8 = $this.$consCount0 + 1 | 0;
            $this.$consCount0 = var$8;
            jur_AtomicFSet__init_($fSet, var$8);
            break a;
        }
        $this.$globalGroupIndex = $this.$globalGroupIndex + 1 | 0;
        if ($last === null) {
            $fSet = jur_FinalSet__init_0();
            $saveChangedFlags = 1;
        } else {
            $fSet = jur_FSet__init_0($this.$globalGroupIndex);
            if ($ch == (-2130706392)) {
                if ($this.$namedGroups0 === null)
                    $this.$namedGroups0 = ju_LinkedHashMap__init_1();
                $this.$namedGroups0.$put($this.$lexemes.$groupName, jl_Integer_valueOf($this.$globalGroupIndex));
            }
        }
        if ($this.$globalGroupIndex > (-1) && $this.$globalGroupIndex < 10)
            $this.$backRefs.data[$this.$globalGroupIndex] = $fSet;
    }
    while (true) {
        if ($this.$lexemes.$isLetter() && $this.$lexemes.$lookAhead() == (-536870788))
            $child = jur_Pattern_processAlternations($this, $fSet);
        else if ($this.$lexemes.$peek() == (-536870788)) {
            $child = jur_EmptySet__init_($fSet);
            $this.$lexemes.$next0();
        } else {
            $child = jur_Pattern_processSubExpression($this, $fSet);
            if ($this.$lexemes.$peek() == (-536870788))
                $this.$lexemes.$next0();
        }
        if ($child !== null)
            $children.$add2($child);
        if ($this.$lexemes.$isEmpty())
            break;
        if ($this.$lexemes.$peek() == (-536870871))
            break;
    }
    if ($this.$lexemes.$back() == (-536870788))
        $children.$add2(jur_EmptySet__init_($fSet));
    if ($this.$flags != $saveFlags && !$saveChangedFlags) {
        $this.$flags = $saveFlags;
        $this.$lexemes.$restoreFlags($this.$flags);
    }
    switch ($ch) {
        case -1073741784:
            break;
        case -536870872:
            return jur_PositiveLookAhead__init_0($children, $fSet);
        case -268435416:
            return jur_NegativeLookAhead__init_0($children, $fSet);
        case -134217688:
            return jur_PositiveLookBehind__init_0($children, $fSet);
        case -67108824:
            return jur_NegativeLookBehind__init_0($children, $fSet);
        case -33554392:
            return jur_AtomicJointSet__init_0($children, $fSet);
        default:
            switch ($children.$size()) {
                case 0:
                    break;
                case 1:
                    return jur_SingleSet__init_0($children.$get(0), $fSet);
                default:
                    return jur_JointSet__init_1($children, $fSet);
            }
            return jur_EmptySet__init_($fSet);
    }
    return jur_NonCapJointSet__init_0($children, $fSet);
},
jur_Pattern_processSequence = $this => {
    let $substring, var$2, $ch;
    $substring = jl_StringBuffer__init_0();
    while (!$this.$lexemes.$isEmpty()) {
        var$2 = $this.$lexemes;
        if (!var$2.$isLetter())
            break;
        var$2 = $this.$lexemes;
        if (var$2.$isHighSurrogate0())
            break;
        var$2 = $this.$lexemes;
        if (var$2.$isLowSurrogate0())
            break;
        var$2 = $this.$lexemes;
        if (!(!var$2.$isNextSpecial() && !$this.$lexemes.$lookAhead())) {
            var$2 = $this.$lexemes;
            if (!(!var$2.$isNextSpecial() && jur_Lexer_isLetter($this.$lexemes.$lookAhead()))) {
                var$2 = $this.$lexemes;
                if (var$2.$lookAhead() != (-536870871)) {
                    var$2 = $this.$lexemes;
                    if ((var$2.$lookAhead() & (-2147418113)) != (-2147483608)) {
                        var$2 = $this.$lexemes;
                        if (var$2.$lookAhead() != (-536870788)) {
                            var$2 = $this.$lexemes;
                            if (var$2.$lookAhead() != (-536870876))
                                break;
                        }
                    }
                }
            }
        }
        $ch = $this.$lexemes.$next0();
        if (!jl_Character_isSupplementaryCodePoint($ch))
            $substring.$append8($ch & 65535);
        else
            $substring.$append9(jl_Character_toChars($ch));
    }
    if (jur_Pattern_hasFlag($this, 2)) {
        if (!jur_Pattern_hasFlag($this, 64))
            return jur_CISequenceSet__init_0($substring);
        return jur_UCISequenceSet__init_0($substring);
    }
    return jur_SequenceSet__init_0($substring);
},
jur_Pattern_processDecomposedChar = $this => {
    let $codePoints, $readCodePoints, $curSymb, $curSymbIndex, var$5, $codePointsHangul, var$7, var$8, var$9, var$10;
    $codePoints = $rt_createIntArray(4);
    $readCodePoints = 0;
    $curSymb = (-1);
    $curSymbIndex = (-1);
    if (!$this.$lexemes.$isEmpty() && $this.$lexemes.$isLetter()) {
        var$5 = $codePoints.data;
        $curSymb = $this.$lexemes.$next0();
        var$5[$readCodePoints] = $curSymb;
        $curSymbIndex = $curSymb - 4352 | 0;
    }
    if ($curSymbIndex >= 0 && $curSymbIndex < 19) {
        $codePointsHangul = $rt_createCharArray(3);
        var$5 = $codePointsHangul.data;
        var$5[$readCodePoints] = $curSymb & 65535;
        var$7 = $this.$lexemes.$peek();
        var$8 = var$7 - 4449 | 0;
        if (var$8 >= 0 && var$8 < 21) {
            var$5[1] = var$7 & 65535;
            $this.$lexemes.$next0();
            var$9 = $this.$lexemes.$peek();
            var$7 = var$9 - 4519 | 0;
            if (var$7 >= 0 && var$7 < 28) {
                var$5[2] = var$9 & 65535;
                $this.$lexemes.$next0();
                return jur_HangulDecomposedCharSet__init_0($codePointsHangul, 3);
            }
            return jur_HangulDecomposedCharSet__init_0($codePointsHangul, 2);
        }
        if (jur_Pattern_hasFlag($this, 2)) {
            if (!jur_Pattern_hasFlag($this, 64))
                return jur_CICharSet__init_(var$5[0]);
            return jur_UCICharSet__init_0(var$5[0]);
        }
        return jur_CharSet__init_(var$5[0]);
    }
    var$10 = 1;
    while (var$10 < 4 && !$this.$lexemes.$isEmpty() && $this.$lexemes.$isLetter()) {
        var$5 = $codePoints.data;
        var$9 = var$10 + 1 | 0;
        var$5[var$10] = $this.$lexemes.$next0();
        var$10 = var$9;
    }
    if (var$10 == 1) {
        var$5 = $codePoints.data;
        if (!jur_Lexer_hasSingleCodepointDecomposition(var$5[0]))
            return jur_Pattern_processCharSet($this, var$5[0]);
    }
    if (jur_Pattern_hasFlag($this, 2)) {
        if (!jur_Pattern_hasFlag($this, 64))
            return jur_CIDecomposedCharSet__init_0($codePoints, var$10);
        return jur_UCIDecomposedCharSet__init_0($codePoints, var$10);
    }
    return jur_DecomposedCharSet__init_0($codePoints, var$10);
},
jur_Pattern_processSubExpression = ($this, $last) => {
    let $term, $cur, var$4, $next;
    a: {
        if (!($this.$lexemes.$isLetter() && !$this.$lexemes.$isNextSpecial() && jur_Lexer_isLetter($this.$lexemes.$lookAhead()))) {
            if ($this.$lexemes.$peek() != (-536870871)) {
                $term = jur_Pattern_processTerminal($this, $last);
                $cur = jur_Pattern_processQuantifier($this, $last, $term);
                break a;
            }
            if (!($last instanceof jur_FinalSet)) {
                $cur = jur_EmptySet__init_($last);
                break a;
            }
            $rt_throw(jur_PatternSyntaxException__init_($rt_s(8), $this.$lexemes.$toString(), $this.$lexemes.$getIndex()));
        }
        if (!jur_Pattern_hasFlag($this, 128)) {
            if (!$this.$lexemes.$isHighSurrogate0() && !$this.$lexemes.$isLowSurrogate0())
                $cur = jur_Pattern_processSequence($this);
            else {
                $term = jur_Pattern_processTerminal($this, $last);
                $cur = jur_Pattern_processQuantifier($this, $last, $term);
            }
        } else {
            $cur = jur_Pattern_processDecomposedChar($this);
            if (!$this.$lexemes.$isEmpty()) {
                var$4 = $this.$lexemes;
                if (!(var$4.$peek() == (-536870871) && !($last instanceof jur_FinalSet))) {
                    var$4 = $this.$lexemes;
                    if (var$4.$peek() != (-536870788) && !$this.$lexemes.$isLetter())
                        $cur = jur_Pattern_processQuantifier($this, $last, $cur);
                }
            }
        }
    }
    b: {
        c: {
            if (!$this.$lexemes.$isEmpty()) {
                var$4 = $this.$lexemes;
                if (!(var$4.$peek() == (-536870871) && !($last instanceof jur_FinalSet))) {
                    var$4 = $this.$lexemes;
                    if (var$4.$peek() != (-536870788))
                        break c;
                }
            }
            if ($cur !== null) {
                $cur.$setNext($last);
                break b;
            }
            return null;
        }
        $next = jur_Pattern_processSubExpression($this, $last);
        if ($cur instanceof jur_LeafQuantifierSet && !($cur instanceof jur_CompositeQuantifierSet) && !($cur instanceof jur_GroupQuantifierSet) && !($cur instanceof jur_AltQuantifierSet)) {
            var$4 = $cur;
            if (!$next.$first(var$4.$getInnerSet()))
                $cur = jur_UnifiedQuantifierSet__init_0(var$4);
        }
        if (($next.$getType0() & 65535) != 43)
            $cur.$setNext($next);
        else
            $cur.$setNext($next.$getInnerSet());
    }
    if (($cur.$getType0() & 65535) == 43)
        return $cur.$getInnerSet();
    return $cur;
},
jur_Pattern_processQuantifier = ($this, $last, $term) => {
    let $quant, var$4, var$5, var$6, $q, var$8, $leaf;
    $quant = $this.$lexemes.$peek();
    if ($term !== null && !($term instanceof jur_LeafSet)) {
        switch ($quant) {
            case -2147483606:
                $this.$lexemes.$next0();
                return jur_PossessiveGroupQuantifierSet__init_0($term, $last, $quant);
            case -2147483605:
                $this.$lexemes.$next0();
                return jur_PosPlusGroupQuantifierSet__init_0($term, $last, (-2147483606));
            case -2147483585:
                $this.$lexemes.$next0();
                return jur_PosAltGroupQuantifierSet__init_0($term, $last, (-536870849));
            case -2147483525:
                var$4 = new jur_PosCompositeGroupQuantifierSet;
                var$5 = $this.$lexemes.$nextSpecial();
                var$6 = $this.$compCount0 + 1 | 0;
                $this.$compCount0 = var$6;
                jur_PosCompositeGroupQuantifierSet__init_(var$4, var$5, $term, $last, (-536870849), var$6);
                return var$4;
            case -1073741782:
            case -1073741781:
                $this.$lexemes.$next0();
                $q = jur_ReluctantGroupQuantifierSet__init_0($term, $last, $quant);
                $term.$setNext($q);
                return $q;
            case -1073741761:
                $this.$lexemes.$next0();
                $q = jur_RelAltGroupQuantifierSet__init_0($term, $last, (-536870849));
                $term.$setNext($last);
                return $q;
            case -1073741701:
                $q = new jur_RelCompositeGroupQuantifierSet;
                var$4 = $this.$lexemes;
                var$4 = var$4.$nextSpecial();
                var$8 = $this.$compCount0 + 1 | 0;
                $this.$compCount0 = var$8;
                jur_RelCompositeGroupQuantifierSet__init_($q, var$4, $term, $last, (-536870849), var$8);
                $term.$setNext($q);
                return $q;
            case -536870870:
            case -536870869:
                $this.$lexemes.$next0();
                $q = $term.$getType0() != (-2147483602) ? jur_GroupQuantifierSet__init_0($term, $last, $quant) : jur_Pattern_hasFlag($this, 32) ? jur_DotAllQuantifierSet__init_0($term, $last, $quant) : jur_DotQuantifierSet__init_0($term, $last, $quant, jur_AbstractLineTerminator_getInstance($this.$flags));
                $term.$setNext($q);
                return $q;
            case -536870849:
                $this.$lexemes.$next0();
                $q = jur_AltGroupQuantifierSet__init_0($term, $last, (-536870849));
                $term.$setNext($last);
                return $q;
            case -536870789:
                $q = new jur_CompositeGroupQuantifierSet;
                var$4 = $this.$lexemes;
                var$4 = var$4.$nextSpecial();
                var$6 = $this.$compCount0 + 1 | 0;
                $this.$compCount0 = var$6;
                jur_CompositeGroupQuantifierSet__init_($q, var$4, $term, $last, (-536870849), var$6);
                $term.$setNext($q);
                return $q;
            default:
        }
        return $term;
    }
    $leaf = null;
    if ($term !== null)
        $leaf = $term;
    switch ($quant) {
        case -2147483606:
        case -2147483605:
            $this.$lexemes.$next0();
            $q = jur_PossessiveQuantifierSet__init_0($leaf, $last, $quant);
            $leaf.$setNext($q);
            return $q;
        case -2147483585:
            $this.$lexemes.$next0();
            return jur_PossessiveAltQuantifierSet__init_0($leaf, $last, (-2147483585));
        case -2147483525:
            return jur_PossessiveCompositeQuantifierSet__init_0($this.$lexemes.$nextSpecial(), $leaf, $last, (-2147483525));
        case -1073741782:
        case -1073741781:
            $this.$lexemes.$next0();
            $q = jur_ReluctantQuantifierSet__init_0($leaf, $last, $quant);
            $leaf.$setNext($q);
            return $q;
        case -1073741761:
            $this.$lexemes.$next0();
            return jur_ReluctantAltQuantifierSet__init_0($leaf, $last, (-1073741761));
        case -1073741701:
            return jur_ReluctantCompositeQuantifierSet__init_0($this.$lexemes.$nextSpecial(), $leaf, $last, (-1073741701));
        case -536870870:
        case -536870869:
            $this.$lexemes.$next0();
            $q = jur_LeafQuantifierSet__init_0($leaf, $last, $quant);
            $leaf.$setNext($q);
            return $q;
        case -536870849:
            $this.$lexemes.$next0();
            return jur_AltQuantifierSet__init_0($leaf, $last, (-536870849));
        case -536870789:
            return jur_CompositeQuantifierSet__init_0($this.$lexemes.$nextSpecial(), $leaf, $last, (-536870789));
        default:
    }
    return $term;
},
jur_Pattern_processTerminal = ($this, $last) => {
    let $term, $ch, $newFlags, var$5, $cc, $negative, $number, var$9, var$10, var$11;
    $term = null;
    while (true) {
        a: {
            $ch = $this.$lexemes.$peek();
            if (($ch & (-2147418113)) == (-2147483608)) {
                $this.$lexemes.$next0();
                $newFlags = ($ch & 16711680) >> 16;
                $ch = $ch & (-16711681);
                if ($ch == (-16777176))
                    $this.$flags = $newFlags;
                else {
                    if ($ch != (-1073741784))
                        $newFlags = $this.$flags;
                    $term = jur_Pattern_processExpression($this, $ch, $newFlags, $last);
                    if ($this.$lexemes.$peek() != (-536870871))
                        $rt_throw(jur_PatternSyntaxException__init_($rt_s(8), $this.$lexemes.$toString(), $this.$lexemes.$getIndex()));
                    $this.$lexemes.$next0();
                }
            } else {
                b: {
                    c: {
                        d: {
                            e: {
                                f: {
                                    g: {
                                        h: {
                                            i: {
                                                j: {
                                                    k: {
                                                        l: {
                                                            m: {
                                                                switch ($ch) {
                                                                    case -2147483599:
                                                                    case -2147483598:
                                                                    case -2147483597:
                                                                    case -2147483596:
                                                                    case -2147483595:
                                                                    case -2147483594:
                                                                    case -2147483593:
                                                                    case -2147483592:
                                                                    case -2147483591:
                                                                        break c;
                                                                    case -2147483583:
                                                                        break;
                                                                    case -2147483582:
                                                                        break k;
                                                                    case -2147483577:
                                                                        break m;
                                                                    case -2147483558:
                                                                        break i;
                                                                    case -2147483550:
                                                                        break j;
                                                                    case -2147483526:
                                                                        break l;
                                                                    case -536870876:
                                                                        break e;
                                                                    case -536870866:
                                                                        break h;
                                                                    case -536870821:
                                                                        break d;
                                                                    case -536870818:
                                                                        break g;
                                                                    case 0:
                                                                        break f;
                                                                    default:
                                                                        break b;
                                                                }
                                                                $this.$lexemes.$next0();
                                                                $term = jur_SOLSet__init_0();
                                                                break a;
                                                            }
                                                            $this.$lexemes.$next0();
                                                            $term = jur_PreviousMatch__init_0();
                                                            break a;
                                                        }
                                                        $this.$lexemes.$next0();
                                                        $term = jur_EOISet__init_0();
                                                        break a;
                                                    }
                                                    $this.$lexemes.$next0();
                                                    $term = jur_WordBoundary__init_(0);
                                                    break a;
                                                }
                                                $this.$lexemes.$next0();
                                                $term = jur_WordBoundary__init_(1);
                                                break a;
                                            }
                                            $this.$lexemes.$next0();
                                            $term = new jur_EOLSet;
                                            var$5 = $this.$consCount0 + 1 | 0;
                                            $this.$consCount0 = var$5;
                                            jur_EOLSet__init_($term, var$5);
                                            break a;
                                        }
                                        $this.$lexemes.$next0();
                                        if (jur_Pattern_hasFlag($this, 32)) {
                                            $term = jur_DotAllSet__init_0();
                                            break a;
                                        }
                                        $term = jur_DotSet__init_0(jur_AbstractLineTerminator_getInstance($this.$flags));
                                        break a;
                                    }
                                    $this.$lexemes.$next0();
                                    $this.$consCount0 = $this.$consCount0 + 1 | 0;
                                    if (!jur_Pattern_hasFlag($this, 8)) {
                                        $term = jur_SOLSet__init_0();
                                        break a;
                                    }
                                    $term = jur_MultiLineSOLSet__init_0(jur_AbstractLineTerminator_getInstance($this.$flags));
                                    break a;
                                }
                                $cc = $this.$lexemes.$peekSpecial();
                                if ($cc !== null)
                                    $term = jur_Pattern_processRangeSet($this, $cc);
                                else {
                                    if ($this.$lexemes.$isEmpty()) {
                                        $term = jur_EmptySet__init_($last);
                                        break a;
                                    }
                                    $term = jur_CharSet__init_($ch & 65535);
                                }
                                $this.$lexemes.$next0();
                                break a;
                            }
                            $this.$lexemes.$next0();
                            $this.$consCount0 = $this.$consCount0 + 1 | 0;
                            if (jur_Pattern_hasFlag($this, 8)) {
                                if (jur_Pattern_hasFlag($this, 1)) {
                                    $term = jur_UMultiLineEOLSet__init_0($this.$consCount0);
                                    break a;
                                }
                                $term = jur_MultiLineEOLSet__init_0($this.$consCount0);
                                break a;
                            }
                            if (jur_Pattern_hasFlag($this, 1)) {
                                $term = jur_UEOLSet__init_0($this.$consCount0);
                                break a;
                            }
                            $term = jur_EOLSet__init_0($this.$consCount0);
                            break a;
                        }
                        $this.$lexemes.$next0();
                        $negative = 0;
                        if ($this.$lexemes.$peek() == (-536870818)) {
                            $negative = 1;
                            $this.$lexemes.$next0();
                        }
                        $term = jur_Pattern_processRange($this, $negative, $last);
                        if ($this.$lexemes.$peek() != (-536870819))
                            $rt_throw(jur_PatternSyntaxException__init_($rt_s(8), $this.$lexemes.$toString(), $this.$lexemes.$getIndex()));
                        $this.$lexemes.$setMode(1);
                        $this.$lexemes.$next0();
                        break a;
                    }
                    $number = ($ch & 2147483647) - 48 | 0;
                    if ($this.$globalGroupIndex < $number)
                        $rt_throw(jur_PatternSyntaxException__init_($rt_s(8), $this.$lexemes.$toString(), $this.$lexemes.$getIndex()));
                    $this.$lexemes.$next0();
                    $this.$consCount0 = $this.$consCount0 + 1 | 0;
                    $term = !jur_Pattern_hasFlag($this, 2) ? jur_BackReferenceSet__init_0($number, $this.$consCount0) : jur_Pattern_hasFlag($this, 64) ? jur_UCIBackReferenceSet__init_0($number, $this.$consCount0) : jur_CIBackReferenceSet__init_0($number, $this.$consCount0);
                    $this.$backRefs.data[$number].$isBackReferenced = 1;
                    $this.$needsBackRefReplacement = 1;
                    break a;
                }
                if ($ch >= 0 && !$this.$lexemes.$isSpecial()) {
                    $term = jur_Pattern_processCharSet($this, $ch);
                    $this.$lexemes.$next0();
                } else if ($ch == (-536870788))
                    $term = jur_EmptySet__init_($last);
                else {
                    if ($ch != (-536870871)) {
                        var$9 = new jur_PatternSyntaxException;
                        var$10 = !$this.$lexemes.$isSpecial() ? jl_Character_toString($ch & 65535) : ($this.$lexemes.$peekSpecial()).$toString();
                        var$11 = $this.$lexemes;
                        jur_PatternSyntaxException__init_0(var$9, var$10, var$11.$toString(), $this.$lexemes.$getIndex());
                        $rt_throw(var$9);
                    }
                    if ($last instanceof jur_FinalSet)
                        $rt_throw(jur_PatternSyntaxException__init_($rt_s(8), $this.$lexemes.$toString(), $this.$lexemes.$getIndex()));
                    $term = jur_EmptySet__init_($last);
                }
            }
        }
        if ($ch != (-16777176))
            break;
    }
    return $term;
},
jur_Pattern_processRange = ($this, $negative, $last) => {
    let $res, $rangeSet;
    $res = jur_Pattern_processRangeExpression($this, $negative);
    $rangeSet = jur_Pattern_processRangeSet($this, $res);
    $rangeSet.$setNext($last);
    return $rangeSet;
},
jur_Pattern_processRangeExpression = ($this, $alt) => {
    let $res, $buffer, $intersection, $notClosed, $firstInClass, $cs, $negative, var$9, $cur, $$je;
    $res = jur_CharClass__init_3($alt, jur_Pattern_hasFlag($this, 2), jur_Pattern_hasFlag($this, 64));
    $buffer = (-1);
    $intersection = 0;
    $notClosed = 0;
    $firstInClass = 1;
    a: {
        b: {
            c: {
                d: while (true) {
                    if ($this.$lexemes.$isEmpty())
                        break a;
                    $notClosed = !($this.$lexemes.$peek() == (-536870819) && !$firstInClass) ? 1 : 0;
                    if (!$notClosed)
                        break b;
                    e: {
                        f: {
                            g: {
                                h: {
                                    i: {
                                        j: {
                                            k: {
                                                switch ($this.$lexemes.$peek()) {
                                                    case -536870874:
                                                        break h;
                                                    case -536870867:
                                                        break f;
                                                    case -536870821:
                                                        break g;
                                                    case -536870819:
                                                        break k;
                                                    case -536870818:
                                                        break j;
                                                    case 0:
                                                        break i;
                                                    default:
                                                }
                                                if ($buffer >= 0)
                                                    $res.$add($buffer);
                                                $buffer = $this.$lexemes.$next0();
                                                break e;
                                            }
                                            if ($buffer >= 0)
                                                $res.$add($buffer);
                                            $buffer = 93;
                                            $this.$lexemes.$next0();
                                            break e;
                                        }
                                        if ($buffer >= 0)
                                            $res.$add($buffer);
                                        $buffer = 94;
                                        $this.$lexemes.$next0();
                                        break e;
                                    }
                                    if ($buffer >= 0)
                                        $res.$add($buffer);
                                    $cs = $this.$lexemes.$peekSpecial();
                                    if ($cs === null)
                                        $buffer = 0;
                                    else {
                                        $res.$add5($cs);
                                        $buffer = (-1);
                                    }
                                    $this.$lexemes.$next0();
                                    break e;
                                }
                                if ($buffer >= 0)
                                    $res.$add($buffer);
                                $buffer = $this.$lexemes.$next0();
                                if ($this.$lexemes.$peek() != (-536870874)) {
                                    $buffer = 38;
                                    break e;
                                }
                                if ($this.$lexemes.$lookAhead() == (-536870821)) {
                                    $this.$lexemes.$next0();
                                    $intersection = 1;
                                    $buffer = (-1);
                                    break e;
                                }
                                $this.$lexemes.$next0();
                                if ($firstInClass) {
                                    $res = jur_Pattern_processRangeExpression($this, 0);
                                    break e;
                                }
                                if ($this.$lexemes.$peek() == (-536870819))
                                    break e;
                                $res.$intersection(jur_Pattern_processRangeExpression($this, 0));
                                break e;
                            }
                            if ($buffer >= 0) {
                                $res.$add($buffer);
                                $buffer = (-1);
                            }
                            $this.$lexemes.$next0();
                            $negative = 0;
                            if ($this.$lexemes.$peek() == (-536870818)) {
                                $this.$lexemes.$next0();
                                $negative = 1;
                            }
                            if (!$intersection)
                                $res.$union(jur_Pattern_processRangeExpression($this, $negative));
                            else
                                $res.$intersection(jur_Pattern_processRangeExpression($this, $negative));
                            $intersection = 0;
                            $this.$lexemes.$next0();
                            break e;
                        }
                        l: {
                            if (!$firstInClass && $this.$lexemes.$lookAhead() != (-536870819)) {
                                var$9 = $this.$lexemes;
                                if (var$9.$lookAhead() != (-536870821) && $buffer >= 0)
                                    break l;
                            }
                            if ($buffer >= 0)
                                $res.$add($buffer);
                            $buffer = 45;
                            $this.$lexemes.$next0();
                            break e;
                        }
                        $this.$lexemes.$next0();
                        $cur = $this.$lexemes.$peek();
                        if ($this.$lexemes.$isSpecial())
                            break d;
                        if ($cur < 0) {
                            var$9 = $this.$lexemes;
                            if (var$9.$lookAhead() != (-536870819)) {
                                var$9 = $this.$lexemes;
                                if (var$9.$lookAhead() != (-536870821) && $buffer >= 0)
                                    break d;
                            }
                        }
                        m: {
                            try {
                                if (jur_Lexer_isLetter($cur))
                                    break m;
                                $cur = $cur & 65535;
                                break m;
                            } catch ($$e) {
                                $$je = $rt_wrapException($$e);
                                if ($$je instanceof jl_Exception) {
                                    break c;
                                } else {
                                    throw $$e;
                                }
                            }
                        }
                        try {
                            $res.$add0($buffer, $cur);
                        } catch ($$e) {
                            $$je = $rt_wrapException($$e);
                            if ($$je instanceof jl_Exception) {
                                break c;
                            } else {
                                throw $$e;
                            }
                        }
                        $this.$lexemes.$next0();
                        $buffer = (-1);
                    }
                    $firstInClass = 0;
                }
                $rt_throw(jur_PatternSyntaxException__init_($rt_s(8), jur_Pattern_pattern($this), $this.$lexemes.$getIndex()));
            }
            $rt_throw(jur_PatternSyntaxException__init_($rt_s(8), jur_Pattern_pattern($this), $this.$lexemes.$getIndex()));
        }
    }
    if ($notClosed)
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(8), jur_Pattern_pattern($this), $this.$lexemes.$getIndex() - 1 | 0));
    if ($buffer >= 0)
        $res.$add($buffer);
    return $res;
},
jur_Pattern_processCharSet = ($this, $ch) => {
    let $isSupplCodePoint;
    $isSupplCodePoint = jl_Character_isSupplementaryCodePoint($ch);
    if (jur_Pattern_hasFlag($this, 2)) {
        a: {
            if (!($ch >= 97 && $ch <= 122)) {
                if ($ch < 65)
                    break a;
                if ($ch > 90)
                    break a;
            }
            return jur_CICharSet__init_($ch & 65535);
        }
        if (jur_Pattern_hasFlag($this, 64) && $ch > 128) {
            if (!$isSupplCodePoint) {
                if (!jur_Lexer_isLowSurrogate($ch)) {
                    if (jur_Lexer_isHighSurrogate($ch))
                        return jur_HighSurrogateCharSet__init_0($ch & 65535);
                    return jur_UCICharSet__init_0($ch & 65535);
                }
                return jur_LowSurrogateCharSet__init_($ch & 65535);
            }
            return jur_UCISupplCharSet__init_0($ch);
        }
    }
    if (!$isSupplCodePoint) {
        if (!jur_Lexer_isLowSurrogate($ch)) {
            if (jur_Lexer_isHighSurrogate($ch))
                return jur_HighSurrogateCharSet__init_0($ch & 65535);
            return jur_CharSet__init_($ch & 65535);
        }
        return jur_LowSurrogateCharSet__init_($ch & 65535);
    }
    return jur_SupplCharSet__init_0($ch);
},
jur_Pattern_processRangeSet = ($this, $charClass) => {
    let $surrogates, $lowHighSurrRangeSet;
    if ($charClass.$hasLowHighSurrogates()) {
        $surrogates = $charClass.$getSurrogates();
        $lowHighSurrRangeSet = jur_LowHighSurrogateRangeSet__init_0($surrogates);
        if ($charClass.$mayContainSupplCodepoints()) {
            if (!$charClass.$hasUCI())
                return jur_CompositeRangeSet__init_(jur_SupplRangeSet__init_0($charClass.$getWithoutSurrogates()), $lowHighSurrRangeSet);
            return jur_CompositeRangeSet__init_(jur_UCISupplRangeSet__init_($charClass.$getWithoutSurrogates()), $lowHighSurrRangeSet);
        }
        if (!$charClass.$hasUCI())
            return jur_CompositeRangeSet__init_(jur_RangeSet__init_0($charClass.$getWithoutSurrogates()), $lowHighSurrRangeSet);
        return jur_CompositeRangeSet__init_(jur_UCIRangeSet__init_0($charClass.$getWithoutSurrogates()), $lowHighSurrRangeSet);
    }
    if ($charClass.$mayContainSupplCodepoints()) {
        if (!$charClass.$hasUCI())
            return jur_SupplRangeSet__init_0($charClass);
        return jur_UCISupplRangeSet__init_($charClass);
    }
    if (!$charClass.$hasUCI())
        return jur_RangeSet__init_0($charClass);
    return jur_UCIRangeSet__init_0($charClass);
},
jur_Pattern_compile = $pattern => {
    return jur_Pattern_compile0($pattern, 0);
},
jur_Pattern_finalizeCompile = $this => {
    if ($this.$needsBackRefReplacement)
        $this.$start2.$processSecondPass();
    if ($this.$namedGroups0 === null)
        $this.$namedGroups0 = ju_Collections_emptyMap();
    else
        $this.$namedGroups0 = ju_Collections_unmodifiableMap($this.$namedGroups0);
},
jur_Pattern_matches = ($regex, $input) => {
    return jur_Matcher_matches(jur_Pattern_matcher(jur_Pattern_compile($regex), $input));
},
jur_Pattern_quote = $s => {
    let $sb, $apos, var$4, $apos_0;
    $sb = (jl_StringBuilder__init_()).$append10($rt_s(256));
    $apos = 0;
    while (true) {
        var$4 = jl_String_indexOf0($s, $rt_s(257), $apos);
        if (var$4 < 0)
            break;
        $apos_0 = var$4 + 2 | 0;
        ($sb.$append10(jl_String_substring($s, $apos, $apos_0))).$append10($rt_s(258));
        $apos = $apos_0;
    }
    return (($sb.$append10(jl_String_substring0($s, $apos))).$append10($rt_s(257))).$toString();
},
jur_Pattern_namedGroups = $this => {
    return $this.$namedGroups0;
},
jur_Pattern_groupCount = $this => {
    return $this.$globalGroupIndex;
},
jur_Pattern_compCount = $this => {
    return $this.$compCount0 + 1 | 0;
},
jur_Pattern_consCount = $this => {
    return $this.$consCount0 + 1 | 0;
},
jur_Pattern_getSupplement = $ch => {
    if ($ch >= 97 && $ch <= 122)
        $ch = ($ch - 32 | 0) & 65535;
    else if ($ch >= 65 && $ch <= 90)
        $ch = ($ch + 32 | 0) & 65535;
    return $ch;
},
jur_Pattern_hasFlag = ($this, $flag) => {
    return ($this.$flags & $flag) != $flag ? 0 : 1;
},
jur_Pattern__init_ = $this => {
    jl_Object__init_($this);
    $this.$backRefs = $rt_createArray(jur_FSet, 10);
    $this.$globalGroupIndex = (-1);
    $this.$compCount0 = (-1);
    $this.$consCount0 = (-1);
},
jur_Pattern__init_0 = () => {
    let var_0 = new jur_Pattern();
    jur_Pattern__init_(var_0);
    return var_0;
},
eycdaca_AceNative = $rt_classWithoutFields(),
eycdaca_AceNative_position = $p => {
    return eycdaca_AceEditorCursorPosition__init_($p["row"] | 0, $p["column"] | 0);
},
eycdaca_AceNative_argument = $value => {
    if ($value !== null) {
        if (!($value instanceof jl_String)) {
            if (!($value instanceof cggcc_JavaScriptObject))
                $rt_throw(jl_IllegalArgumentException__init_0($rt_s(259)));
            return $value.$unwrap0();
        }
        return $rt_ustr($value);
    }
    return null;
},
eycdaca_AceNative_string$js_body$_2 = (var$1, var$2) => {
    return var$1[var$2] == null ? null : String(var$1[var$2]);
},
eycdaca_AceNative_get$js_body$_4 = (var$1, var$2) => {
    return var$1[var$2] == null ? null : var$1[var$2];
},
eycdaca_AceNative_array$js_body$_10 = () => {
    return [];
},
otjde_EventTarget = $rt_classWithoutFields(0),
jur_PosAltGroupQuantifierSet = $rt_classWithoutFields(jur_AltGroupQuantifierSet),
jur_PosAltGroupQuantifierSet__init_ = ($this, var$1, var$2, $type) => {
    jur_AltGroupQuantifierSet__init_($this, var$1, var$2, $type);
    jur_FSet_$callClinit();
    var$1.$setNext(jur_FSet_posFSet);
},
jur_PosAltGroupQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_PosAltGroupQuantifierSet();
    jur_PosAltGroupQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_PosAltGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $nextIndex;
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex <= 0)
        $nextIndex = $stringIndex;
    return $this.$next2.$matches($nextIndex, $testString, $matchResult);
},
jur_PosAltGroupQuantifierSet_setNext = ($this, $next) => {
    $this.$next2 = $next;
};
function ju_Collections$13() {
    ju_AbstractMap.call(this);
    this.$val$m = null;
}
let ju_Collections$13__init_ = ($this, var$1) => {
    $this.$val$m = var$1;
    ju_AbstractMap__init_($this);
},
ju_Collections$13__init_0 = var_0 => {
    let var_1 = new ju_Collections$13();
    ju_Collections$13__init_(var_1, var_0);
    return var_1;
},
ju_Collections$13_size = $this => {
    return $this.$val$m.$size();
},
ju_Collections$13_isEmpty = $this => {
    return $this.$val$m.$isEmpty();
};
function eycdaca_AceEditor$addOnChangeHandler$lambda$_11_0() {
    jl_Object.call(this);
    this.$_03 = null;
}
let eycdaca_AceEditor$addOnChangeHandler$lambda$_11_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_03 = var$1;
},
eycdaca_AceEditor$addOnChangeHandler$lambda$_11_0__init_0 = var_0 => {
    let var_1 = new eycdaca_AceEditor$addOnChangeHandler$lambda$_11_0();
    eycdaca_AceEditor$addOnChangeHandler$lambda$_11_0__init_(var_1, var_0);
    return var_1;
},
eycdaca_AceEditor$addOnChangeHandler$lambda$_11_0_fire = (var$0, var$1) => {
    eycdaca_AceEditor_lambda$addOnChangeHandler$0(var$0.$_03, var$1);
},
eycdaca_AceEditor$addOnChangeHandler$lambda$_11_0_fire$exported$0 = (var$1, var$2) => {
    var$1.$fire0(var$2);
},
jur_AbstractCharClass$LazyJavaLetterOrDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaLetterOrDigit__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaLetterOrDigit__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaLetterOrDigit();
    jur_AbstractCharClass$LazyJavaLetterOrDigit__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaLetterOrDigit_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaLetterOrDigit$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
};
function otciu_UnicodeHelper$Range() {
    let a = this; jl_Object.call(a);
    a.$start4 = 0;
    a.$end1 = 0;
    a.$data0 = null;
}
let otciu_UnicodeHelper$Range__init_ = ($this, $start, $end, $data) => {
    jl_Object__init_($this);
    $this.$start4 = $start;
    $this.$end1 = $end;
    $this.$data0 = $data;
},
otciu_UnicodeHelper$Range__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new otciu_UnicodeHelper$Range();
    otciu_UnicodeHelper$Range__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_AbstractLineTerminator$2 = $rt_classWithoutFields(jur_AbstractLineTerminator),
jur_AbstractLineTerminator$2__init_ = $this => {
    jur_AbstractLineTerminator__init_($this);
},
jur_AbstractLineTerminator$2__init_0 = () => {
    let var_0 = new jur_AbstractLineTerminator$2();
    jur_AbstractLineTerminator$2__init_(var_0);
    return var_0;
},
jur_AbstractLineTerminator$2_isLineTerminator = ($this, $ch) => {
    return !($ch != 10 && $ch != 13 && $ch != 133 && ($ch | 1) != 8233) ? 1 : 0;
},
jur_AbstractLineTerminator$2_isAfterLineTerminator = ($this, $ch, $ch2) => {
    let var$3;
    a: {
        b: {
            if ($ch != 10 && $ch != 133 && ($ch | 1) != 8233) {
                if ($ch != 13)
                    break b;
                if ($ch2 == 10)
                    break b;
            }
            var$3 = 1;
            break a;
        }
        var$3 = 0;
    }
    return var$3;
},
cgges_HandlerManager = $rt_classWithoutFields();
function otciu_CharMapping() {
    let a = this; jl_Object.call(a);
    a.$binarySearchTable0 = null;
    a.$fastTable = null;
}
let otciu_CharMapping__init_ = ($this, $binarySearchTable, $fastTable) => {
    jl_Object__init_($this);
    $this.$binarySearchTable0 = $binarySearchTable;
    $this.$fastTable = $fastTable;
},
otciu_CharMapping__init_0 = (var_0, var_1) => {
    let var_2 = new otciu_CharMapping();
    otciu_CharMapping__init_(var_2, var_0, var_1);
    return var_2;
},
jur_AbstractLineTerminator$1 = $rt_classWithoutFields(jur_AbstractLineTerminator),
jur_AbstractLineTerminator$1__init_ = $this => {
    jur_AbstractLineTerminator__init_($this);
},
jur_AbstractLineTerminator$1__init_0 = () => {
    let var_0 = new jur_AbstractLineTerminator$1();
    jur_AbstractLineTerminator$1__init_(var_0);
    return var_0;
},
jur_AbstractLineTerminator$1_isLineTerminator = ($this, $ch) => {
    return $ch != 10 ? 0 : 1;
},
jur_AbstractLineTerminator$1_isAfterLineTerminator = ($this, $ch, $ch2) => {
    return $ch != 10 ? 0 : 1;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart();
    jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
},
cggdc_ImageElement = $rt_classWithoutFields(cggdc_Element),
cggdc_ImageElement__init_ = ($this, $element) => {
    cggdc_Element__init_($this, $element);
},
cggdc_ImageElement__init_0 = var_0 => {
    let var_1 = new cggdc_ImageElement();
    cggdc_ImageElement__init_(var_1, var_0);
    return var_1;
},
eycdaca_AceCompletion = $rt_classWithoutFields(),
eycdaca_AceCompletion__init_ = $this => {
    jl_Object__init_($this);
};
function otci_CharFlow() {
    let a = this; jl_Object.call(a);
    a.$characters = null;
    a.$pointer = 0;
}
let otci_CharFlow__init_ = ($this, $characters) => {
    jl_Object__init_($this);
    $this.$characters = $characters;
},
otci_CharFlow__init_0 = var_0 => {
    let var_1 = new otci_CharFlow();
    otci_CharFlow__init_(var_1, var_0);
    return var_1;
};
function jur_RangeSet() {
    let a = this; jur_LeafSet.call(a);
    a.$chars0 = null;
    a.$alt1 = 0;
}
let jur_RangeSet__init_ = ($this, $cc) => {
    jur_LeafSet__init_($this);
    $this.$chars0 = $cc.$getInstance();
    $this.$alt1 = $cc.$alt;
},
jur_RangeSet__init_0 = var_0 => {
    let var_1 = new jur_RangeSet();
    jur_RangeSet__init_(var_1, var_0);
    return var_1;
},
jur_RangeSet_accepts = ($this, $strIndex, $testString) => {
    return !$this.$chars0.$contains($testString.$charAt($strIndex)) ? (-1) : 1;
},
jur_RangeSet_first = ($this, $set) => {
    if (!($set instanceof jur_CharSet)) {
        if (!($set instanceof jur_RangeSet)) {
            if (!($set instanceof jur_SupplRangeSet)) {
                if ($set instanceof jur_SupplCharSet)
                    return 0;
                return 1;
            }
            return jur_AbstractCharClass_intersects($this.$chars0, $set.$getChars());
        }
        return jur_AbstractCharClass_intersects($this.$chars0, $set.$chars0);
    }
    return jur_AbstractCharClass_intersects0($this.$chars0, $set.$getChar());
},
jur_RangeSet_getChars = $this => {
    return $this.$chars0;
};
function jur_UnicodeCategory() {
    jur_AbstractCharClass.call(this);
    this.$category = 0;
}
let jur_UnicodeCategory__init_ = ($this, $category) => {
    jur_AbstractCharClass__init_($this);
    $this.$category = $category;
},
jur_UnicodeCategory__init_0 = var_0 => {
    let var_1 = new jur_UnicodeCategory();
    jur_UnicodeCategory__init_(var_1, var_0);
    return var_1;
},
jur_UnicodeCategory_contains = ($this, $ch) => {
    return $this.$alt ^ ($this.$category != jl_Character_getType0($ch & 65535) ? 0 : 1);
},
jur_UnicodeCategoryScope = $rt_classWithoutFields(jur_UnicodeCategory),
jur_UnicodeCategoryScope__init_ = ($this, $category) => {
    jur_UnicodeCategory__init_($this, $category);
},
jur_UnicodeCategoryScope__init_0 = var_0 => {
    let var_1 = new jur_UnicodeCategoryScope();
    jur_UnicodeCategoryScope__init_(var_1, var_0);
    return var_1;
},
jur_UnicodeCategoryScope_contains = ($this, $ch) => {
    return $this.$alt ^ (!($this.$category >> jl_Character_getType0($ch & 65535) & 1) ? 0 : 1);
};
function jur_CharClass() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$ci = 0;
    a.$uci = 0;
    a.$hasUCI0 = 0;
    a.$invertedSurrogates = 0;
    a.$inverted = 0;
    a.$hideBits = 0;
    a.$bits = null;
    a.$nonBitSet = null;
}
let jur_CharClass__init_2 = $this => {
    jur_AbstractCharClass__init_($this);
    $this.$bits = ju_BitSet__init_1();
},
jur_CharClass__init_ = () => {
    let var_0 = new jur_CharClass();
    jur_CharClass__init_2(var_0);
    return var_0;
},
jur_CharClass__init_0 = ($this, $ci, $uci) => {
    jur_AbstractCharClass__init_($this);
    $this.$bits = ju_BitSet__init_1();
    $this.$ci = $ci;
    $this.$uci = $uci;
},
jur_CharClass__init_4 = (var_0, var_1) => {
    let var_2 = new jur_CharClass();
    jur_CharClass__init_0(var_2, var_0, var_1);
    return var_2;
},
jur_CharClass__init_1 = ($this, $negative, $ci, $uci) => {
    jur_CharClass__init_0($this, $ci, $uci);
    $this.$setNegative($negative);
},
jur_CharClass__init_3 = (var_0, var_1, var_2) => {
    let var_3 = new jur_CharClass();
    jur_CharClass__init_1(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_CharClass_add = ($this, $ch) => {
    a: {
        if ($this.$ci) {
            b: {
                if (!($ch >= 97 && $ch <= 122)) {
                    if ($ch < 65)
                        break b;
                    if ($ch > 90)
                        break b;
                }
                if ($this.$inverted) {
                    $this.$bits.$clear(jur_Pattern_getSupplement($ch & 65535));
                    break a;
                }
                $this.$bits.$set0(jur_Pattern_getSupplement($ch & 65535));
                break a;
            }
            if ($this.$uci && $ch > 128) {
                $this.$hasUCI0 = 1;
                $ch = jl_Character_toLowerCase0(jl_Character_toUpperCase0($ch));
            }
        }
    }
    if (!(!jur_Lexer_isHighSurrogate($ch) && !jur_Lexer_isLowSurrogate($ch))) {
        if ($this.$invertedSurrogates)
            $this.$lowHighSurrogates.$clear($ch - 55296 | 0);
        else
            $this.$lowHighSurrogates.$set0($ch - 55296 | 0);
    }
    if ($this.$inverted)
        $this.$bits.$clear($ch);
    else
        $this.$bits.$set0($ch);
    if (!$this.$mayContainSupplCodepoints0 && jl_Character_isSupplementaryCodePoint($ch))
        $this.$mayContainSupplCodepoints0 = 1;
    return $this;
},
jur_CharClass_add1 = ($this, $cc) => {
    let $curAlt, $nb;
    if (!$this.$mayContainSupplCodepoints0 && $cc.$mayContainSupplCodepoints0)
        $this.$mayContainSupplCodepoints0 = 1;
    if ($this.$invertedSurrogates) {
        if (!$cc.$altSurrogates)
            $this.$lowHighSurrogates.$andNot($cc.$getLowHighSurrogates());
        else
            $this.$lowHighSurrogates.$and($cc.$getLowHighSurrogates());
    } else if (!$cc.$altSurrogates)
        $this.$lowHighSurrogates.$or($cc.$getLowHighSurrogates());
    else {
        $this.$lowHighSurrogates.$xor($cc.$getLowHighSurrogates());
        $this.$lowHighSurrogates.$and($cc.$getLowHighSurrogates());
        $this.$altSurrogates = $this.$altSurrogates ? 0 : 1;
        $this.$invertedSurrogates = 1;
    }
    if (!$this.$hideBits && $cc.$getBits() !== null) {
        if ($this.$inverted) {
            if (!$cc.$isNegative())
                $this.$bits.$andNot($cc.$getBits());
            else
                $this.$bits.$and($cc.$getBits());
        } else if (!$cc.$isNegative())
            $this.$bits.$or($cc.$getBits());
        else {
            $this.$bits.$xor($cc.$getBits());
            $this.$bits.$and($cc.$getBits());
            $this.$alt = $this.$alt ? 0 : 1;
            $this.$inverted = 1;
        }
    } else {
        $curAlt = $this.$alt;
        if ($this.$nonBitSet !== null) {
            $nb = $this.$nonBitSet;
            if (!$curAlt)
                $this.$nonBitSet = jur_CharClass$5__init_0($this, $curAlt, $nb, $cc);
            else
                $this.$nonBitSet = jur_CharClass$4__init_0($this, $curAlt, $nb, $cc);
        } else {
            if ($curAlt && !$this.$inverted && $this.$bits.$isEmpty())
                $this.$nonBitSet = jur_CharClass$1__init_0($this, $cc);
            else if (!$curAlt)
                $this.$nonBitSet = jur_CharClass$3__init_0($this, $curAlt, $cc);
            else
                $this.$nonBitSet = jur_CharClass$2__init_0($this, $curAlt, $cc);
            $this.$hideBits = 1;
        }
    }
    return $this;
},
jur_CharClass_add0 = ($this, $i, $end) => {
    if ($i <= $end) {
        a: {
            b: {
                if (!$this.$ci) {
                    if ($end < 55296)
                        break b;
                    if ($i > 57343)
                        break b;
                }
                while (true) {
                    if ($i >= ($end + 1 | 0))
                        break a;
                    $this.$add($i);
                    $i = $i + 1 | 0;
                }
            }
            if ($this.$inverted)
                $this.$bits.$clear0($i, $end + 1 | 0);
            else
                $this.$bits.$set($i, $end + 1 | 0);
        }
        return $this;
    }
    $rt_throw(jl_IllegalArgumentException__init_());
},
jur_CharClass_union = ($this, $clazz) => {
    let $curAlt, $nb;
    if (!$this.$mayContainSupplCodepoints0 && $clazz.$mayContainSupplCodepoints0)
        $this.$mayContainSupplCodepoints0 = 1;
    if ($clazz.$hasUCI())
        $this.$hasUCI0 = 1;
    if (!($this.$altSurrogates ^ $clazz.$altSurrogates)) {
        if (!$this.$altSurrogates)
            $this.$lowHighSurrogates.$or($clazz.$getLowHighSurrogates());
        else
            $this.$lowHighSurrogates.$and($clazz.$getLowHighSurrogates());
    } else if ($this.$altSurrogates)
        $this.$lowHighSurrogates.$andNot($clazz.$getLowHighSurrogates());
    else {
        $this.$lowHighSurrogates.$xor($clazz.$getLowHighSurrogates());
        $this.$lowHighSurrogates.$and($clazz.$getLowHighSurrogates());
        $this.$altSurrogates = 1;
    }
    if (!$this.$hideBits && $clazz.$getBits() !== null) {
        if (!($this.$alt ^ $clazz.$isNegative())) {
            if (!$this.$alt)
                $this.$bits.$or($clazz.$getBits());
            else
                $this.$bits.$and($clazz.$getBits());
        } else if ($this.$alt)
            $this.$bits.$andNot($clazz.$getBits());
        else {
            $this.$bits.$xor($clazz.$getBits());
            $this.$bits.$and($clazz.$getBits());
            $this.$alt = 1;
        }
    } else {
        $curAlt = $this.$alt;
        if ($this.$nonBitSet !== null) {
            $nb = $this.$nonBitSet;
            if (!$curAlt)
                $this.$nonBitSet = jur_CharClass$11__init_0($this, $curAlt, $nb, $clazz);
            else
                $this.$nonBitSet = jur_CharClass$10__init_0($this, $curAlt, $nb, $clazz);
        } else {
            if (!(!$this.$inverted && $this.$bits.$isEmpty())) {
                if (!$curAlt)
                    $this.$nonBitSet = jur_CharClass$9__init_0($this, $clazz, $curAlt);
                else
                    $this.$nonBitSet = jur_CharClass$8__init_0($this, $clazz, $curAlt);
            } else if (!$curAlt)
                $this.$nonBitSet = jur_CharClass$7__init_0($this, $clazz);
            else
                $this.$nonBitSet = jur_CharClass$6__init_0($this, $clazz);
            $this.$hideBits = 1;
        }
    }
},
jur_CharClass_intersection = ($this, $clazz) => {
    let $curAlt, $nb;
    if (!$this.$mayContainSupplCodepoints0 && $clazz.$mayContainSupplCodepoints0)
        $this.$mayContainSupplCodepoints0 = 1;
    if ($clazz.$hasUCI())
        $this.$hasUCI0 = 1;
    if (!($this.$altSurrogates ^ $clazz.$altSurrogates)) {
        if (!$this.$altSurrogates)
            $this.$lowHighSurrogates.$and($clazz.$getLowHighSurrogates());
        else
            $this.$lowHighSurrogates.$or($clazz.$getLowHighSurrogates());
    } else if (!$this.$altSurrogates)
        $this.$lowHighSurrogates.$andNot($clazz.$getLowHighSurrogates());
    else {
        $this.$lowHighSurrogates.$xor($clazz.$getLowHighSurrogates());
        $this.$lowHighSurrogates.$and($clazz.$getLowHighSurrogates());
        $this.$altSurrogates = 0;
    }
    if (!$this.$hideBits && $clazz.$getBits() !== null) {
        if (!($this.$alt ^ $clazz.$isNegative())) {
            if (!$this.$alt)
                $this.$bits.$and($clazz.$getBits());
            else
                $this.$bits.$or($clazz.$getBits());
        } else if (!$this.$alt)
            $this.$bits.$andNot($clazz.$getBits());
        else {
            $this.$bits.$xor($clazz.$getBits());
            $this.$bits.$and($clazz.$getBits());
            $this.$alt = 0;
        }
    } else {
        $curAlt = $this.$alt;
        if ($this.$nonBitSet !== null) {
            $nb = $this.$nonBitSet;
            if (!$curAlt)
                $this.$nonBitSet = jur_CharClass$17__init_0($this, $curAlt, $nb, $clazz);
            else
                $this.$nonBitSet = jur_CharClass$16__init_0($this, $curAlt, $nb, $clazz);
        } else {
            if (!(!$this.$inverted && $this.$bits.$isEmpty())) {
                if (!$curAlt)
                    $this.$nonBitSet = jur_CharClass$15__init_0($this, $clazz, $curAlt);
                else
                    $this.$nonBitSet = jur_CharClass$14__init_0($this, $clazz, $curAlt);
            } else if (!$curAlt)
                $this.$nonBitSet = jur_CharClass$13__init_0($this, $clazz);
            else
                $this.$nonBitSet = jur_CharClass$12__init_0($this, $clazz);
            $this.$hideBits = 1;
        }
    }
},
jur_CharClass_contains = ($this, $ch) => {
    if ($this.$nonBitSet === null)
        return $this.$alt ^ $this.$bits.$get4($ch);
    return $this.$alt ^ $this.$nonBitSet.$contains($ch);
},
jur_CharClass_getBits = $this => {
    if ($this.$hideBits)
        return null;
    return $this.$bits;
},
jur_CharClass_getLowHighSurrogates = $this => {
    return $this.$lowHighSurrogates;
},
jur_CharClass_getInstance = $this => {
    let $bs, $res;
    if ($this.$nonBitSet === null) {
        $bs = $this.$getBits();
        $res = jur_CharClass$18__init_0($this, $bs);
        return $res.$setNegative($this.$isNegative());
    }
    return $this;
},
jur_CharClass_toString = $this => {
    let $temp, $i;
    $temp = jl_StringBuilder__init_();
    $i = $this.$bits.$nextSetBit(0);
    while ($i >= 0) {
        $temp.$append7(jl_Character_toChars($i));
        $temp.$append0(124);
        $i = $this.$bits.$nextSetBit($i + 1 | 0);
    }
    if ($temp.$length() > 0)
        $temp.$deleteCharAt($temp.$length() - 1 | 0);
    return $temp.$toString();
},
jur_CharClass_hasUCI = $this => {
    return $this.$hasUCI0;
},
cgguc_BrowserEventBridge = $rt_classWithoutFields(),
cgguc_BrowserEventBridge_previews = null,
cgguc_BrowserEventBridge_listeners = null,
cgguc_BrowserEventBridge_capture = null,
cgguc_BrowserEventBridge_documentRegistration = null,
cgguc_BrowserEventBridge_$callClinit = () => {
    cgguc_BrowserEventBridge_$callClinit = $rt_eraseClinit(cgguc_BrowserEventBridge);
    cgguc_BrowserEventBridge__clinit_();
},
cgguc_BrowserEventBridge_setCapture = $element => {
    cgguc_BrowserEventBridge_$callClinit();
    cgguc_BrowserEventBridge_capture = $element;
    cgguc_BrowserEventBridge_updateDocumentListener();
},
cgguc_BrowserEventBridge_releaseCapture = $element => {
    cgguc_BrowserEventBridge_$callClinit();
    if (cgguc_BrowserEventBridge_capture !== null && cgguc_BrowserEventBridge_capture.$equals($element))
        cgguc_BrowserEventBridge_setCapture(null);
},
cgguc_BrowserEventBridge_updateDocumentListener = () => {
    cgguc_BrowserEventBridge_$callClinit();
    if (cgguc_BrowserEventBridge_capture === null && cgguc_BrowserEventBridge_previews.$isEmpty()) {
        if (cgguc_BrowserEventBridge_documentRegistration !== null) {
            cgguc_BrowserEventBridge_unhookDocument$js_body$_19(cgguc_BrowserEventBridge_documentRegistration);
            cgguc_BrowserEventBridge_documentRegistration = null;
        }
    } else if (cgguc_BrowserEventBridge_documentRegistration === null)
        cgguc_BrowserEventBridge_documentRegistration = cgguc_BrowserEventBridge_hookDocument$js_body$_18(otji_JS_function(otji_JSWrapper_unwrap(cgguc_BrowserEventBridge$updateDocumentListener$lambda$_5_0__init_0()), "handle"));
},
cgguc_BrowserEventBridge_previewAndCapture = $nativeEvent => {
    cgguc_BrowserEventBridge_$callClinit();
    cggcc_Scheduler_runEntry(cgguc_BrowserEventBridge$previewAndCapture$lambda$_6_0__init_0($nativeEvent));
},
cgguc_BrowserEventBridge_setListener = ($element, $listener) => {
    let var$3, var$4, var$5;
    cgguc_BrowserEventBridge_$callClinit();
    var$3 = cgguc_BrowserEventBridge_listeners;
    var$4 = $element.$unwrap1();
    var$5 = $listener === null ? null : cgguc_BrowserEventBridge$setListener$lambda$_7_0__init_0($listener);
    cgguc_BrowserEventBridge_setListener$js_body$_12(var$3, var$4, otji_JS_function(otji_JSWrapper_unwrap(var$5), "handle"));
},
cgguc_BrowserEventBridge_lambda$setListener$2 = ($listener, $event) => {
    cgguc_BrowserEventBridge_$callClinit();
    cggcc_Scheduler_runEntry(cgguc_BrowserEventBridge$lambda$setListener$2$lambda$_20_0__init_0($listener, $event));
},
cgguc_BrowserEventBridge_lambda$setListener$1 = ($listener, $event) => {
    cgguc_BrowserEventBridge_$callClinit();
    $listener.$onBrowserEvent(cgguc_Event__init_0($event));
},
cgguc_BrowserEventBridge_lambda$previewAndCapture$0 = $nativeEvent => {
    let $event, $preview, $snapshot, $i;
    cgguc_BrowserEventBridge_$callClinit();
    $event = cgguc_Event__init_0($nativeEvent);
    $preview = cgguc_Event$NativePreviewEvent__init_0($event);
    $snapshot = ju_ArrayList__init_1(cgguc_BrowserEventBridge_previews);
    $i = $snapshot.$size() - 1 | 0;
    while ($i >= 0 && !cgguc_Event$NativePreviewEvent_isConsumed($preview)) {
        ($snapshot.$get($i)).$onPreviewNativeEvent($preview);
        $i = $i + (-1) | 0;
    }
    if (!cgguc_Event$NativePreviewEvent_isCanceled($preview)) {
        if (cgguc_BrowserEventBridge_capture !== null && !(!jl_String_startsWith($event.$getType(), $rt_s(260)) && !jl_String_equals($event.$getType(), $rt_s(261)) && !jl_String_equals($event.$getType(), $rt_s(262)))) {
            cgguc_BrowserEventBridge_dispatchCaptured$js_body$_17(cgguc_BrowserEventBridge_listeners, cgguc_BrowserEventBridge_capture.$unwrap1(), $nativeEvent);
            $nativeEvent.stopPropagation();
        }
        return;
    }
    $nativeEvent.preventDefault();
    $nativeEvent.stopPropagation();
},
cgguc_BrowserEventBridge__clinit_ = () => {
    cgguc_BrowserEventBridge_previews = ju_ArrayList__init_();
    cgguc_BrowserEventBridge_listeners = new WeakMap();
},
cgguc_BrowserEventBridge_setListener$js_body$_12 = (var$1, var$2, var$3) => {
    var s = var$1.get(var$2);
    if (!s) {
        s = { events: {  }, bits: 0 };
        var$1.set(var$2, s);
    }
    s.handler = var$3;
},
cgguc_BrowserEventBridge_dispatchCaptured$js_body$_17 = (var$1, var$2, var$3) => {
    var s = var$1.get(var$2);
    if (s && s.handler) s.handler(var$3);
},
cgguc_BrowserEventBridge_hookDocument$js_body$_18 = var$1 => {
    var names = ['click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'keydown', 'keyup', 'keypress', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'focus', 'blur', 'contextmenu'];
    names.forEach(function(n) {
        document.addEventListener(n, var$1, true);
    });
    return { names: names, handler: var$1 };
},
cgguc_BrowserEventBridge_unhookDocument$js_body$_19 = var$1 => {
    var$1.names.forEach(function(n) {
        document.removeEventListener(n, var$1.handler, true);
    });
},
jur_UCIDecomposedCharSet = $rt_classWithoutFields(jur_DecomposedCharSet),
jur_UCIDecomposedCharSet__init_ = ($this, var$1, var$2) => {
    jur_DecomposedCharSet__init_($this, var$1, var$2);
},
jur_UCIDecomposedCharSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_UCIDecomposedCharSet();
    jur_UCIDecomposedCharSet__init_(var_2, var_0, var_1);
    return var_2;
},
otrr_ClassInfo = $rt_classWithoutFields(otrr_ReflectionInfo),
otrr_ClassInfo_newArrayInstance = (var$0, var$1) => {
    switch (var$0.primitiveKind) {
        default: return $rt_createArray(var$0, var$1);
    }
},
cggdc_MetaElement = $rt_classWithoutFields(cggdc_Element),
cggdc_MetaElement__init_ = (var$0, var$1) => {
    cggdc_Element__init_(var$0, var$1);
},
cggdc_MetaElement__init_0 = var_0 => {
    let var_1 = new cggdc_MetaElement();
    cggdc_MetaElement__init_(var_1, var_0);
    return var_1;
},
cggdc_Document = $rt_classWithoutFields(),
cggdc_Document_INSTANCE = null,
cggdc_Document_$callClinit = () => {
    cggdc_Document_$callClinit = $rt_eraseClinit(cggdc_Document);
    cggdc_Document__clinit_();
},
cggdc_Document__init_ = $this => {
    cggdc_Document_$callClinit();
    jl_Object__init_($this);
},
cggdc_Document__init_0 = () => {
    let var_0 = new cggdc_Document();
    cggdc_Document__init_(var_0);
    return var_0;
},
cggdc_Document_get = () => {
    cggdc_Document_$callClinit();
    return cggdc_Document_INSTANCE;
};
let cggdc_Document_createElement = ($this, $tagName) => {
    return cggdc_Element__init_0((otjdh_HTMLDocument_current()).createElement($rt_ustr($tagName)));
},
cggdc_Document_createDivElement = $this => {
    return cggdc_DivElement_as(cggdc_Document_createElement($this, $rt_s(35)));
},
cggdc_Document_getElementById = ($this, $id) => {
    let $found;
    $found = (otjdh_HTMLDocument_current()).getElementById($rt_ustr($id));
    return $found === null ? null : cggdc_Element__init_0($found);
},
cggdc_Document__clinit_ = () => {
    cggdc_Document_INSTANCE = cggdc_Document__init_0();
},
iiad_EditorDemo$start$lambda$_2_9 = $rt_classWithoutFields(),
iiad_EditorDemo$start$lambda$_2_9__init_ = var$0 => {
    jl_Object__init_(var$0);
},
iiad_EditorDemo$start$lambda$_2_9__init_0 = () => {
    let var_0 = new iiad_EditorDemo$start$lambda$_2_9();
    iiad_EditorDemo$start$lambda$_2_9__init_(var_0);
    return var_0;
},
iiad_EditorDemo$start$lambda$_2_9_run = var$0 => {
    iiad_EditorDemo_lambda$start$11();
},
iiad_EditorDemo$start$lambda$_2_9_run$exported$0 = var$1 => {
    var$1.$run();
},
iiad_EditorDemo$start$lambda$_2_8 = $rt_classWithoutFields(),
iiad_EditorDemo$start$lambda$_2_8__init_ = var$0 => {
    jl_Object__init_(var$0);
},
iiad_EditorDemo$start$lambda$_2_8__init_0 = () => {
    let var_0 = new iiad_EditorDemo$start$lambda$_2_8();
    iiad_EditorDemo$start$lambda$_2_8__init_(var_0);
    return var_0;
},
iiad_EditorDemo$start$lambda$_2_8_run = var$0 => {
    iiad_EditorDemo_save();
},
iiad_EditorDemo$start$lambda$_2_8_run$exported$0 = var$1 => {
    var$1.$run();
},
iiad_EditorDemo$start$lambda$_2_7 = $rt_classWithoutFields(),
iiad_EditorDemo$start$lambda$_2_7__init_ = var$0 => {
    jl_Object__init_(var$0);
},
iiad_EditorDemo$start$lambda$_2_7__init_0 = () => {
    let var_0 = new iiad_EditorDemo$start$lambda$_2_7();
    iiad_EditorDemo$start$lambda$_2_7__init_(var_0);
    return var_0;
},
iiad_EditorDemo$start$lambda$_2_7_run = var$0 => {
    iiad_EditorDemo_lambda$start$8();
},
iiad_EditorDemo$start$lambda$_2_7_run$exported$0 = var$1 => {
    var$1.$run();
};
function jur_AbstractCharClass$LazyJavaWhitespace$1() {
    jur_AbstractCharClass.call(this);
    this.$this$030 = null;
}
let jur_AbstractCharClass$LazyJavaWhitespace$1__init_ = ($this, $this$0) => {
    $this.$this$030 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaWhitespace$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaWhitespace$1();
    jur_AbstractCharClass$LazyJavaWhitespace$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaWhitespace$1_contains = ($this, $ch) => {
    return jl_Character_isWhitespace($ch);
},
jur_AbstractCharClass$LazyJavaJavaIdentifierStart = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaJavaIdentifierStart();
    jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaJavaIdentifierStart_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
},
iiad_EditorDemo$start$lambda$_2_2 = $rt_classWithoutFields(),
iiad_EditorDemo$start$lambda$_2_2__init_ = var$0 => {
    jl_Object__init_(var$0);
},
iiad_EditorDemo$start$lambda$_2_2__init_0 = () => {
    let var_0 = new iiad_EditorDemo$start$lambda$_2_2();
    iiad_EditorDemo$start$lambda$_2_2__init_(var_0);
    return var_0;
},
iiad_EditorDemo$start$lambda$_2_2_run = var$0 => {
    iiad_EditorDemo_lambda$start$3();
},
iiad_EditorDemo$start$lambda$_2_2_run$exported$0 = var$1 => {
    var$1.$run();
},
iiad_EditorDemo$start$lambda$_2_1 = $rt_classWithoutFields(),
iiad_EditorDemo$start$lambda$_2_1__init_ = var$0 => {
    jl_Object__init_(var$0);
},
iiad_EditorDemo$start$lambda$_2_1__init_0 = () => {
    let var_0 = new iiad_EditorDemo$start$lambda$_2_1();
    iiad_EditorDemo$start$lambda$_2_1__init_(var_0);
    return var_0;
},
iiad_EditorDemo$start$lambda$_2_1_run = var$0 => {
    iiad_EditorDemo_lambda$start$2();
},
iiad_EditorDemo$start$lambda$_2_1_run$exported$0 = var$1 => {
    var$1.$run();
},
iiad_EditorDemo$start$lambda$_2_0 = $rt_classWithoutFields(),
iiad_EditorDemo$start$lambda$_2_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
iiad_EditorDemo$start$lambda$_2_0__init_0 = () => {
    let var_0 = new iiad_EditorDemo$start$lambda$_2_0();
    iiad_EditorDemo$start$lambda$_2_0__init_(var_0);
    return var_0;
},
iiad_EditorDemo$start$lambda$_2_0_run = var$0 => {
    iiad_EditorDemo_lambda$start$1();
},
iiad_EditorDemo$start$lambda$_2_0_run$exported$0 = var$1 => {
    var$1.$run();
},
iiad_EditorDemo$start$lambda$_2_6 = $rt_classWithoutFields(),
iiad_EditorDemo$start$lambda$_2_6__init_ = var$0 => {
    jl_Object__init_(var$0);
},
iiad_EditorDemo$start$lambda$_2_6__init_0 = () => {
    let var_0 = new iiad_EditorDemo$start$lambda$_2_6();
    iiad_EditorDemo$start$lambda$_2_6__init_(var_0);
    return var_0;
},
iiad_EditorDemo$start$lambda$_2_6_run = var$0 => {
    iiad_EditorDemo_lambda$start$7();
},
iiad_EditorDemo$start$lambda$_2_6_run$exported$0 = var$1 => {
    var$1.$run();
},
iiad_EditorDemo$start$lambda$_2_5 = $rt_classWithoutFields(),
iiad_EditorDemo$start$lambda$_2_5__init_ = var$0 => {
    jl_Object__init_(var$0);
},
iiad_EditorDemo$start$lambda$_2_5__init_0 = () => {
    let var_0 = new iiad_EditorDemo$start$lambda$_2_5();
    iiad_EditorDemo$start$lambda$_2_5__init_(var_0);
    return var_0;
},
iiad_EditorDemo$start$lambda$_2_5_run = var$0 => {
    iiad_EditorDemo_lambda$start$6();
},
iiad_EditorDemo$start$lambda$_2_5_run$exported$0 = var$1 => {
    var$1.$run();
},
jl_CloneNotSupportedException = $rt_classWithoutFields(jl_Exception),
jl_CloneNotSupportedException__init_ = $this => {
    jl_Exception__init_($this);
},
jl_CloneNotSupportedException__init_0 = () => {
    let var_0 = new jl_CloneNotSupportedException();
    jl_CloneNotSupportedException__init_(var_0);
    return var_0;
},
iiad_EditorDemo$start$lambda$_2_4 = $rt_classWithoutFields(),
iiad_EditorDemo$start$lambda$_2_4__init_ = var$0 => {
    jl_Object__init_(var$0);
},
iiad_EditorDemo$start$lambda$_2_4__init_0 = () => {
    let var_0 = new iiad_EditorDemo$start$lambda$_2_4();
    iiad_EditorDemo$start$lambda$_2_4__init_(var_0);
    return var_0;
},
iiad_EditorDemo$start$lambda$_2_4_run = var$0 => {
    iiad_EditorDemo_lambda$start$5();
},
iiad_EditorDemo$start$lambda$_2_4_run$exported$0 = var$1 => {
    var$1.$run();
},
iiad_EditorDemo$start$lambda$_2_3 = $rt_classWithoutFields(),
iiad_EditorDemo$start$lambda$_2_3__init_ = var$0 => {
    jl_Object__init_(var$0);
},
iiad_EditorDemo$start$lambda$_2_3__init_0 = () => {
    let var_0 = new iiad_EditorDemo$start$lambda$_2_3();
    iiad_EditorDemo$start$lambda$_2_3__init_(var_0);
    return var_0;
},
iiad_EditorDemo$start$lambda$_2_3_run = var$0 => {
    iiad_EditorDemo_lambda$start$4();
},
iiad_EditorDemo$start$lambda$_2_3_run$exported$0 = var$1 => {
    var$1.$run();
},
iiad_EditorDemo$main$lambda$_1_0 = $rt_classWithoutFields(),
iiad_EditorDemo$main$lambda$_1_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
iiad_EditorDemo$main$lambda$_1_0__init_0 = () => {
    let var_0 = new iiad_EditorDemo$main$lambda$_1_0();
    iiad_EditorDemo$main$lambda$_1_0__init_(var_0);
    return var_0;
},
iiad_EditorDemo$main$lambda$_1_0_run = var$0 => {
    iiad_EditorDemo_start();
},
cggdc_OptionElement = $rt_classWithoutFields(cggdc_Element);
let cggdc_OptionElement_IDENTITIES = null,
cggdc_OptionElement_$callClinit = () => {
    cggdc_OptionElement_$callClinit = $rt_eraseClinit(cggdc_OptionElement);
    cggdc_OptionElement__clinit_();
},
cggdc_OptionElement__init_ = ($this, $element) => {
    cggdc_OptionElement_$callClinit();
    cggdc_Element__init_($this, $element);
},
cggdc_OptionElement__init_0 = var_0 => {
    let var_1 = new cggdc_OptionElement();
    cggdc_OptionElement__init_(var_1, var_0);
    return var_1;
},
cggdc_OptionElement__clinit_ = () => {
    cggdc_OptionElement_IDENTITIES = new WeakMap();
},
otjdh_HTMLDocument = $rt_classWithoutFields(),
otjdh_HTMLDocument_current = () => {
    return window.document;
};
function cggels_AttachEvent() {
    cgges_GwtEvent.call(this);
    this.$attached0 = 0;
}
let cggels_AttachEvent_TYPE = null,
cggels_AttachEvent_$callClinit = () => {
    cggels_AttachEvent_$callClinit = $rt_eraseClinit(cggels_AttachEvent);
    cggels_AttachEvent__clinit_();
},
cggels_AttachEvent__init_ = ($this, $attached) => {
    cggels_AttachEvent_$callClinit();
    cgges_GwtEvent__init_($this);
    $this.$attached0 = $attached;
},
cggels_AttachEvent__init_0 = var_0 => {
    let var_1 = new cggels_AttachEvent();
    cggels_AttachEvent__init_(var_1, var_0);
    return var_1;
},
cggels_AttachEvent_fire = ($source, $attached) => {
    cggels_AttachEvent_$callClinit();
    $source.$fireEvent(cggels_AttachEvent__init_0($attached));
},
cggels_AttachEvent__clinit_ = () => {
    cggels_AttachEvent_TYPE = cgges_GwtEvent$Type__init_0();
},
iiad_EditorDemo$main$lambda$_1_1 = $rt_classWithoutFields(),
iiad_EditorDemo$main$lambda$_1_1__init_ = var$0 => {
    jl_Object__init_(var$0);
},
iiad_EditorDemo$main$lambda$_1_1__init_0 = () => {
    let var_0 = new iiad_EditorDemo$main$lambda$_1_1();
    iiad_EditorDemo$main$lambda$_1_1__init_(var_0);
    return var_0;
},
iiad_EditorDemo$main$lambda$_1_1_accept0 = (var$0, var$1) => {
    iiad_EditorDemo$main$lambda$_1_1_accept(var$0, var$1);
},
iiad_EditorDemo$main$lambda$_1_1_accept = (var$0, var$1) => {
    iiad_EditorDemo_lambda$main$0(var$1);
};
function jur_SequenceSet$IntHash() {
    let a = this; jl_Object.call(a);
    a.$table = null;
    a.$values2 = null;
    a.$mask = 0;
    a.$size2 = 0;
}
let jur_SequenceSet$IntHash__init_0 = ($this, $size) => {
    jl_Object__init_($this);
    while ($size >= $this.$mask) {
        $this.$mask = $this.$mask << 1 | 1;
    }
    $this.$mask = $this.$mask << 1 | 1;
    $this.$table = $rt_createIntArray($this.$mask + 1 | 0);
    $this.$values2 = $rt_createIntArray($this.$mask + 1 | 0);
    $this.$size2 = $size;
},
jur_SequenceSet$IntHash__init_ = var_0 => {
    let var_1 = new jur_SequenceSet$IntHash();
    jur_SequenceSet$IntHash__init_0(var_1, var_0);
    return var_1;
},
jur_SequenceSet$IntHash_put = ($this, $key, $value) => {
    let $i, $hashCode, var$5;
    $i = 0;
    $hashCode = $key & $this.$mask;
    while ($this.$table.data[$hashCode] && $this.$table.data[$hashCode] != $key) {
        var$5 = $i + 1 | 0;
        $i = var$5 & $this.$mask;
        var$5 = $hashCode + $i | 0;
        $hashCode = var$5 & $this.$mask;
    }
    $this.$table.data[$hashCode] = $key;
    $this.$values2.data[$hashCode] = $value;
},
jur_SequenceSet$IntHash_get = ($this, $key) => {
    let $hashCode, $i, $storedKey, var$5;
    $hashCode = $key & $this.$mask;
    $i = 0;
    while (true) {
        $storedKey = $this.$table.data[$hashCode];
        if (!$storedKey)
            break;
        if ($storedKey == $key)
            return $this.$values2.data[$hashCode];
        var$5 = $i + 1 | 0;
        $i = var$5 & $this.$mask;
        var$5 = $hashCode + $i | 0;
        $hashCode = var$5 & $this.$mask;
    }
    return $this.$size2;
},
iiad_EditorDemo$lambda$start$11$lambda$_21_0 = $rt_classWithoutFields(),
iiad_EditorDemo$lambda$start$11$lambda$_21_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
iiad_EditorDemo$lambda$start$11$lambda$_21_0__init_0 = () => {
    let var_0 = new iiad_EditorDemo$lambda$start$11$lambda$_21_0();
    iiad_EditorDemo$lambda$start$11$lambda$_21_0__init_(var_0);
    return var_0;
},
iiad_EditorDemo$lambda$start$11$lambda$_21_0_run = var$0 => {
    iiad_EditorDemo_lambda$start$9();
},
jur_AbstractCharClass$LazyNonDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyDigit),
jur_AbstractCharClass$LazyNonDigit__init_ = $this => {
    jur_AbstractCharClass$LazyDigit__init_($this);
},
jur_AbstractCharClass$LazyNonDigit__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyNonDigit();
    jur_AbstractCharClass$LazyNonDigit__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyNonDigit_computeValue = $this => {
    let $chCl;
    $chCl = (jur_AbstractCharClass$LazyDigit_computeValue($this)).$setNegative(1);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
},
iiad_EditorDemo$lambda$start$11$lambda$_21_1 = $rt_classWithoutFields(),
iiad_EditorDemo$lambda$start$11$lambda$_21_1__init_ = var$0 => {
    jl_Object__init_(var$0);
},
iiad_EditorDemo$lambda$start$11$lambda$_21_1__init_0 = () => {
    let var_0 = new iiad_EditorDemo$lambda$start$11$lambda$_21_1();
    iiad_EditorDemo$lambda$start$11$lambda$_21_1__init_(var_0);
    return var_0;
},
iiad_EditorDemo$lambda$start$11$lambda$_21_1_accept0 = (var$0, var$1) => {
    iiad_EditorDemo$lambda$start$11$lambda$_21_1_accept(var$0, var$1);
},
iiad_EditorDemo$lambda$start$11$lambda$_21_1_accept = (var$0, var$1) => {
    iiad_EditorDemo_lambda$start$10(var$1);
};
function cggucu_ComplexPanel$1() {
    let a = this; jl_Object.call(a);
    a.$index1 = 0;
    a.$removable = 0;
    a.$this$04 = null;
}
let cggucu_ComplexPanel$1__init_ = ($this, $this$0) => {
    $this.$this$04 = $this$0;
    jl_Object__init_($this);
    $this.$index1 = (-1);
},
cggucu_ComplexPanel$1__init_0 = var_0 => {
    let var_1 = new cggucu_ComplexPanel$1();
    cggucu_ComplexPanel$1__init_(var_1, var_0);
    return var_1;
},
cggucu_ComplexPanel$1_hasNext = $this => {
    return ($this.$index1 + 1 | 0) >= $this.$this$04.$getWidgetCount() ? 0 : 1;
},
cggucu_ComplexPanel$1_next = $this => {
    let var$1, var$2;
    if ($this.$hasNext()) {
        $this.$removable = 1;
        var$1 = $this.$this$04;
        var$2 = $this.$index1 + 1 | 0;
        $this.$index1 = var$2;
        return var$1.$getWidget(var$2);
    }
    $rt_throw(ju_NoSuchElementException__init_());
},
cggucu_ComplexPanel$1_next0 = $this => {
    return $this.$next1();
};
function jur_AbstractCharClass$1() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$lHS = null;
    a.$this$029 = null;
}
let jur_AbstractCharClass$1__init_ = ($this, $this$0, var$2) => {
    $this.$this$029 = $this$0;
    $this.$val$lHS = var$2;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$1__init_0 = (var_0, var_1) => {
    let var_2 = new jur_AbstractCharClass$1();
    jur_AbstractCharClass$1__init_(var_2, var_0, var_1);
    return var_2;
},
jur_AbstractCharClass$1_contains = ($this, $ch) => {
    let $index;
    $index = $ch - 55296 | 0;
    return !($index >= 0 && $index < 2048) ? 0 : $this.$altSurrogates ^ $this.$val$lHS.$get4($index);
};
function jur_AbstractCharClass$2() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$lHS0 = null;
    a.$val$thisClass = null;
    a.$this$020 = null;
}
let jur_AbstractCharClass$2__init_ = ($this, $this$0, var$2, var$3) => {
    $this.$this$020 = $this$0;
    $this.$val$lHS0 = var$2;
    $this.$val$thisClass = var$3;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$2__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_AbstractCharClass$2();
    jur_AbstractCharClass$2__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_AbstractCharClass$2_contains = ($this, $ch) => {
    let $index, $containslHS;
    $index = $ch - 55296 | 0;
    $containslHS = !($index >= 0 && $index < 2048) ? 0 : $this.$altSurrogates ^ $this.$val$lHS0.$get4($index);
    return !($this.$val$thisClass.$contains($ch) && !$containslHS) ? 0 : 1;
},
jur_AbstractCharClass$LazyJavaLowerCase = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaLowerCase__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaLowerCase__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaLowerCase();
    jur_AbstractCharClass$LazyJavaLowerCase__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaLowerCase_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaLowerCase$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
},
jur_PossessiveCompositeQuantifierSet = $rt_classWithoutFields(jur_CompositeQuantifierSet),
jur_PossessiveCompositeQuantifierSet__init_ = ($this, $quant, $innerSet, $next, $type) => {
    jur_CompositeQuantifierSet__init_($this, $quant, $innerSet, $next, $type);
},
jur_PossessiveCompositeQuantifierSet__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_PossessiveCompositeQuantifierSet();
    jur_PossessiveCompositeQuantifierSet__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_PossessiveCompositeQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $min, $max, $i, $shift;
    $min = $this.$quantifier.$min0();
    $max = $this.$quantifier.$max0();
    $i = 0;
    while (true) {
        if ($i >= $min) {
            a: {
                b: {
                    while (true) {
                        if ($i >= $max)
                            break a;
                        if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$getRightBound())
                            break b;
                        $shift = $this.$leaf.$accepts($stringIndex, $testString);
                        if ($shift < 1)
                            break;
                        $stringIndex = $stringIndex + $shift | 0;
                        $i = $i + 1 | 0;
                    }
                    break a;
                }
            }
            return $this.$next2.$matches($stringIndex, $testString, $matchResult);
        }
        if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$getRightBound()) {
            $matchResult.$hitEnd = 1;
            return (-1);
        }
        $shift = $this.$leaf.$accepts($stringIndex, $testString);
        if ($shift < 1)
            break;
        $stringIndex = $stringIndex + $shift | 0;
        $i = $i + 1 | 0;
    }
    return (-1);
},
cggucu_RootPanel$JsAction = $rt_classWithoutFields(0);
function jur_AbstractCharClass$LazyJavaLetterOrDigit$1() {
    jur_AbstractCharClass.call(this);
    this.$this$031 = null;
}
let jur_AbstractCharClass$LazyJavaLetterOrDigit$1__init_ = ($this, $this$0) => {
    $this.$this$031 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaLetterOrDigit$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaLetterOrDigit$1();
    jur_AbstractCharClass$LazyJavaLetterOrDigit$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaLetterOrDigit$1_contains = ($this, $ch) => {
    return jl_Character_isLetterOrDigit($ch);
};
function jur_CharClass$18() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$bs = null;
    a.$this$014 = null;
}
let jur_CharClass$18__init_ = ($this, $this$0, var$2) => {
    $this.$this$014 = $this$0;
    $this.$val$bs = var$2;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$18__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CharClass$18();
    jur_CharClass$18__init_(var_2, var_0, var_1);
    return var_2;
},
jur_CharClass$18_contains = ($this, $ch) => {
    return $this.$alt ^ $this.$val$bs.$get4($ch);
},
jur_CharClass$18_toString = $this => {
    let $temp, $i;
    $temp = jl_StringBuilder__init_();
    $i = $this.$val$bs.$nextSetBit(0);
    while ($i >= 0) {
        $temp.$append7(jl_Character_toChars($i));
        $temp.$append0(124);
        $i = $this.$val$bs.$nextSetBit($i + 1 | 0);
    }
    if ($temp.$length() > 0)
        $temp.$deleteCharAt($temp.$length() - 1 | 0);
    return $temp.$toString();
},
jur_PossessiveGroupQuantifierSet = $rt_classWithoutFields(jur_GroupQuantifierSet),
jur_PossessiveGroupQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_GroupQuantifierSet__init_($this, $innerSet, $next, $type);
    jur_FSet_$callClinit();
    $innerSet.$setNext(jur_FSet_posFSet);
},
jur_PossessiveGroupQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_PossessiveGroupQuantifierSet();
    jur_PossessiveGroupQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_PossessiveGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $stringIndex_0;
    while (true) {
        $stringIndex_0 = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
        if ($stringIndex_0 <= 0)
            break;
        $stringIndex = $stringIndex_0;
    }
    return $this.$next2.$matches($stringIndex, $testString, $matchResult);
};
function jur_CharClass$13() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz4 = null;
    a.$this$024 = null;
}
let jur_CharClass$13__init_ = ($this, $this$0, var$2) => {
    $this.$this$024 = $this$0;
    $this.$val$clazz4 = var$2;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$13__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CharClass$13();
    jur_CharClass$13__init_(var_2, var_0, var_1);
    return var_2;
},
jur_CharClass$13_contains = ($this, $ch) => {
    return $this.$val$clazz4.$contains($ch);
};
function jur_CharClass$12() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz5 = null;
    a.$this$034 = null;
}
let jur_CharClass$12__init_ = ($this, $this$0, var$2) => {
    $this.$this$034 = $this$0;
    $this.$val$clazz5 = var$2;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$12__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CharClass$12();
    jur_CharClass$12__init_(var_2, var_0, var_1);
    return var_2;
},
jur_CharClass$12_contains = ($this, $ch) => {
    return $this.$val$clazz5.$contains($ch) ? 0 : 1;
};
function jur_CharClass$11() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt4 = 0;
    a.$val$nb2 = null;
    a.$val$clazz8 = null;
    a.$this$015 = null;
}
let jur_CharClass$11__init_ = ($this, $this$0, var$2, var$3, var$4) => {
    $this.$this$015 = $this$0;
    $this.$val$curAlt4 = var$2;
    $this.$val$nb2 = var$3;
    $this.$val$clazz8 = var$4;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$11__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_CharClass$11();
    jur_CharClass$11__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_CharClass$11_contains = ($this, $ch) => {
    return !(!($this.$val$curAlt4 ^ $this.$val$nb2.$contains($ch)) && !$this.$val$clazz8.$contains($ch)) ? 1 : 0;
},
otci_Base46 = $rt_classWithoutFields(),
otci_Base46_decodeUnsigned = $seq => {
    let $number, $pos, var$4, var$5, $digit, $hasMore;
    $number = 0;
    $pos = 1;
    while (true) {
        var$4 = $seq.$characters.data;
        var$5 = $seq.$pointer;
        $seq.$pointer = var$5 + 1 | 0;
        $digit = otci_Base46_decodeDigit(var$4[var$5]);
        $hasMore = ($digit % 2 | 0) != 1 ? 0 : 1;
        $number = $number + $rt_imul($pos, $digit / 2 | 0) | 0;
        $pos = $pos * 46 | 0;
        if (!$hasMore)
            break;
    }
    return $number;
},
otci_Base46_decode = $seq => {
    let $number, $result;
    $number = otci_Base46_decodeUnsigned($seq);
    $result = $number / 2 | 0;
    if ($number % 2 | 0)
        $result =  -$result | 0;
    return $result;
},
otci_Base46_decodeDigit = $c => {
    if ($c >= 34) {
        if ($c < 92)
            return ($c - 32 | 0) - 1 | 0;
        return ($c - 32 | 0) - 2 | 0;
    }
    return $c - 32 | 0;
};
function jur_CharClass$10() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt6 = 0;
    a.$val$nb0 = null;
    a.$val$clazz0 = null;
    a.$this$022 = null;
}
let jur_CharClass$10__init_ = ($this, $this$0, var$2, var$3, var$4) => {
    $this.$this$022 = $this$0;
    $this.$val$curAlt6 = var$2;
    $this.$val$nb0 = var$3;
    $this.$val$clazz0 = var$4;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$10__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_CharClass$10();
    jur_CharClass$10__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_CharClass$10_contains = ($this, $ch) => {
    return !(!($this.$val$curAlt6 ^ $this.$val$nb0.$contains($ch)) && !$this.$val$clazz0.$contains($ch)) ? 0 : 1;
};
function jur_CharClass$17() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt5 = 0;
    a.$val$nb1 = null;
    a.$val$clazz10 = null;
    a.$this$019 = null;
}
let jur_CharClass$17__init_ = ($this, $this$0, var$2, var$3, var$4) => {
    $this.$this$019 = $this$0;
    $this.$val$curAlt5 = var$2;
    $this.$val$nb1 = var$3;
    $this.$val$clazz10 = var$4;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$17__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_CharClass$17();
    jur_CharClass$17__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_CharClass$17_contains = ($this, $ch) => {
    return !($this.$val$curAlt5 ^ $this.$val$nb1.$contains($ch) && $this.$val$clazz10.$contains($ch)) ? 0 : 1;
};
function jur_UCISequenceSet() {
    jur_LeafSet.call(this);
    this.$string2 = null;
}
let jur_UCISequenceSet__init_ = ($this, $substring) => {
    let $res, $i;
    jur_LeafSet__init_($this);
    $res = jl_StringBuilder__init_();
    $i = 0;
    while ($i < $substring.$length()) {
        $res.$append0(jl_Character_toLowerCase(jl_Character_toUpperCase($substring.$charAt($i))));
        $i = $i + 1 | 0;
    }
    $this.$string2 = $res.$toString();
    $this.$charCount0 = $res.$length();
},
jur_UCISequenceSet__init_0 = var_0 => {
    let var_1 = new jur_UCISequenceSet();
    jur_UCISequenceSet__init_(var_1, var_0);
    return var_1;
},
jur_UCISequenceSet_accepts = ($this, $strIndex, $testString) => {
    let $i;
    $i = 0;
    while (true) {
        if ($i >= jl_String_length($this.$string2))
            return jl_String_length($this.$string2);
        if (jl_String_charAt($this.$string2, $i) != jl_Character_toLowerCase(jl_Character_toUpperCase($testString.$charAt($strIndex + $i | 0))))
            break;
        $i = $i + 1 | 0;
    }
    return (-1);
};
function jur_CharClass$16() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt3 = 0;
    a.$val$nb = null;
    a.$val$clazz3 = null;
    a.$this$026 = null;
}
let jur_CharClass$16__init_ = ($this, $this$0, var$2, var$3, var$4) => {
    $this.$this$026 = $this$0;
    $this.$val$curAlt3 = var$2;
    $this.$val$nb = var$3;
    $this.$val$clazz3 = var$4;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$16__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_CharClass$16();
    jur_CharClass$16__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_CharClass$16_contains = ($this, $ch) => {
    return !($this.$val$curAlt3 ^ $this.$val$nb.$contains($ch) && $this.$val$clazz3.$contains($ch)) ? 1 : 0;
};
function jur_CharClass$15() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz9 = null;
    a.$val$curAlt1 = 0;
    a.$this$09 = null;
}
let jur_CharClass$15__init_ = ($this, $this$0, var$2, var$3) => {
    $this.$this$09 = $this$0;
    $this.$val$clazz9 = var$2;
    $this.$val$curAlt1 = var$3;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$15__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_CharClass$15();
    jur_CharClass$15__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_CharClass$15_contains = ($this, $ch) => {
    return !($this.$val$clazz9.$contains($ch) && $this.$val$curAlt1 ^ $this.$this$09.$bits.$get4($ch)) ? 0 : 1;
};
function jur_AbstractCharClass$LazyJavaDefined$1() {
    jur_AbstractCharClass.call(this);
    this.$this$028 = null;
}
let jur_AbstractCharClass$LazyJavaDefined$1__init_ = ($this, $this$0) => {
    $this.$this$028 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaDefined$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaDefined$1();
    jur_AbstractCharClass$LazyJavaDefined$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaDefined$1_contains = ($this, $ch) => {
    return jl_Character_isDefined($ch);
};
function jur_CharClass$14() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz2 = null;
    a.$val$curAlt10 = 0;
    a.$this$06 = null;
}
let jur_CharClass$14__init_ = ($this, $this$0, var$2, var$3) => {
    $this.$this$06 = $this$0;
    $this.$val$clazz2 = var$2;
    $this.$val$curAlt10 = var$3;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$14__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_CharClass$14();
    jur_CharClass$14__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_CharClass$14_contains = ($this, $ch) => {
    return !($this.$val$clazz2.$contains($ch) && $this.$val$curAlt10 ^ $this.$this$06.$bits.$get4($ch)) ? 1 : 0;
},
jl_StringBuilder = $rt_classWithoutFields(jl_AbstractStringBuilder),
jl_StringBuilder__init_3 = ($this, $capacity) => {
    jl_AbstractStringBuilder__init_($this, $capacity);
},
jl_StringBuilder__init_0 = var_0 => {
    let var_1 = new jl_StringBuilder();
    jl_StringBuilder__init_3(var_1, var_0);
    return var_1;
},
jl_StringBuilder__init_2 = $this => {
    jl_AbstractStringBuilder__init_0($this);
},
jl_StringBuilder__init_ = () => {
    let var_0 = new jl_StringBuilder();
    jl_StringBuilder__init_2(var_0);
    return var_0;
},
jl_StringBuilder__init_1 = ($this, $value) => {
    jl_AbstractStringBuilder__init_2($this, $value);
},
jl_StringBuilder__init_4 = var_0 => {
    let var_1 = new jl_StringBuilder();
    jl_StringBuilder__init_1(var_1, var_0);
    return var_1;
},
jl_StringBuilder_append = ($this, $obj) => {
    jl_AbstractStringBuilder_append4($this, $obj);
    return $this;
},
jl_StringBuilder_append2 = ($this, $string) => {
    jl_AbstractStringBuilder_append2($this, $string);
    return $this;
},
jl_StringBuilder_append0 = ($this, $value) => {
    jl_AbstractStringBuilder_append3($this, $value);
    return $this;
},
jl_StringBuilder_append1 = ($this, $c) => {
    jl_AbstractStringBuilder_append1($this, $c);
    return $this;
},
jl_StringBuilder_append3 = ($this, $chars, $offset, $len) => {
    jl_AbstractStringBuilder_append0($this, $chars, $offset, $len);
    return $this;
},
jl_StringBuilder_append5 = ($this, $chars) => {
    jl_AbstractStringBuilder_append($this, $chars);
    return $this;
},
jl_StringBuilder_insert2 = ($this, $index, $chars, $offset, $len) => {
    jl_AbstractStringBuilder_insert($this, $index, $chars, $offset, $len);
    return $this;
},
jl_StringBuilder_insert3 = ($this, $index, $obj) => {
    jl_AbstractStringBuilder_insert2($this, $index, $obj);
    return $this;
},
jl_StringBuilder_insert1 = ($this, $index, $c) => {
    jl_AbstractStringBuilder_insert0($this, $index, $c);
    return $this;
},
jl_StringBuilder_delete = ($this, $start, $end) => {
    jl_AbstractStringBuilder_delete($this, $start, $end);
    return $this;
},
jl_StringBuilder_deleteCharAt = ($this, $index) => {
    jl_AbstractStringBuilder_deleteCharAt($this, $index);
    return $this;
},
jl_StringBuilder_insert5 = ($this, $index, $string) => {
    jl_AbstractStringBuilder_insert1($this, $index, $string);
    return $this;
},
jl_StringBuilder_insert4 = ($this, var$1, var$2, var$3, var$4) => {
    return $this.$insert7(var$1, var$2, var$3, var$4);
},
jl_StringBuilder_append4 = ($this, var$1, var$2, var$3) => {
    return $this.$append14(var$1, var$2, var$3);
},
jl_StringBuilder_length = $this => {
    return jl_AbstractStringBuilder_length($this);
},
jl_StringBuilder_toString = $this => {
    return jl_AbstractStringBuilder_toString($this);
},
jl_StringBuilder_ensureCapacity = ($this, var$1) => {
    jl_AbstractStringBuilder_ensureCapacity($this, var$1);
},
jl_StringBuilder_insert0 = ($this, var$1, var$2) => {
    return $this.$insert8(var$1, var$2);
},
jl_StringBuilder_insert = ($this, var$1, var$2) => {
    return $this.$insert9(var$1, var$2);
},
jl_StringBuilder_insert6 = ($this, var$1, var$2) => {
    return $this.$insert10(var$1, var$2);
};
function jur_CompositeRangeSet() {
    let a = this; jur_JointSet.call(a);
    a.$withoutSurrogates = null;
    a.$withSurrogates = null;
}
let jur_CompositeRangeSet__init_0 = ($this, $withoutSurrogates, $withSurrogates) => {
    jur_JointSet__init_($this);
    $this.$withoutSurrogates = $withoutSurrogates;
    $this.$withSurrogates = $withSurrogates;
},
jur_CompositeRangeSet__init_ = (var_0, var_1) => {
    let var_2 = new jur_CompositeRangeSet();
    jur_CompositeRangeSet__init_0(var_2, var_0, var_1);
    return var_2;
},
jur_CompositeRangeSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $shift;
    $shift = $this.$withoutSurrogates.$matches($stringIndex, $testString, $matchResult);
    if ($shift < 0)
        $shift = $this.$withSurrogates.$matches($stringIndex, $testString, $matchResult);
    if ($shift < 0)
        return (-1);
    return $shift;
},
jur_CompositeRangeSet_setNext = ($this, $next) => {
    $this.$next2 = $next;
    $this.$withSurrogates.$setNext($next);
    $this.$withoutSurrogates.$setNext($next);
},
jur_CompositeRangeSet_hasConsumed = ($this, $matchResult) => {
    return 1;
},
jur_CompositeRangeSet_first = ($this, $set) => {
    return 1;
},
ju_ConcurrentModificationException = $rt_classWithoutFields(jl_RuntimeException),
ju_ConcurrentModificationException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
ju_ConcurrentModificationException__init_ = () => {
    let var_0 = new ju_ConcurrentModificationException();
    ju_ConcurrentModificationException__init_0(var_0);
    return var_0;
},
jur_FinalSet = $rt_classWithoutFields(jur_FSet),
jur_FinalSet__init_ = $this => {
    jur_FSet__init_($this, 0);
},
jur_FinalSet__init_0 = () => {
    let var_0 = new jur_FinalSet();
    jur_FinalSet__init_(var_0);
    return var_0;
},
jur_FinalSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    if ($matchResult.$mode() != 1 && $stringIndex != $matchResult.$getRightBound())
        return (-1);
    $matchResult.$setValid();
    $matchResult.$setEnd(0, $stringIndex);
    return $stringIndex;
};
function eycdaca_AceCommandDescription$KeyBinding() {
    let a = this; jl_Object.call(a);
    a.$allPlatforms = null;
    a.$mac = null;
    a.$exceptMac = null;
}
let eycdaca_AceCommandDescription$KeyBinding__init_0 = ($this, $allPlatforms) => {
    jl_Object__init_($this);
    $this.$allPlatforms = $allPlatforms;
    $this.$mac = null;
    $this.$exceptMac = null;
},
eycdaca_AceCommandDescription$KeyBinding__init_2 = var_0 => {
    let var_1 = new eycdaca_AceCommandDescription$KeyBinding();
    eycdaca_AceCommandDescription$KeyBinding__init_0(var_1, var_0);
    return var_1;
},
eycdaca_AceCommandDescription$KeyBinding__init_ = ($this, $exceptMac, $mac) => {
    jl_Object__init_($this);
    $this.$allPlatforms = null;
    $this.$mac = $mac;
    $this.$exceptMac = $exceptMac;
},
eycdaca_AceCommandDescription$KeyBinding__init_1 = (var_0, var_1) => {
    let var_2 = new eycdaca_AceCommandDescription$KeyBinding();
    eycdaca_AceCommandDescription$KeyBinding__init_(var_2, var_0, var_1);
    return var_2;
},
eycdaca_AceCommandDescription$KeyBinding_getMac = $this => {
    return $this.$mac;
},
eycdaca_AceCommandDescription$KeyBinding_fromJavaScript = $obj => {
    let $v;
    if ($obj !== null) {
        $v = eycdaca_AceNative_argument($obj);
        if (!(typeof $v === 'string' ? 1 : 0))
            return eycdaca_AceCommandDescription$KeyBinding__init_1($rt_str(eycdaca_AceNative_string$js_body$_2($v, "win")), $rt_str(eycdaca_AceNative_string$js_body$_2($v, "mac")));
        return eycdaca_AceCommandDescription$KeyBinding__init_2($rt_str(String($v)));
    }
    return null;
},
eycdaca_AceCommandDescription$KeyBinding_toJavaScript = $this => {
    let $v;
    if ($this.$allPlatforms === null) {
        $v = cggcc_JavaScriptObject_createObject();
        ($v.$unwrap0())["win"] = $rt_ustr($this.$exceptMac);
        ($v.$unwrap0())["mac"] = $rt_ustr($this.$mac);
        return $v;
    }
    return $this.$allPlatforms;
};
function eycdaca_AceCompletionCallbackImpl() {
    jl_Object.call(this);
    this.$callback = null;
}
let eycdaca_AceCompletionCallbackImpl__init_ = ($this, $callback) => {
    jl_Object__init_($this);
    $this.$callback = $callback;
},
eycdaca_AceCompletionCallbackImpl__init_0 = var_0 => {
    let var_1 = new eycdaca_AceCompletionCallbackImpl();
    eycdaca_AceCompletionCallbackImpl__init_(var_1, var_0);
    return var_1;
},
eycdaca_AceCompletionCallbackImpl_invokeWithCompletions = ($this, $proposals) => {
    let var$2, $array, var$4, var$5, $proposal;
    var$2 = $proposals.data;
    $array = eycdaca_AceCompletionCallbackImpl_array$js_body$_2();
    var$4 = var$2.length;
    var$5 = 0;
    while (var$5 < var$4) {
        $proposal = var$2[var$5];
        $array.push(($proposal.$toJsObject()).$unwrap0());
        var$5 = var$5 + 1 | 0;
    }
    $this.$callback.$unwrap0()(null, $array);
},
eycdaca_AceCompletionCallbackImpl_array$js_body$_2 = () => {
    return [];
};
function cggdc_NativeEvent() {
    jl_Object.call(this);
    this.$event = null;
}
let cggdc_NativeEvent__init_ = ($this, $event) => {
    jl_Object__init_($this);
    $this.$event = $event;
},
cggdc_NativeEvent__init_0 = var_0 => {
    let var_1 = new cggdc_NativeEvent();
    cggdc_NativeEvent__init_(var_1, var_0);
    return var_1;
},
cggdc_NativeEvent_getType = $this => {
    return $this.$event === null ? $rt_s(8) : $rt_str($this.$event.type);
},
jur_EmptySet = $rt_classWithoutFields(jur_LeafSet),
jur_EmptySet__init_0 = ($this, $next) => {
    jur_LeafSet__init_0($this, $next);
    $this.$charCount0 = 0;
},
jur_EmptySet__init_ = var_0 => {
    let var_1 = new jur_EmptySet();
    jur_EmptySet__init_0(var_1, var_0);
    return var_1;
},
jur_EmptySet_accepts = ($this, $stringIndex, $testString) => {
    return 0;
},
jur_EmptySet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, $startStr, var$6, $low, $high;
    $strLength = $matchResult.$getRightBound();
    $startStr = $matchResult.$getLeftBound();
    while (true) {
        var$6 = $rt_compare($stringIndex, $strLength);
        if (var$6 > 0)
            return (-1);
        if (var$6 < 0) {
            $low = $testString.$charAt($stringIndex);
            if (jl_Character_isLowSurrogate($low) && $stringIndex > $startStr) {
                $high = $testString.$charAt($stringIndex - 1 | 0);
                if (jl_Character_isHighSurrogate($high)) {
                    $stringIndex = $stringIndex + 1 | 0;
                    continue;
                }
            }
        }
        if ($this.$next2.$matches($stringIndex, $testString, $matchResult) >= 0)
            break;
        $stringIndex = $stringIndex + 1 | 0;
    }
    return $stringIndex;
},
jur_EmptySet_findBack = ($this, $stringIndex, $startSearch, $testString, $matchResult) => {
    let $strLength, $startStr, $low, $high;
    $strLength = $matchResult.$getRightBound();
    $startStr = $matchResult.$getLeftBound();
    while (true) {
        if ($startSearch < $stringIndex)
            return (-1);
        if ($startSearch < $strLength) {
            $low = $testString.$charAt($startSearch);
            if (jl_Character_isLowSurrogate($low) && $startSearch > $startStr) {
                $high = $testString.$charAt($startSearch - 1 | 0);
                if (jl_Character_isHighSurrogate($high)) {
                    $startSearch = $startSearch + (-1) | 0;
                    continue;
                }
            }
        }
        if ($this.$next2.$matches($startSearch, $testString, $matchResult) >= 0)
            break;
        $startSearch = $startSearch + (-1) | 0;
    }
    return $startSearch;
},
jur_EmptySet_hasConsumed = ($this, $mr) => {
    return 0;
};
function cgguc_Event$NativePreviewEvent() {
    let a = this; cgges_GwtEvent.call(a);
    a.$event0 = null;
    a.$canceled = 0;
    a.$consumed = 0;
}
let cgguc_Event$NativePreviewEvent_TYPE = null,
cgguc_Event$NativePreviewEvent_$callClinit = () => {
    cgguc_Event$NativePreviewEvent_$callClinit = $rt_eraseClinit(cgguc_Event$NativePreviewEvent);
    cgguc_Event$NativePreviewEvent__clinit_();
},
cgguc_Event$NativePreviewEvent__init_ = ($this, $event) => {
    cgguc_Event$NativePreviewEvent_$callClinit();
    cgges_GwtEvent__init_($this);
    $this.$event0 = $event;
},
cgguc_Event$NativePreviewEvent__init_0 = var_0 => {
    let var_1 = new cgguc_Event$NativePreviewEvent();
    cgguc_Event$NativePreviewEvent__init_(var_1, var_0);
    return var_1;
},
cgguc_Event$NativePreviewEvent_isCanceled = $this => {
    return $this.$canceled;
},
cgguc_Event$NativePreviewEvent_isConsumed = $this => {
    return $this.$consumed;
},
cgguc_Event$NativePreviewEvent__clinit_ = () => {
    cgguc_Event$NativePreviewEvent_TYPE = cgges_GwtEvent$Type__init_0();
},
cggdc_SelectElement = $rt_classWithoutFields(cggdc_Element),
cggdc_SelectElement__init_ = ($this, $element) => {
    cggdc_Element__init_($this, $element);
},
cggdc_SelectElement__init_0 = var_0 => {
    let var_1 = new cggdc_SelectElement();
    cggdc_SelectElement__init_(var_1, var_0);
    return var_1;
},
ju_Map$Entry = $rt_classWithoutFields(0);
function ju_MapEntry() {
    let a = this; jl_Object.call(a);
    a.$key = null;
    a.$value = null;
}
let ju_MapEntry__init_ = ($this, $theKey, $theValue) => {
    jl_Object__init_($this);
    $this.$key = $theKey;
    $this.$value = $theValue;
},
ju_MapEntry__init_0 = (var_0, var_1) => {
    let var_2 = new ju_MapEntry();
    ju_MapEntry__init_(var_2, var_0, var_1);
    return var_2;
};
function ju_HashMap$HashEntry() {
    let a = this; ju_MapEntry.call(a);
    a.$origKeyHash = 0;
    a.$next3 = null;
}
let ju_HashMap$HashEntry__init_ = ($this, $theKey, $hash) => {
    ju_MapEntry__init_($this, $theKey, null);
    $this.$origKeyHash = $hash;
},
ju_HashMap$HashEntry__init_0 = (var_0, var_1) => {
    let var_2 = new ju_HashMap$HashEntry();
    ju_HashMap$HashEntry__init_(var_2, var_0, var_1);
    return var_2;
};
function ju_LinkedHashMap$LinkedHashMapEntry() {
    let a = this; ju_HashMap$HashEntry.call(a);
    a.$chainForward = null;
    a.$chainBackward = null;
}
let ju_LinkedHashMap$LinkedHashMapEntry__init_ = ($this, $theKey, $hash) => {
    ju_HashMap$HashEntry__init_($this, $theKey, $hash);
    $this.$chainForward = null;
    $this.$chainBackward = null;
},
ju_LinkedHashMap$LinkedHashMapEntry__init_0 = (var_0, var_1) => {
    let var_2 = new ju_LinkedHashMap$LinkedHashMapEntry();
    ju_LinkedHashMap$LinkedHashMapEntry__init_(var_2, var_0, var_1);
    return var_2;
},
jur_AbstractCharClass$LazyASCII = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyASCII__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyASCII__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyASCII();
    jur_AbstractCharClass$LazyASCII__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyASCII_computeValue = $this => {
    return (jur_CharClass__init_()).$add0(0, 127);
};
function cgguc_BrowserEventBridge$previewAndCapture$lambda$_6_0() {
    jl_Object.call(this);
    this.$_04 = null;
}
let cgguc_BrowserEventBridge$previewAndCapture$lambda$_6_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_04 = var$1;
},
cgguc_BrowserEventBridge$previewAndCapture$lambda$_6_0__init_0 = var_0 => {
    let var_1 = new cgguc_BrowserEventBridge$previewAndCapture$lambda$_6_0();
    cgguc_BrowserEventBridge$previewAndCapture$lambda$_6_0__init_(var_1, var_0);
    return var_1;
},
cgguc_BrowserEventBridge$previewAndCapture$lambda$_6_0_run = var$0 => {
    cgguc_BrowserEventBridge_lambda$previewAndCapture$0(var$0.$_04);
};
function ju_AbstractList$1() {
    let a = this; jl_Object.call(a);
    a.$index2 = 0;
    a.$modCount1 = 0;
    a.$size1 = 0;
    a.$removeIndex = 0;
    a.$this$0 = null;
}
let ju_AbstractList$1__init_ = ($this, $this$0) => {
    $this.$this$0 = $this$0;
    jl_Object__init_($this);
    $this.$modCount1 = $this.$this$0.$modCount0;
    $this.$size1 = $this.$this$0.$size();
    $this.$removeIndex = (-1);
},
ju_AbstractList$1__init_0 = var_0 => {
    let var_1 = new ju_AbstractList$1();
    ju_AbstractList$1__init_(var_1, var_0);
    return var_1;
},
ju_AbstractList$1_hasNext = $this => {
    return $this.$index2 >= $this.$size1 ? 0 : 1;
},
ju_AbstractList$1_next = $this => {
    let var$1, var$2;
    ju_AbstractList$1_checkConcurrentModification($this);
    $this.$removeIndex = $this.$index2;
    var$1 = $this.$this$0;
    var$2 = $this.$index2;
    $this.$index2 = var$2 + 1 | 0;
    return var$1.$get(var$2);
},
ju_AbstractList$1_checkConcurrentModification = $this => {
    if ($this.$modCount1 != $this.$this$0.$modCount0)
        $rt_throw(ju_ConcurrentModificationException__init_());
},
eycdaca_AceNative$Action = $rt_classWithoutFields(0);
function eycdaca_AceCommandDescription$toJavaScript$lambda$_21_0() {
    let a = this; jl_Object.call(a);
    a.$_08 = null;
    a.$_13 = null;
}
let eycdaca_AceCommandDescription$toJavaScript$lambda$_21_0__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_08 = var$1;
    var$0.$_13 = var$2;
},
eycdaca_AceCommandDescription$toJavaScript$lambda$_21_0__init_0 = (var_0, var_1) => {
    let var_2 = new eycdaca_AceCommandDescription$toJavaScript$lambda$_21_0();
    eycdaca_AceCommandDescription$toJavaScript$lambda$_21_0__init_(var_2, var_0, var_1);
    return var_2;
},
eycdaca_AceCommandDescription$toJavaScript$lambda$_21_0_run = var$0 => {
    eycdaca_AceCommandDescription_lambda$toJavaScript$0(var$0.$_08, var$0.$_13);
},
eycdaca_AceCommandDescription$toJavaScript$lambda$_21_0_run$exported$0 = var$1 => {
    var$1.$run();
};
function jur_Quantifier() {
    let a = this; jur_SpecialToken.call(a);
    a.$min1 = 0;
    a.$max1 = 0;
}
let jur_Quantifier__init_ = ($this, $min, $max) => {
    jur_SpecialToken__init_($this);
    $this.$min1 = $min;
    $this.$max1 = $max;
},
jur_Quantifier__init_0 = (var_0, var_1) => {
    let var_2 = new jur_Quantifier();
    jur_Quantifier__init_(var_2, var_0, var_1);
    return var_2;
},
jur_Quantifier_min = $this => {
    return $this.$min1;
},
jur_Quantifier_max = $this => {
    return $this.$max1;
},
jur_Quantifier_toString = $this => {
    let var$1, var$2, var$3;
    var$1 = $this.$min1;
    var$2 = $this.$max1 == 2147483647 ? $rt_s(8) : jl_Integer_toString($this.$max1);
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append0(jl_StringBuilder_append1(var$3, 123), var$1), 44), var$2), 125);
    return jl_StringBuilder_toString(var$3);
};
function jur_AbstractCharClass$LazyJavaUpperCase$1() {
    jur_AbstractCharClass.call(this);
    this.$this$013 = null;
}
let jur_AbstractCharClass$LazyJavaUpperCase$1__init_ = ($this, $this$0) => {
    $this.$this$013 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaUpperCase$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaUpperCase$1();
    jur_AbstractCharClass$LazyJavaUpperCase$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaUpperCase$1_contains = ($this, $ch) => {
    return jl_Character_isUpperCase($ch);
},
otpp_ResourceAccessor = $rt_classWithoutFields(),
jur_PossessiveQuantifierSet = $rt_classWithoutFields(jur_LeafQuantifierSet),
jur_PossessiveQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_LeafQuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_PossessiveQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_PossessiveQuantifierSet();
    jur_PossessiveQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_PossessiveQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4;
    a: {
        while (true) {
            if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$getRightBound())
                break a;
            var$4 = $this.$leaf.$accepts($stringIndex, $testString);
            if (var$4 < 1)
                break;
            $stringIndex = $stringIndex + var$4 | 0;
        }
    }
    return $this.$next2.$matches($stringIndex, $testString, $matchResult);
};
function cgwbes_UmbrellaException() {
    jl_RuntimeException.call(this);
    this.$causes = null;
}
let cgwbes_UmbrellaException_makeCause = $causes => {
    return $causes.$isEmpty() ? null : ($causes.$iterator()).$next();
},
cgwbes_UmbrellaException_makeMessage = $causes => {
    let $count, $b, var$4, $first, $t;
    $count = $causes.$size();
    if ($count) {
        $b = new jl_StringBuilder;
        if ($count == 1)
            var$4 = $rt_s(263);
        else {
            var$4 = jl_StringBuilder__init_();
            jl_StringBuilder_append(jl_StringBuilder_append0(var$4, $count), $rt_s(264));
            var$4 = jl_StringBuilder_toString(var$4);
        }
        jl_StringBuilder__init_1($b, var$4);
        $first = 1;
        var$4 = $causes.$iterator();
        while (var$4.$hasNext()) {
            $t = var$4.$next();
            if ($first)
                $first = 0;
            else
                $b.$append10($rt_s(265));
            $b.$append10($t.$getMessage());
        }
        return $b.$toString();
    }
    return null;
},
cgwbes_UmbrellaException__init_ = ($this, $causes) => {
    let $i, var$3, $cause, var$5;
    jl_RuntimeException__init_1($this, cgwbes_UmbrellaException_makeMessage($causes), cgwbes_UmbrellaException_makeCause($causes));
    $this.$causes = $causes;
    $i = 0;
    var$3 = $causes.$iterator();
    while (var$3.$hasNext()) {
        $cause = var$3.$next();
        var$5 = $i + 1 | 0;
        if (!$i) {
            $i = var$5;
            continue;
        }
        jl_Throwable_addSuppressed($this, $cause);
        $i = var$5;
    }
},
cgwbes_UmbrellaException__init_0 = var_0 => {
    let var_1 = new cgwbes_UmbrellaException();
    cgwbes_UmbrellaException__init_(var_1, var_0);
    return var_1;
};
function jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1() {
    jur_AbstractCharClass.call(this);
    this.$this$033 = null;
}
let jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1__init_ = ($this, $this$0) => {
    $this.$this$033 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1();
    jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1_contains = ($this, $ch) => {
    return jl_Character_isIdentifierIgnorable($ch);
};
function jur_AbstractCharClass$LazyJavaLetter$1() {
    jur_AbstractCharClass.call(this);
    this.$this$027 = null;
}
let jur_AbstractCharClass$LazyJavaLetter$1__init_ = ($this, $this$0) => {
    $this.$this$027 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaLetter$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaLetter$1();
    jur_AbstractCharClass$LazyJavaLetter$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaLetter$1_contains = ($this, $ch) => {
    return jl_Character_isLetter($ch);
},
jur_ReluctantQuantifierSet = $rt_classWithoutFields(jur_LeafQuantifierSet),
jur_ReluctantQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_LeafQuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_ReluctantQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_ReluctantQuantifierSet();
    jur_ReluctantQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_ReluctantQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4;
    while (true) {
        var$4 = $this.$next2.$matches($stringIndex, $testString, $matchResult);
        if (var$4 >= 0)
            break;
        if (($stringIndex + $this.$leaf.$charCount() | 0) <= $matchResult.$getRightBound()) {
            var$4 = $this.$leaf.$accepts($stringIndex, $testString);
            $stringIndex = $stringIndex + var$4 | 0;
        }
        if (var$4 < 1)
            return (-1);
    }
    return var$4;
},
cgguc_DOM = $rt_classWithoutFields(),
cgguc_DOM_setEventListener = ($element, $listener) => {
    cgguc_BrowserEventBridge_setListener($element, $listener);
},
cgguc_DOM_releaseCapture = $element => {
    cgguc_BrowserEventBridge_releaseCapture($element);
},
jur_EOISet = $rt_classWithoutFields(jur_AbstractSet),
jur_EOISet__init_ = $this => {
    jur_AbstractSet__init_($this);
},
jur_EOISet__init_0 = () => {
    let var_0 = new jur_EOISet();
    jur_EOISet__init_(var_0);
    return var_0;
},
jur_EOISet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $rightBound;
    $rightBound = !$matchResult.$hasTransparentBounds() ? $matchResult.$getRightBound() : $testString.$length();
    if ($stringIndex >= $rightBound) {
        $matchResult.$hitEnd = 1;
        $matchResult.$requireEnd = 1;
        return $this.$next2.$matches($stringIndex, $testString, $matchResult);
    }
    return (-1);
},
jur_EOISet_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_AbstractCharClass$LazyUpper = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyUpper__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyUpper__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyUpper();
    jur_AbstractCharClass$LazyUpper__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyUpper_computeValue = $this => {
    return (jur_CharClass__init_()).$add0(65, 90);
},
cggdc_IFrameElement = $rt_classWithoutFields(cggdc_Element),
cggdc_IFrameElement__init_ = ($this, $element) => {
    cggdc_Element__init_($this, $element);
},
cggdc_IFrameElement__init_0 = var_0 => {
    let var_1 = new cggdc_IFrameElement();
    cggdc_IFrameElement__init_(var_1, var_0);
    return var_1;
},
ju_HashMap$KeyIterator = $rt_classWithoutFields(ju_HashMap$AbstractMapIterator),
ju_HashMap$KeyIterator__init_ = ($this, $map) => {
    ju_HashMap$AbstractMapIterator__init_($this, $map);
},
ju_HashMap$KeyIterator__init_0 = var_0 => {
    let var_1 = new ju_HashMap$KeyIterator();
    ju_HashMap$KeyIterator__init_(var_1, var_0);
    return var_1;
},
ju_HashMap$KeyIterator_next = $this => {
    ju_HashMap$AbstractMapIterator_makeNext($this);
    return $this.$currentEntry.$key;
},
cgges_UmbrellaException = $rt_classWithoutFields(cgwbes_UmbrellaException),
cgges_UmbrellaException__init_0 = ($this, $causes) => {
    cgwbes_UmbrellaException__init_($this, $causes);
},
cgges_UmbrellaException__init_ = var_0 => {
    let var_1 = new cgges_UmbrellaException();
    cgges_UmbrellaException__init_0(var_1, var_0);
    return var_1;
},
eycdaca_AceNative$Completion = $rt_classWithoutFields(0);
function otji_JSWrapper() {
    jl_Object.call(this);
    this.$js = null;
}
let otji_JSWrapper_unwrap = $o => {
    if ($o !== null)
        return !($o instanceof otji_JSWrapper) ? $o : $o.$js;
    return null;
},
otji_JSWrapper_maybeUnwrap = $o => {
    if ($o !== null)
        return !($o instanceof $rt_objcls()) ? $o : otji_JSWrapper_unwrap($o);
    return null;
},
cggdc_AnchorElement = $rt_classWithoutFields(cggdc_Element),
cggdc_AnchorElement__init_ = ($this, $element) => {
    cggdc_Element__init_($this, $element);
},
cggdc_AnchorElement__init_0 = var_0 => {
    let var_1 = new cggdc_AnchorElement();
    cggdc_AnchorElement__init_(var_1, var_0);
    return var_1;
};
function jur_MultiLineSOLSet() {
    jur_AbstractSet.call(this);
    this.$lt1 = null;
}
let jur_MultiLineSOLSet__init_ = ($this, $lt) => {
    jur_AbstractSet__init_($this);
    $this.$lt1 = $lt;
},
jur_MultiLineSOLSet__init_0 = var_0 => {
    let var_1 = new jur_MultiLineSOLSet();
    jur_MultiLineSOLSet__init_(var_1, var_0);
    return var_1;
},
jur_MultiLineSOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let var$4, var$5;
    a: {
        if ($strIndex != $matchResult.$getRightBound()) {
            if (!$strIndex)
                break a;
            if ($matchResult.$hasAnchoringBounds() && $strIndex == $matchResult.$getLeftBound())
                break a;
            var$4 = $this.$lt1;
            var$5 = $strIndex - 1 | 0;
            if (var$4.$isAfterLineTerminator($testString.$charAt(var$5), $testString.$charAt($strIndex)))
                break a;
        }
        return (-1);
    }
    return $this.$next2.$matches($strIndex, $testString, $matchResult);
},
jur_MultiLineSOLSet_hasConsumed = ($this, $matchResult) => {
    return 0;
},
otjc_JSString = $rt_classWithoutFields(),
otjc_JSString_stringValue$static = $this => {
    return $rt_str($this);
},
cggucu_RootPanel$detachWidgets$lambda$_7_0 = $rt_classWithoutFields(),
cggucu_RootPanel$detachWidgets$lambda$_7_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cggucu_RootPanel$detachWidgets$lambda$_7_0__init_0 = () => {
    let var_0 = new cggucu_RootPanel$detachWidgets$lambda$_7_0();
    cggucu_RootPanel$detachWidgets$lambda$_7_0__init_(var_0);
    return var_0;
},
cggucu_RootPanel$detachWidgets$lambda$_7_0_accept0 = (var$0, var$1) => {
    cggucu_RootPanel$detachWidgets$lambda$_7_0_accept(var$0, var$1);
},
cggucu_RootPanel$detachWidgets$lambda$_7_0_accept = (var$0, var$1) => {
    cggucu_RootPanel_detachNow(var$1);
},
jur_AbstractCharClass$LazyLower = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyLower__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyLower__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyLower();
    jur_AbstractCharClass$LazyLower__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyLower_computeValue = $this => {
    return (jur_CharClass__init_()).$add0(97, 122);
},
cggdc_SpanElement = $rt_classWithoutFields(cggdc_Element),
cggdc_SpanElement__init_ = ($this, $element) => {
    cggdc_Element__init_($this, $element);
},
cggdc_SpanElement__init_0 = var_0 => {
    let var_1 = new cggdc_SpanElement();
    cggdc_SpanElement__init_(var_1, var_0);
    return var_1;
};
function eycdaca_AceEditor$addCompletionProvider$lambda$_56_0() {
    jl_Object.call(this);
    this.$_011 = null;
}
let eycdaca_AceEditor$addCompletionProvider$lambda$_56_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_011 = var$1;
},
eycdaca_AceEditor$addCompletionProvider$lambda$_56_0__init_0 = var_0 => {
    let var_1 = new eycdaca_AceEditor$addCompletionProvider$lambda$_56_0();
    eycdaca_AceEditor$addCompletionProvider$lambda$_56_0__init_(var_1, var_0);
    return var_1;
},
eycdaca_AceEditor$addCompletionProvider$lambda$_56_0_complete = (var$0, var$1, var$2, var$3, var$4, var$5) => {
    eycdaca_AceEditor_lambda$addCompletionProvider$2(var$0.$_011, var$1, var$2, var$3, var$4, var$5);
},
eycdaca_AceEditor$addCompletionProvider$lambda$_56_0_complete$exported$0 = (var$1, var$2, var$3, var$4, var$5, var$6) => {
    let var$7, var$8, var$9;
    var$7 = var$2;
    var$8 = var$3;
    var$9 = var$4;
    var$2 = $rt_str(var$5);
    var$1.$complete(var$7, var$8, var$9, var$2, var$6);
},
jur_AbstractCharClass$LazyJavaTitleCase = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaTitleCase__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaTitleCase__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaTitleCase();
    jur_AbstractCharClass$LazyJavaTitleCase__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaTitleCase_computeValue = $this => {
    return jur_AbstractCharClass$LazyJavaTitleCase$1__init_0($this);
},
cggcc_Scheduler = $rt_classWithoutFields(),
cggcc_Scheduler_INSTANCE = null,
cggcc_Scheduler_$callClinit = () => {
    cggcc_Scheduler_$callClinit = $rt_eraseClinit(cggcc_Scheduler);
    cggcc_Scheduler__clinit_();
},
cggcc_Scheduler__init_ = $this => {
    cggcc_Scheduler_$callClinit();
    jl_Object__init_($this);
},
cggcc_Scheduler_runEntry = $callback => {
    cggcc_Scheduler_$callClinit();
    cggcc_Scheduler$Impl_enter(cggcc_Scheduler_INSTANCE, $callback);
},
cggcc_Scheduler__clinit_ = () => {
    cggcc_Scheduler_INSTANCE = cggcc_Scheduler$Impl__init_();
};
function iitm_ScriptModule() {
    let a = this; jl_Object.call(a);
    a.$name0 = null;
    a.$stylesheets = null;
    a.$scripts = null;
    a.$scriptPresence = null;
    a.$waiting = null;
    a.$presence = null;
    a.$started = 0;
    a.$ready = 0;
    a.$failed = 0;
    a.$failureHandlers = null;
    a.$failure = null;
}
let iitm_ScriptModule_onFailure = ($this, $handler) => {
    if ($this.$failure !== null)
        $handler.$accept1($this.$failure);
    else if (!$this.$ready)
        $this.$failureHandlers.$add2($handler);
    return $this;
},
iitm_ScriptModule__init_ = ($this, $name) => {
    jl_Object__init_($this);
    $this.$stylesheets = ju_ArrayList__init_();
    $this.$scripts = ju_ArrayList__init_();
    $this.$scriptPresence = ju_ArrayList__init_();
    $this.$waiting = ju_ArrayList__init_();
    $this.$failureHandlers = ju_ArrayList__init_();
    $this.$name0 = $name;
},
iitm_ScriptModule__init_0 = var_0 => {
    let var_1 = new iitm_ScriptModule();
    iitm_ScriptModule__init_(var_1, var_0);
    return var_1;
},
iitm_ScriptModule_named = $name => {
    return iitm_ScriptModule__init_0($name);
},
iitm_ScriptModule_script0 = ($this, $src) => {
    return iitm_ScriptModule_script($this, $src, null);
},
iitm_ScriptModule_script = ($this, $src, $present) => {
    $this.$scripts.$add2($src);
    $this.$scriptPresence.$add2($present);
    return $this;
},
iitm_ScriptModule_isReady = $this => {
    let var$1;
    a: {
        b: {
            if (!$this.$ready) {
                if ($this.$presence === null)
                    break b;
                if (!$this.$presence.$isPresent())
                    break b;
            }
            var$1 = 1;
            break a;
        }
        var$1 = 0;
    }
    return var$1;
},
iitm_ScriptModule_ensureLoaded = $this => {
    let var$1, $href;
    if (!$this.$started && !$this.$failed && !iitm_ScriptModule_isReady($this)) {
        $this.$started = 1;
        var$1 = $this.$stylesheets.$iterator();
        while (var$1.$hasNext()) {
            $href = var$1.$next();
            iitm_ScriptModule_addStylesheet$js_body$_15($rt_ustr($href));
        }
        iitm_ScriptModule_loadFrom($this, 0);
        return;
    }
},
iitm_ScriptModule_whenReady = ($this, $action) => {
    if ($action !== null) {
        if (!iitm_ScriptModule_isReady($this)) {
            if (!$this.$failed) {
                $this.$waiting.$add2($action);
                iitm_ScriptModule_ensureLoaded($this);
                return;
            }
            return;
        }
        $action.$run();
        return;
    }
},
iitm_ScriptModule_loadFrom = ($this, $index) => {
    let $src, $present, var$4, var$5;
    if ($index < $this.$scripts.$size()) {
        $src = $this.$scripts.$get($index);
        $present = $this.$scriptPresence.$get($index);
        if ($present !== null && $present.$isPresent()) {
            iitm_ScriptModule_loadFrom($this, $index + 1 | 0);
            return;
        }
        var$4 = iitm_ScriptModule$loadFrom$lambda$_11_0__init_0($this, $index);
        var$5 = iitm_ScriptModule$loadFrom$lambda$_11_1__init_0($this, $src);
        iitm_ScriptModule_addScript$js_body$_16($rt_ustr($src), otji_JSWrapper_unwrap(var$4), otji_JSWrapper_unwrap(var$5));
        return;
    }
    iitm_ScriptModule_complete($this);
},
iitm_ScriptModule_complete = $this => {
    let $pending, $failures, var$3, $action, $error, $$je;
    if ($this.$presence !== null && !$this.$presence.$isPresent()) {
        iitm_ScriptModule_fail($this, $this.$scripts.$isEmpty() ? $rt_s(266) : $this.$scripts.$get($this.$scripts.$size() - 1 | 0));
        return;
    }
    $this.$ready = 1;
    $pending = ju_ArrayList__init_1($this.$waiting);
    $this.$waiting.$clear1();
    $this.$failureHandlers.$clear1();
    $failures = ju_LinkedHashSet__init_();
    var$3 = $pending.$iterator();
    while (var$3.$hasNext()) {
        $action = var$3.$next();
        a: {
            b: {
                try {
                    $action.$run();
                    break a;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof jl_Throwable) {
                        $error = $$je;
                        break b;
                    } else {
                        throw $$e;
                    }
                }
            }
            $failures.$add2($error);
        }
    }
    if (!$failures.$isEmpty())
        $rt_throw(cgges_UmbrellaException__init_($failures));
},
iitm_ScriptModule_fail = ($this, $src) => {
    let var$2, var$3, var$4, $handlers, $failures, $handler, $error, $$je;
    $this.$failed = 1;
    $this.$waiting.$clear1();
    var$2 = new jl_IllegalStateException;
    var$3 = $this.$name0;
    var$4 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$4, $rt_s(267)), var$3), $rt_s(268)), $src);
    jl_IllegalStateException__init_(var$2, jl_StringBuilder_toString(var$4));
    $this.$failure = var$2;
    $handlers = ju_ArrayList__init_1($this.$failureHandlers);
    $this.$failureHandlers.$clear1();
    iitm_ScriptModule_report$js_body$_14($rt_ustr($this.$name0), $rt_ustr($src));
    $failures = ju_LinkedHashSet__init_();
    var$2 = $handlers.$iterator();
    while (var$2.$hasNext()) {
        $handler = var$2.$next();
        a: {
            b: {
                try {
                    $handler.$accept1($this.$failure);
                    break a;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof jl_Throwable) {
                        $error = $$je;
                        break b;
                    } else {
                        throw $$e;
                    }
                }
            }
            $failures.$add2($error);
        }
    }
    if (!$failures.$isEmpty())
        $rt_throw(cgges_UmbrellaException__init_($failures));
},
iitm_ScriptModule_lambda$loadFrom$2 = ($this, $src) => {
    iitm_ScriptModule_fail($this, $src);
},
iitm_ScriptModule_lambda$loadFrom$1 = ($this, $index) => {
    iitm_ScriptModule_loadFrom($this, $index + 1 | 0);
},
iitm_ScriptModule_report$js_body$_14 = (var$1, var$2) => {
    if (console && console.error) {
        console.error('module "' + var$1 + '" did not load: ' + var$2 + ' -- widgets from this module will not work');
    }
},
iitm_ScriptModule_addStylesheet$js_body$_15 = var$1 => {
    if (!document.querySelector('link[href="' + var$1 + '"]')) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = var$1;
        document.head.appendChild(link);
    }
},
iitm_ScriptModule_addScript$js_body$_16 = (var$1, var$2, var$3) => {
    var url = (new URL(var$1, document.baseURI)).href;
    var all = document.scripts, script = null;
    for (var i = 0;i < all.length;i++) {
        if (all[i].src === url) {
            script = all[i];
            break;
        }
    }
    if (script) {
        var state = script.__instantoLoad;
        if (!state || state.status === 1) {
            var$2.run();
            return;
        }
        if (state.status === 2) {
            var$3.run();
            return;
        }
        state.waiters.push({ ok: var$2, fail: var$3 });
        return;
    }
    script = document.createElement('script');
    var state = { status: 0, waiters: [{ ok: var$2, fail: var$3 }] };
    script.__instantoLoad = state;
    function done(ok) {
        if (state.status) return;
        state.status = ok ? 1 : 2;
        script.removeEventListener('load', loaded);
        script.removeEventListener('error', failed);
        var waiters = state.waiters;
        state.waiters = [];
        var error = null;
        for (var i = 0;i < waiters.length;i++) {
            try {
                (ok ? waiters[i].ok : waiters[i].fail).run();
            } catch (e){
                if (!error) error = e;
            }
        }
        if (error) throw error;
    }
    function loaded() {
        done(true);
    }
    function failed() {
        done(false);
    }
    script.addEventListener('load', loaded);
    script.addEventListener('error', failed);
    var nonce = document.querySelector('script[nonce]');
    if (nonce) script.nonce = nonce.nonce;
    script.src = var$1;
    document.head.appendChild(script);
},
cggcc_Scheduler$RepeatingCommand = $rt_classWithoutFields(0);
function iitm_ScriptModule$loadFrom$lambda$_11_1() {
    let a = this; jl_Object.call(a);
    a.$_02 = null;
    a.$_11 = null;
}
let iitm_ScriptModule$loadFrom$lambda$_11_1__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_02 = var$1;
    var$0.$_11 = var$2;
},
iitm_ScriptModule$loadFrom$lambda$_11_1__init_0 = (var_0, var_1) => {
    let var_2 = new iitm_ScriptModule$loadFrom$lambda$_11_1();
    iitm_ScriptModule$loadFrom$lambda$_11_1__init_(var_2, var_0, var_1);
    return var_2;
},
iitm_ScriptModule$loadFrom$lambda$_11_1_run = var$0 => {
    iitm_ScriptModule_lambda$loadFrom$2(var$0.$_02, var$0.$_11);
},
iitm_ScriptModule$loadFrom$lambda$_11_1_run$exported$0 = var$1 => {
    var$1.$run();
};
function iitm_ScriptModule$loadFrom$lambda$_11_0() {
    let a = this; jl_Object.call(a);
    a.$_0 = null;
    a.$_1 = 0;
}
let iitm_ScriptModule$loadFrom$lambda$_11_0__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_0 = var$1;
    var$0.$_1 = var$2;
},
iitm_ScriptModule$loadFrom$lambda$_11_0__init_0 = (var_0, var_1) => {
    let var_2 = new iitm_ScriptModule$loadFrom$lambda$_11_0();
    iitm_ScriptModule$loadFrom$lambda$_11_0__init_(var_2, var_0, var_1);
    return var_2;
},
iitm_ScriptModule$loadFrom$lambda$_11_0_run = var$0 => {
    iitm_ScriptModule_lambda$loadFrom$1(var$0.$_0, var$0.$_1);
},
iitm_ScriptModule$loadFrom$lambda$_11_0_run$exported$0 = var$1 => {
    var$1.$run();
},
jur_PreviousMatch = $rt_classWithoutFields(jur_AbstractSet),
jur_PreviousMatch__init_ = $this => {
    jur_AbstractSet__init_($this);
},
jur_PreviousMatch__init_0 = () => {
    let var_0 = new jur_PreviousMatch();
    jur_PreviousMatch__init_(var_0);
    return var_0;
},
jur_PreviousMatch_matches = ($this, $stringIndex, $testString, $matchResult) => {
    if ($stringIndex == $matchResult.$getPreviousMatchEnd())
        return $this.$next2.$matches($stringIndex, $testString, $matchResult);
    return (-1);
},
jur_PreviousMatch_hasConsumed = ($this, $matchResult) => {
    return 0;
},
cggucu_Lifecycle = $rt_classWithoutFields(),
cggucu_Lifecycle_forEach = ($values, $action) => {
    let $failures, var$4, $value, $failure, $$je;
    $failures = ju_LinkedHashSet__init_();
    var$4 = $values.$iterator();
    while (var$4.$hasNext()) {
        $value = var$4.$next();
        a: {
            b: {
                try {
                    $action.$accept1($value);
                    break a;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof jl_Throwable) {
                        $failure = $$je;
                        break b;
                    } else {
                        throw $$e;
                    }
                }
            }
            $failures.$add2($failure);
        }
    }
    if (!$failures.$isEmpty())
        $rt_throw(cgges_UmbrellaException__init_($failures));
},
cggdc_FormElement = $rt_classWithoutFields(cggdc_Element),
cggdc_FormElement__init_ = ($this, $element) => {
    cggdc_Element__init_($this, $element);
},
cggdc_FormElement__init_0 = var_0 => {
    let var_1 = new cggdc_FormElement();
    cggdc_FormElement__init_(var_1, var_0);
    return var_1;
},
jur_NonCapFSet = $rt_classWithoutFields(jur_FSet),
jur_NonCapFSet__init_ = ($this, $groupIndex) => {
    jur_FSet__init_($this, $groupIndex);
},
jur_NonCapFSet__init_0 = var_0 => {
    let var_1 = new jur_NonCapFSet();
    jur_NonCapFSet__init_(var_1, var_0);
    return var_1;
},
jur_NonCapFSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $gr;
    $gr = $this.$getGroupIndex();
    $matchResult.$setConsumed($gr, $stringIndex - $matchResult.$getConsumed($gr) | 0);
    return $this.$next2.$matches($stringIndex, $testString, $matchResult);
},
jur_NonCapFSet_hasConsumed = ($this, $mr) => {
    return 0;
},
iiad_EditorDemo$start$lambda$_2_11 = $rt_classWithoutFields(),
iiad_EditorDemo$start$lambda$_2_11__init_ = var$0 => {
    jl_Object__init_(var$0);
},
iiad_EditorDemo$start$lambda$_2_11__init_0 = () => {
    let var_0 = new iiad_EditorDemo$start$lambda$_2_11();
    iiad_EditorDemo$start$lambda$_2_11__init_(var_0);
    return var_0;
},
iiad_EditorDemo$start$lambda$_2_11_run = var$0 => {
    iiad_EditorDemo_lambda$start$13();
},
iiad_EditorDemo$start$lambda$_2_11_run$exported$0 = var$1 => {
    var$1.$run();
},
iiad_EditorDemo$start$lambda$_2_10 = $rt_classWithoutFields(),
iiad_EditorDemo$start$lambda$_2_10__init_ = var$0 => {
    jl_Object__init_(var$0);
},
iiad_EditorDemo$start$lambda$_2_10__init_0 = () => {
    let var_0 = new iiad_EditorDemo$start$lambda$_2_10();
    iiad_EditorDemo$start$lambda$_2_10__init_(var_0);
    return var_0;
},
iiad_EditorDemo$start$lambda$_2_10_run = var$0 => {
    iiad_EditorDemo_lambda$start$12();
},
iiad_EditorDemo$start$lambda$_2_10_run$exported$0 = var$1 => {
    var$1.$run();
};
function jur_UCISupplCharSet() {
    jur_LeafSet.call(this);
    this.$ch4 = 0;
}
let jur_UCISupplCharSet__init_ = ($this, $ch) => {
    jur_LeafSet__init_($this);
    $this.$charCount0 = 2;
    $this.$ch4 = jl_Character_toLowerCase0(jl_Character_toUpperCase0($ch));
},
jur_UCISupplCharSet__init_0 = var_0 => {
    let var_1 = new jur_UCISupplCharSet();
    jur_UCISupplCharSet__init_(var_1, var_0);
    return var_1;
},
jur_UCISupplCharSet_accepts = ($this, $strIndex, $testString) => {
    let var$3, $high, $low;
    var$3 = $strIndex + 1 | 0;
    $high = $testString.$charAt($strIndex);
    $low = $testString.$charAt(var$3);
    return $this.$ch4 != jl_Character_toLowerCase0(jl_Character_toUpperCase0(jl_Character_toCodePoint($high, $low))) ? (-1) : 2;
},
jl_System = $rt_classWithoutFields(),
jl_System_arraycopy = ($src, $srcPos, $dest, $destPos, $length) => {
    let var$6, $srcType, $targetType, $srcArray, $i, var$11, var$12, $elem;
    if ($src !== null && $dest !== null) {
        if ($srcPos >= 0 && $destPos >= 0 && $length >= 0 && ($srcPos + $length | 0) <= jlr_Array_getLength($src)) {
            var$6 = $destPos + $length | 0;
            if (var$6 <= jlr_Array_getLength($dest)) {
                a: {
                    b: {
                        if ($src !== $dest) {
                            $srcType = jl_Class_getComponentType(jl_Object_getClass($src));
                            $targetType = jl_Class_getComponentType(jl_Object_getClass($dest));
                            if ($srcType !== null && $targetType !== null) {
                                if ($srcType === $targetType)
                                    break b;
                                if (!jl_Class_isPrimitive($srcType) && !jl_Class_isPrimitive($targetType)) {
                                    $srcArray = $src;
                                    $i = 0;
                                    var$6 = $srcPos;
                                    while ($i < $length) {
                                        var$11 = $srcArray.data;
                                        var$12 = var$6 + 1 | 0;
                                        $elem = var$11[var$6];
                                        if (!jl_Class_isInstance($targetType, $elem)) {
                                            jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $i);
                                            $rt_throw(jl_ArrayStoreException__init_());
                                        }
                                        $i = $i + 1 | 0;
                                        var$6 = var$12;
                                    }
                                    jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
                                    return;
                                }
                                if (!jl_Class_isPrimitive($srcType))
                                    break a;
                                if (jl_Class_isPrimitive($targetType))
                                    break b;
                                else
                                    break a;
                            }
                            $rt_throw(jl_ArrayStoreException__init_());
                        }
                    }
                    jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
                    return;
                }
                $rt_throw(jl_ArrayStoreException__init_());
            }
        }
        $rt_throw(jl_IndexOutOfBoundsException__init_());
    }
    $rt_throw(jl_NullPointerException__init_($rt_s(269)));
},
jl_System_fastArraycopy = ($src, $srcPos, $dest, $destPos, $length) => {
    let var$6;
    if ($srcPos >= 0 && $destPos >= 0 && $length >= 0 && ($srcPos + $length | 0) <= jl_System_fastArrayLength($src)) {
        var$6 = $destPos + $length | 0;
        if (var$6 <= jl_System_fastArrayLength($dest)) {
            jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
            return;
        }
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
jl_System_fastArrayLength = $obj => {
    return $rt_arrayLength($obj);
},
jl_System_doArrayCopy = (var$1, var$2, var$3, var$4, var$5) => {
    if (var$5 !== 0) {
        if (typeof var$1.data.buffer !== 'undefined') {
            var$3.data.set(var$1.data.subarray(var$2, var$2 + var$5), var$4);
        } else if (var$1 !== var$3 || var$4 < var$2) {
            for (let i = 0;i < var$5;i = i + 1 | 0) {
                var$3.data[var$4++] = var$1.data[var$2++];
            }
        } else {
            var$2 = var$2 + var$5 | 0;
            var$4 = var$4 + var$5 | 0;
            for (let i = 0;i < var$5;i = i + 1 | 0) {
                var$3.data[ --var$4] = var$1.data[ --var$2];
            }
        }
    }
};
function jur_AbstractCharClass$LazyRange() {
    let a = this; jur_AbstractCharClass$LazyCharClass.call(a);
    a.$start5 = 0;
    a.$end2 = 0;
}
let jur_AbstractCharClass$LazyRange__init_0 = ($this, var$1, var$2) => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
    $this.$start5 = var$1;
    $this.$end2 = var$2;
},
jur_AbstractCharClass$LazyRange__init_ = (var_0, var_1) => {
    let var_2 = new jur_AbstractCharClass$LazyRange();
    jur_AbstractCharClass$LazyRange__init_0(var_2, var_0, var_1);
    return var_2;
},
jur_AbstractCharClass$LazyRange_computeValue = $this => {
    let $chCl;
    $chCl = (jur_CharClass__init_()).$add0($this.$start5, $this.$end2);
    return $chCl;
},
jur_AbstractCharClass$LazyXDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyXDigit__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyXDigit__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyXDigit();
    jur_AbstractCharClass$LazyXDigit__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyXDigit_computeValue = $this => {
    return (((jur_CharClass__init_()).$add0(48, 57)).$add0(97, 102)).$add0(65, 70);
};
function jur_Matcher() {
    let a = this; jl_Object.call(a);
    a.$pat = null;
    a.$start3 = null;
    a.$string0 = null;
    a.$matchResult = null;
    a.$leftBound = 0;
    a.$rightBound = 0;
}
let jur_Matcher_find = ($this, $start) => {
    let $stringLength, var$3;
    $stringLength = $this.$string0.$length();
    if ($start >= 0 && $start <= $stringLength) {
        var$3 = jur_Matcher_findAt($this, $start);
        if (var$3 >= 0 && $this.$matchResult.$isValid()) {
            $this.$matchResult.$finalizeMatch();
            return 1;
        }
        $this.$matchResult.$startIndex = (-1);
        return 0;
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_2(jl_String_valueOf0($start)));
},
jur_Matcher_findAt = ($this, $startIndex) => {
    let $foundIndex;
    $this.$matchResult.$reset0();
    $this.$matchResult.$setMode(1);
    $this.$matchResult.$setStartIndex($startIndex);
    $foundIndex = $this.$start3.$find($startIndex, $this.$string0, $this.$matchResult);
    if ($foundIndex == (-1))
        $this.$matchResult.$hitEnd = 1;
    return $foundIndex;
},
jur_Matcher_find0 = $this => {
    let $length, var$2;
    $length = $this.$string0.$length();
    if (!jur_Matcher_hasTransparentBounds($this))
        $length = $this.$rightBound;
    if ($this.$matchResult.$startIndex >= 0 && $this.$matchResult.$mode() == 1) {
        $this.$matchResult.$startIndex = $this.$matchResult.$end0();
        if ($this.$matchResult.$end0() == $this.$matchResult.$start0()) {
            var$2 = $this.$matchResult;
            var$2.$startIndex = var$2.$startIndex + 1 | 0;
        }
        return !($this.$matchResult.$startIndex <= $length && jur_Matcher_find($this, $this.$matchResult.$startIndex)) ? 0 : 1;
    }
    return jur_Matcher_find($this, $this.$leftBound);
},
jur_Matcher_start0 = ($this, $group) => {
    return $this.$matchResult.$start($group);
},
jur_Matcher_end = ($this, $group) => {
    return $this.$matchResult.$end($group);
},
jur_Matcher_matches = $this => {
    return jur_Matcher_lookingAt($this, $this.$leftBound, 2);
},
jur_Matcher_runMatch = ($this, $set, $index, $matchResult) => {
    if ($set.$matches($index, $this.$string0, $matchResult) >= 0) {
        $matchResult.$finalizeMatch();
        return 1;
    }
    return 0;
},
jur_Matcher_lookingAt = ($this, $startIndex, $mode) => {
    $this.$matchResult.$reset0();
    $this.$matchResult.$setMode($mode);
    $this.$matchResult.$setStartIndex($startIndex);
    return jur_Matcher_runMatch($this, $this.$start3, $startIndex, $this.$matchResult);
},
jur_Matcher_start = $this => {
    return jur_Matcher_start0($this, 0);
},
jur_Matcher_end0 = $this => {
    return jur_Matcher_end($this, 0);
},
jur_Matcher_hasTransparentBounds = $this => {
    return $this.$matchResult.$hasTransparentBounds();
},
jur_Matcher__init_ = ($this, $pat, $cs) => {
    let var$3, var$4, var$5, var$6, var$7;
    jl_Object__init_($this);
    $this.$leftBound = (-1);
    $this.$rightBound = (-1);
    $this.$pat = $pat;
    $this.$start3 = $pat.$start2;
    $this.$string0 = $cs;
    $this.$leftBound = 0;
    $this.$rightBound = $this.$string0.$length();
    var$3 = new jur_MatchResultImpl;
    var$4 = $this.$leftBound;
    var$5 = $this.$rightBound;
    var$6 = jur_Pattern_groupCount($pat);
    var$7 = jur_Pattern_compCount($pat);
    jur_MatchResultImpl__init_(var$3, $cs, var$4, var$5, var$6, var$7, jur_Pattern_consCount($pat), jur_Pattern_namedGroups($pat));
    $this.$matchResult = var$3;
    $this.$matchResult.$useAnchoringBounds(1);
},
jur_Matcher__init_0 = (var_0, var_1) => {
    let var_2 = new jur_Matcher();
    jur_Matcher__init_(var_2, var_0, var_1);
    return var_2;
},
jur_DotAllSet = $rt_classWithoutFields(jur_JointSet),
jur_DotAllSet__init_ = $this => {
    jur_JointSet__init_($this);
},
jur_DotAllSet__init_0 = () => {
    let var_0 = new jur_DotAllSet();
    jur_DotAllSet__init_(var_0);
    return var_0;
},
jur_DotAllSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, var$5, $high, var$7, $low;
    $strLength = $matchResult.$getRightBound();
    var$5 = $stringIndex + 1 | 0;
    if (var$5 <= $strLength) {
        $high = $testString.$charAt($stringIndex);
        if (jl_Character_isHighSurrogate($high)) {
            var$7 = $stringIndex + 2 | 0;
            if (var$7 <= $strLength) {
                $low = $testString.$charAt(var$5);
                if (jl_Character_isSurrogatePair($high, $low))
                    return $this.$next2.$matches(var$7, $testString, $matchResult);
            }
        }
        return $this.$next2.$matches(var$5, $testString, $matchResult);
    }
    $matchResult.$hitEnd = 1;
    return (-1);
},
jur_DotAllSet_setNext = ($this, $next) => {
    $this.$next2 = $next;
},
jur_DotAllSet_getType = $this => {
    return (-2147483602);
},
jur_DotAllSet_hasConsumed = ($this, $matchResult) => {
    return 1;
};
function jur_AbstractCharClass$LazyJavaLowerCase$1() {
    jur_AbstractCharClass.call(this);
    this.$this$038 = null;
}
let jur_AbstractCharClass$LazyJavaLowerCase$1__init_ = ($this, $this$0) => {
    $this.$this$038 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaLowerCase$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaLowerCase$1();
    jur_AbstractCharClass$LazyJavaLowerCase$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaLowerCase$1_contains = ($this, $ch) => {
    return jl_Character_isLowerCase($ch);
},
jur_UCISupplRangeSet = $rt_classWithoutFields(jur_SupplRangeSet),
jur_UCISupplRangeSet__init_0 = ($this, $cc) => {
    jur_SupplRangeSet__init_($this, $cc);
},
jur_UCISupplRangeSet__init_ = var_0 => {
    let var_1 = new jur_UCISupplRangeSet();
    jur_UCISupplRangeSet__init_0(var_1, var_0);
    return var_1;
},
jur_UCISupplRangeSet_contains = ($this, $ch) => {
    return $this.$chars.$contains(jl_Character_toLowerCase0(jl_Character_toUpperCase0($ch)));
},
jur_AbstractCharClass$LazyJavaUpperCase = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaUpperCase__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaUpperCase__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaUpperCase();
    jur_AbstractCharClass$LazyJavaUpperCase__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaUpperCase_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaUpperCase$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
};
function jur_HangulDecomposedCharSet() {
    let a = this; jur_JointSet.call(a);
    a.$decomposedChar = null;
    a.$decomposedCharUTF16 = null;
    a.$decomposedCharLength = 0;
}
let jur_HangulDecomposedCharSet__init_ = ($this, $decomposedChar, $decomposedCharLength) => {
    jur_JointSet__init_($this);
    $this.$decomposedChar = $decomposedChar;
    $this.$decomposedCharLength = $decomposedCharLength;
},
jur_HangulDecomposedCharSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_HangulDecomposedCharSet();
    jur_HangulDecomposedCharSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_HangulDecomposedCharSet_setNext = ($this, $next) => {
    $this.$next2 = $next;
},
jur_HangulDecomposedCharSet_getDecomposedChar = $this => {
    if ($this.$decomposedCharUTF16 === null)
        $this.$decomposedCharUTF16 = jl_String__init_0($this.$decomposedChar);
    return $this.$decomposedCharUTF16;
},
jur_HangulDecomposedCharSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $rightBound, $syllIndex, $decompSyllable, $vIndex, $tIndex, var$9, $curSymb, $decompCurSymb, var$12, $lIndex, var$14, var$15, var$16, $i;
    $rightBound = $matchResult.$getRightBound();
    $syllIndex = 0;
    $decompSyllable = $rt_createIntArray(3);
    $vIndex = (-1);
    $tIndex = (-1);
    if ($strIndex < $rightBound) {
        var$9 = $strIndex + 1 | 0;
        $curSymb = $testString.$charAt($strIndex);
        $decompCurSymb = jur_Lexer_getHangulDecomposition($curSymb);
        if ($decompCurSymb === null) {
            var$12 = $decompSyllable.data;
            var$12[$syllIndex] = $curSymb;
            $lIndex = $curSymb - 4352 | 0;
            if ($lIndex >= 0 && $lIndex < 19) {
                if (var$9 < $rightBound) {
                    $curSymb = $testString.$charAt(var$9);
                    $vIndex = $curSymb - 4449 | 0;
                }
                if ($vIndex >= 0 && $vIndex < 21) {
                    var$14 = var$9 + 1 | 0;
                    var$12[1] = $curSymb;
                    if (var$14 < $rightBound) {
                        $curSymb = $testString.$charAt(var$14);
                        $tIndex = $curSymb - 4519 | 0;
                    }
                    if ($tIndex >= 0 && $tIndex < 28) {
                        var$15 = var$14 + 1 | 0;
                        var$12[2] = $curSymb;
                        var$15 = !($this.$decomposedCharLength == 3 && var$12[0] == $this.$decomposedChar.data[0] && var$12[1] == $this.$decomposedChar.data[1] && var$12[2] == $this.$decomposedChar.data[2]) ? (-1) : $this.$next2.$matches(var$15, $testString, $matchResult);
                        return var$15;
                    }
                    var$15 = !($this.$decomposedCharLength == 2 && var$12[0] == $this.$decomposedChar.data[0] && var$12[1] == $this.$decomposedChar.data[1]) ? (-1) : $this.$next2.$matches(var$14, $testString, $matchResult);
                    return var$15;
                }
                return (-1);
            }
            return (-1);
        }
        var$16 = $decompCurSymb.data;
        $i = 0;
        if (var$16.length == $this.$decomposedCharLength) {
            while (true) {
                if ($i >= $this.$decomposedCharLength)
                    return $this.$next2.$matches(var$9, $testString, $matchResult);
                if (var$16[$i] != $this.$decomposedChar.data[$i])
                    break;
                $i = $i + 1 | 0;
            }
            return (-1);
        }
        return (-1);
    }
    return (-1);
},
jur_HangulDecomposedCharSet_first = ($this, $set) => {
    let var$2, var$3;
    a: {
        b: {
            if ($set instanceof jur_HangulDecomposedCharSet) {
                var$2 = $set;
                if (!jl_String_equals(jur_HangulDecomposedCharSet_getDecomposedChar(var$2), jur_HangulDecomposedCharSet_getDecomposedChar($this)))
                    break b;
            }
            var$3 = 1;
            break a;
        }
        var$3 = 0;
    }
    return var$3;
},
jur_HangulDecomposedCharSet_hasConsumed = ($this, $matchResult) => {
    return 1;
},
jur_AbstractCharClass$LazyPunct = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyPunct__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyPunct__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyPunct();
    jur_AbstractCharClass$LazyPunct__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyPunct_computeValue = $this => {
    return (((jur_CharClass__init_()).$add0(33, 64)).$add0(91, 96)).$add0(123, 126);
},
cggdc_LinkElement = $rt_classWithoutFields(cggdc_Element),
cggdc_LinkElement__init_ = ($this, $element) => {
    cggdc_Element__init_($this, $element);
},
cggdc_LinkElement__init_0 = var_0 => {
    let var_1 = new cggdc_LinkElement();
    cggdc_LinkElement__init_(var_1, var_0);
    return var_1;
},
cgguc_Event$NativePreviewHandler = $rt_classWithoutFields(0),
cggdc_StyleElement = $rt_classWithoutFields(cggdc_Element),
cggdc_StyleElement__init_ = ($this, $element) => {
    cggdc_Element__init_($this, $element);
},
cggdc_StyleElement__init_0 = var_0 => {
    let var_1 = new cggdc_StyleElement();
    cggdc_StyleElement__init_(var_1, var_0);
    return var_1;
},
cggdc_CanvasElement = $rt_classWithoutFields(cggdc_Element),
cggdc_CanvasElement__init_ = ($this, $element) => {
    cggdc_Element__init_($this, $element);
},
cggdc_CanvasElement__init_0 = var_0 => {
    let var_1 = new cggdc_CanvasElement();
    cggdc_CanvasElement__init_(var_1, var_0);
    return var_1;
};
function ju_LinkedHashMapKeySet() {
    let a = this; ju_AbstractSet.call(a);
    a.$base = null;
    a.$reversed = 0;
}
let ju_LinkedHashMapKeySet__init_ = ($this, $base, $reversed) => {
    ju_AbstractSet__init_($this);
    $this.$base = $base;
    $this.$reversed = $reversed;
},
ju_LinkedHashMapKeySet__init_0 = (var_0, var_1) => {
    let var_2 = new ju_LinkedHashMapKeySet();
    ju_LinkedHashMapKeySet__init_(var_2, var_0, var_1);
    return var_2;
},
ju_LinkedHashMapKeySet_size = $this => {
    return $this.$base.$elementCount;
},
ju_LinkedHashMapKeySet_iterator = $this => {
    return ju_LinkedHashMapIterator$KeyIterator__init_0($this.$base, $this.$reversed);
};
function jur_WordBoundary() {
    jur_AbstractSet.call(this);
    this.$positive = 0;
}
let jur_WordBoundary__init_0 = ($this, $positive) => {
    jur_AbstractSet__init_($this);
    $this.$positive = $positive;
},
jur_WordBoundary__init_ = var_0 => {
    let var_1 = new jur_WordBoundary();
    jur_WordBoundary__init_0(var_1, var_0);
    return var_1;
},
jur_WordBoundary_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $ch1, $ch2, $leftBound, $left, $right;
    $ch1 = $stringIndex < $matchResult.$getRightBound() ? $testString.$charAt($stringIndex) : 32;
    $ch2 = !$stringIndex ? 32 : $testString.$charAt($stringIndex - 1 | 0);
    $leftBound = !$matchResult.$hasTransparentBounds() ? $matchResult.$getLeftBound() : 0;
    $left = !($ch1 != 32 && !jur_WordBoundary_isSpace($this, $ch1, $stringIndex, $leftBound, $testString)) ? 1 : 0;
    $right = !($ch2 != 32 && !jur_WordBoundary_isSpace($this, $ch2, $stringIndex - 1 | 0, $leftBound, $testString)) ? 1 : 0;
    return $left ^ $right ^ $this.$positive ? (-1) : $this.$next2.$matches($stringIndex, $testString, $matchResult);
},
jur_WordBoundary_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_WordBoundary_isSpace = ($this, $ch, $index, $leftBound, $testString) => {
    let var$5;
    if (!jl_Character_isLetterOrDigit0($ch) && $ch != 95) {
        a: {
            if (jl_Character_getType0($ch) == 6)
                while (true) {
                    $index = $index + (-1) | 0;
                    if ($index < $leftBound)
                        break a;
                    var$5 = $testString.$charAt($index);
                    if (jl_Character_isLetterOrDigit0(var$5))
                        return 0;
                    if (jl_Character_getType0(var$5) != 6)
                        return 1;
                }
        }
        return 1;
    }
    return 0;
},
jur_AbstractCharClass$LazySpace = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazySpace__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazySpace__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazySpace();
    jur_AbstractCharClass$LazySpace__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazySpace_computeValue = $this => {
    return ((jur_CharClass__init_()).$add0(9, 13)).$add(32);
};
function ju_HashMap$1() {
    ju_AbstractSet.call(this);
    this.$this$01 = null;
}
let ju_HashMap$1__init_ = ($this, $this$0) => {
    $this.$this$01 = $this$0;
    ju_AbstractSet__init_($this);
},
ju_HashMap$1__init_0 = var_0 => {
    let var_1 = new ju_HashMap$1();
    ju_HashMap$1__init_(var_1, var_0);
    return var_1;
},
ju_HashMap$1_size = $this => {
    return $this.$this$01.$size();
},
ju_HashMap$1_iterator = $this => {
    return ju_HashMap$KeyIterator__init_0($this.$this$01);
};
function ju_HashMap$2() {
    ju_AbstractCollection.call(this);
    this.$this$08 = null;
}
let ju_HashMap$2__init_ = ($this, $this$0) => {
    $this.$this$08 = $this$0;
    ju_AbstractCollection__init_($this);
},
ju_HashMap$2__init_0 = var_0 => {
    let var_1 = new ju_HashMap$2();
    ju_HashMap$2__init_(var_1, var_0);
    return var_1;
},
ju_HashMap$2_iterator = $this => {
    return ju_HashMap$ValueIterator__init_0($this.$this$08);
};
function eycdaca_AceAnnotationType() {
    jl_Enum.call(this);
    this.$name1 = null;
}
let eycdaca_AceAnnotationType_ERROR = null,
eycdaca_AceAnnotationType_INFORMATION = null,
eycdaca_AceAnnotationType_WARNING = null,
eycdaca_AceAnnotationType_$VALUES = null,
eycdaca_AceAnnotationType_$callClinit = () => {
    eycdaca_AceAnnotationType_$callClinit = $rt_eraseClinit(eycdaca_AceAnnotationType);
    eycdaca_AceAnnotationType__clinit_();
},
eycdaca_AceAnnotationType__init_0 = ($this, var$1, var$2, $name) => {
    eycdaca_AceAnnotationType_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
    $this.$name1 = $name;
},
eycdaca_AceAnnotationType__init_ = (var_0, var_1, var_2) => {
    let var_3 = new eycdaca_AceAnnotationType();
    eycdaca_AceAnnotationType__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
eycdaca_AceAnnotationType_getName = $this => {
    return $this.$name1;
},
eycdaca_AceAnnotationType_$values = () => {
    let var$1, var$2;
    eycdaca_AceAnnotationType_$callClinit();
    var$1 = $rt_createArray(eycdaca_AceAnnotationType, 3);
    var$2 = var$1.data;
    var$2[0] = eycdaca_AceAnnotationType_ERROR;
    var$2[1] = eycdaca_AceAnnotationType_INFORMATION;
    var$2[2] = eycdaca_AceAnnotationType_WARNING;
    return var$1;
},
eycdaca_AceAnnotationType__clinit_ = () => {
    eycdaca_AceAnnotationType_ERROR = eycdaca_AceAnnotationType__init_($rt_s(270), 0, $rt_s(271));
    eycdaca_AceAnnotationType_INFORMATION = eycdaca_AceAnnotationType__init_($rt_s(272), 1, $rt_s(273));
    eycdaca_AceAnnotationType_WARNING = eycdaca_AceAnnotationType__init_($rt_s(274), 2, $rt_s(275));
    eycdaca_AceAnnotationType_$VALUES = eycdaca_AceAnnotationType_$values();
};
function cgguc_BrowserEventBridge$lambda$setListener$2$lambda$_20_0() {
    let a = this; jl_Object.call(a);
    a.$_07 = null;
    a.$_12 = null;
}
let cgguc_BrowserEventBridge$lambda$setListener$2$lambda$_20_0__init_ = (var$0, var$1, var$2) => {
    jl_Object__init_(var$0);
    var$0.$_07 = var$1;
    var$0.$_12 = var$2;
},
cgguc_BrowserEventBridge$lambda$setListener$2$lambda$_20_0__init_0 = (var_0, var_1) => {
    let var_2 = new cgguc_BrowserEventBridge$lambda$setListener$2$lambda$_20_0();
    cgguc_BrowserEventBridge$lambda$setListener$2$lambda$_20_0__init_(var_2, var_0, var_1);
    return var_2;
},
cgguc_BrowserEventBridge$lambda$setListener$2$lambda$_20_0_run = var$0 => {
    cgguc_BrowserEventBridge_lambda$setListener$1(var$0.$_07, var$0.$_12);
},
cggdc_InputElement = $rt_classWithoutFields(cggdc_Element),
cggdc_InputElement__init_ = ($this, $element) => {
    cggdc_Element__init_($this, $element);
},
cggdc_InputElement__init_0 = var_0 => {
    let var_1 = new cggdc_InputElement();
    cggdc_InputElement__init_(var_1, var_0);
    return var_1;
},
eycdaca_AceCommandDescription$MultiSelectAction = $rt_classWithoutFields(jl_Enum),
eycdaca_AceCommandDescription$MultiSelectAction_forEach = null,
eycdaca_AceCommandDescription$MultiSelectAction_forEachLine = null,
eycdaca_AceCommandDescription$MultiSelectAction_single = null,
eycdaca_AceCommandDescription$MultiSelectAction_$VALUES = null,
eycdaca_AceCommandDescription$MultiSelectAction_$callClinit = () => {
    eycdaca_AceCommandDescription$MultiSelectAction_$callClinit = $rt_eraseClinit(eycdaca_AceCommandDescription$MultiSelectAction);
    eycdaca_AceCommandDescription$MultiSelectAction__clinit_();
},
eycdaca_AceCommandDescription$MultiSelectAction_values = () => {
    eycdaca_AceCommandDescription$MultiSelectAction_$callClinit();
    return eycdaca_AceCommandDescription$MultiSelectAction_$VALUES.$clone0();
},
eycdaca_AceCommandDescription$MultiSelectAction__init_0 = ($this, var$1, var$2) => {
    eycdaca_AceCommandDescription$MultiSelectAction_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
},
eycdaca_AceCommandDescription$MultiSelectAction__init_ = (var_0, var_1) => {
    let var_2 = new eycdaca_AceCommandDescription$MultiSelectAction();
    eycdaca_AceCommandDescription$MultiSelectAction__init_0(var_2, var_0, var_1);
    return var_2;
},
eycdaca_AceCommandDescription$MultiSelectAction_fromString = $value => {
    let var$2, var$3, var$4, $ret;
    eycdaca_AceCommandDescription$MultiSelectAction_$callClinit();
    var$2 = (eycdaca_AceCommandDescription$MultiSelectAction_values()).data;
    var$3 = var$2.length;
    var$4 = 0;
    while (true) {
        if (var$4 >= var$3)
            return null;
        $ret = var$2[var$4];
        if (jl_String_equals(jl_Enum_name($ret), $value))
            break;
        var$4 = var$4 + 1 | 0;
    }
    return $ret;
},
eycdaca_AceCommandDescription$MultiSelectAction_$values = () => {
    let var$1, var$2;
    eycdaca_AceCommandDescription$MultiSelectAction_$callClinit();
    var$1 = $rt_createArray(eycdaca_AceCommandDescription$MultiSelectAction, 3);
    var$2 = var$1.data;
    var$2[0] = eycdaca_AceCommandDescription$MultiSelectAction_forEach;
    var$2[1] = eycdaca_AceCommandDescription$MultiSelectAction_forEachLine;
    var$2[2] = eycdaca_AceCommandDescription$MultiSelectAction_single;
    return var$1;
},
eycdaca_AceCommandDescription$MultiSelectAction__clinit_ = () => {
    eycdaca_AceCommandDescription$MultiSelectAction_forEach = eycdaca_AceCommandDescription$MultiSelectAction__init_($rt_s(276), 0);
    eycdaca_AceCommandDescription$MultiSelectAction_forEachLine = eycdaca_AceCommandDescription$MultiSelectAction__init_($rt_s(277), 1);
    eycdaca_AceCommandDescription$MultiSelectAction_single = eycdaca_AceCommandDescription$MultiSelectAction__init_($rt_s(278), 2);
    eycdaca_AceCommandDescription$MultiSelectAction_$VALUES = eycdaca_AceCommandDescription$MultiSelectAction_$values();
};
function eycdaca_AceCompletionSnippet() {
    let a = this; eycdaca_AceCompletion.call(a);
    a.$caption0 = null;
    a.$snippet = null;
    a.$meta0 = null;
    a.$score0 = 0;
    a.$tooltip0 = null;
}
let eycdaca_AceCompletionSnippet__init_ = ($this, $caption, $snippet, $score, $meta, $htmlTooltip) => {
    eycdaca_AceCompletion__init_($this);
    $this.$caption0 = $caption;
    $this.$score0 = $score;
    $this.$meta0 = $meta;
    $this.$snippet = $snippet;
    $this.$tooltip0 = $htmlTooltip;
},
eycdaca_AceCompletionSnippet__init_0 = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new eycdaca_AceCompletionSnippet();
    eycdaca_AceCompletionSnippet__init_(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
eycdaca_AceCompletionSnippet_toJsObject = $this => {
    return cggcc_JavaScriptObject_of(eycdaca_AceCompletionSnippet_toJsObjectNative$js_body$_3($rt_ustr($this.$caption0), $rt_ustr($this.$snippet), $this.$score0, $rt_ustr($this.$meta0), $rt_ustr($this.$tooltip0)));
},
eycdaca_AceCompletionSnippet_toJsObjectNative$js_body$_3 = (var$1, var$2, var$3, var$4, var$5) => {
    return { caption: var$1, snippet: var$2, score: var$3, meta: var$4, aceGwtHtmlTooltip: var$5 };
},
jur_IntHash = $rt_classWithoutFields(),
jur_ReluctantAltQuantifierSet = $rt_classWithoutFields(jur_AltQuantifierSet),
jur_ReluctantAltQuantifierSet__init_ = ($this, var$1, var$2, var$3) => {
    jur_AltQuantifierSet__init_($this, var$1, var$2, var$3);
},
jur_ReluctantAltQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_ReluctantAltQuantifierSet();
    jur_ReluctantAltQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_ReluctantAltQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $shift;
    $shift = $this.$next2.$matches($stringIndex, $testString, $matchResult);
    if ($shift < 0)
        return $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    return $shift;
},
jl_NegativeArraySizeException = $rt_classWithoutFields(jl_RuntimeException),
jl_NegativeArraySizeException__init_ = $this => {
    jl_RuntimeException__init_($this);
},
jl_NegativeArraySizeException__init_0 = () => {
    let var_0 = new jl_NegativeArraySizeException();
    jl_NegativeArraySizeException__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaWhitespace = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaWhitespace__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaWhitespace__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaWhitespace();
    jur_AbstractCharClass$LazyJavaWhitespace__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaWhitespace_computeValue = $this => {
    return jur_AbstractCharClass$LazyJavaWhitespace$1__init_0($this);
},
jl_UnsupportedOperationException = $rt_classWithoutFields(jl_RuntimeException),
jl_UnsupportedOperationException__init_ = $this => {
    jl_RuntimeException__init_($this);
},
jl_UnsupportedOperationException__init_0 = () => {
    let var_0 = new jl_UnsupportedOperationException();
    jl_UnsupportedOperationException__init_(var_0);
    return var_0;
},
cggdc_TableCellElement = $rt_classWithoutFields(cggdc_Element),
cggdc_TableCellElement__init_ = ($this, $element) => {
    cggdc_Element__init_($this, $element);
},
cggdc_TableCellElement__init_0 = var_0 => {
    let var_1 = new cggdc_TableCellElement();
    cggdc_TableCellElement__init_(var_1, var_0);
    return var_1;
};
function eycdaca_AceSelection$1() {
    jl_Object.call(this);
    this.$this$02 = null;
}
let eycdaca_AceSelection$1__init_ = ($this, $this$0) => {
    $this.$this$02 = $this$0;
    jl_Object__init_($this);
},
eycdaca_AceSelection$1__init_0 = var_0 => {
    let var_1 = new eycdaca_AceSelection$1();
    eycdaca_AceSelection$1__init_(var_1, var_0);
    return var_1;
},
eycdaca_AceSelection$1_onChangeSelection = ($this, $ignore) => {
    let var$2, $lst;
    var$2 = (ju_ArrayList__init_1($this.$this$02.$subListeners)).$iterator();
    while (var$2.$hasNext()) {
        $lst = var$2.$next();
        $lst.$onChangeSelection($this.$this$02);
    }
},
jl_NumberFormatException = $rt_classWithoutFields(jl_IllegalArgumentException),
jl_NumberFormatException__init_1 = $this => {
    jl_IllegalArgumentException__init_1($this);
},
jl_NumberFormatException__init_2 = () => {
    let var_0 = new jl_NumberFormatException();
    jl_NumberFormatException__init_1(var_0);
    return var_0;
},
jl_NumberFormatException__init_ = ($this, $message) => {
    jl_IllegalArgumentException__init_2($this, $message);
},
jl_NumberFormatException__init_0 = var_0 => {
    let var_1 = new jl_NumberFormatException();
    jl_NumberFormatException__init_(var_1, var_0);
    return var_1;
},
eycdaca_AceCompletionProvider = $rt_classWithoutFields(0),
cggdc_TableRowElement = $rt_classWithoutFields(cggdc_Element),
cggdc_TableRowElement__init_ = ($this, $element) => {
    cggdc_Element__init_($this, $element);
},
cggdc_TableRowElement__init_0 = var_0 => {
    let var_1 = new cggdc_TableRowElement();
    cggdc_TableRowElement__init_(var_1, var_0);
    return var_1;
};
function eycdaca_AceSelection() {
    let a = this; jl_Object.call(a);
    a.$selection = null;
    a.$rootListener = null;
    a.$subListeners = null;
}
let eycdaca_AceSelection__init_ = ($this, $selection) => {
    jl_Object__init_($this);
    $this.$subListeners = ju_ArrayList__init_();
    $this.$selection = $selection;
    $this.$rootListener = eycdaca_AceSelection$1__init_0($this);
    ($selection.$unwrap0()).on('changeSelection', otji_JS_function(otji_JSWrapper_unwrap(eycdaca_AceSelection$_init_$lambda$_0_0__init_0($this)), "changed"));
},
eycdaca_AceSelection__init_0 = var_0 => {
    let var_1 = new eycdaca_AceSelection();
    eycdaca_AceSelection__init_(var_1, var_0);
    return var_1;
},
eycdaca_AceSelection_addSelectionListener = ($this, $listener) => {
    $this.$subListeners.$add2($listener);
},
eycdaca_AceSelection_isEmpty = $this => {
    return ($this.$selection.$unwrap0()).isEmpty() ? 1 : 0;
},
eycdaca_AceSelection_isMultiLine = $this => {
    return ($this.$selection.$unwrap0()).isMultiLine() ? 1 : 0;
},
eycdaca_AceSelection_getSelectionLead = $this => {
    return eycdaca_AceNative_position(($this.$selection.$unwrap0())["getSelectionLead"]());
},
eycdaca_AceSelection_clearSelection = $this => {
    ($this.$selection.$unwrap0()).clearSelection();
},
eycdaca_AceSelection_select = ($this, $fromRow, $fromColumn, $toRow, $toColumn) => {
    eycdaca_AceSelection_selectBridge6$js_body$_19($this.$selection.$unwrap0(), $fromRow, $fromColumn, $toRow, $toColumn);
},
eycdaca_AceSelection_lambda$new$0 = $this => {
    $this.$rootListener.$onChangeSelection($this);
},
eycdaca_AceSelection_selectBridge6$js_body$_19 = (var$1, var$2, var$3, var$4, var$5) => {
    var$1.setSelectionAnchor(var$2, var$3);
    var$1.selectTo(var$4, var$5);
},
jur_IntArrHash = $rt_classWithoutFields();
function eycdaca_AceMarkerType() {
    jl_Enum.call(this);
    this.$name5 = null;
}
let eycdaca_AceMarkerType_FULL_LINE = null,
eycdaca_AceMarkerType_SCREEN_LINE = null,
eycdaca_AceMarkerType_TEXT = null,
eycdaca_AceMarkerType_$VALUES = null,
eycdaca_AceMarkerType_$callClinit = () => {
    eycdaca_AceMarkerType_$callClinit = $rt_eraseClinit(eycdaca_AceMarkerType);
    eycdaca_AceMarkerType__clinit_();
},
eycdaca_AceMarkerType__init_0 = ($this, var$1, var$2, var$3) => {
    eycdaca_AceMarkerType_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
    $this.$name5 = var$3;
},
eycdaca_AceMarkerType__init_ = (var_0, var_1, var_2) => {
    let var_3 = new eycdaca_AceMarkerType();
    eycdaca_AceMarkerType__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
eycdaca_AceMarkerType_getName = $this => {
    return $this.$name5;
},
eycdaca_AceMarkerType_$values = () => {
    let var$1, var$2;
    eycdaca_AceMarkerType_$callClinit();
    var$1 = $rt_createArray(eycdaca_AceMarkerType, 3);
    var$2 = var$1.data;
    var$2[0] = eycdaca_AceMarkerType_FULL_LINE;
    var$2[1] = eycdaca_AceMarkerType_SCREEN_LINE;
    var$2[2] = eycdaca_AceMarkerType_TEXT;
    return var$1;
},
eycdaca_AceMarkerType__clinit_ = () => {
    eycdaca_AceMarkerType_FULL_LINE = eycdaca_AceMarkerType__init_($rt_s(279), 0, $rt_s(280));
    eycdaca_AceMarkerType_SCREEN_LINE = eycdaca_AceMarkerType__init_($rt_s(281), 1, $rt_s(282));
    eycdaca_AceMarkerType_TEXT = eycdaca_AceMarkerType__init_($rt_s(283), 2, $rt_s(284));
    eycdaca_AceMarkerType_$VALUES = eycdaca_AceMarkerType_$values();
},
jur_AbstractCharClass$LazyJavaMirrored = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaMirrored__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaMirrored__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaMirrored();
    jur_AbstractCharClass$LazyJavaMirrored__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaMirrored_computeValue = $this => {
    return jur_AbstractCharClass$LazyJavaMirrored$1__init_0($this);
},
jur_AbstractCharClass$LazyJavaISOControl = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaISOControl__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaISOControl__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaISOControl();
    jur_AbstractCharClass$LazyJavaISOControl__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaISOControl_computeValue = $this => {
    return jur_AbstractCharClass$LazyJavaISOControl$1__init_0($this);
},
jl_IllegalStateException = $rt_classWithoutFields(jl_RuntimeException),
jl_IllegalStateException__init_2 = $this => {
    jl_RuntimeException__init_($this);
},
jl_IllegalStateException__init_1 = () => {
    let var_0 = new jl_IllegalStateException();
    jl_IllegalStateException__init_2(var_0);
    return var_0;
},
jl_IllegalStateException__init_ = ($this, $message) => {
    jl_RuntimeException__init_0($this, $message);
},
jl_IllegalStateException__init_0 = var_0 => {
    let var_1 = new jl_IllegalStateException();
    jl_IllegalStateException__init_(var_1, var_0);
    return var_1;
};
function jur_HighSurrogateCharSet() {
    jur_JointSet.call(this);
    this.$high = 0;
}
let jur_HighSurrogateCharSet__init_ = ($this, $high) => {
    jur_JointSet__init_($this);
    $this.$high = $high;
},
jur_HighSurrogateCharSet__init_0 = var_0 => {
    let var_1 = new jur_HighSurrogateCharSet();
    jur_HighSurrogateCharSet__init_(var_1, var_0);
    return var_1;
},
jur_HighSurrogateCharSet_setNext = ($this, $next) => {
    $this.$next2 = $next;
},
jur_HighSurrogateCharSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, var$5, var$6, $high, $low;
    $strLength = $matchResult.$getRightBound();
    var$5 = $stringIndex + 1 | 0;
    var$6 = $rt_compare(var$5, $strLength);
    if (var$6 <= 0) {
        $high = $testString.$charAt($stringIndex);
        if (var$6 < 0) {
            $low = $testString.$charAt(var$5);
            if (jl_Character_isLowSurrogate($low))
                return (-1);
        }
        if ($this.$high == $high)
            return $this.$next2.$matches(var$5, $testString, $matchResult);
        return (-1);
    }
    $matchResult.$hitEnd = 1;
    return (-1);
},
jur_HighSurrogateCharSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $testStr, $strLength, var$6;
    if ($testString instanceof jl_String) {
        $testStr = $testString;
        $strLength = $matchResult.$getRightBound();
        while (true) {
            if ($strIndex >= $strLength)
                return (-1);
            var$6 = jl_String_indexOf($testStr, $this.$high, $strIndex);
            if (var$6 < 0)
                return (-1);
            $strIndex = var$6 + 1 | 0;
            if ($strIndex < $strLength && jl_Character_isLowSurrogate(jl_String_charAt($testStr, $strIndex))) {
                $strIndex = var$6 + 2 | 0;
                continue;
            }
            if ($this.$next2.$matches($strIndex, $testString, $matchResult) >= 0)
                break;
        }
        return var$6;
    }
    return jur_AbstractSet_find($this, $strIndex, $testString, $matchResult);
},
jur_HighSurrogateCharSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let $testStr, $strLength, var$7, var$8;
    if ($testString instanceof jl_String) {
        $testStr = $testString;
        $strLength = $matchResult.$getRightBound();
        a: {
            while (true) {
                if ($lastIndex < $strIndex)
                    return (-1);
                var$7 = jl_String_lastIndexOf($testStr, $this.$high, $lastIndex);
                if (var$7 < 0)
                    break a;
                if (var$7 < $strIndex)
                    break a;
                var$8 = var$7 + 1 | 0;
                if (var$8 < $strLength && jl_Character_isLowSurrogate(jl_String_charAt($testStr, var$8))) {
                    $lastIndex = var$7 + (-1) | 0;
                    continue;
                }
                if ($this.$next2.$matches(var$8, $testString, $matchResult) >= 0)
                    break;
                $lastIndex = var$7 + (-1) | 0;
            }
            return var$7;
        }
        return (-1);
    }
    return jur_AbstractSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult);
},
jur_HighSurrogateCharSet_first = ($this, $set) => {
    if (!($set instanceof jur_CharSet)) {
        if (!($set instanceof jur_RangeSet)) {
            if (!($set instanceof jur_SupplRangeSet)) {
                if (!($set instanceof jur_SupplCharSet)) {
                    if (!($set instanceof jur_LowSurrogateCharSet)) {
                        if ($set instanceof jur_HighSurrogateCharSet)
                            return $set.$high != $this.$high ? 0 : 1;
                        return 1;
                    }
                    return 0;
                }
                return 0;
            }
            return 0;
        }
        return 0;
    }
    return 0;
},
jur_HighSurrogateCharSet_hasConsumed = ($this, $matchResult) => {
    return 1;
},
cgguc_Event = $rt_classWithoutFields(cggdc_NativeEvent),
cgguc_Event__init_ = ($this, $event) => {
    cggdc_NativeEvent__init_($this, $event);
},
cgguc_Event__init_0 = var_0 => {
    let var_1 = new cgguc_Event();
    cgguc_Event__init_(var_1, var_0);
    return var_1;
},
jur_ReluctantCompositeQuantifierSet = $rt_classWithoutFields(jur_CompositeQuantifierSet),
jur_ReluctantCompositeQuantifierSet__init_ = ($this, $quant, $innerSet, $next, $type) => {
    jur_CompositeQuantifierSet__init_($this, $quant, $innerSet, $next, $type);
},
jur_ReluctantCompositeQuantifierSet__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_ReluctantCompositeQuantifierSet();
    jur_ReluctantCompositeQuantifierSet__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_ReluctantCompositeQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $min, $max, $i, var$7, var$8;
    $min = $this.$quantifier.$min0();
    $max = $this.$quantifier.$max0();
    $i = 0;
    while (true) {
        if ($i >= $min) {
            a: {
                while (true) {
                    var$7 = $this.$next2.$matches($stringIndex, $testString, $matchResult);
                    if (var$7 >= 0)
                        break;
                    if (($stringIndex + $this.$leaf.$charCount() | 0) <= $matchResult.$getRightBound()) {
                        var$7 = $this.$leaf.$accepts($stringIndex, $testString);
                        $stringIndex = $stringIndex + var$7 | 0;
                        $i = $i + 1 | 0;
                    }
                    if (var$7 < 1)
                        break a;
                    if ($i > $max)
                        break a;
                }
                return var$7;
            }
            return (-1);
        }
        if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$getRightBound()) {
            $matchResult.$hitEnd = 1;
            return (-1);
        }
        var$8 = $this.$leaf.$accepts($stringIndex, $testString);
        if (var$8 < 1)
            break;
        $stringIndex = $stringIndex + var$8 | 0;
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_SOLSet = $rt_classWithoutFields(jur_AbstractSet),
jur_SOLSet__init_ = $this => {
    jur_AbstractSet__init_($this);
},
jur_SOLSet__init_0 = () => {
    let var_0 = new jur_SOLSet();
    jur_SOLSet__init_(var_0);
    return var_0;
},
jur_SOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    if ($strIndex && !($matchResult.$hasAnchoringBounds() && $strIndex == $matchResult.$getLeftBound()))
        return (-1);
    return $this.$next2.$matches($strIndex, $testString, $matchResult);
},
jur_SOLSet_hasConsumed = ($this, $matchResult) => {
    return 0;
},
cggdc_HeadElement = $rt_classWithoutFields(cggdc_Element),
cggdc_HeadElement__init_ = ($this, $element) => {
    cggdc_Element__init_($this, $element);
},
cggdc_HeadElement__init_0 = var_0 => {
    let var_1 = new cggdc_HeadElement();
    cggdc_HeadElement__init_(var_1, var_0);
    return var_1;
};
function eycdaca_AceCommandDescription() {
    let a = this; jl_Object.call(a);
    a.$name4 = null;
    a.$exec0 = null;
    a.$bindKey = null;
    a.$readOnly = 0;
    a.$passEvent = 0;
    a.$scrollIntoView = null;
    a.$multiSelectAction = null;
    a.$aceCommandGroup = null;
}
let eycdaca_AceCommandDescription__init_ = ($this, $name, $exec) => {
    jl_Object__init_($this);
    $this.$bindKey = null;
    $this.$readOnly = 0;
    $this.$passEvent = 0;
    $this.$scrollIntoView = null;
    $this.$multiSelectAction = null;
    $this.$aceCommandGroup = null;
    $this.$name4 = $name;
    $this.$exec0 = $exec;
},
eycdaca_AceCommandDescription__init_0 = (var_0, var_1) => {
    let var_2 = new eycdaca_AceCommandDescription();
    eycdaca_AceCommandDescription__init_(var_2, var_0, var_1);
    return var_2;
},
eycdaca_AceCommandDescription_getBindKey = $this => {
    return $this.$bindKey;
},
eycdaca_AceCommandDescription_withBindKey = ($this, $bindKeyForAllPlatformsExceptMac, $bindKeyForMac) => {
    $this.$bindKey = eycdaca_AceCommandDescription$KeyBinding__init_1($bindKeyForAllPlatformsExceptMac, $bindKeyForMac);
    return $this;
},
eycdaca_AceCommandDescription_withReadOnly = ($this, $readOnly) => {
    $this.$readOnly = $readOnly;
    return $this;
},
eycdaca_AceCommandDescription_fromJavaScript = $obj => {
    let $v, $ret, var$4;
    if ($obj !== null) {
        $v = $obj.$unwrap0();
        $ret = new eycdaca_AceCommandDescription;
        var$4 = $rt_str(eycdaca_AceNative_string$js_body$_2($v, "name"));
        eycdaca_AceCommandDescription__init_($ret, var$4, eycdaca_AceCommandDescription_createJavaScriptWrapper(cggcc_JavaScriptObject_of(eycdaca_AceNative_get$js_body$_4($v, "exec"))));
        $ret.$bindKey = eycdaca_AceCommandDescription$KeyBinding_fromJavaScript(cggcc_JavaScriptObject_of(eycdaca_AceNative_get$js_body$_4($v, "bindKey")));
        $ret.$readOnly = !!$v["readOnly"] ? 1 : 0;
        $ret.$passEvent = !!$v["passEvent"] ? 1 : 0;
        $ret.$scrollIntoView = eycdaca_AceCommandDescription$ScrollIntoView_fromString($rt_str(eycdaca_AceNative_string$js_body$_2($v, "scrollIntoView")));
        $ret.$multiSelectAction = eycdaca_AceCommandDescription$MultiSelectAction_fromString($rt_str(eycdaca_AceNative_string$js_body$_2($v, "multiSelectAction")));
        $ret.$aceCommandGroup = $rt_str(eycdaca_AceNative_string$js_body$_2($v, "aceCommandGroup"));
        return $ret;
    }
    return null;
},
eycdaca_AceCommandDescription_createJavaScriptWrapper = $jsFunction => {
    return eycdaca_AceCommandDescription$1__init_0($jsFunction);
},
eycdaca_AceCommandDescription_invokeJavaScriptCommand = ($jsFunction, $javaWrapper) => {
    return cggcc_JavaScriptObject_of(eycdaca_AceCommandDescription_invoke$js_body$_22(eycdaca_AceNative_argument($jsFunction), $javaWrapper.$unwrapEditor()));
},
eycdaca_AceCommandDescription_toJavaScript = ($this, $editor) => {
    let var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9;
    var$2 = $this.$name4;
    var$3 = eycdaca_AceCommandDescription$toJavaScript$lambda$_21_0__init_0($this, $editor);
    var$4 = $this.$bindKey === null ? null : eycdaca_AceNative_argument(eycdaca_AceCommandDescription$KeyBinding_toJavaScript($this.$bindKey));
    var$5 = $this.$readOnly;
    var$6 = $this.$passEvent;
    var$7 = $this.$scrollIntoView === null ? null : jl_Enum_name($this.$scrollIntoView);
    var$8 = $this.$multiSelectAction === null ? null : jl_Enum_name($this.$multiSelectAction);
    var$9 = $this.$aceCommandGroup;
    var$2 = eycdaca_AceCommandDescription_make$js_body$_23($rt_ustr(var$2), otji_JS_function(otji_JSWrapper_unwrap(var$3), "run"), var$4, !!var$5, !!var$6, $rt_ustr(var$7), $rt_ustr(var$8), $rt_ustr(var$9));
    return cggcc_JavaScriptObject_of(var$2);
},
eycdaca_AceCommandDescription_lambda$toJavaScript$0 = ($this, $editor) => {
    $this.$exec0.$exec($editor);
},
eycdaca_AceCommandDescription_invoke$js_body$_22 = (var$1, var$2) => {
    var r = var$1(var$2);
    return r == null ? null : r;
},
eycdaca_AceCommandDescription_make$js_body$_23 = (var$1, var$2, var$3, var$4, var$5, var$6, var$7, var$8) => {
    var c = { name: var$1, exec: var$2, readOnly: var$4, passEvent: var$5 };
    if (var$3) c.bindKey = var$3;
    if (var$6) c.scrollIntoView = var$6;
    if (var$7) c.multiSelectAction = var$7;
    if (var$8) c.aceCommandGroup = var$8;
    return c;
},
iiad_EditorDemo$contracts$lambda$_6_0 = $rt_classWithoutFields(),
iiad_EditorDemo$contracts$lambda$_6_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
iiad_EditorDemo$contracts$lambda$_6_0__init_0 = () => {
    let var_0 = new iiad_EditorDemo$contracts$lambda$_6_0();
    iiad_EditorDemo$contracts$lambda$_6_0__init_(var_0);
    return var_0;
},
iiad_EditorDemo$contracts$lambda$_6_0_exec = (var$0, var$1) => {
    return iiad_EditorDemo_lambda$contracts$18(var$1);
},
cggdc_DivElement = $rt_classWithoutFields(cggdc_Element),
cggdc_DivElement__init_ = ($this, $element) => {
    cggdc_Element__init_($this, $element);
},
cggdc_DivElement__init_0 = var_0 => {
    let var_1 = new cggdc_DivElement();
    cggdc_DivElement__init_(var_1, var_0);
    return var_1;
},
cggdc_DivElement_as = $element => {
    return $element === null ? null : cggdc_DivElement__init_0($element.$unwrap1());
},
iiad_EditorDemo$contracts$lambda$_6_1 = $rt_classWithoutFields(),
iiad_EditorDemo$contracts$lambda$_6_1__init_ = var$0 => {
    jl_Object__init_(var$0);
},
iiad_EditorDemo$contracts$lambda$_6_1__init_0 = () => {
    let var_0 = new iiad_EditorDemo$contracts$lambda$_6_1();
    iiad_EditorDemo$contracts$lambda$_6_1__init_(var_0);
    return var_0;
},
iiad_EditorDemo$contracts$lambda$_6_1_getProposals = (var$0, var$1, var$2, var$3, var$4) => {
    iiad_EditorDemo_lambda$contracts$19(var$1, var$2, var$3, var$4);
},
jur_AbstractCharClass$LazyJavaIdentifierIgnorable = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaIdentifierIgnorable();
    jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaIdentifierIgnorable_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
},
cggdc_TableSectionElement = $rt_classWithoutFields(cggdc_Element),
cggdc_TableSectionElement__init_ = ($this, $element) => {
    cggdc_Element__init_($this, $element);
},
cggdc_TableSectionElement__init_0 = var_0 => {
    let var_1 = new cggdc_TableSectionElement();
    cggdc_TableSectionElement__init_(var_1, var_0);
    return var_1;
},
cggucu_RootPanel$hookWindowClose$lambda$_9_0 = $rt_classWithoutFields(),
cggucu_RootPanel$hookWindowClose$lambda$_9_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
cggucu_RootPanel$hookWindowClose$lambda$_9_0__init_0 = () => {
    let var_0 = new cggucu_RootPanel$hookWindowClose$lambda$_9_0();
    cggucu_RootPanel$hookWindowClose$lambda$_9_0__init_(var_0);
    return var_0;
},
cggucu_RootPanel$hookWindowClose$lambda$_9_0_run = var$0 => {
    cggucu_RootPanel_detachWidgets();
},
cggucu_RootPanel$hookWindowClose$lambda$_9_0_run$exported$0 = var$1 => {
    var$1.$run();
};
function jur_UMultiLineEOLSet() {
    jur_AbstractSet.call(this);
    this.$consCounter2 = 0;
}
let jur_UMultiLineEOLSet__init_ = ($this, $counter) => {
    jur_AbstractSet__init_($this);
    $this.$consCounter2 = $counter;
},
jur_UMultiLineEOLSet__init_0 = var_0 => {
    let var_1 = new jur_UMultiLineEOLSet();
    jur_UMultiLineEOLSet__init_(var_1, var_0);
    return var_1;
},
jur_UMultiLineEOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $strDif;
    $strDif = !$matchResult.$hasAnchoringBounds() ? $testString.$length() - $strIndex | 0 : $matchResult.$getRightBound() - $strIndex | 0;
    if ($strDif > 0) {
        if ($testString.$charAt($strIndex) == 10) {
            $matchResult.$setConsumed($this.$consCounter2, 1);
            return $this.$next2.$matches($strIndex + 1 | 0, $testString, $matchResult);
        }
        return (-1);
    }
    $matchResult.$setConsumed($this.$consCounter2, 0);
    return $this.$next2.$matches($strIndex, $testString, $matchResult);
},
jur_UMultiLineEOLSet_hasConsumed = ($this, $matchResult) => {
    let $res;
    $res = !$matchResult.$getConsumed($this.$consCounter2) ? 0 : 1;
    $matchResult.$setConsumed($this.$consCounter2, (-1));
    return $res;
},
ju_LinkedHashMapIterator$KeyIterator = $rt_classWithoutFields(ju_LinkedHashMapIterator),
ju_LinkedHashMapIterator$KeyIterator__init_ = ($this, $map, $reversed) => {
    ju_LinkedHashMapIterator__init_($this, $map, $reversed);
},
ju_LinkedHashMapIterator$KeyIterator__init_0 = (var_0, var_1) => {
    let var_2 = new ju_LinkedHashMapIterator$KeyIterator();
    ju_LinkedHashMapIterator$KeyIterator__init_(var_2, var_0, var_1);
    return var_2;
},
ju_LinkedHashMapIterator$KeyIterator_next = $this => {
    ju_LinkedHashMapIterator_makeNext($this);
    return $this.$currentEntry0.$key;
},
iiad_EditorDemo = $rt_classWithoutFields(),
iiad_EditorDemo_editor = null,
iiad_EditorDemo_changes = 0,
iiad_EditorDemo_dark = 0,
iiad_EditorDemo_readOnly = 0,
iiad_EditorDemo_saved = null,
iiad_EditorDemo_$callClinit = () => {
    iiad_EditorDemo_$callClinit = $rt_eraseClinit(iiad_EditorDemo);
    iiad_EditorDemo__clinit_();
},
iiad_EditorDemo_main = $args => {
    iiad_EditorDemo_$callClinit();
    eycdaca_AceResources_whenReady($rt_wrapArray(jl_String, [$rt_s(285), $rt_s(286), $rt_s(287), $rt_s(288), $rt_s(289), $rt_s(290)]), iiad_EditorDemo$main$lambda$_1_0__init_0(), iiad_EditorDemo$main$lambda$_1_1__init_0());
},
iiad_EditorDemo_start = () => {
    let var$1;
    iiad_EditorDemo_$callClinit();
    iiad_EditorDemo_create();
    iiad_EditorDemo_contracts();
    iiad_EditorDemo_load($rt_s(291), $rt_s(292));
    var$1 = iiad_EditorDemo$start$lambda$_2_0__init_0();
    (document.getElementById("java")).addEventListener('click', otji_JS_function(otji_JSWrapper_unwrap(var$1), "run"));
    var$1 = iiad_EditorDemo$start$lambda$_2_1__init_0();
    (document.getElementById("json")).addEventListener('click', otji_JS_function(otji_JSWrapper_unwrap(var$1), "run"));
    var$1 = iiad_EditorDemo$start$lambda$_2_2__init_0();
    (document.getElementById("sql")).addEventListener('click', otji_JS_function(otji_JSWrapper_unwrap(var$1), "run"));
    var$1 = iiad_EditorDemo$start$lambda$_2_3__init_0();
    (document.getElementById("theme")).addEventListener('click', otji_JS_function(otji_JSWrapper_unwrap(var$1), "run"));
    var$1 = iiad_EditorDemo$start$lambda$_2_4__init_0();
    (document.getElementById("readonly")).addEventListener('click', otji_JS_function(otji_JSWrapper_unwrap(var$1), "run"));
    var$1 = iiad_EditorDemo$start$lambda$_2_5__init_0();
    (document.getElementById("diagnostics")).addEventListener('click', otji_JS_function(otji_JSWrapper_unwrap(var$1), "run"));
    var$1 = iiad_EditorDemo$start$lambda$_2_6__init_0();
    (document.getElementById("clear")).addEventListener('click', otji_JS_function(otji_JSWrapper_unwrap(var$1), "run"));
    var$1 = iiad_EditorDemo$start$lambda$_2_7__init_0();
    (document.getElementById("complete")).addEventListener('click', otji_JS_function(otji_JSWrapper_unwrap(var$1), "run"));
    var$1 = iiad_EditorDemo$start$lambda$_2_8__init_0();
    (document.getElementById("save")).addEventListener('click', otji_JS_function(otji_JSWrapper_unwrap(var$1), "run"));
    var$1 = iiad_EditorDemo$start$lambda$_2_9__init_0();
    (document.getElementById("recreate")).addEventListener('click', otji_JS_function(otji_JSWrapper_unwrap(var$1), "run"));
    var$1 = iiad_EditorDemo$start$lambda$_2_10__init_0();
    (document.getElementById("select")).addEventListener('click', otji_JS_function(otji_JSWrapper_unwrap(var$1), "run"));
    window.addEventListener('resize', otji_JS_function(otji_JSWrapper_unwrap(iiad_EditorDemo$start$lambda$_2_11__init_0()), "run"));
    document.body.setAttribute("data-ready", "true");
},
iiad_EditorDemo_create = () => {
    let var$1, var$2, var$3;
    iiad_EditorDemo_$callClinit();
    iiad_EditorDemo_editor = eycdaca_AceEditor__init_0();
    iiad_EditorDemo_editor.$setSize($rt_s(293), $rt_s(293));
    (cggucu_RootPanel_get($rt_s(294))).$add4(iiad_EditorDemo_editor);
    iiad_EditorDemo_editor.$startEditor();
    iiad_EditorDemo_editor.$setThemeByName(!iiad_EditorDemo_dark ? $rt_s(295) : $rt_s(296));
    iiad_EditorDemo_editor.$setModeByName($rt_s(291));
    iiad_EditorDemo_editor.$setFontSize(15);
    iiad_EditorDemo_editor.$setShowPrintMargin(0);
    iiad_EditorDemo_editor.$setUseSoftTabs(1);
    iiad_EditorDemo_editor.$setTabSize(4);
    iiad_EditorDemo_editor.$setAutocompleteEnabled(1);
    iiad_EditorDemo_editor.$setReadOnly(iiad_EditorDemo_readOnly);
    iiad_EditorDemo_editor.$addOnChangeHandler(iiad_EditorDemo$create$lambda$_3_0__init_0());
    iiad_EditorDemo_editor.$addOnCursorPositionChangeHandler(iiad_EditorDemo$create$lambda$_3_1__init_0());
    var$1 = iiad_EditorDemo_editor;
    var$1 = var$1.$getSelection();
    var$2 = iiad_EditorDemo$create$lambda$_3_2__init_0();
    var$1.$addSelectionListener(var$2);
    var$2 = iiad_EditorDemo_editor;
    var$3 = eycdaca_AceCommandDescription__init_0($rt_s(297), iiad_EditorDemo$create$lambda$_3_3__init_0());
    var$1 = var$3.$withBindKey($rt_s(298), $rt_s(299));
    var$1 = var$1.$withReadOnly(1);
    var$2.$addCommand(var$1);
    window.showcaseEditor = iiad_EditorDemo_editor.$unwrapEditor();
},
iiad_EditorDemo_load = ($mode, $value) => {
    let var$3, var$4;
    iiad_EditorDemo_$callClinit();
    iiad_EditorDemo_editor.$clearAnnotations();
    iiad_EditorDemo_editor.$removeAllMarkers();
    iiad_EditorDemo_editor.$setModeByName($mode);
    iiad_EditorDemo_editor.$setText($value);
    iiad_EditorDemo_editor.$gotoLine(1);
    var$3 = jl_String_equals($mode, $rt_s(291)) ? $rt_s(300) : !jl_String_equals($mode, $rt_s(301)) ? $rt_s(302) : $rt_s(303);
    (document.getElementById("filename")).textContent = $rt_ustr(var$3);
    var$4 = jl_String_toUpperCase($mode);
    (document.getElementById("language")).textContent = $rt_ustr(var$4);
},
iiad_EditorDemo_save = () => {
    let var$1, var$2;
    iiad_EditorDemo_$callClinit();
    iiad_EditorDemo_saved = iiad_EditorDemo_editor.$getText();
    var$1 = iiad_EditorDemo_saved;
    var$2 = jl_String_length(var$1);
    var$1 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$1, $rt_s(304)), var$2), $rt_s(305));
    var$1 = jl_StringBuilder_toString(var$1);
    (document.getElementById("output")).textContent = $rt_ustr(var$1);
},
iiad_EditorDemo_contracts = () => {
    let var$1, var$2, var$3, var$4, $marker;
    iiad_EditorDemo_$callClinit();
    iiad_EditorDemo_editor.$setText($rt_s(306));
    iiad_EditorDemo_require(jl_String_equals(iiad_EditorDemo_editor.$getText(), $rt_s(306)), $rt_s(307));
    iiad_EditorDemo_require(iiad_EditorDemo_editor.$getLineCount() != 3 ? 0 : 1, $rt_s(308));
    iiad_EditorDemo_require(jl_String_equals(iiad_EditorDemo_editor.$getLine(1), $rt_s(309)), $rt_s(310));
    iiad_EditorDemo_require((iiad_EditorDemo_editor.$getPositionFromIndex(7)).$getRow() != 1 ? 0 : 1, $rt_s(311));
    var$1 = iiad_EditorDemo_editor;
    var$2 = eycdaca_AceEditorCursorPosition__init_(1, 1);
    var$3 = var$1.$getIndexFromPosition(var$2) != 7 ? 0 : 1;
    iiad_EditorDemo_require(var$3, $rt_s(312));
    (iiad_EditorDemo_editor.$getSelection()).$select(0, 1, 1, 2);
    iiad_EditorDemo_require((iiad_EditorDemo_editor.$getSelection()).$isMultiLine(), $rt_s(313));
    iiad_EditorDemo_require(((iiad_EditorDemo_editor.$getSelection()).$getSelectionLead()).$getRow() != 1 ? 0 : 1, $rt_s(314));
    (iiad_EditorDemo_editor.$getSelection()).$clearSelection();
    var$1 = iiad_EditorDemo_editor;
    var$2 = eycdaca_AceRange_create(1, 0, 1, 3);
    eycdaca_AceMarkerType_$callClinit();
    var$4 = eycdaca_AceMarkerType_TEXT;
    $marker = var$1.$addFloatingMarker(var$2, $rt_s(315), var$4);
    iiad_EditorDemo_require((iiad_EditorDemo_editor.$getMarkers()).$size() != 1 ? 0 : 1, $rt_s(316));
    iiad_EditorDemo_editor.$removeMarker($marker);
    iiad_EditorDemo_require((iiad_EditorDemo_editor.$getMarkers()).$isEmpty(), $rt_s(317));
    var$1 = iiad_EditorDemo_editor;
    eycdaca_AceAnnotationType_$callClinit();
    var$1.$addAnnotation(1, 0, $rt_s(318), eycdaca_AceAnnotationType_ERROR);
    iiad_EditorDemo_editor.$setAnnotations();
    iiad_EditorDemo_editor.$clearAnnotations();
    iiad_EditorDemo_require((iiad_EditorDemo_editor.$listCommands()).$contains0($rt_s(297)), $rt_s(319));
    var$1 = iiad_EditorDemo_editor;
    var$3 = jl_String_equals(((var$1.$getCommandDescription($rt_s(297))).$getBindKey()).$getMac(), $rt_s(299));
    iiad_EditorDemo_require(var$3, $rt_s(320));
    iiad_EditorDemo_editor.$execCommand0($rt_s(297));
    iiad_EditorDemo_editor.$execCommand0($rt_s(321));
    iiad_EditorDemo_editor.$gotoLine(2);
    iiad_EditorDemo_require((iiad_EditorDemo_editor.$getCursorPosition()).$getRow() != 1 ? 0 : 1, $rt_s(322));
    iiad_EditorDemo_editor.$removeCommandByName($rt_s(297));
    iiad_EditorDemo_require(iiad_EditorDemo_editor.$getCommandDescription($rt_s(297)) !== null ? 0 : 1, $rt_s(323));
    var$1 = iiad_EditorDemo_editor;
    var$2 = eycdaca_AceCommandDescription__init_0($rt_s(297), iiad_EditorDemo$contracts$lambda$_6_0__init_0());
    var$2 = var$2.$withBindKey($rt_s(298), $rt_s(299));
    var$2 = var$2.$withReadOnly(1);
    var$1.$addCommand(var$2);
    eycdaca_AceEditor_removeAllExistingCompleters();
    eycdaca_AceEditor_addCompletionProvider(iiad_EditorDemo$contracts$lambda$_6_1__init_0());
    document.body.setAttribute("data-contracts", "passed");
},
iiad_EditorDemo_require = ($ok, $detail) => {
    let var$3, var$4;
    iiad_EditorDemo_$callClinit();
    if (!$ok) {
        var$3 = new jl_IllegalStateException;
        var$4 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$4, $rt_s(324)), $detail);
        jl_IllegalStateException__init_(var$3, jl_StringBuilder_toString(var$4));
        $rt_throw(var$3);
    }
},
iiad_EditorDemo_lambda$contracts$19 = ($e, $pos, $prefix, $callback) => {
    let var$5, var$6;
    iiad_EditorDemo_$callClinit();
    var$5 = $rt_createArray(eycdaca_AceCompletion, 2);
    var$6 = var$5.data;
    var$6[0] = eycdaca_AceCompletionValue__init_0($rt_s(325), $rt_s(326), $rt_s(327), 1000);
    var$6[1] = eycdaca_AceCompletionSnippet__init_0($rt_s(328), $rt_s(329), 900, $rt_s(330), null);
    $callback.$invokeWithCompletions(var$5);
},
iiad_EditorDemo_lambda$contracts$18 = $e => {
    iiad_EditorDemo_$callClinit();
    iiad_EditorDemo_save();
    return null;
},
iiad_EditorDemo_lambda$create$17 = $e => {
    iiad_EditorDemo_$callClinit();
    iiad_EditorDemo_save();
    return null;
},
iiad_EditorDemo_lambda$create$16 = $s => {
    let var$2;
    iiad_EditorDemo_$callClinit();
    var$2 = !$s.$isEmpty() ? $rt_s(331) : $rt_s(332);
    (document.getElementById("selection")).textContent = $rt_ustr(var$2);
},
iiad_EditorDemo_lambda$create$15 = $e => {
    let $p, var$3, var$4, var$5;
    iiad_EditorDemo_$callClinit();
    $p = iiad_EditorDemo_editor.$getCursorPosition();
    var$3 = $p.$getRow() + 1 | 0;
    var$4 = $p.$getColumn() + 1 | 0;
    var$5 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$5, $rt_s(333)), var$3), $rt_s(334)), var$4);
    var$5 = jl_StringBuilder_toString(var$5);
    (document.getElementById("position")).textContent = $rt_ustr(var$5);
},
iiad_EditorDemo_lambda$create$14 = $e => {
    let var$2;
    iiad_EditorDemo_$callClinit();
    iiad_EditorDemo_changes = iiad_EditorDemo_changes + 1 | 0;
    var$2 = jl_Integer_toString(iiad_EditorDemo_changes);
    (document.getElementById("changes")).textContent = $rt_ustr(var$2);
},
iiad_EditorDemo_lambda$start$13 = () => {
    iiad_EditorDemo_$callClinit();
    iiad_EditorDemo_editor.$onResize();
},
iiad_EditorDemo_lambda$start$12 = () => {
    iiad_EditorDemo_$callClinit();
    (iiad_EditorDemo_editor.$getSelection()).$select(0, 0, 0, 12);
    (document.getElementById("output")).textContent = "Selected the first 12 characters through the Java API.";
},
iiad_EditorDemo_lambda$start$11 = () => {
    let var$1;
    iiad_EditorDemo_$callClinit();
    iiad_EditorDemo_saved = iiad_EditorDemo_editor.$getText();
    (cggucu_RootPanel_get($rt_s(294))).$remove0(iiad_EditorDemo_editor);
    var$1 = $rt_createArray(jl_String, 1);
    var$1.data[0] = $rt_s(286);
    eycdaca_AceResources_whenReady(var$1, iiad_EditorDemo$lambda$start$11$lambda$_21_0__init_0(), iiad_EditorDemo$lambda$start$11$lambda$_21_1__init_0());
    (document.getElementById("output")).textContent = "Editor destroyed and recreated. Text restored; callbacks registered once.";
},
iiad_EditorDemo_lambda$start$10 = $failure => {
    let var$2;
    iiad_EditorDemo_$callClinit();
    var$2 = $failure.$getMessage();
    (document.getElementById("output")).textContent = $rt_ustr(var$2);
},
iiad_EditorDemo_lambda$start$9 = () => {
    iiad_EditorDemo_$callClinit();
    iiad_EditorDemo_create();
    iiad_EditorDemo_editor.$setText(iiad_EditorDemo_saved);
},
iiad_EditorDemo_lambda$start$8 = () => {
    iiad_EditorDemo_$callClinit();
    iiad_EditorDemo_editor.$focus();
    iiad_EditorDemo_editor.$execCommand0($rt_s(335));
},
iiad_EditorDemo_lambda$start$7 = () => {
    iiad_EditorDemo_$callClinit();
    iiad_EditorDemo_editor.$clearAnnotations();
    iiad_EditorDemo_editor.$removeAllMarkers();
    (document.getElementById("output")).textContent = "Diagnostics cleared.";
},
iiad_EditorDemo_lambda$start$6 = () => {
    let var$1, var$2, var$3, var$4;
    iiad_EditorDemo_$callClinit();
    iiad_EditorDemo_editor.$clearAnnotations();
    var$1 = iiad_EditorDemo_editor;
    eycdaca_AceAnnotationType_$callClinit();
    var$1.$addAnnotation(2, 8, $rt_s(336), eycdaca_AceAnnotationType_WARNING);
    iiad_EditorDemo_editor.$setAnnotations();
    var$2 = iiad_EditorDemo_editor;
    var$3 = eycdaca_AceRange_create(2, 8, 2, 26);
    eycdaca_AceMarkerType_$callClinit();
    var$4 = eycdaca_AceMarkerType_TEXT;
    var$2.$addMarker0(var$3, $rt_s(315), var$4, 0);
    (document.getElementById("output")).textContent = "Sample warning displayed at line 3 through the Java annotation API.";
},
iiad_EditorDemo_lambda$start$5 = () => {
    let var$1;
    iiad_EditorDemo_$callClinit();
    iiad_EditorDemo_readOnly = iiad_EditorDemo_readOnly ? 0 : 1;
    iiad_EditorDemo_editor.$setReadOnly(iiad_EditorDemo_readOnly);
    var$1 = !iiad_EditorDemo_readOnly ? $rt_s(337) : $rt_s(338);
    (document.getElementById("readonly")).textContent = $rt_ustr(var$1);
},
iiad_EditorDemo_lambda$start$4 = () => {
    let var$1;
    iiad_EditorDemo_$callClinit();
    iiad_EditorDemo_dark = iiad_EditorDemo_dark ? 0 : 1;
    iiad_EditorDemo_editor.$setThemeByName(!iiad_EditorDemo_dark ? $rt_s(295) : $rt_s(296));
    var$1 = !iiad_EditorDemo_dark ? $rt_s(339) : $rt_s(340);
    document.body.setAttribute("data-theme", $rt_ustr(var$1));
},
iiad_EditorDemo_lambda$start$3 = () => {
    iiad_EditorDemo_$callClinit();
    iiad_EditorDemo_load($rt_s(341), $rt_s(342));
},
iiad_EditorDemo_lambda$start$2 = () => {
    iiad_EditorDemo_$callClinit();
    iiad_EditorDemo_load($rt_s(301), $rt_s(343));
},
iiad_EditorDemo_lambda$start$1 = () => {
    iiad_EditorDemo_$callClinit();
    iiad_EditorDemo_load($rt_s(291), $rt_s(292));
},
iiad_EditorDemo_lambda$main$0 = $failure => {
    let var$2, var$3;
    iiad_EditorDemo_$callClinit();
    var$2 = $failure.$getMessage();
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(344)), var$2);
    var$2 = jl_StringBuilder_toString(var$3);
    (document.getElementById("output")).textContent = $rt_ustr(var$2);
},
iiad_EditorDemo__clinit_ = () => {
    iiad_EditorDemo_dark = 1;
    iiad_EditorDemo_saved = $rt_s(292);
};
function jur_EOLSet() {
    jur_AbstractSet.call(this);
    this.$consCounter0 = 0;
}
let jur_EOLSet__init_ = ($this, $counter) => {
    jur_AbstractSet__init_($this);
    $this.$consCounter0 = $counter;
},
jur_EOLSet__init_0 = var_0 => {
    let var_1 = new jur_EOLSet();
    jur_EOLSet__init_(var_1, var_0);
    return var_1;
},
jur_EOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $rightBound, var$5, var$6, $ch;
    $rightBound = !$matchResult.$hasAnchoringBounds() ? $testString.$length() : $matchResult.$getRightBound();
    if ($strIndex < $rightBound) {
        var$5 = $rightBound - $strIndex | 0;
        if (var$5 == 2 && $testString.$charAt($strIndex) == 13) {
            var$6 = $strIndex + 1 | 0;
            if ($testString.$charAt(var$6) == 10) {
                $matchResult.$setConsumed($this.$consCounter0, 0);
                return $this.$next2.$matches($strIndex, $testString, $matchResult);
            }
        }
        a: {
            if (var$5 == 1) {
                $ch = $testString.$charAt($strIndex);
                if ($ch == 10)
                    break a;
                if ($ch == 13)
                    break a;
                if ($ch == 133)
                    break a;
                if (($ch | 1) == 8233)
                    break a;
            }
            return (-1);
        }
        $matchResult.$setConsumed($this.$consCounter0, 0);
        return $this.$next2.$matches($strIndex, $testString, $matchResult);
    }
    $matchResult.$setConsumed($this.$consCounter0, 0);
    return $this.$next2.$matches($strIndex, $testString, $matchResult);
},
jur_EOLSet_hasConsumed = ($this, $matchResult) => {
    let $res;
    $res = !$matchResult.$getConsumed($this.$consCounter0) ? 0 : 1;
    $matchResult.$setConsumed($this.$consCounter0, (-1));
    return $res;
};
function cggcc_Scheduler$Impl() {
    let a = this; cggcc_Scheduler.call(a);
    a.$entry = null;
    a.$finallyQueue = null;
    a.$depth = 0;
}
let cggcc_Scheduler$Impl__init_0 = $this => {
    cggcc_Scheduler__init_($this);
    $this.$entry = ju_ArrayDeque__init_1();
    $this.$finallyQueue = ju_ArrayDeque__init_1();
},
cggcc_Scheduler$Impl__init_ = () => {
    let var_0 = new cggcc_Scheduler$Impl();
    cggcc_Scheduler$Impl__init_0(var_0);
    return var_0;
},
cggcc_Scheduler$Impl_enter = ($this, $callback) => {
    let var$2, $outer, var$4, $$je;
    var$2 = $this.$depth;
    $this.$depth = var$2 + 1 | 0;
    $outer = var$2 ? 0 : 1;
    a: {
        try {
            if ($outer)
                cggcc_Scheduler$Impl_drain($this, $this.$entry);
            $callback.$run();
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            var$4 = $$je;
            break a;

        }
        b: {
            try {
                if (!$outer)
                    break b;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$4 = $$je;
                break a;

            }
            try {
                cggcc_Scheduler$Impl_drain($this, $this.$finallyQueue);
                break b;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$4 = $$je;
                $this.$depth = $this.$depth - 1 | 0;
                $rt_throw(var$4);

            }
        }
        $this.$depth = $this.$depth - 1 | 0;
        return;
    }
    try {
        if ($outer)
            cggcc_Scheduler$Impl_drain($this, $this.$finallyQueue);
    } catch ($$e) {
        $$je = $rt_wrapException($$e);
        var$4 = $$je;
        $this.$depth = $this.$depth - 1 | 0;
        $rt_throw(var$4);

    }
    $this.$depth = $this.$depth - 1 | 0;
    $rt_throw(var$4);
},
cggcc_Scheduler$Impl_drain = ($this, $queue) => {
    let $repeat, $failures, $command, $failure, $$je;
    if (!$queue.$isEmpty()) {
        $repeat = ju_ArrayList__init_();
        $failures = ju_LinkedHashSet__init_();
        while (!$queue.$isEmpty()) {
            $command = $queue.$remove6();
            a: {
                b: {
                    try {
                        if ($command.$execute())
                            $repeat.$add2($command);
                        break a;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof jl_Throwable) {
                            $failure = $$je;
                            break b;
                        } else {
                            throw $$e;
                        }
                    }
                }
                $failures.$add2($failure);
            }
        }
        $queue.$addAll($repeat);
        if (!$failures.$isEmpty())
            $rt_throw(cgges_UmbrellaException__init_($failures));
        return;
    }
},
otr_StringInfo = $rt_classWithoutFields(otrr_ReflectionInfo),
eycdaca_AceResources = $rt_classWithoutFields(),
eycdaca_AceResources_basePath = null,
eycdaca_AceResources_core = null,
eycdaca_AceResources_modules = null,
eycdaca_AceResources_$callClinit = () => {
    eycdaca_AceResources_$callClinit = $rt_eraseClinit(eycdaca_AceResources);
    eycdaca_AceResources__clinit_();
},
eycdaca_AceResources_whenReady = ($requested, $ready, $failed) => {
    let $names, var$5, var$6, var$7, var$8, var$9, var$10, $name;
    eycdaca_AceResources_$callClinit();
    $names = $requested.$clone0();
    var$5 = $names.data;
    var$6 = var$5.length;
    var$7 = 0;
    while (true) {
        if (var$7 >= var$6) {
            if (eycdaca_AceResources_core === null) {
                var$8 = iitm_ScriptModule_named($rt_s(345));
                var$9 = eycdaca_AceResources_basePath;
                var$10 = jl_StringBuilder__init_();
                jl_StringBuilder_append(jl_StringBuilder_append(var$10, var$9), $rt_s(346));
                eycdaca_AceResources_core = iitm_ScriptModule_script(var$8, jl_StringBuilder_toString(var$10), eycdaca_AceResources$whenReady$lambda$_2_1__init_0());
            }
            var$8 = iitm_ScriptModule_onFailure(eycdaca_AceResources_core, $failed);
            var$9 = eycdaca_AceResources$whenReady$lambda$_2_0__init_0($names, $ready, $failed);
            iitm_ScriptModule_whenReady(var$8, var$9);
            return;
        }
        $name = var$5[var$7];
        if (!jl_String_matches($name, $rt_s(347)))
            break;
        var$7 = var$7 + 1 | 0;
    }
    var$8 = new jl_IllegalArgumentException;
    var$9 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$9, $rt_s(348)), $name);
    jl_IllegalArgumentException__init_2(var$8, jl_StringBuilder_toString(var$9));
    $rt_throw(var$8);
},
eycdaca_AceResources_loadModules = ($names, $i, $ready, $failed) => {
    let var$5, var$6, var$7, var$8, $module;
    eycdaca_AceResources_$callClinit();
    var$5 = $names.data;
    if ($i != var$5.length) {
        var$6 = eycdaca_AceResources_modules;
        var$7 = var$5[$i];
        var$8 = eycdaca_AceResources$loadModules$lambda$_3_0__init_0();
        $module = var$6.$computeIfAbsent(var$7, var$8);
        iitm_ScriptModule_whenReady(iitm_ScriptModule_onFailure($module, $failed), eycdaca_AceResources$loadModules$lambda$_3_1__init_0($names, $i, $ready, $failed));
        return;
    }
    $ready.$run();
},
eycdaca_AceResources_lambda$loadModules$2 = ($names, $i, $ready, $failed) => {
    eycdaca_AceResources_$callClinit();
    eycdaca_AceResources_loadModules($names, $i + 1 | 0, $ready, $failed);
},
eycdaca_AceResources_lambda$loadModules$1 = $name => {
    let var$2, var$3, var$4;
    eycdaca_AceResources_$callClinit();
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(349)), $name);
    var$3 = iitm_ScriptModule_named(jl_StringBuilder_toString(var$2));
    var$2 = eycdaca_AceResources_basePath;
    var$4 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$4, var$2), $name), $rt_s(350));
    return iitm_ScriptModule_script0(var$3, jl_StringBuilder_toString(var$4));
},
eycdaca_AceResources_lambda$whenReady$0 = ($names, $ready, $failed) => {
    eycdaca_AceResources_$callClinit();
    eycdaca_AceResources_configure$js_body$_5($rt_ustr(eycdaca_AceResources_basePath));
    eycdaca_AceResources_loadModules($names, 0, $ready, $failed);
},
eycdaca_AceResources__clinit_ = () => {
    eycdaca_AceResources_basePath = $rt_s(351);
    eycdaca_AceResources_modules = ju_HashMap__init_();
},
eycdaca_AceResources_configure$js_body$_5 = var$1 => {
    ace.config.set('basePath', var$1);
    ace.config.set('modePath', var$1);
    ace.config.set('themePath', var$1);
    ace.config.set('workerPath', var$1);
};
function jur_Lexer() {
    let a = this; jl_Object.call(a);
    a.$pattern0 = null;
    a.$flags0 = 0;
    a.$mode0 = 0;
    a.$savedMode = 0;
    a.$lookBack = 0;
    a.$ch = 0;
    a.$lookAhead0 = 0;
    a.$groupName = null;
    a.$patternFullLength = 0;
    a.$curST = null;
    a.$lookAheadST = null;
    a.$index = 0;
    a.$prevNW = 0;
    a.$curToc = 0;
    a.$lookAheadToc = 0;
    a.$orig = null;
}
let jur_Lexer_decompTable = null,
jur_Lexer_singleDecompTable = null,
jur_Lexer_singleDecompTableSize = 0,
jur_Lexer__init_ = ($this, var$1, $flags) => {
    jl_Object__init_($this);
    $this.$mode0 = 1;
    $this.$orig = var$1;
    if (($flags & 16) > 0)
        var$1 = jur_Pattern_quote(var$1);
    else if (($flags & 128) > 0)
        var$1 = jur_Lexer_normalize(var$1);
    $this.$pattern0 = $rt_createCharArray(jl_String_length(var$1) + 2 | 0);
    jl_System_fastArraycopy(jl_String_toCharArray(var$1), 0, $this.$pattern0, 0, jl_String_length(var$1));
    $this.$pattern0.data[$this.$pattern0.data.length - 1 | 0] = 0;
    $this.$pattern0.data[$this.$pattern0.data.length - 2 | 0] = 0;
    $this.$patternFullLength = $this.$pattern0.data.length;
    $this.$flags0 = $flags;
    jur_Lexer_movePointer($this);
    jur_Lexer_movePointer($this);
},
jur_Lexer__init_0 = (var_0, var_1) => {
    let var_2 = new jur_Lexer();
    jur_Lexer__init_(var_2, var_0, var_1);
    return var_2;
},
jur_Lexer_peek = $this => {
    return $this.$ch;
},
jur_Lexer_setMode = ($this, $mode) => {
    if ($mode > 0 && $mode < 3)
        $this.$mode0 = $mode;
    if ($mode == 1)
        jur_Lexer_reread($this);
},
jur_Lexer_restoreFlags = ($this, $flags) => {
    $this.$flags0 = $flags;
    $this.$lookAhead0 = $this.$ch;
    $this.$lookAheadST = $this.$curST;
    $this.$index = $this.$curToc + 1 | 0;
    $this.$lookAheadToc = $this.$curToc;
    jur_Lexer_movePointer($this);
},
jur_Lexer_peekSpecial = $this => {
    return $this.$curST;
},
jur_Lexer_isSpecial = $this => {
    return $this.$curST === null ? 0 : 1;
},
jur_Lexer_isNextSpecial = $this => {
    return $this.$lookAheadST === null ? 0 : 1;
},
jur_Lexer_next = $this => {
    jur_Lexer_movePointer($this);
    return $this.$lookBack;
},
jur_Lexer_nextSpecial = $this => {
    let $res;
    $res = $this.$curST;
    jur_Lexer_movePointer($this);
    return $res;
},
jur_Lexer_lookAhead = $this => {
    return $this.$lookAhead0;
},
jur_Lexer_back = $this => {
    return $this.$lookBack;
},
jur_Lexer_normalize = $input => {
    return $input;
},
jur_Lexer_reread = $this => {
    $this.$lookAhead0 = $this.$ch;
    $this.$lookAheadST = $this.$curST;
    $this.$index = $this.$lookAheadToc;
    $this.$lookAheadToc = $this.$curToc;
    jur_Lexer_movePointer($this);
},
jur_Lexer_movePointer = $this => {
    let $reread, var$2, $cs, $negative, $mod, $nonCap, $behindOrNamed, $nameBuilder, var$9, $$je;
    $this.$lookBack = $this.$ch;
    $this.$ch = $this.$lookAhead0;
    $this.$curST = $this.$lookAheadST;
    $this.$curToc = $this.$lookAheadToc;
    $this.$lookAheadToc = $this.$index;
    a: {
        while (true) {
            $reread = 0;
            $this.$lookAhead0 = $this.$index >= $this.$pattern0.data.length ? 0 : jur_Lexer_nextCodePoint($this);
            $this.$lookAheadST = null;
            if ($this.$mode0 == 4) {
                if ($this.$lookAhead0 != 92)
                    return;
                $this.$lookAhead0 = $this.$index >= $this.$pattern0.data.length ? 0 : $this.$pattern0.data[jur_Lexer_nextIndex($this)];
                switch ($this.$lookAhead0) {
                    case 69:
                        break;
                    default:
                        $this.$lookAhead0 = 92;
                        $this.$index = $this.$prevNW;
                        return;
                }
                $this.$mode0 = $this.$savedMode;
                $this.$lookAhead0 = $this.$index > ($this.$pattern0.data.length - 2 | 0) ? 0 : jur_Lexer_nextCodePoint($this);
            }
            b: {
                if ($this.$lookAhead0 == 92) {
                    var$2 = $this.$index >= ($this.$pattern0.data.length - 2 | 0) ? (-1) : jur_Lexer_nextCodePoint($this);
                    c: {
                        d: {
                            e: {
                                f: {
                                    g: {
                                        h: {
                                            i: {
                                                j: {
                                                    k: {
                                                        l: {
                                                            m: {
                                                                n: {
                                                                    o: {
                                                                        p: {
                                                                            q: {
                                                                                r: {
                                                                                    s: {
                                                                                        t: {
                                                                                            u: {
                                                                                                v: {
                                                                                                    $this.$lookAhead0 = var$2;
                                                                                                    switch ($this.$lookAhead0) {
                                                                                                        case -1:
                                                                                                            $rt_throw(jur_PatternSyntaxException__init_($rt_s(8), $this.$toString(), $this.$index));
                                                                                                        case 0:
                                                                                                        case 1:
                                                                                                        case 2:
                                                                                                        case 3:
                                                                                                        case 4:
                                                                                                        case 5:
                                                                                                        case 6:
                                                                                                        case 7:
                                                                                                        case 8:
                                                                                                        case 9:
                                                                                                        case 10:
                                                                                                        case 11:
                                                                                                        case 12:
                                                                                                        case 13:
                                                                                                        case 14:
                                                                                                        case 15:
                                                                                                        case 16:
                                                                                                        case 17:
                                                                                                        case 18:
                                                                                                        case 19:
                                                                                                        case 20:
                                                                                                        case 21:
                                                                                                        case 22:
                                                                                                        case 23:
                                                                                                        case 24:
                                                                                                        case 25:
                                                                                                        case 26:
                                                                                                        case 27:
                                                                                                        case 28:
                                                                                                        case 29:
                                                                                                        case 30:
                                                                                                        case 31:
                                                                                                        case 32:
                                                                                                        case 33:
                                                                                                        case 34:
                                                                                                        case 35:
                                                                                                        case 36:
                                                                                                        case 37:
                                                                                                        case 38:
                                                                                                        case 39:
                                                                                                        case 40:
                                                                                                        case 41:
                                                                                                        case 42:
                                                                                                        case 43:
                                                                                                        case 44:
                                                                                                        case 45:
                                                                                                        case 46:
                                                                                                        case 47:
                                                                                                        case 58:
                                                                                                        case 59:
                                                                                                        case 60:
                                                                                                        case 61:
                                                                                                        case 62:
                                                                                                        case 63:
                                                                                                        case 64:
                                                                                                        case 91:
                                                                                                        case 92:
                                                                                                        case 93:
                                                                                                        case 94:
                                                                                                        case 95:
                                                                                                        case 96:
                                                                                                        case 118:
                                                                                                            break;
                                                                                                        case 48:
                                                                                                            break v;
                                                                                                        case 49:
                                                                                                        case 50:
                                                                                                        case 51:
                                                                                                        case 52:
                                                                                                        case 53:
                                                                                                        case 54:
                                                                                                        case 55:
                                                                                                        case 56:
                                                                                                        case 57:
                                                                                                            break e;
                                                                                                        case 65:
                                                                                                            break u;
                                                                                                        case 66:
                                                                                                            break t;
                                                                                                        case 67:
                                                                                                        case 69:
                                                                                                        case 70:
                                                                                                        case 72:
                                                                                                        case 73:
                                                                                                        case 74:
                                                                                                        case 75:
                                                                                                        case 76:
                                                                                                        case 77:
                                                                                                        case 78:
                                                                                                        case 79:
                                                                                                        case 82:
                                                                                                        case 84:
                                                                                                        case 85:
                                                                                                        case 86:
                                                                                                        case 88:
                                                                                                        case 89:
                                                                                                        case 103:
                                                                                                        case 104:
                                                                                                        case 105:
                                                                                                        case 106:
                                                                                                        case 107:
                                                                                                        case 108:
                                                                                                        case 109:
                                                                                                        case 111:
                                                                                                        case 113:
                                                                                                        case 121:
                                                                                                            $rt_throw(jur_PatternSyntaxException__init_($rt_s(8), $this.$toString(), $this.$index));
                                                                                                        case 68:
                                                                                                        case 83:
                                                                                                        case 87:
                                                                                                        case 100:
                                                                                                        case 115:
                                                                                                        case 119:
                                                                                                            break f;
                                                                                                        case 71:
                                                                                                            break s;
                                                                                                        case 80:
                                                                                                        case 112:
                                                                                                            break c;
                                                                                                        case 81:
                                                                                                            break g;
                                                                                                        case 90:
                                                                                                            break r;
                                                                                                        case 97:
                                                                                                            break q;
                                                                                                        case 98:
                                                                                                            break p;
                                                                                                        case 99:
                                                                                                            break d;
                                                                                                        case 101:
                                                                                                            break o;
                                                                                                        case 102:
                                                                                                            break n;
                                                                                                        case 110:
                                                                                                            break m;
                                                                                                        case 114:
                                                                                                            break l;
                                                                                                        case 116:
                                                                                                            break k;
                                                                                                        case 117:
                                                                                                            break i;
                                                                                                        case 120:
                                                                                                            break h;
                                                                                                        case 122:
                                                                                                            break j;
                                                                                                        default:
                                                                                                    }
                                                                                                    break b;
                                                                                                }
                                                                                                $this.$lookAhead0 = jur_Lexer_readOctals($this);
                                                                                                break b;
                                                                                            }
                                                                                            $this.$lookAhead0 = (-2147483583);
                                                                                            break b;
                                                                                        }
                                                                                        $this.$lookAhead0 = (-2147483582);
                                                                                        break b;
                                                                                    }
                                                                                    $this.$lookAhead0 = (-2147483577);
                                                                                    break b;
                                                                                }
                                                                                $this.$lookAhead0 = (-2147483558);
                                                                                break b;
                                                                            }
                                                                            $this.$lookAhead0 = 7;
                                                                            break b;
                                                                        }
                                                                        $this.$lookAhead0 = (-2147483550);
                                                                        break b;
                                                                    }
                                                                    $this.$lookAhead0 = 27;
                                                                    break b;
                                                                }
                                                                $this.$lookAhead0 = 12;
                                                                break b;
                                                            }
                                                            $this.$lookAhead0 = 10;
                                                            break b;
                                                        }
                                                        $this.$lookAhead0 = 13;
                                                        break b;
                                                    }
                                                    $this.$lookAhead0 = 9;
                                                    break b;
                                                }
                                                $this.$lookAhead0 = (-2147483526);
                                                break b;
                                            }
                                            $this.$lookAhead0 = jur_Lexer_readHex($this, 4);
                                            break b;
                                        }
                                        $this.$lookAhead0 = jur_Lexer_readHex($this, 2);
                                        break b;
                                    }
                                    $this.$savedMode = $this.$mode0;
                                    $this.$mode0 = 4;
                                    $reread = 1;
                                    break b;
                                }
                                $this.$lookAheadST = jur_AbstractCharClass_getPredefinedClass(jl_String__init_2($this.$pattern0, $this.$prevNW, 1), 0);
                                $this.$lookAhead0 = 0;
                                break b;
                            }
                            if ($this.$mode0 != 1)
                                break b;
                            $this.$lookAhead0 = (-2147483648) | $this.$lookAhead0;
                            break b;
                        }
                        if ($this.$index >= ($this.$pattern0.data.length - 2 | 0))
                            $rt_throw(jur_PatternSyntaxException__init_($rt_s(8), $this.$toString(), $this.$index));
                        $this.$lookAhead0 = $this.$pattern0.data[jur_Lexer_nextIndex($this)] & 31;
                        break b;
                    }
                    $cs = jur_Lexer_parseCharClassName($this);
                    $negative = 0;
                    if ($this.$lookAhead0 == 80)
                        $negative = 1;
                    try {
                        $this.$lookAheadST = jur_AbstractCharClass_getPredefinedClass($cs, $negative);
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof ju_MissingResourceException) {
                            $rt_throw(jur_PatternSyntaxException__init_($rt_s(8), $this.$toString(), $this.$index));
                        } else {
                            throw $$e;
                        }
                    }
                    $this.$lookAhead0 = 0;
                } else if ($this.$mode0 == 1) {
                    w: {
                        x: {
                            y: {
                                z: {
                                    ba: {
                                        bb: {
                                            bc: {
                                                bd: {
                                                    be: {
                                                        bf: {
                                                            switch ($this.$lookAhead0) {
                                                                case 36:
                                                                    break bf;
                                                                case 40:
                                                                    break w;
                                                                case 41:
                                                                    break be;
                                                                case 42:
                                                                case 43:
                                                                case 63:
                                                                    break x;
                                                                case 46:
                                                                    break bd;
                                                                case 91:
                                                                    break z;
                                                                case 93:
                                                                    break y;
                                                                case 94:
                                                                    break bc;
                                                                case 123:
                                                                    break ba;
                                                                case 124:
                                                                    break bb;
                                                                default:
                                                            }
                                                            break b;
                                                        }
                                                        $this.$lookAhead0 = (-536870876);
                                                        break b;
                                                    }
                                                    $this.$lookAhead0 = (-536870871);
                                                    break b;
                                                }
                                                $this.$lookAhead0 = (-536870866);
                                                break b;
                                            }
                                            $this.$lookAhead0 = (-536870818);
                                            break b;
                                        }
                                        $this.$lookAhead0 = (-536870788);
                                        break b;
                                    }
                                    $this.$lookAheadST = jur_Lexer_processQuantifier($this, $this.$lookAhead0);
                                    break b;
                                }
                                $this.$lookAhead0 = (-536870821);
                                $this.$setMode(2);
                                break b;
                            }
                            if ($this.$mode0 != 2)
                                break b;
                            $this.$lookAhead0 = (-536870819);
                            break b;
                        }
                        $mod = $this.$index >= $this.$pattern0.data.length ? 42 : $this.$pattern0.data[$this.$index];
                        bg: {
                            bh: {
                                switch ($mod) {
                                    case 43:
                                        break bh;
                                    case 63:
                                        break bg;
                                    default:
                                }
                                $this.$lookAhead0 = $this.$lookAhead0 | (-536870912);
                                break b;
                            }
                            $this.$lookAhead0 = $this.$lookAhead0 | (-2147483648);
                            jur_Lexer_nextIndex($this);
                            break b;
                        }
                        $this.$lookAhead0 = $this.$lookAhead0 | (-1073741824);
                        jur_Lexer_nextIndex($this);
                        break b;
                    }
                    if ($this.$pattern0.data[$this.$index] != 63)
                        $this.$lookAhead0 = (-2147483608);
                    else {
                        jur_Lexer_nextIndex($this);
                        $nonCap = $this.$pattern0.data[$this.$index];
                        $behindOrNamed = 0;
                        $nameBuilder = null;
                        while (true) {
                            bi: {
                                if (!$behindOrNamed) {
                                    bj: {
                                        bk: {
                                            bl: {
                                                bm: {
                                                    switch ($nonCap) {
                                                        case 33:
                                                            break;
                                                        case 60:
                                                            break bk;
                                                        case 61:
                                                            break bm;
                                                        case 62:
                                                            break bl;
                                                        default:
                                                            break bj;
                                                    }
                                                    $this.$lookAhead0 = (-268435416);
                                                    jur_Lexer_nextIndex($this);
                                                    break bi;
                                                }
                                                $this.$lookAhead0 = (-536870872);
                                                jur_Lexer_nextIndex($this);
                                                break bi;
                                            }
                                            $this.$lookAhead0 = (-33554392);
                                            jur_Lexer_nextIndex($this);
                                            break bi;
                                        }
                                        jur_Lexer_nextIndex($this);
                                        $nonCap = $this.$pattern0.data[$this.$index];
                                        $behindOrNamed = 1;
                                        break bi;
                                    }
                                    $this.$lookAhead0 = jur_Lexer_readFlags($this);
                                    if ($this.$lookAhead0 < 256) {
                                        $this.$flags0 = $this.$lookAhead0;
                                        $this.$lookAhead0 = $this.$lookAhead0 << 16;
                                        $this.$lookAhead0 = (-1073741784) | $this.$lookAhead0;
                                    } else {
                                        $this.$lookAhead0 = $this.$lookAhead0 & 255;
                                        $this.$flags0 = $this.$lookAhead0;
                                        $this.$lookAhead0 = $this.$lookAhead0 << 16;
                                        $this.$lookAhead0 = (-16777176) | $this.$lookAhead0;
                                    }
                                } else {
                                    bn: {
                                        bo: {
                                            bp: {
                                                switch ($nonCap) {
                                                    case 33:
                                                        break;
                                                    case 61:
                                                        break bp;
                                                    case 62:
                                                        break bo;
                                                    default:
                                                        break bn;
                                                }
                                                $behindOrNamed = 0;
                                                $this.$lookAhead0 = (-67108824);
                                                jur_Lexer_nextIndex($this);
                                                break bi;
                                            }
                                            $behindOrNamed = 0;
                                            $this.$lookAhead0 = (-134217688);
                                            jur_Lexer_nextIndex($this);
                                            break bi;
                                        }
                                        if ($nameBuilder === null)
                                            $rt_throw(jur_PatternSyntaxException__init_($rt_s(8), $this.$toString(), $this.$index));
                                        $this.$groupName = $nameBuilder.$toString();
                                        jur_Lexer_nextIndex($this);
                                        $nameBuilder = null;
                                        $behindOrNamed = 0;
                                        $this.$lookAhead0 = (-2130706392);
                                        break bi;
                                    }
                                    bq: {
                                        if (!($nonCap >= 65 && $nonCap <= 90)) {
                                            if ($nonCap < 97)
                                                break bq;
                                            if ($nonCap > 122)
                                                break bq;
                                        }
                                        if ($nameBuilder === null)
                                            $nameBuilder = jl_StringBuilder__init_();
                                        $nameBuilder.$append0($nonCap);
                                        jur_Lexer_nextIndex($this);
                                        $nonCap = $this.$pattern0.data[$this.$index];
                                        break bi;
                                    }
                                    if ($nonCap < 48)
                                        break a;
                                    if ($nonCap > 57)
                                        break a;
                                    if ($nameBuilder === null) {
                                        var$9 = jur_PatternSyntaxException__init_($rt_s(352), $this.$toString(), $this.$index);
                                        $rt_throw(var$9);
                                    }
                                    $nameBuilder.$append0($nonCap);
                                    jur_Lexer_nextIndex($this);
                                    $nonCap = $this.$pattern0.data[$this.$index];
                                }
                            }
                            if (!$behindOrNamed)
                                break;
                        }
                    }
                } else if ($this.$mode0 == 2) {
                    br: {
                        bs: {
                            bt: {
                                bu: {
                                    bv: {
                                        switch ($this.$lookAhead0) {
                                            case 38:
                                                break bv;
                                            case 45:
                                                break bu;
                                            case 91:
                                                break bt;
                                            case 93:
                                                break bs;
                                            case 94:
                                                break br;
                                            default:
                                        }
                                        break b;
                                    }
                                    $this.$lookAhead0 = (-536870874);
                                    break b;
                                }
                                $this.$lookAhead0 = (-536870867);
                                break b;
                            }
                            $this.$lookAhead0 = (-536870821);
                            break b;
                        }
                        $this.$lookAhead0 = (-536870819);
                        break b;
                    }
                    $this.$lookAhead0 = (-536870818);
                }
            }
            if ($reread)
                continue;
            else
                break;
        }
        return;
    }
    $rt_throw(jur_PatternSyntaxException__init_($rt_s(8), $this.$toString(), $this.$index));
},
jur_Lexer_parseCharClassName = $this => {
    let $sb, $ch, var$3, var$4, $res;
    a: {
        $sb = jl_StringBuilder__init_0(10);
        if ($this.$index < ($this.$pattern0.data.length - 2 | 0)) {
            if ($this.$pattern0.data[$this.$index] == 123) {
                jur_Lexer_nextIndex($this);
                $ch = 0;
                b: {
                    c: {
                        while ($this.$index < ($this.$pattern0.data.length - 2 | 0)) {
                            $ch = $this.$pattern0.data[jur_Lexer_nextIndex($this)];
                            if ($ch == 125)
                                break c;
                            $sb.$append0($ch);
                        }
                        break b;
                    }
                }
                if ($ch == 125)
                    break a;
                $rt_throw(jur_PatternSyntaxException__init_($rt_s(8), $this.$toString(), $this.$index));
            }
            var$3 = jl_String__init_2($this.$pattern0, jur_Lexer_nextIndex($this), 1);
            var$4 = jl_StringBuilder__init_();
            jl_StringBuilder_append(jl_StringBuilder_append(var$4, $rt_s(353)), var$3);
            return jl_StringBuilder_toString(var$4);
        }
    }
    if ($sb.$length()) {
        $res = $sb.$toString();
        if (jl_String_length($res) != 1) {
            d: {
                e: {
                    if (jl_String_length($res) > 3) {
                        if (jl_String_startsWith($res, $rt_s(353)))
                            break e;
                        if (jl_String_startsWith($res, $rt_s(354)))
                            break e;
                    }
                    break d;
                }
                $res = jl_String_substring0($res, 2);
            }
            return $res;
        }
        var$3 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(353)), $res);
        return jl_StringBuilder_toString(var$3);
    }
    $rt_throw(jur_PatternSyntaxException__init_($rt_s(8), $this.$toString(), $this.$index));
},
jur_Lexer_processQuantifier = ($this, $ch) => {
    let $sb, $min, $max, $mod, $$je;
    $sb = jl_StringBuilder__init_0(4);
    $min = (-1);
    $max = 2147483647;
    a: {
        b: {
            while (true) {
                if ($this.$index >= $this.$pattern0.data.length)
                    break a;
                $ch = $this.$pattern0.data[jur_Lexer_nextIndex($this)];
                if ($ch == 125)
                    break b;
                if (!($ch == 44 && $min < 0)) {
                    $sb.$append0($ch & 65535);
                    continue;
                }
                try {
                    $min = jl_Integer_parseInt($sb.$toString(), 10);
                    $sb.$delete0(0, $sb.$length());
                    continue;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof jl_NumberFormatException) {
                        break;
                    } else {
                        throw $$e;
                    }
                }
            }
            $rt_throw(jur_PatternSyntaxException__init_($rt_s(8), $this.$toString(), $this.$index));
        }
    }
    if ($ch == 125) {
        c: {
            if ($sb.$length() <= 0) {
                if ($min >= 0)
                    break c;
                $rt_throw(jur_PatternSyntaxException__init_($rt_s(8), $this.$toString(), $this.$index));
            }
            d: {
                e: {
                    try {
                        $max = jl_Integer_parseInt($sb.$toString(), 10);
                        if ($min >= 0)
                            break d;
                        $min = $max;
                        break d;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof jl_NumberFormatException) {
                            break e;
                        } else {
                            throw $$e;
                        }
                    }
                }
                $rt_throw(jur_PatternSyntaxException__init_($rt_s(8), $this.$toString(), $this.$index));
            }
        }
        if (($min | $max | ($max - $min | 0)) >= 0) {
            $mod = $this.$index >= $this.$pattern0.data.length ? 42 : $this.$pattern0.data[$this.$index];
            f: {
                g: {
                    h: {
                        switch ($mod) {
                            case 43:
                                break h;
                            case 63:
                                break g;
                            default:
                        }
                        $this.$lookAhead0 = (-536870789);
                        break f;
                    }
                    $this.$lookAhead0 = (-2147483525);
                    jur_Lexer_nextIndex($this);
                    break f;
                }
                $this.$lookAhead0 = (-1073741701);
                jur_Lexer_nextIndex($this);
            }
            return jur_Quantifier__init_0($min, $max);
        }
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(8), $this.$toString(), $this.$index));
    }
    $rt_throw(jur_PatternSyntaxException__init_($rt_s(8), $this.$toString(), $this.$index));
},
jur_Lexer_toString = $this => {
    return $this.$orig;
},
jur_Lexer_isEmpty = $this => {
    return !(!$this.$ch && !$this.$lookAhead0 && $this.$index == $this.$patternFullLength && !$this.$isSpecial()) ? 0 : 1;
},
jur_Lexer_isLetter = $ch => {
    return $ch < 0 ? 0 : 1;
},
jur_Lexer_isLetter0 = $this => {
    return !(!$this.$isEmpty() && !$this.$isSpecial() && jur_Lexer_isLetter($this.$ch)) ? 0 : 1;
},
jur_Lexer_isHighSurrogate0 = $this => {
    return !($this.$ch <= 56319 && $this.$ch >= 55296) ? 0 : 1;
},
jur_Lexer_isLowSurrogate0 = $this => {
    return !($this.$ch <= 57343 && $this.$ch >= 56320) ? 0 : 1;
},
jur_Lexer_isHighSurrogate = $ch => {
    return !($ch <= 56319 && $ch >= 55296) ? 0 : 1;
},
jur_Lexer_isLowSurrogate = $ch => {
    return !($ch <= 57343 && $ch >= 56320) ? 0 : 1;
},
jur_Lexer_readHex = ($this, $max) => {
    let $st, $length, $i, var$5, $$je;
    $st = jl_StringBuilder__init_0($max);
    $length = $this.$pattern0.data.length - 2 | 0;
    $i = 0;
    while (true) {
        var$5 = $rt_compare($i, $max);
        if (var$5 >= 0)
            break;
        if ($this.$index >= $length)
            break;
        $st.$append0($this.$pattern0.data[jur_Lexer_nextIndex($this)]);
        $i = $i + 1 | 0;
    }
    a: {
        if (!var$5) {
            try {
                var$5 = jl_Integer_parseInt($st.$toString(), 16);
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_NumberFormatException) {
                    break a;
                } else {
                    throw $$e;
                }
            }
            return var$5;
        }
    }
    $rt_throw(jur_PatternSyntaxException__init_($rt_s(8), $this.$toString(), $this.$index));
},
jur_Lexer_readOctals = $this => {
    let $max, $i, $length, $res, var$5;
    $max = 3;
    $i = 1;
    $length = $this.$pattern0.data.length - 2 | 0;
    $res = jl_Character_digit($this.$pattern0.data[$this.$index], 8);
    switch ($res) {
        case -1:
            break;
        default:
            if ($res > 3)
                $max = 2;
            jur_Lexer_nextIndex($this);
            a: {
                while (true) {
                    if ($i >= $max)
                        break a;
                    if ($this.$index >= $length)
                        break a;
                    var$5 = jl_Character_digit($this.$pattern0.data[$this.$index], 8);
                    if (var$5 < 0)
                        break;
                    $res = ($res * 8 | 0) + var$5 | 0;
                    jur_Lexer_nextIndex($this);
                    $i = $i + 1 | 0;
                }
            }
            return $res;
    }
    $rt_throw(jur_PatternSyntaxException__init_($rt_s(8), $this.$toString(), $this.$index));
},
jur_Lexer_readFlags = $this => {
    let $pos, $res, $ch;
    $pos = 1;
    $res = $this.$flags0;
    a: while (true) {
        if ($this.$index >= $this.$pattern0.data.length)
            $rt_throw(jur_PatternSyntaxException__init_($rt_s(8), $this.$toString(), $this.$index));
        b: {
            c: {
                d: {
                    e: {
                        f: {
                            g: {
                                h: {
                                    i: {
                                        $ch = $this.$pattern0.data[$this.$index];
                                        switch ($ch) {
                                            case 41:
                                                jur_Lexer_nextIndex($this);
                                                return $res | 256;
                                            case 45:
                                                break i;
                                            case 58:
                                                break a;
                                            case 100:
                                                break h;
                                            case 105:
                                                break g;
                                            case 109:
                                                break f;
                                            case 115:
                                                break e;
                                            case 117:
                                                break d;
                                            case 120:
                                                break c;
                                            default:
                                        }
                                        break b;
                                    }
                                    if (!$pos)
                                        $rt_throw(jur_PatternSyntaxException__init_($rt_s(8), $this.$toString(), $this.$index));
                                    $pos = 0;
                                    break b;
                                }
                                $res = $pos ? $res | 1 : ($res ^ 1) & $res;
                                break b;
                            }
                            $res = $pos ? $res | 2 : ($res ^ 2) & $res;
                            break b;
                        }
                        $res = $pos ? $res | 8 : ($res ^ 8) & $res;
                        break b;
                    }
                    $res = $pos ? $res | 32 : ($res ^ 32) & $res;
                    break b;
                }
                $res = $pos ? $res | 64 : ($res ^ 64) & $res;
                break b;
            }
            $res = $pos ? $res | 4 : ($res ^ 4) & $res;
        }
        jur_Lexer_nextIndex($this);
    }
    jur_Lexer_nextIndex($this);
    return $res;
},
jur_Lexer_nextIndex = $this => {
    $this.$prevNW = $this.$index;
    if ($this.$flags0 & 4)
        jur_Lexer_skipComments($this);
    else
        $this.$index = $this.$index + 1 | 0;
    return $this.$prevNW;
},
jur_Lexer_skipComments = $this => {
    let $length;
    $length = $this.$pattern0.data.length - 2 | 0;
    $this.$index = $this.$index + 1 | 0;
    a: while (true) {
        if ($this.$index < $length && jl_Character_isWhitespace0($this.$pattern0.data[$this.$index])) {
            $this.$index = $this.$index + 1 | 0;
            continue;
        }
        if ($this.$index >= $length)
            break;
        if ($this.$pattern0.data[$this.$index] != 35)
            break;
        $this.$index = $this.$index + 1 | 0;
        while (true) {
            if ($this.$index >= $length)
                continue a;
            if (jur_Lexer_isLineSeparator($this, $this.$pattern0.data[$this.$index]))
                continue a;
            $this.$index = $this.$index + 1 | 0;
        }
    }
    return $this.$index;
},
jur_Lexer_isLineSeparator = ($this, $ch) => {
    return !($ch != 10 && $ch != 13 && $ch != 133 && ($ch | 1) != 8233) ? 1 : 0;
},
jur_Lexer_getDecomposition = $ch => {
    return jur_Lexer_decompTable.$get6($ch);
},
jur_Lexer_getHangulDecomposition = $ch => {
    let $sIndex, $l, $v, $t, $decomp, var$7;
    $sIndex = $ch - 44032 | 0;
    if ($sIndex >= 0 && $sIndex < 11172) {
        $l = 4352 + ($sIndex / 588 | 0) | 0;
        $v = 4449 + (($sIndex % 588 | 0) / 28 | 0) | 0;
        $t = $sIndex % 28 | 0;
        if (!$t)
            $decomp = $rt_createIntArrayFromData([$l, $v]);
        else {
            var$7 = 4519 + $t | 0;
            $decomp = $rt_createIntArrayFromData([$l, $v, var$7]);
        }
        return $decomp;
    }
    return null;
},
jur_Lexer_hasSingleCodepointDecomposition = $ch => {
    let $hasSingleDecomp;
    $hasSingleDecomp = jur_Lexer_singleDecompTable.$get3($ch);
    return $hasSingleDecomp == jur_Lexer_singleDecompTableSize ? 0 : 1;
},
jur_Lexer_hasDecompositionNonNullCanClass = $ch => {
    return ($ch != 832 ? 0 : 1) | ($ch != 833 ? 0 : 1) | ($ch != 835 ? 0 : 1) | ($ch != 836 ? 0 : 1);
},
jur_Lexer_nextCodePoint = $this => {
    let $high, $lowExpectedIndex, $low;
    $high = $this.$pattern0.data[jur_Lexer_nextIndex($this)];
    if (jl_Character_isHighSurrogate($high)) {
        $lowExpectedIndex = $this.$prevNW + 1 | 0;
        if ($lowExpectedIndex < $this.$pattern0.data.length) {
            $low = $this.$pattern0.data[$lowExpectedIndex];
            if (jl_Character_isLowSurrogate($low)) {
                jur_Lexer_nextIndex($this);
                return jl_Character_toCodePoint($high, $low);
            }
        }
    }
    return $high;
},
jur_Lexer_getIndex = $this => {
    return $this.$curToc;
},
jur_AbstractCharClass$LazySpecialsBlock = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazySpecialsBlock__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazySpecialsBlock__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazySpecialsBlock();
    jur_AbstractCharClass$LazySpecialsBlock__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazySpecialsBlock_computeValue = $this => {
    return ((jur_CharClass__init_()).$add0(65279, 65279)).$add0(65520, 65533);
},
jur_AbstractCharClass$LazyNonSpace = $rt_classWithoutFields(jur_AbstractCharClass$LazySpace),
jur_AbstractCharClass$LazyNonSpace__init_ = $this => {
    jur_AbstractCharClass$LazySpace__init_($this);
},
jur_AbstractCharClass$LazyNonSpace__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyNonSpace();
    jur_AbstractCharClass$LazyNonSpace__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyNonSpace_computeValue = $this => {
    let $chCl;
    $chCl = (jur_AbstractCharClass$LazySpace_computeValue($this)).$setNegative(1);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
};
function eycdaca_AceEditorCursorPosition() {
    let a = this; jl_Object.call(a);
    a.$row = 0;
    a.$column = 0;
}
let eycdaca_AceEditorCursorPosition__init_0 = ($this, $row, $column) => {
    jl_Object__init_($this);
    $this.$row = $row;
    $this.$column = $column;
},
eycdaca_AceEditorCursorPosition__init_ = (var_0, var_1) => {
    let var_2 = new eycdaca_AceEditorCursorPosition();
    eycdaca_AceEditorCursorPosition__init_0(var_2, var_0, var_1);
    return var_2;
},
eycdaca_AceEditorCursorPosition_getRow = $this => {
    return $this.$row;
},
eycdaca_AceEditorCursorPosition_getColumn = $this => {
    return $this.$column;
},
eycdaca_AceEditorCursorPosition_create = ($row, $column) => {
    return eycdaca_AceEditorCursorPosition__init_($row, $column);
},
eycdaca_AceEditorCursorPosition_toJsObject = $this => {
    return cggcc_JavaScriptObject_of(eycdaca_AceEditorCursorPosition_toJsObjectNative$js_body$_6($this.$row, $this.$column));
},
eycdaca_AceEditorCursorPosition_toJsObjectNative$js_body$_6 = (var$1, var$2) => {
    return { row: var$1, column: var$2 };
};
function eycdaca_AceCompletionValue() {
    let a = this; eycdaca_AceCompletion.call(a);
    a.$caption = null;
    a.$value2 = null;
    a.$meta = null;
    a.$score = 0;
    a.$tooltip = null;
}
let eycdaca_AceCompletionValue__init_ = ($this, var$1, var$2, $meta, $score) => {
    eycdaca_AceCompletion__init_($this);
    $this.$caption = var$1;
    $this.$value2 = var$2;
    $this.$meta = $meta;
    $this.$tooltip = null;
    $this.$score = $score;
},
eycdaca_AceCompletionValue__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new eycdaca_AceCompletionValue();
    eycdaca_AceCompletionValue__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
eycdaca_AceCompletionValue_toJsObject = $this => {
    return cggcc_JavaScriptObject_of(eycdaca_AceCompletionValue_toJsObjectNative$js_body$_3($rt_ustr($this.$caption), $rt_ustr($this.$value2), $this.$score, $rt_ustr($this.$meta), $rt_ustr($this.$tooltip)));
},
eycdaca_AceCompletionValue_toJsObjectNative$js_body$_3 = (var$1, var$2, var$3, var$4, var$5) => {
    return { caption: var$1, value: var$2, score: var$3, meta: var$4, aceGwtHtmlTooltip: var$5 };
};
function ju_Arrays$ArrayAsList() {
    ju_AbstractList.call(this);
    this.$array1 = null;
}
let ju_Arrays$ArrayAsList__init_ = ($this, var$1) => {
    ju_AbstractList__init_($this);
    $this.$array1 = var$1;
},
ju_Arrays$ArrayAsList__init_0 = var_0 => {
    let var_1 = new ju_Arrays$ArrayAsList();
    ju_Arrays$ArrayAsList__init_(var_1, var_0);
    return var_1;
},
ju_Arrays$ArrayAsList_get = ($this, $index) => {
    return $this.$array1.data[$index];
},
ju_Arrays$ArrayAsList_size = $this => {
    return $this.$array1.data.length;
},
ju_Collections = $rt_classWithoutFields(),
ju_Collections_EMPTY_SET = null,
ju_Collections_EMPTY_MAP = null,
ju_Collections_EMPTY_LIST = null,
ju_Collections_EMPTY_ITERATOR = null,
ju_Collections_EMPTY_LIST_ITERATOR = null,
ju_Collections_reverseOrder = null,
ju_Collections_$callClinit = () => {
    ju_Collections_$callClinit = $rt_eraseClinit(ju_Collections);
    ju_Collections__clinit_();
},
ju_Collections_emptyMap = () => {
    ju_Collections_$callClinit();
    return ju_Collections_EMPTY_MAP;
},
ju_Collections_unmodifiableMap = $m => {
    ju_Collections_$callClinit();
    ju_Objects_requireNonNull($m);
    return ju_Collections$13__init_0($m);
},
ju_Collections__clinit_ = () => {
    ju_Collections_EMPTY_SET = ju_Collections$1__init_0();
    ju_Collections_EMPTY_MAP = ju_Collections$2__init_0();
    ju_Collections_EMPTY_LIST = ju_Collections$3__init_0();
    ju_Collections_EMPTY_ITERATOR = ju_Collections$4__init_0();
    ju_Collections_EMPTY_LIST_ITERATOR = ju_Collections$5__init_0();
    ju_Collections_reverseOrder = ju_Collections$_clinit_$lambda$_59_0__init_0();
};
$rt_packages([-1, "java", 0, "util", 1, "regex", 0, "lang"
]);
$rt_metadata([jl_Object, "Object", 3, 0, [], 1, 0, 0, ["$getClass", $rt_wrapFunction0(jl_Object_getClass), "$hashCode0", $rt_wrapFunction0(jl_Object_hashCode), "$equals", $rt_wrapFunction1(jl_Object_equals), "$toString", $rt_wrapFunction0(jl_Object_toString), "$identity", $rt_wrapFunction0(jl_Object_identity), "$clone0", $rt_wrapFunction0(jl_Object_clone)],
jur_AbstractCharClass$LazyCharClass, 0, jl_Object, [], 1024, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyCharClass__init_), "$getValue0", $rt_wrapFunction1(jur_AbstractCharClass$LazyCharClass_getValue)],
jur_AbstractCharClass$LazyBlank, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyBlank__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyBlank_computeValue)],
jur_AbstractCharClass$LazyCntrl, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyCntrl__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyCntrl_computeValue)],
ji_Serializable, 0, jl_Object, [], 1537, 0, 0, 0,
jl_Number, 0, jl_Object, [ji_Serializable], 1025, 0, 0, ["$_init_", $rt_wrapFunction0(jl_Number__init_)],
jl_Comparable, 0, jl_Object, [], 1537, 0, 0, 0,
jl_Integer, 0, jl_Number, [jl_Comparable], 1, 0, () => jl_Integer_$callClinit(), ["$_init_0", $rt_wrapFunction1(jl_Integer__init_), "$intValue", $rt_wrapFunction0(jl_Integer_intValue), "$hashCode0", $rt_wrapFunction0(jl_Integer_hashCode), "$equals", $rt_wrapFunction1(jl_Integer_equals)],
iic_NativeHandle, 0, jl_Object, [], 1537, 0, 0, 0,
cggcc_JavaScriptObject, 0, jl_Object, [iic_NativeHandle], 1, 0, () => cggcc_JavaScriptObject_$callClinit(), ["$_init_2", $rt_wrapFunction1(cggcc_JavaScriptObject__init_), "$unwrap0", $rt_wrapFunction0(cggcc_JavaScriptObject_unwrap)],
cggdc_Node, 0, cggcc_JavaScriptObject, [], 1025, 0, 0, ["$_init_", $rt_wrapFunction0(cggdc_Node__init_)],
cggdc_Text, 0, cggdc_Node, [], 1, 0, 0, ["$_init_3", $rt_wrapFunction1(cggdc_Text__init_), "$unwrap", $rt_wrapFunction0(cggdc_Text_unwrap0), "$unwrap0", $rt_wrapFunction0(cggdc_Text_unwrap)],
jur_AbstractSet, 0, jl_Object, [], 1024, 0, () => jur_AbstractSet_$callClinit(), ["$_init_", $rt_wrapFunction0(jur_AbstractSet__init_), "$_init_11", $rt_wrapFunction1(jur_AbstractSet__init_0), "$find", $rt_wrapFunction3(jur_AbstractSet_find), "$findBack", $rt_wrapFunction4(jur_AbstractSet_findBack), "$setType", $rt_wrapFunction1(jur_AbstractSet_setType), "$getType0", $rt_wrapFunction0(jur_AbstractSet_getType), "$getNext", $rt_wrapFunction0(jur_AbstractSet_getNext), "$setNext", $rt_wrapFunction1(jur_AbstractSet_setNext),
"$first", $rt_wrapFunction1(jur_AbstractSet_first), "$processBackRefReplacement", $rt_wrapFunction0(jur_AbstractSet_processBackRefReplacement), "$processSecondPass", $rt_wrapFunction0(jur_AbstractSet_processSecondPass)],
jur_JointSet, 0, jur_AbstractSet, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_JointSet__init_), "$_init_34", $rt_wrapFunction2(jur_JointSet__init_0), "$matches", $rt_wrapFunction3(jur_JointSet_matches), "$setNext", $rt_wrapFunction1(jur_JointSet_setNext), "$first", $rt_wrapFunction1(jur_JointSet_first), "$hasConsumed", $rt_wrapFunction1(jur_JointSet_hasConsumed), "$processSecondPass", $rt_wrapFunction0(jur_JointSet_processSecondPass)],
jur_SingleSet, 0, jur_JointSet, [], 0, 0, 0, ["$_init_9", $rt_wrapFunction2(jur_SingleSet__init_), "$matches", $rt_wrapFunction3(jur_SingleSet_matches), "$find", $rt_wrapFunction3(jur_SingleSet_find), "$findBack", $rt_wrapFunction4(jur_SingleSet_findBack), "$first", $rt_wrapFunction1(jur_SingleSet_first), "$processBackRefReplacement", $rt_wrapFunction0(jur_SingleSet_processBackRefReplacement), "$processSecondPass", $rt_wrapFunction0(jur_SingleSet_processSecondPass)],
cggdc_Style, 0, jl_Object, [], 17, 0, 0, ["$_init_10", $rt_wrapFunction1(cggdc_Style__init_), "$setProperty", $rt_wrapFunction2(cggdc_Style_setProperty)],
eycdaca_AceRange, 0, cggcc_JavaScriptObject, [], 17, 0, 0, ["$detach", $rt_wrapFunction0(eycdaca_AceRange_detach), "$detachStart", $rt_wrapFunction0(eycdaca_AceRange_detachStart), "$detachEnd", $rt_wrapFunction0(eycdaca_AceRange_detachEnd)],
jur_AbstractCharClass$LazyAlpha, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyAlpha__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyAlpha_computeValue)],
cggucu_UIObject, 0, jl_Object, [], 1025, 0, 0, ["$_init_", $rt_wrapFunction0(cggucu_UIObject__init_), "$getElement", $rt_wrapFunction0(cggucu_UIObject_getElement), "$setElement", $rt_wrapFunction1(cggucu_UIObject_setElement)],
cgguc_EventListener, 0, jl_Object, [], 1537, 0, 0, 0,
cggucu_IsWidget, 0, jl_Object, [], 1537, 0, 0, 0,
cgges_HasHandlers, 0, jl_Object, [], 1537, 0, 0, 0,
cggedc_HasClickHandlers, 0, jl_Object, [cgges_HasHandlers], 1537, 0, 0, 0,
cggedc_HasDoubleClickHandlers, 0, jl_Object, [cgges_HasHandlers], 1537, 0, 0, 0,
cggels_HasAttachHandlers, 0, jl_Object, [cgges_HasHandlers], 1537, 0, 0, 0,
cggucu_Widget, 0, cggucu_UIObject, [cgguc_EventListener, cggucu_IsWidget, cgges_HasHandlers, cggedc_HasClickHandlers, cggedc_HasDoubleClickHandlers, cggels_HasAttachHandlers], 1, 0, 0, ["$_init_", $rt_wrapFunction0(cggucu_Widget__init_), "$getParent", $rt_wrapFunction0(cggucu_Widget_getParent), "$setParent", $rt_wrapFunction1(cggucu_Widget_setParent), "$isAttached", $rt_wrapFunction0(cggucu_Widget_isAttached), "$onBrowserEvent", $rt_wrapFunction1(cggucu_Widget_onBrowserEvent), "$onAttach", $rt_wrapFunction0(cggucu_Widget_onAttach),
"$onDetach", $rt_wrapFunction0(cggucu_Widget_onDetach), "$doAttachChildren", $rt_wrapFunction0(cggucu_Widget_doAttachChildren), "$doDetachChildren", $rt_wrapFunction0(cggucu_Widget_doDetachChildren), "$onLoad", $rt_wrapFunction0(cggucu_Widget_onLoad), "$onUnload", $rt_wrapFunction0(cggucu_Widget_onUnload), "$removeFromParent", $rt_wrapFunction0(cggucu_Widget_removeFromParent), "$fireEvent", $rt_wrapFunction1(cggucu_Widget_fireEvent)],
cggucu_Composite, 0, cggucu_Widget, [], 1025, 0, 0, ["$_init_", $rt_wrapFunction0(cggucu_Composite__init_), "$initWidget", $rt_wrapFunction1(cggucu_Composite_initWidget), "$onAttach", $rt_wrapFunction0(cggucu_Composite_onAttach), "$onDetach", $rt_wrapFunction0(cggucu_Composite_onDetach), "$fireEvent", $rt_wrapFunction1(cggucu_Composite_fireEvent)],
cggucu_RequiresResize, 0, jl_Object, [], 1537, 0, 0, 0,
cggucu_HasText, 0, jl_Object, [], 1537, 0, 0, 0,
cgguc_TakesValue, 0, jl_Object, [], 1537, 0, 0, 0,
eycdaca_AceEditor, 0, cggucu_Composite, [cggucu_RequiresResize, cggucu_HasText, cgguc_TakesValue], 1, 0, () => eycdaca_AceEditor_$callClinit(), ["$setSize", $rt_wrapFunction2(eycdaca_AceEditor_setSize), "$_init_", $rt_wrapFunction0(eycdaca_AceEditor__init_), "$startEditor", $rt_wrapFunction0(eycdaca_AceEditor_startEditor), "$redisplay", $rt_wrapFunction0(eycdaca_AceEditor_redisplay), "$destroy", $rt_wrapFunction0(eycdaca_AceEditor_destroy), "$setThemeByName", $rt_wrapFunction1(eycdaca_AceEditor_setThemeByName),
"$setModeByName", $rt_wrapFunction1(eycdaca_AceEditor_setModeByName), "$addOnChangeHandler", $rt_wrapFunction1(eycdaca_AceEditor_addOnChangeHandler), "$addOnCursorPositionChangeHandler", $rt_wrapFunction1(eycdaca_AceEditor_addOnCursorPositionChangeHandler), "$setFontSize", $rt_wrapFunction1(eycdaca_AceEditor_setFontSize), "$getText", $rt_wrapFunction0(eycdaca_AceEditor_getText), "$focus", $rt_wrapFunction0(eycdaca_AceEditor_focus), "$getLineCount", $rt_wrapFunction0(eycdaca_AceEditor_getLineCount), "$setText",
$rt_wrapFunction1(eycdaca_AceEditor_setText), "$getLine", $rt_wrapFunction1(eycdaca_AceEditor_getLine), "$getCursorPosition", $rt_wrapFunction0(eycdaca_AceEditor_getCursorPosition), "$getIndexFromPosition", $rt_wrapFunction1(eycdaca_AceEditor_getIndexFromPosition), "$getPositionFromIndex", $rt_wrapFunction1(eycdaca_AceEditor_getPositionFromIndex), "$setUseSoftTabs", $rt_wrapFunction1(eycdaca_AceEditor_setUseSoftTabs), "$setTabSize", $rt_wrapFunction1(eycdaca_AceEditor_setTabSize), "$gotoLine", $rt_wrapFunction1(eycdaca_AceEditor_gotoLine),
"$setReadOnly", $rt_wrapFunction1(eycdaca_AceEditor_setReadOnly), "$setShowPrintMargin", $rt_wrapFunction1(eycdaca_AceEditor_setShowPrintMargin), "$addAnnotation", $rt_wrapFunction4(eycdaca_AceEditor_addAnnotation), "$setAnnotations", $rt_wrapFunction0(eycdaca_AceEditor_setAnnotations), "$clearAnnotations", $rt_wrapFunction0(eycdaca_AceEditor_clearAnnotations), "$execCommand0", $rt_wrapFunction1(eycdaca_AceEditor_execCommand0), "$execCommand", $rt_wrapFunction2(eycdaca_AceEditor_execCommand), "$removeCommandByName",
$rt_wrapFunction1(eycdaca_AceEditor_removeCommandByName), "$getCommandDescription", $rt_wrapFunction1(eycdaca_AceEditor_getCommandDescription), "$listCommands", $rt_wrapFunction0(eycdaca_AceEditor_listCommands), "$addCommand", $rt_wrapFunction1(eycdaca_AceEditor_addCommand), "$onResize", $rt_wrapFunction0(eycdaca_AceEditor_onResize), "$setAutocompleteEnabled", $rt_wrapFunction1(eycdaca_AceEditor_setAutocompleteEnabled), "$addMarker0", $rt_wrapFunction4(eycdaca_AceEditor_addMarker), "$addFloatingMarker", $rt_wrapFunction3(eycdaca_AceEditor_addFloatingMarker),
"$removeMarker", $rt_wrapFunction1(eycdaca_AceEditor_removeMarker), "$getMarkers", $rt_wrapFunction0(eycdaca_AceEditor_getMarkers), "$removeAllMarkers", $rt_wrapFunction0(eycdaca_AceEditor_removeAllMarkers), "$getSelection", $rt_wrapFunction0(eycdaca_AceEditor_getSelection), "$unwrapEditor", $rt_wrapFunction0(eycdaca_AceEditor_unwrapEditor), "$onUnload", $rt_wrapFunction0(eycdaca_AceEditor_onUnload)],
eycdaca_AceCommandDescription$ExecAction, 0, jl_Object, [], 1537, 0, 0, 0,
eycdaca_AceCommandDescription$1, 0, jl_Object, [eycdaca_AceCommandDescription$ExecAction], 0, 0, 0, ["$_init_46", $rt_wrapFunction1(eycdaca_AceCommandDescription$1__init_), "$exec", $rt_wrapFunction1(eycdaca_AceCommandDescription$1_exec)],
jur_BackReferencedSingleSet, 0, jur_SingleSet, [], 0, 0, 0, ["$_init_5", $rt_wrapFunction1(jur_BackReferencedSingleSet__init_), "$find", $rt_wrapFunction3(jur_BackReferencedSingleSet_find), "$findBack", $rt_wrapFunction4(jur_BackReferencedSingleSet_findBack), "$processBackRefReplacement", $rt_wrapFunction0(jur_BackReferencedSingleSet_processBackRefReplacement)],
cggdc_Element, 0, cggdc_Node, [], 1, 0, 0, ["$_init_10", $rt_wrapFunction1(cggdc_Element__init_), "$unwrap1", $rt_wrapFunction0(cggdc_Element_unwrap), "$getStyle", $rt_wrapFunction0(cggdc_Element_getStyle), "$setId", $rt_wrapFunction1(cggdc_Element_setId), "$appendChild", $rt_wrapFunction1(cggdc_Element_appendChild), "$removeFromParent", $rt_wrapFunction0(cggdc_Element_removeFromParent), "$unwrap0", $rt_wrapFunction0(cggdc_Element_unwrap0)],
cggdc_TextAreaElement, 0, cggdc_Element, [], 1, 0, 0, ["$_init_10", $rt_wrapFunction1(cggdc_TextAreaElement__init_)],
jur_AbstractCharClass$LazyWord, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyWord__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyWord_computeValue)],
jur_AbstractCharClass$LazyNonWord, 0, jur_AbstractCharClass$LazyWord, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonWord__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonWord_computeValue)],
jur_LeafSet, 0, jur_AbstractSet, [], 1024, 0, 0, ["$_init_11", $rt_wrapFunction1(jur_LeafSet__init_0), "$_init_", $rt_wrapFunction0(jur_LeafSet__init_), "$matches", $rt_wrapFunction3(jur_LeafSet_matches), "$charCount", $rt_wrapFunction0(jur_LeafSet_charCount), "$hasConsumed", $rt_wrapFunction1(jur_LeafSet_hasConsumed)],
jur_CISequenceSet, 0, jur_LeafSet, [], 0, 0, 0, ["$_init_52", $rt_wrapFunction1(jur_CISequenceSet__init_), "$accepts", $rt_wrapFunction2(jur_CISequenceSet_accepts)],
jl_Enum, 0, jl_Object, [jl_Comparable, ji_Serializable], 1025, 0, 0, ["$_init_12", $rt_wrapFunction2(jl_Enum__init_), "$name", $rt_wrapFunction0(jl_Enum_name), "$equals", $rt_wrapFunction1(jl_Enum_equals)],
eycdaca_AceCommandDescription$ScrollIntoView, 0, jl_Enum, [], 65553, 0, () => eycdaca_AceCommandDescription$ScrollIntoView_$callClinit(), 0,
cgwbes_Event, 0, jl_Object, [], 1025, 0, 0, ["$_init_", $rt_wrapFunction0(cgwbes_Event__init_)],
cgges_GwtEvent, 0, cgwbes_Event, [], 1025, 0, 0, ["$_init_", $rt_wrapFunction0(cgges_GwtEvent__init_)],
cggedc_DomEvent, 0, cgges_GwtEvent, [], 1025, 0, () => cggedc_DomEvent_$callClinit(), 0,
jl_CharSequence, 0, jl_Object, [], 1537, 0, 0, 0,
ju_Map, 0, jl_Object, [], 1537, 0, 0, ["$computeIfAbsent", $rt_wrapFunction2(ju_Map_computeIfAbsent)],
ju_SequencedMap, 0, jl_Object, [ju_Map], 1537, 0, 0, ["$computeIfAbsent", $rt_wrapFunction2(ju_Map_computeIfAbsent)],
juf_Predicate, 0, jl_Object, [], 1537, 0, 0, 0,
cggucu_RootPanel$detachNow$lambda$_6_1, 0, jl_Object, [juf_Predicate], 1, 0, 0, ["$_init_17", $rt_wrapFunction1(cggucu_RootPanel$detachNow$lambda$_6_1__init_), "$test0", $rt_wrapFunction1(cggucu_RootPanel$detachNow$lambda$_6_1_test0), "$test", $rt_wrapFunction1(cggucu_RootPanel$detachNow$lambda$_6_1_test)]]);
$rt_metadata([cggucu_RootPanel$detachNow$lambda$_6_0, 0, jl_Object, [juf_Predicate], 1, 0, 0, ["$_init_17", $rt_wrapFunction1(cggucu_RootPanel$detachNow$lambda$_6_0__init_), "$test0", $rt_wrapFunction1(cggucu_RootPanel$detachNow$lambda$_6_0_test0), "$test", $rt_wrapFunction1(cggucu_RootPanel$detachNow$lambda$_6_0_test)],
jl_Throwable, 0, jl_Object, [], 1, 0, 0, ["$fillInStackTrace", $rt_wrapFunction0(jl_Throwable_fillInStackTrace), "$getMessage", $rt_wrapFunction0(jl_Throwable_getMessage), "$getCause", $rt_wrapFunction0(jl_Throwable_getCause), "$addSuppressed", $rt_wrapFunction1(jl_Throwable_addSuppressed)],
jl_Exception, 0, jl_Throwable, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jl_Exception__init_), "$_init_13", $rt_wrapFunction2(jl_Exception__init_1), "$_init_1", $rt_wrapFunction1(jl_Exception__init_0)],
jl_RuntimeException, 0, jl_Exception, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jl_RuntimeException__init_), "$_init_13", $rt_wrapFunction2(jl_RuntimeException__init_1), "$_init_1", $rt_wrapFunction1(jl_RuntimeException__init_0)],
ju_MissingResourceException, 0, jl_RuntimeException, [], 1, 0, 0, ["$_init_29", $rt_wrapFunction3(ju_MissingResourceException__init_)],
jl_IndexOutOfBoundsException, 0, jl_RuntimeException, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jl_IndexOutOfBoundsException__init_1), "$_init_1", $rt_wrapFunction1(jl_IndexOutOfBoundsException__init_0)],
jl_StringIndexOutOfBoundsException, 0, jl_IndexOutOfBoundsException, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jl_StringIndexOutOfBoundsException__init_0)],
jl_Iterable, 0, jl_Object, [], 1537, 0, 0, 0,
cggucu_HasWidgets, 0, jl_Object, [jl_Iterable], 1537, 0, 0, 0,
cggucu_Panel, 0, cggucu_Widget, [cggucu_HasWidgets], 1025, 0, 0, ["$_init_", $rt_wrapFunction0(cggucu_Panel__init_), "$adopt", $rt_wrapFunction1(cggucu_Panel_adopt), "$doAttachChildren", $rt_wrapFunction0(cggucu_Panel_doAttachChildren), "$doDetachChildren", $rt_wrapFunction0(cggucu_Panel_doDetachChildren), "$orphan", $rt_wrapFunction1(cggucu_Panel_orphan)],
cggucu_IndexedPanel, 0, jl_Object, [], 1537, 0, 0, 0,
cggucu_IndexedPanel$ForIsWidget, 0, jl_Object, [cggucu_IndexedPanel], 1537, 0, 0, 0,
cggucu_ComplexPanel, 0, cggucu_Panel, [cggucu_IndexedPanel$ForIsWidget], 1025, 0, 0, ["$_init_", $rt_wrapFunction0(cggucu_ComplexPanel__init_), "$getChildren", $rt_wrapFunction0(cggucu_ComplexPanel_getChildren), "$add4", $rt_wrapFunction1(cggucu_ComplexPanel_add), "$add3", $rt_wrapFunction2(cggucu_ComplexPanel_add0), "$remove0", $rt_wrapFunction1(cggucu_ComplexPanel_remove), "$getWidget", $rt_wrapFunction1(cggucu_ComplexPanel_getWidget), "$getWidgetCount", $rt_wrapFunction0(cggucu_ComplexPanel_getWidgetCount),
"$iterator", $rt_wrapFunction0(cggucu_ComplexPanel_iterator)],
cggucu_RootPanel, 0, cggucu_ComplexPanel, [], 17, 0, () => cggucu_RootPanel_$callClinit(), 0,
jur_CIBackReferenceSet, 0, jur_JointSet, [], 0, 0, 0, ["$_init_19", $rt_wrapFunction2(jur_CIBackReferenceSet__init_), "$matches", $rt_wrapFunction3(jur_CIBackReferenceSet_matches), "$setNext", $rt_wrapFunction1(jur_CIBackReferenceSet_setNext), "$getString", $rt_wrapFunction1(jur_CIBackReferenceSet_getString), "$hasConsumed", $rt_wrapFunction1(jur_CIBackReferenceSet_hasConsumed)],
jur_UCIBackReferenceSet, 0, jur_CIBackReferenceSet, [], 0, 0, 0, ["$_init_19", $rt_wrapFunction2(jur_UCIBackReferenceSet__init_), "$matches", $rt_wrapFunction3(jur_UCIBackReferenceSet_matches)],
jur_AbstractCharClass$LazyCategory, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_30", $rt_wrapFunction2(jur_AbstractCharClass$LazyCategory__init_0), "$_init_31", $rt_wrapFunction3(jur_AbstractCharClass$LazyCategory__init_1), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyCategory_computeValue)],
otj_JSObject, 0, jl_Object, [], 1537, 0, 0, 0,
eycdaca_AceSelection$Changed, 0, jl_Object, [otj_JSObject], 1536, 0, 0, 0,
jur_QuantifierSet, 0, jur_AbstractSet, [], 1024, 0, 0, ["$_init_20", $rt_wrapFunction3(jur_QuantifierSet__init_), "$getInnerSet", $rt_wrapFunction0(jur_QuantifierSet_getInnerSet), "$first", $rt_wrapFunction1(jur_QuantifierSet_first), "$hasConsumed", $rt_wrapFunction1(jur_QuantifierSet_hasConsumed), "$processSecondPass", $rt_wrapFunction0(jur_QuantifierSet_processSecondPass)],
jur_DotAllQuantifierSet, 0, jur_QuantifierSet, [], 0, 0, 0, ["$_init_20", $rt_wrapFunction3(jur_DotAllQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_DotAllQuantifierSet_matches), "$find", $rt_wrapFunction3(jur_DotAllQuantifierSet_find)],
ju_Comparator, 0, jl_Object, [], 1537, 0, 0, 0,
jl_String$_clinit_$lambda$_118_0, 0, jl_Object, [ju_Comparator], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jl_String$_clinit_$lambda$_118_0__init_)],
jur_FSet, 0, jur_AbstractSet, [], 0, 0, () => jur_FSet_$callClinit(), ["$_init_0", $rt_wrapFunction1(jur_FSet__init_), "$matches", $rt_wrapFunction3(jur_FSet_matches), "$getGroupIndex", $rt_wrapFunction0(jur_FSet_getGroupIndex), "$hasConsumed", $rt_wrapFunction1(jur_FSet_hasConsumed)],
jur_BehindFSet, 0, jur_FSet, [], 0, 0, 0, ["$_init_0", $rt_wrapFunction1(jur_BehindFSet__init_), "$matches", $rt_wrapFunction3(jur_BehindFSet_matches)],
cggdc_Node$1, 0, cggdc_Node, [], 0, 0, 0, ["$_init_4", $rt_wrapFunction1(cggdc_Node$1__init_), "$unwrap3", $rt_wrapFunction0(cggdc_Node$1_unwrap), "$unwrap0", $rt_wrapFunction0(cggdc_Node$1_unwrap0)],
cggdc_ParagraphElement, 0, cggdc_Element, [], 1, 0, 0, ["$_init_10", $rt_wrapFunction1(cggdc_ParagraphElement__init_)],
jur_LowHighSurrogateRangeSet, 0, jur_JointSet, [], 0, 0, 0, ["$_init_61", $rt_wrapFunction1(jur_LowHighSurrogateRangeSet__init_), "$setNext", $rt_wrapFunction1(jur_LowHighSurrogateRangeSet_setNext), "$matches", $rt_wrapFunction3(jur_LowHighSurrogateRangeSet_matches)],
eycdaca_AceNative$Event, 0, jl_Object, [otj_JSObject], 1536, 0, 0, 0,
jur_GroupQuantifierSet, 0, jur_QuantifierSet, [], 0, 0, 0, ["$_init_20", $rt_wrapFunction3(jur_GroupQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_GroupQuantifierSet_matches)],
jur_ReluctantGroupQuantifierSet, 0, jur_GroupQuantifierSet, [], 0, 0, 0, ["$_init_20", $rt_wrapFunction3(jur_ReluctantGroupQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_ReluctantGroupQuantifierSet_matches)],
jl_ClassCastException, 0, jl_RuntimeException, [], 1, 0, 0, 0,
ju_AbstractMap, 0, jl_Object, [ju_Map], 1025, 0, 0, ["$computeIfAbsent", $rt_wrapFunction2(ju_Map_computeIfAbsent), "$_init_", $rt_wrapFunction0(ju_AbstractMap__init_), "$put", $rt_wrapFunction2(ju_AbstractMap_put)],
jl_Cloneable, 0, jl_Object, [], 1537, 0, 0, 0,
ju_HashMap, 0, ju_AbstractMap, [jl_Cloneable, ji_Serializable], 1, 0, 0, ["$computeIfAbsent", $rt_wrapFunction2(ju_Map_computeIfAbsent), "$newElementArray", $rt_wrapFunction1(ju_HashMap_newElementArray), "$_init_", $rt_wrapFunction0(ju_HashMap__init_1), "$_init_0", $rt_wrapFunction1(ju_HashMap__init_0), "$_init_21", $rt_wrapFunction2(ju_HashMap__init_2), "$get0", $rt_wrapFunction1(ju_HashMap_get), "$entryByKey", $rt_wrapFunction1(ju_HashMap_entryByKey), "$findNonNullKeyEntry", $rt_wrapFunction3(ju_HashMap_findNonNullKeyEntry),
"$findNullKeyEntry", $rt_wrapFunction0(ju_HashMap_findNullKeyEntry), "$isEmpty", $rt_wrapFunction0(ju_HashMap_isEmpty), "$keySet", $rt_wrapFunction0(ju_HashMap_keySet), "$put", $rt_wrapFunction2(ju_HashMap_put), "$rehash0", $rt_wrapFunction1(ju_HashMap_rehash0), "$rehash", $rt_wrapFunction0(ju_HashMap_rehash), "$remove1", $rt_wrapFunction1(ju_HashMap_remove), "$removeEntry", $rt_wrapFunction1(ju_HashMap_removeEntry), "$removeByKey", $rt_wrapFunction1(ju_HashMap_removeByKey), "$size", $rt_wrapFunction0(ju_HashMap_size),
"$values0", $rt_wrapFunction0(ju_HashMap_values)],
ju_LinkedHashMap, 0, ju_HashMap, [ju_SequencedMap], 1, 0, 0, ["$computeIfAbsent", $rt_wrapFunction2(ju_Map_computeIfAbsent), "$_init_", $rt_wrapFunction0(ju_LinkedHashMap__init_), "$_init_0", $rt_wrapFunction1(ju_LinkedHashMap__init_0), "$newElementArray", $rt_wrapFunction1(ju_LinkedHashMap_newElementArray), "$put", $rt_wrapFunction2(ju_LinkedHashMap_put), "$putImpl0", $rt_wrapFunction4(ju_LinkedHashMap_putImpl), "$keySet", $rt_wrapFunction0(ju_LinkedHashMap_keySet), "$sequencedKeySet", $rt_wrapFunction0(ju_LinkedHashMap_sequencedKeySet),
"$remove1", $rt_wrapFunction1(ju_LinkedHashMap_remove), "$removeLinkedEntry", $rt_wrapFunction1(ju_LinkedHashMap_removeLinkedEntry), "$removeEldestEntry", $rt_wrapFunction1(ju_LinkedHashMap_removeEldestEntry)],
jur_PosPlusGroupQuantifierSet, 0, jur_GroupQuantifierSet, [], 0, 0, 0, ["$_init_20", $rt_wrapFunction3(jur_PosPlusGroupQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_PosPlusGroupQuantifierSet_matches)],
jl_AbstractStringBuilder, 0, jl_Object, [ji_Serializable, jl_CharSequence], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jl_AbstractStringBuilder__init_0), "$_init_0", $rt_wrapFunction1(jl_AbstractStringBuilder__init_), "$_init_1", $rt_wrapFunction1(jl_AbstractStringBuilder__init_2), "$_init_25", $rt_wrapFunction1(jl_AbstractStringBuilder__init_1), "$append11", $rt_wrapFunction1(jl_AbstractStringBuilder_append4), "$append12", $rt_wrapFunction1(jl_AbstractStringBuilder_append2), "$insert0", $rt_wrapFunction2(jl_AbstractStringBuilder_insert1),
"$append13", $rt_wrapFunction1(jl_AbstractStringBuilder_append3), "$append1", $rt_wrapFunction2(jl_AbstractStringBuilder_append5), "$insert1", $rt_wrapFunction3(jl_AbstractStringBuilder_insert3), "$append4", $rt_wrapFunction1(jl_AbstractStringBuilder_append1), "$insert2", $rt_wrapFunction2(jl_AbstractStringBuilder_insert0), "$insert", $rt_wrapFunction2(jl_AbstractStringBuilder_insert2), "$ensureCapacity", $rt_wrapFunction1(jl_AbstractStringBuilder_ensureCapacity), "$toString", $rt_wrapFunction0(jl_AbstractStringBuilder_toString),
"$length", $rt_wrapFunction0(jl_AbstractStringBuilder_length), "$charAt", $rt_wrapFunction1(jl_AbstractStringBuilder_charAt), "$append3", $rt_wrapFunction3(jl_AbstractStringBuilder_append0), "$insert3", $rt_wrapFunction4(jl_AbstractStringBuilder_insert), "$append5", $rt_wrapFunction1(jl_AbstractStringBuilder_append), "$deleteCharAt0", $rt_wrapFunction1(jl_AbstractStringBuilder_deleteCharAt), "$delete", $rt_wrapFunction2(jl_AbstractStringBuilder_delete)],
jl_Appendable, 0, jl_Object, [], 1537, 0, 0, 0,
jl_StringBuffer, 0, jl_AbstractStringBuilder, [jl_Appendable], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jl_StringBuffer__init_), "$append8", $rt_wrapFunction1(jl_StringBuffer_append1), "$append6", $rt_wrapFunction3(jl_StringBuffer_append2), "$append9", $rt_wrapFunction1(jl_StringBuffer_append0), "$insert4", $rt_wrapFunction4(jl_StringBuffer_insert), "$insert5", $rt_wrapFunction2(jl_StringBuffer_insert2), "$insert3", $rt_wrapFunction4(jl_StringBuffer_insert1), "$append3", $rt_wrapFunction3(jl_StringBuffer_append),
"$charAt", $rt_wrapFunction1(jl_StringBuffer_charAt), "$length", $rt_wrapFunction0(jl_StringBuffer_length), "$toString", $rt_wrapFunction0(jl_StringBuffer_toString), "$ensureCapacity", $rt_wrapFunction1(jl_StringBuffer_ensureCapacity), "$insert2", $rt_wrapFunction2(jl_StringBuffer_insert0)],
jur_SpecialToken, 0, jl_Object, [], 1024, 0, 0, ["$_init_", $rt_wrapFunction0(jur_SpecialToken__init_)],
jur_AbstractCharClass, 0, jur_SpecialToken, [], 1024, 0, () => jur_AbstractCharClass_$callClinit(), ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass__init_), "$getBits", $rt_wrapFunction0(jur_AbstractCharClass_getBits), "$getLowHighSurrogates", $rt_wrapFunction0(jur_AbstractCharClass_getLowHighSurrogates), "$hasLowHighSurrogates", $rt_wrapFunction0(jur_AbstractCharClass_hasLowHighSurrogates), "$mayContainSupplCodepoints", $rt_wrapFunction0(jur_AbstractCharClass_mayContainSupplCodepoints), "$getInstance",
$rt_wrapFunction0(jur_AbstractCharClass_getInstance), "$getSurrogates", $rt_wrapFunction0(jur_AbstractCharClass_getSurrogates), "$getWithoutSurrogates", $rt_wrapFunction0(jur_AbstractCharClass_getWithoutSurrogates), "$hasUCI", $rt_wrapFunction0(jur_AbstractCharClass_hasUCI), "$setNegative", $rt_wrapFunction1(jur_AbstractCharClass_setNegative), "$isNegative", $rt_wrapFunction0(jur_AbstractCharClass_isNegative)],
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1, "AbstractCharClass$LazyJavaUnicodeIdentifierPart$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_47", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1_contains)],
jur_AbstractCharClass$PredefinedCharacterClasses, 0, jl_Object, [], 16, 0, () => jur_AbstractCharClass$PredefinedCharacterClasses_$callClinit(), ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$PredefinedCharacterClasses__init_), "$getObject", $rt_wrapFunction1(jur_AbstractCharClass$PredefinedCharacterClasses_getObject)],
cggdc_BodyElement, 0, cggdc_Element, [], 1, 0, 0, ["$_init_10", $rt_wrapFunction1(cggdc_BodyElement__init_)],
jur_AbstractCharClass$LazyDigit, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyDigit__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyDigit_computeValue)],
jur_AbstractCharClass$LazyJavaLetter, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLetter__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLetter_computeValue)],
jur_DecomposedCharSet, 0, jur_JointSet, [], 0, 0, 0, ["$_init_33", $rt_wrapFunction2(jur_DecomposedCharSet__init_), "$setNext", $rt_wrapFunction1(jur_DecomposedCharSet_setNext), "$matches", $rt_wrapFunction3(jur_DecomposedCharSet_matches), "$codePointAt", $rt_wrapFunction3(jur_DecomposedCharSet_codePointAt), "$first", $rt_wrapFunction1(jur_DecomposedCharSet_first), "$hasConsumed", $rt_wrapFunction1(jur_DecomposedCharSet_hasConsumed)],
jur_CIDecomposedCharSet, 0, jur_DecomposedCharSet, [], 0, 0, 0, ["$_init_33", $rt_wrapFunction2(jur_CIDecomposedCharSet__init_)],
cgguc_BrowserEventBridge$NativeHandler, 0, jl_Object, [otj_JSObject], 1536, 0, 0, 0]);
$rt_metadata([eycdaca_AceEditorCallback, 0, jl_Object, [], 1537, 0, 0, 0,
jur_AheadFSet, 0, jur_FSet, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AheadFSet__init_), "$matches", $rt_wrapFunction3(jur_AheadFSet_matches)],
jur_NonCapJointSet, 0, jur_JointSet, [], 0, 0, 0, ["$_init_34", $rt_wrapFunction2(jur_NonCapJointSet__init_), "$matches", $rt_wrapFunction3(jur_NonCapJointSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_NonCapJointSet_hasConsumed)],
jur_AtomicJointSet, 0, jur_NonCapJointSet, [], 0, 0, 0, ["$_init_34", $rt_wrapFunction2(jur_AtomicJointSet__init_), "$matches", $rt_wrapFunction3(jur_AtomicJointSet_matches), "$setNext", $rt_wrapFunction1(jur_AtomicJointSet_setNext)],
jur_PositiveLookAhead, 0, jur_AtomicJointSet, [], 0, 0, 0, ["$_init_34", $rt_wrapFunction2(jur_PositiveLookAhead__init_), "$matches", $rt_wrapFunction3(jur_PositiveLookAhead_matches), "$hasConsumed", $rt_wrapFunction1(jur_PositiveLookAhead_hasConsumed)],
jur_NegativeLookAhead, 0, jur_AtomicJointSet, [], 0, 0, 0, ["$_init_34", $rt_wrapFunction2(jur_NegativeLookAhead__init_), "$matches", $rt_wrapFunction3(jur_NegativeLookAhead_matches), "$hasConsumed", $rt_wrapFunction1(jur_NegativeLookAhead_hasConsumed)],
jlr_Array, 0, jl_Object, [], 17, 0, 0, 0,
jur_AbstractCharClass$LazyJavaDigit, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaDigit__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaDigit_computeValue)],
ju_Collection, 0, jl_Object, [jl_Iterable], 1537, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf)],
ju_AbstractCollection, 0, jl_Object, [ju_Collection], 1025, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_", $rt_wrapFunction0(ju_AbstractCollection__init_), "$isEmpty", $rt_wrapFunction0(ju_AbstractCollection_isEmpty), "$contains0", $rt_wrapFunction1(ju_AbstractCollection_contains), "$toArray", $rt_wrapFunction1(ju_AbstractCollection_toArray), "$addAll", $rt_wrapFunction1(ju_AbstractCollection_addAll)],
otci_IntegerUtil, 0, jl_Object, [], 17, 0, 0, 0,
jur_LeafQuantifierSet, 0, jur_QuantifierSet, [], 0, 0, 0, ["$_init_37", $rt_wrapFunction3(jur_LeafQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_LeafQuantifierSet_matches)],
jur_AltQuantifierSet, 0, jur_LeafQuantifierSet, [], 0, 0, 0, ["$_init_37", $rt_wrapFunction3(jur_AltQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_AltQuantifierSet_matches), "$setNext", $rt_wrapFunction1(jur_AltQuantifierSet_setNext)],
jur_PossessiveAltQuantifierSet, 0, jur_AltQuantifierSet, [], 0, 0, 0, ["$_init_37", $rt_wrapFunction3(jur_PossessiveAltQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_PossessiveAltQuantifierSet_matches)],
eycdaca_AceCompletionCallback, 0, jl_Object, [], 1537, 0, 0, 0,
otji_JS, 0, jl_Object, [], 17, 0, 0, 0,
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1, "AbstractCharClass$LazyJavaUnicodeIdentifierStart$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_64", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1_contains)],
iiad_EditorDemo$create$lambda$_3_1, 0, jl_Object, [eycdaca_AceEditorCallback], 1, 0, 0, ["$_init_", $rt_wrapFunction0(iiad_EditorDemo$create$lambda$_3_1__init_), "$invokeAceCallback", $rt_wrapFunction1(iiad_EditorDemo$create$lambda$_3_1_invokeAceCallback)],
iiad_EditorDemo$create$lambda$_3_0, 0, jl_Object, [eycdaca_AceEditorCallback], 1, 0, 0, ["$_init_", $rt_wrapFunction0(iiad_EditorDemo$create$lambda$_3_0__init_), "$invokeAceCallback", $rt_wrapFunction1(iiad_EditorDemo$create$lambda$_3_0_invokeAceCallback)],
iiad_EditorDemo$create$lambda$_3_3, 0, jl_Object, [eycdaca_AceCommandDescription$ExecAction], 1, 0, 0, ["$_init_", $rt_wrapFunction0(iiad_EditorDemo$create$lambda$_3_3__init_), "$exec", $rt_wrapFunction1(iiad_EditorDemo$create$lambda$_3_3_exec)],
eycdaca_AceSelectionListener, 0, jl_Object, [], 1537, 0, 0, 0,
iiad_EditorDemo$create$lambda$_3_2, 0, jl_Object, [eycdaca_AceSelectionListener], 1, 0, 0, ["$_init_", $rt_wrapFunction0(iiad_EditorDemo$create$lambda$_3_2__init_), "$onChangeSelection", $rt_wrapFunction1(iiad_EditorDemo$create$lambda$_3_2_onChangeSelection)],
otciu_UnicodeHelper, 0, jl_Object, [], 17, 0, 0, 0,
cggdc_ButtonElement, 0, cggdc_Element, [], 1, 0, 0, ["$_init_10", $rt_wrapFunction1(cggdc_ButtonElement__init_)],
ju_Objects, 0, jl_Object, [], 17, 0, 0, 0,
cggdc_OptGroupElement, 0, cggdc_Element, [], 1, 0, 0, ["$_init_10", $rt_wrapFunction1(cggdc_OptGroupElement__init_)],
jur_AbstractCharClass$LazyAlnum, 0, jur_AbstractCharClass$LazyAlpha, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyAlnum__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyAlnum_computeValue)],
jur_AbstractCharClass$LazyGraph, 0, jur_AbstractCharClass$LazyAlnum, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyGraph__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyGraph_computeValue)],
jur_AbstractCharClass$LazyPrint, 0, jur_AbstractCharClass$LazyGraph, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyPrint__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyPrint_computeValue)],
jur_AbstractCharClass$LazyJavaSpaceChar, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaSpaceChar__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaSpaceChar_computeValue)],
jur_PositiveLookBehind, 0, jur_AtomicJointSet, [], 0, 0, 0, ["$_init_34", $rt_wrapFunction2(jur_PositiveLookBehind__init_), "$matches", $rt_wrapFunction3(jur_PositiveLookBehind_matches), "$hasConsumed", $rt_wrapFunction1(jur_PositiveLookBehind_hasConsumed)],
jur_SequenceSet, 0, jur_LeafSet, [], 0, 0, 0, ["$_init_52", $rt_wrapFunction1(jur_SequenceSet__init_), "$accepts", $rt_wrapFunction2(jur_SequenceSet_accepts), "$find", $rt_wrapFunction3(jur_SequenceSet_find), "$findBack", $rt_wrapFunction4(jur_SequenceSet_findBack), "$first", $rt_wrapFunction1(jur_SequenceSet_first), "$indexOf", $rt_wrapFunction3(jur_SequenceSet_indexOf), "$lastIndexOf", $rt_wrapFunction3(jur_SequenceSet_lastIndexOf), "$startsWith0", $rt_wrapFunction2(jur_SequenceSet_startsWith)],
jl_ArrayStoreException, 0, jl_RuntimeException, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jl_ArrayStoreException__init_0)],
cggucu_WidgetCollection, 0, jl_Object, [jl_Iterable], 1, 0, 0, ["$_init_14", $rt_wrapFunction1(cggucu_WidgetCollection__init_), "$add4", $rt_wrapFunction1(cggucu_WidgetCollection_add), "$insert6", $rt_wrapFunction2(cggucu_WidgetCollection_insert), "$indexOf0", $rt_wrapFunction1(cggucu_WidgetCollection_indexOf), "$get1", $rt_wrapFunction1(cggucu_WidgetCollection_get), "$remove2", $rt_wrapFunction1(cggucu_WidgetCollection_remove), "$remove5", $rt_wrapFunction1(cggucu_WidgetCollection_remove0), "$size", $rt_wrapFunction0(cggucu_WidgetCollection_size)],
ju_SequencedCollection, 0, jl_Object, [ju_Collection], 1537, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf)],
jur_AltGroupQuantifierSet, 0, jur_GroupQuantifierSet, [], 0, 0, 0, ["$_init_20", $rt_wrapFunction3(jur_AltGroupQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_AltGroupQuantifierSet_matches), "$setNext", $rt_wrapFunction1(jur_AltGroupQuantifierSet_setNext)],
jur_MatchResult, 0, jl_Object, [], 1537, 0, 0, 0,
jur_MatchResultImpl, 0, jl_Object, [jur_MatchResult], 0, 0, 0, ["$_init_82", function(var_1, var_2, var_3, var_4, var_5, var_6, var_7) { jur_MatchResultImpl__init_(this, var_1, var_2, var_3, var_4, var_5, var_6, var_7); }, "$setConsumed", $rt_wrapFunction2(jur_MatchResultImpl_setConsumed), "$getConsumed", $rt_wrapFunction1(jur_MatchResultImpl_getConsumed), "$end0", $rt_wrapFunction0(jur_MatchResultImpl_end), "$end", $rt_wrapFunction1(jur_MatchResultImpl_end0), "$setStart", $rt_wrapFunction2(jur_MatchResultImpl_setStart),
"$setEnd", $rt_wrapFunction2(jur_MatchResultImpl_setEnd), "$getStart", $rt_wrapFunction1(jur_MatchResultImpl_getStart), "$getEnd", $rt_wrapFunction1(jur_MatchResultImpl_getEnd), "$getGroupNoCheck", $rt_wrapFunction1(jur_MatchResultImpl_getGroupNoCheck), "$start0", $rt_wrapFunction0(jur_MatchResultImpl_start), "$start", $rt_wrapFunction1(jur_MatchResultImpl_start0), "$finalizeMatch", $rt_wrapFunction0(jur_MatchResultImpl_finalizeMatch), "$getEnterCounter", $rt_wrapFunction1(jur_MatchResultImpl_getEnterCounter),
"$setEnterCounter", $rt_wrapFunction2(jur_MatchResultImpl_setEnterCounter), "$setValid", $rt_wrapFunction0(jur_MatchResultImpl_setValid), "$isValid", $rt_wrapFunction0(jur_MatchResultImpl_isValid), "$reset", $rt_wrapFunction3(jur_MatchResultImpl_reset0), "$reset0", $rt_wrapFunction0(jur_MatchResultImpl_reset), "$setStartIndex", $rt_wrapFunction1(jur_MatchResultImpl_setStartIndex), "$getLeftBound", $rt_wrapFunction0(jur_MatchResultImpl_getLeftBound), "$getRightBound", $rt_wrapFunction0(jur_MatchResultImpl_getRightBound),
"$setMode", $rt_wrapFunction1(jur_MatchResultImpl_setMode), "$mode", $rt_wrapFunction0(jur_MatchResultImpl_mode), "$useAnchoringBounds", $rt_wrapFunction1(jur_MatchResultImpl_useAnchoringBounds), "$hasAnchoringBounds", $rt_wrapFunction0(jur_MatchResultImpl_hasAnchoringBounds), "$hasTransparentBounds", $rt_wrapFunction0(jur_MatchResultImpl_hasTransparentBounds), "$getPreviousMatchEnd", $rt_wrapFunction0(jur_MatchResultImpl_getPreviousMatchEnd)],
jur_UCIRangeSet, 0, jur_LeafSet, [], 0, 0, 0, ["$_init_61", $rt_wrapFunction1(jur_UCIRangeSet__init_), "$accepts", $rt_wrapFunction2(jur_UCIRangeSet_accepts)],
iiad_EditorDemo$Action, 0, jl_Object, [otj_JSObject], 1536, 0, 0, 0,
eycdaca_AceSelection$_init_$lambda$_0_0, 0, jl_Object, [eycdaca_AceSelection$Changed], 1, 0, 0, ["$_init_86", $rt_wrapFunction1(eycdaca_AceSelection$_init_$lambda$_0_0__init_), "$changed", $rt_wrapFunction0(eycdaca_AceSelection$_init_$lambda$_0_0_changed)],
juf_Function, 0, jl_Object, [], 1537, 0, 0, 0,
jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1, "AbstractCharClass$LazyJavaJavaIdentifierPart$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_41", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1_contains)],
otp_Platform, 0, jl_Object, [], 17, 0, 0, 0,
cggdc_SourceElement, 0, cggdc_Element, [], 1, 0, 0, ["$_init_10", $rt_wrapFunction1(cggdc_SourceElement__init_)],
ju_NoSuchElementException, 0, jl_RuntimeException, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(ju_NoSuchElementException__init_0)],
jlr_AnnotatedElement, 0, jl_Object, [], 1537, 0, 0, 0,
jlr_GenericDeclaration, 0, jl_Object, [jlr_AnnotatedElement], 1537, 0, 0, 0,
jur_NegativeLookBehind, 0, jur_AtomicJointSet, [], 0, 0, 0, ["$_init_34", $rt_wrapFunction2(jur_NegativeLookBehind__init_), "$matches", $rt_wrapFunction3(jur_NegativeLookBehind_matches), "$hasConsumed", $rt_wrapFunction1(jur_NegativeLookBehind_hasConsumed)],
eycdaca_AceAnnotation, 0, cggcc_JavaScriptObject, [], 0, 0, 0, 0]);
$rt_metadata([jur_BackReferenceSet, 0, jur_CIBackReferenceSet, [], 0, 0, 0, ["$_init_19", $rt_wrapFunction2(jur_BackReferenceSet__init_), "$matches", $rt_wrapFunction3(jur_BackReferenceSet_matches), "$find", $rt_wrapFunction3(jur_BackReferenceSet_find), "$findBack", $rt_wrapFunction4(jur_BackReferenceSet_findBack), "$first", $rt_wrapFunction1(jur_BackReferenceSet_first)],
jur_DotQuantifierSet, 0, jur_QuantifierSet, [], 0, 0, 0, ["$_init_56", $rt_wrapFunction4(jur_DotQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_DotQuantifierSet_matches), "$find", $rt_wrapFunction3(jur_DotQuantifierSet_find)],
jur_AbstractCharClass$LazyJavaJavaIdentifierPart, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaJavaIdentifierPart_computeValue)],
juf_Consumer, 0, jl_Object, [], 1537, 0, 0, 0,
cggucu_Panel$doDetachChildren$lambda$_8_0, 0, jl_Object, [juf_Consumer], 1, 0, 0, ["$_init_", $rt_wrapFunction0(cggucu_Panel$doDetachChildren$lambda$_8_0__init_), "$accept1", $rt_wrapFunction1(cggucu_Panel$doDetachChildren$lambda$_8_0_accept0), "$accept", $rt_wrapFunction1(cggucu_Panel$doDetachChildren$lambda$_8_0_accept)],
ju_HashMap$AbstractMapIterator, 0, jl_Object, [], 0, 0, 0, ["$_init_22", $rt_wrapFunction1(ju_HashMap$AbstractMapIterator__init_), "$hasNext", $rt_wrapFunction0(ju_HashMap$AbstractMapIterator_hasNext), "$checkConcurrentMod", $rt_wrapFunction0(ju_HashMap$AbstractMapIterator_checkConcurrentMod), "$makeNext", $rt_wrapFunction0(ju_HashMap$AbstractMapIterator_makeNext), "$remove4", $rt_wrapFunction0(ju_HashMap$AbstractMapIterator_remove)],
ju_Iterator, 0, jl_Object, [], 1537, 0, 0, 0,
ju_HashMap$ValueIterator, 0, ju_HashMap$AbstractMapIterator, [ju_Iterator], 0, 0, 0, ["$_init_22", $rt_wrapFunction1(ju_HashMap$ValueIterator__init_), "$next", $rt_wrapFunction0(ju_HashMap$ValueIterator_next)],
jur_UnifiedQuantifierSet, 0, jur_LeafQuantifierSet, [], 0, 0, 0, ["$_init_55", $rt_wrapFunction1(jur_UnifiedQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_UnifiedQuantifierSet_matches), "$find", $rt_wrapFunction3(jur_UnifiedQuantifierSet_find)],
jlr_Type, 0, jl_Object, [], 1537, 0, 0, 0,
jl_Class, 0, jl_Object, [jlr_GenericDeclaration, jlr_Type], 17, 0, 0, ["$getClassInfo", $rt_wrapFunction0(jl_Class_getClassInfo), "$isInstance", $rt_wrapFunction1(jl_Class_isInstance), "$isAssignableFrom", $rt_wrapFunction1(jl_Class_isAssignableFrom), "$getName", $rt_wrapFunction0(jl_Class_getName), "$isPrimitive", $rt_wrapFunction0(jl_Class_isPrimitive), "$getComponentType", $rt_wrapFunction0(jl_Class_getComponentType)],
ju_BitSet, 0, jl_Object, [jl_Cloneable, ji_Serializable], 1, 0, 0, ["$_init_", $rt_wrapFunction0(ju_BitSet__init_0), "$_init_0", $rt_wrapFunction1(ju_BitSet__init_), "$set0", $rt_wrapFunction1(ju_BitSet_set), "$set", $rt_wrapFunction2(ju_BitSet_set0), "$clear", $rt_wrapFunction1(ju_BitSet_clear0), "$clear0", $rt_wrapFunction2(ju_BitSet_clear), "$get4", $rt_wrapFunction1(ju_BitSet_get), "$nextSetBit", $rt_wrapFunction1(ju_BitSet_nextSetBit), "$nextClearBit", $rt_wrapFunction1(ju_BitSet_nextClearBit), "$intersects",
$rt_wrapFunction1(ju_BitSet_intersects), "$and", $rt_wrapFunction1(ju_BitSet_and), "$andNot", $rt_wrapFunction1(ju_BitSet_andNot), "$or", $rt_wrapFunction1(ju_BitSet_or), "$xor", $rt_wrapFunction1(ju_BitSet_xor), "$isEmpty", $rt_wrapFunction0(ju_BitSet_isEmpty)],
jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1, "AbstractCharClass$LazyJavaJavaIdentifierStart$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_74", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1_contains)],
ju_Arrays, 0, jl_Object, [], 1, 0, 0, 0,
otjdx_Node, 0, jl_Object, [otj_JSObject], 1537, 0, 0, 0,
otjdx_Document, 0, jl_Object, [otjdx_Node], 1537, 0, 0, 0,
jur_CharSet, 0, jur_LeafSet, [], 0, 0, 0, ["$_init_54", $rt_wrapFunction1(jur_CharSet__init_0), "$charCount", $rt_wrapFunction0(jur_CharSet_charCount), "$accepts", $rt_wrapFunction2(jur_CharSet_accepts), "$find", $rt_wrapFunction3(jur_CharSet_find), "$findBack", $rt_wrapFunction4(jur_CharSet_findBack), "$getChar", $rt_wrapFunction0(jur_CharSet_getChar), "$first", $rt_wrapFunction1(jur_CharSet_first)],
jur_CharClass$3, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_67", $rt_wrapFunction3(jur_CharClass$3__init_), "$contains", $rt_wrapFunction1(jur_CharClass$3_contains)],
jur_CharClass$4, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_65", $rt_wrapFunction4(jur_CharClass$4__init_), "$contains", $rt_wrapFunction1(jur_CharClass$4_contains)],
jur_CharClass$1, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_66", $rt_wrapFunction2(jur_CharClass$1__init_), "$contains", $rt_wrapFunction1(jur_CharClass$1_contains)],
jur_CharClass$2, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_67", $rt_wrapFunction3(jur_CharClass$2__init_), "$contains", $rt_wrapFunction1(jur_CharClass$2_contains)],
jur_CharClass$7, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_66", $rt_wrapFunction2(jur_CharClass$7__init_), "$contains", $rt_wrapFunction1(jur_CharClass$7_contains)],
cggdc_VideoElement, 0, cggdc_Element, [], 1, 0, 0, ["$_init_10", $rt_wrapFunction1(cggdc_VideoElement__init_)],
jur_CharClass$8, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_68", $rt_wrapFunction3(jur_CharClass$8__init_), "$contains", $rt_wrapFunction1(jur_CharClass$8_contains)],
jur_CharClass$5, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_65", $rt_wrapFunction4(jur_CharClass$5__init_), "$contains", $rt_wrapFunction1(jur_CharClass$5_contains)],
jur_CharClass$6, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_66", $rt_wrapFunction2(jur_CharClass$6__init_), "$contains", $rt_wrapFunction1(jur_CharClass$6_contains)],
ju_ListIterator, 0, jl_Object, [ju_Iterator], 1537, 0, 0, 0,
ju_Collections$5, 0, jl_Object, [ju_ListIterator], 0, 0, 0, ["$_init_", $rt_wrapFunction0(ju_Collections$5__init_)],
jur_DotSet, 0, jur_JointSet, [], 16, 0, 0, ["$_init_59", $rt_wrapFunction1(jur_DotSet__init_), "$matches", $rt_wrapFunction3(jur_DotSet_matches), "$setNext", $rt_wrapFunction1(jur_DotSet_setNext), "$getType0", $rt_wrapFunction0(jur_DotSet_getType), "$hasConsumed", $rt_wrapFunction1(jur_DotSet_hasConsumed)],
ju_List, 0, jl_Object, [ju_SequencedCollection], 1537, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf)],
ju_AbstractList, 0, ju_AbstractCollection, [ju_List], 1025, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_", $rt_wrapFunction0(ju_AbstractList__init_), "$iterator", $rt_wrapFunction0(ju_AbstractList_iterator)],
ju_RandomAccess, 0, jl_Object, [], 1537, 0, 0, 0,
ju_TemplateCollections$AbstractImmutableList, 0, ju_AbstractList, [ju_RandomAccess], 1024, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_", $rt_wrapFunction0(ju_TemplateCollections$AbstractImmutableList__init_)],
ju_Collections$3, 0, ju_TemplateCollections$AbstractImmutableList, [], 0, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_", $rt_wrapFunction0(ju_Collections$3__init_)],
jur_CharClass$9, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_68", $rt_wrapFunction3(jur_CharClass$9__init_), "$contains", $rt_wrapFunction1(jur_CharClass$9_contains)],
ju_Collections$4, 0, jl_Object, [ju_Iterator], 0, 0, 0, ["$_init_", $rt_wrapFunction0(ju_Collections$4__init_)],
jl_Character, 0, jl_Object, [jl_Comparable], 1, 0, () => jl_Character_$callClinit(), 0,
ju_Set, 0, jl_Object, [ju_Collection], 1537, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf)],
ju_AbstractSet, 0, ju_AbstractCollection, [ju_Set], 1025, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_", $rt_wrapFunction0(ju_AbstractSet__init_)],
ju_TemplateCollections$AbstractImmutableSet, 0, ju_AbstractSet, [], 1024, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_", $rt_wrapFunction0(ju_TemplateCollections$AbstractImmutableSet__init_)],
ju_Collections$1, 0, ju_TemplateCollections$AbstractImmutableSet, [], 0, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_", $rt_wrapFunction0(ju_Collections$1__init_)],
jur_CICharSet, 0, jur_LeafSet, [], 0, 0, 0, ["$_init_54", $rt_wrapFunction1(jur_CICharSet__init_0), "$accepts", $rt_wrapFunction2(jur_CICharSet_accepts)],
ju_TemplateCollections$AbstractImmutableMap, 0, ju_AbstractMap, [], 1024, 0, 0, ["$computeIfAbsent", $rt_wrapFunction2(ju_Map_computeIfAbsent), "$_init_", $rt_wrapFunction0(ju_TemplateCollections$AbstractImmutableMap__init_), "$put", $rt_wrapFunction2(ju_TemplateCollections$AbstractImmutableMap_put)],
ju_Collections$2, 0, ju_TemplateCollections$AbstractImmutableMap, [], 0, 0, 0, ["$computeIfAbsent", $rt_wrapFunction2(ju_Map_computeIfAbsent), "$_init_", $rt_wrapFunction0(ju_Collections$2__init_), "$size", $rt_wrapFunction0(ju_Collections$2_size), "$isEmpty", $rt_wrapFunction0(ju_Collections$2_isEmpty)],
jur_SupplCharSet, 0, jur_LeafSet, [], 0, 0, 0, ["$_init_0", $rt_wrapFunction1(jur_SupplCharSet__init_), "$accepts", $rt_wrapFunction2(jur_SupplCharSet_accepts), "$find", $rt_wrapFunction3(jur_SupplCharSet_find), "$findBack", $rt_wrapFunction4(jur_SupplCharSet_findBack), "$getCodePoint", $rt_wrapFunction0(jur_SupplCharSet_getCodePoint), "$first", $rt_wrapFunction1(jur_SupplCharSet_first)],
eycdaca_AceCommandArgs, 0, jl_Object, [], 1, 0, 0, 0,
otrr_ReflectionInfo, 0, jl_Object, [], 1025, 0, 0, 0,
jur_AbstractCharClass$LazyCategoryScope, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_30", $rt_wrapFunction2(jur_AbstractCharClass$LazyCategoryScope__init_1), "$_init_31", $rt_wrapFunction3(jur_AbstractCharClass$LazyCategoryScope__init_0), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyCategoryScope_computeValue)],
cgguc_BrowserEventBridge$setListener$lambda$_7_0, 0, jl_Object, [cgguc_BrowserEventBridge$NativeHandler], 1, 0, 0, ["$_init_71", $rt_wrapFunction1(cgguc_BrowserEventBridge$setListener$lambda$_7_0__init_), "$handle", $rt_wrapFunction1(cgguc_BrowserEventBridge$setListener$lambda$_7_0_handle)],
ju_SequencedSet, 0, jl_Object, [ju_SequencedCollection, ju_Set], 1537, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf)]]);
$rt_metadata([jur_AbstractLineTerminator, 0, jl_Object, [], 1024, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractLineTerminator__init_)],
iitm_ScriptModule$Presence, 0, jl_Object, [], 1537, 0, 0, 0,
eycdaca_AceResources$whenReady$lambda$_2_1, 0, jl_Object, [iitm_ScriptModule$Presence], 1, 0, 0, ["$_init_", $rt_wrapFunction0(eycdaca_AceResources$whenReady$lambda$_2_1__init_), "$isPresent", $rt_wrapFunction0(eycdaca_AceResources$whenReady$lambda$_2_1_isPresent)],
jur_AbstractCharClass$LazyJavaTitleCase$1, "AbstractCharClass$LazyJavaTitleCase$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_79", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaTitleCase$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaTitleCase$1_contains)],
jl_Runnable, 0, jl_Object, [], 1537, 0, 0, 0,
eycdaca_AceResources$whenReady$lambda$_2_0, 0, jl_Object, [jl_Runnable], 1, 0, 0, ["$_init_94", $rt_wrapFunction3(eycdaca_AceResources$whenReady$lambda$_2_0__init_), "$run", $rt_wrapFunction0(eycdaca_AceResources$whenReady$lambda$_2_0_run)],
ju_Collections$_clinit_$lambda$_59_0, 0, jl_Object, [ju_Comparator], 1, 0, 0, ["$_init_", $rt_wrapFunction0(ju_Collections$_clinit_$lambda$_59_0__init_)],
jur_AbstractCharClass$LazyJavaMirrored$1, "AbstractCharClass$LazyJavaMirrored$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_87", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaMirrored$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaMirrored$1_contains)],
cggucu_InsertPanel, 0, jl_Object, [], 1537, 0, 0, 0,
cggucu_InsertPanel$ForIsWidget, 0, jl_Object, [cggucu_InsertPanel], 1537, 0, 0, 0,
cggucu_FlowPanel, 0, cggucu_ComplexPanel, [cggucu_InsertPanel$ForIsWidget], 1, 0, 0, ["$_init_", $rt_wrapFunction0(cggucu_FlowPanel__init_0), "$_init_16", $rt_wrapFunction1(cggucu_FlowPanel__init_)],
ju_LinkedHashMapIterator, 0, jl_Object, [], 0, 0, 0, ["$_init_24", $rt_wrapFunction2(ju_LinkedHashMapIterator__init_), "$hasNext", $rt_wrapFunction0(ju_LinkedHashMapIterator_hasNext), "$checkConcurrentMod", $rt_wrapFunction0(ju_LinkedHashMapIterator_checkConcurrentMod), "$makeNext", $rt_wrapFunction0(ju_LinkedHashMapIterator_makeNext)],
jur_AbstractCharClass$LazyJavaISOControl$1, "AbstractCharClass$LazyJavaISOControl$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_88", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaISOControl$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaISOControl$1_contains)],
jur_UEOLSet, 0, jur_AbstractSet, [], 16, 0, 0, ["$_init_0", $rt_wrapFunction1(jur_UEOLSet__init_), "$matches", $rt_wrapFunction3(jur_UEOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_UEOLSet_hasConsumed)],
jur_UCICharSet, 0, jur_LeafSet, [], 0, 0, 0, ["$_init_54", $rt_wrapFunction1(jur_UCICharSet__init_), "$accepts", $rt_wrapFunction2(jur_UCICharSet_accepts)],
jur_AtomicFSet, 0, jur_FSet, [], 0, 0, 0, ["$_init_0", $rt_wrapFunction1(jur_AtomicFSet__init_), "$matches", $rt_wrapFunction3(jur_AtomicFSet_matches), "$getIndex", $rt_wrapFunction0(jur_AtomicFSet_getIndex), "$hasConsumed", $rt_wrapFunction1(jur_AtomicFSet_hasConsumed)],
jur_LowSurrogateCharSet, 0, jur_JointSet, [], 0, 0, 0, ["$_init_54", $rt_wrapFunction1(jur_LowSurrogateCharSet__init_0), "$setNext", $rt_wrapFunction1(jur_LowSurrogateCharSet_setNext), "$matches", $rt_wrapFunction3(jur_LowSurrogateCharSet_matches), "$find", $rt_wrapFunction3(jur_LowSurrogateCharSet_find), "$findBack", $rt_wrapFunction4(jur_LowSurrogateCharSet_findBack), "$first", $rt_wrapFunction1(jur_LowSurrogateCharSet_first), "$hasConsumed", $rt_wrapFunction1(jur_LowSurrogateCharSet_hasConsumed)],
jur_CompositeGroupQuantifierSet, 0, jur_GroupQuantifierSet, [], 0, 0, 0, ["$_init_45", function(var_1, var_2, var_3, var_4, var_5) { jur_CompositeGroupQuantifierSet__init_(this, var_1, var_2, var_3, var_4, var_5); }, "$matches", $rt_wrapFunction3(jur_CompositeGroupQuantifierSet_matches)],
jur_RelCompositeGroupQuantifierSet, 0, jur_CompositeGroupQuantifierSet, [], 0, 0, 0, ["$_init_45", function(var_1, var_2, var_3, var_4, var_5) { jur_RelCompositeGroupQuantifierSet__init_(this, var_1, var_2, var_3, var_4, var_5); }, "$matches", $rt_wrapFunction3(jur_RelCompositeGroupQuantifierSet_matches)],
ju_ArrayList, 0, ju_AbstractList, [jl_Cloneable, ji_Serializable, ju_RandomAccess], 1, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_", $rt_wrapFunction0(ju_ArrayList__init_3), "$_init_0", $rt_wrapFunction1(ju_ArrayList__init_0), "$_init_18", $rt_wrapFunction1(ju_ArrayList__init_2), "$ensureCapacity", $rt_wrapFunction1(ju_ArrayList_ensureCapacity), "$get", $rt_wrapFunction1(ju_ArrayList_get), "$size", $rt_wrapFunction0(ju_ArrayList_size), "$add2", $rt_wrapFunction1(ju_ArrayList_add),
"$add1", $rt_wrapFunction2(ju_ArrayList_add0), "$remove", $rt_wrapFunction1(ju_ArrayList_remove), "$clear1", $rt_wrapFunction0(ju_ArrayList_clear)],
cggdc_LabelElement, 0, cggdc_Element, [], 1, 0, 0, ["$_init_10", $rt_wrapFunction1(cggdc_LabelElement__init_)],
jur_CompositeQuantifierSet, 0, jur_LeafQuantifierSet, [], 0, 0, 0, ["$_init_57", $rt_wrapFunction4(jur_CompositeQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_CompositeQuantifierSet_matches)],
jur_SupplRangeSet, 0, jur_JointSet, [], 0, 0, 0, ["$_init_61", $rt_wrapFunction1(jur_SupplRangeSet__init_), "$matches", $rt_wrapFunction3(jur_SupplRangeSet_matches), "$contains", $rt_wrapFunction1(jur_SupplRangeSet_contains), "$first", $rt_wrapFunction1(jur_SupplRangeSet_first), "$getChars", $rt_wrapFunction0(jur_SupplRangeSet_getChars), "$setNext", $rt_wrapFunction1(jur_SupplRangeSet_setNext), "$hasConsumed", $rt_wrapFunction1(jur_SupplRangeSet_hasConsumed)],
jur_RelAltGroupQuantifierSet, 0, jur_AltGroupQuantifierSet, [], 0, 0, 0, ["$_init_20", $rt_wrapFunction3(jur_RelAltGroupQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_RelAltGroupQuantifierSet_matches)],
jl_String, 0, jl_Object, [ji_Serializable, jl_Comparable, jl_CharSequence], 17, 0, () => jl_String_$callClinit(), ["$_init_", $rt_wrapFunction0(jl_String__init_3), "$_init_36", $rt_wrapFunction1(jl_String__init_1), "$_init_46", $rt_wrapFunction1(jl_String__init_4), "$_init_26", $rt_wrapFunction3(jl_String__init_5), "$charAt", $rt_wrapFunction1(jl_String_charAt), "$length", $rt_wrapFunction0(jl_String_length), "$isEmpty", $rt_wrapFunction0(jl_String_isEmpty), "$startsWith1", $rt_wrapFunction2(jl_String_startsWith0),
"$startsWith", $rt_wrapFunction1(jl_String_startsWith), "$indexOf2", $rt_wrapFunction2(jl_String_indexOf), "$lastIndexOf1", $rt_wrapFunction2(jl_String_lastIndexOf), "$indexOf1", $rt_wrapFunction2(jl_String_indexOf0), "$lastIndexOf0", $rt_wrapFunction2(jl_String_lastIndexOf0), "$substring", $rt_wrapFunction2(jl_String_substring), "$substring0", $rt_wrapFunction1(jl_String_substring0), "$subSequence", $rt_wrapFunction2(jl_String_subSequence), "$trim", $rt_wrapFunction0(jl_String_trim), "$toString", $rt_wrapFunction0(jl_String_toString),
"$toCharArray", $rt_wrapFunction0(jl_String_toCharArray), "$equals", $rt_wrapFunction1(jl_String_equals), "$hashCode0", $rt_wrapFunction0(jl_String_hashCode), "$toLowerCase", $rt_wrapFunction0(jl_String_toLowerCase), "$toUpperCase1", $rt_wrapFunction0(jl_String_toUpperCase), "$matches2", $rt_wrapFunction1(jl_String_matches), "$split", $rt_wrapFunction2(jl_String_split)],
ju_HashSet, 0, ju_AbstractSet, [jl_Cloneable, ji_Serializable], 1, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_", $rt_wrapFunction0(ju_HashSet__init_0), "$_init_22", $rt_wrapFunction1(ju_HashSet__init_), "$add2", $rt_wrapFunction1(ju_HashSet_add), "$isEmpty", $rt_wrapFunction0(ju_HashSet_isEmpty), "$iterator", $rt_wrapFunction0(ju_HashSet_iterator), "$remove3", $rt_wrapFunction1(ju_HashSet_remove), "$size", $rt_wrapFunction0(ju_HashSet_size)],
ju_LinkedHashSet, 0, ju_HashSet, [ju_SequencedSet, jl_Cloneable, ji_Serializable], 1, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_", $rt_wrapFunction0(ju_LinkedHashSet__init_0), "$_init_18", $rt_wrapFunction1(ju_LinkedHashSet__init_1)],
eycdaca_AceEditor$addOnCursorPositionChangeHandler$lambda$_12_0, 0, jl_Object, [eycdaca_AceNative$Event], 1, 0, 0, ["$_init_6", $rt_wrapFunction1(eycdaca_AceEditor$addOnCursorPositionChangeHandler$lambda$_12_0__init_), "$fire0", $rt_wrapFunction1(eycdaca_AceEditor$addOnCursorPositionChangeHandler$lambda$_12_0_fire)],
jur_FSet$PossessiveFSet, 0, jur_AbstractSet, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_FSet$PossessiveFSet__init_), "$matches", $rt_wrapFunction3(jur_FSet$PossessiveFSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_FSet$PossessiveFSet_hasConsumed)],
jur_PosCompositeGroupQuantifierSet, 0, jur_CompositeGroupQuantifierSet, [], 0, 0, 0, ["$_init_45", function(var_1, var_2, var_3, var_4, var_5) { jur_PosCompositeGroupQuantifierSet__init_(this, var_1, var_2, var_3, var_4, var_5); }, "$matches", $rt_wrapFunction3(jur_PosCompositeGroupQuantifierSet_matches)],
jur_MultiLineEOLSet, 0, jur_AbstractSet, [], 0, 0, 0, ["$_init_0", $rt_wrapFunction1(jur_MultiLineEOLSet__init_), "$matches", $rt_wrapFunction3(jur_MultiLineEOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_MultiLineEOLSet_hasConsumed)],
ju_Queue, 0, jl_Object, [ju_Collection], 1537, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf)],
ju_Deque, 0, jl_Object, [ju_Queue, ju_SequencedCollection], 1537, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf)],
ju_ArrayDeque, 0, ju_AbstractCollection, [ju_Deque, jl_Cloneable, ji_Serializable], 1, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_", $rt_wrapFunction0(ju_ArrayDeque__init_0), "$_init_0", $rt_wrapFunction1(ju_ArrayDeque__init_), "$addLast", $rt_wrapFunction1(ju_ArrayDeque_addLast), "$removeFirst", $rt_wrapFunction0(ju_ArrayDeque_removeFirst), "$pollFirst", $rt_wrapFunction0(ju_ArrayDeque_pollFirst), "$add2", $rt_wrapFunction1(ju_ArrayDeque_add), "$remove6", $rt_wrapFunction0(ju_ArrayDeque_remove),
"$size", $rt_wrapFunction0(ju_ArrayDeque_size), "$isEmpty", $rt_wrapFunction0(ju_ArrayDeque_isEmpty)],
jur_AbstractCharClass$LazyJavaDigit$1, "AbstractCharClass$LazyJavaDigit$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_35", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaDigit$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaDigit$1_contains)],
jl_NullPointerException, 0, jl_RuntimeException, [], 1, 0, 0, ["$_init_1", $rt_wrapFunction1(jl_NullPointerException__init_1), "$_init_", $rt_wrapFunction0(jl_NullPointerException__init_0)],
cgwbes_Event$Type, 0, jl_Object, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(cgwbes_Event$Type__init_)],
cgges_GwtEvent$Type, 0, cgwbes_Event$Type, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(cgges_GwtEvent$Type__init_)],
cggedc_DomEvent$Type, 0, cgges_GwtEvent$Type, [], 1, 0, 0, 0,
jur_AbstractCharClass$LazyJavaSpaceChar$1, "AbstractCharClass$LazyJavaSpaceChar$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_40", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaSpaceChar$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaSpaceChar$1_contains)],
eycdaca_AceResources$loadModules$lambda$_3_1, 0, jl_Object, [jl_Runnable], 1, 0, 0, ["$_init_95", $rt_wrapFunction4(eycdaca_AceResources$loadModules$lambda$_3_1__init_), "$run", $rt_wrapFunction0(eycdaca_AceResources$loadModules$lambda$_3_1_run)],
cgges_EventHandler, 0, jl_Object, [], 1537, 0, 0, 0,
jl_Math, 0, jl_Object, [], 17, 0, 0, 0,
eycdaca_AceResources$loadModules$lambda$_3_0, 0, jl_Object, [juf_Function], 1, 0, 0, ["$_init_", $rt_wrapFunction0(eycdaca_AceResources$loadModules$lambda$_3_0__init_), "$apply", $rt_wrapFunction1(eycdaca_AceResources$loadModules$lambda$_3_0_apply0), "$apply0", $rt_wrapFunction1(eycdaca_AceResources$loadModules$lambda$_3_0_apply)],
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart_computeValue)],
jl_IllegalArgumentException, 0, jl_RuntimeException, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jl_IllegalArgumentException__init_1), "$_init_1", $rt_wrapFunction1(jl_IllegalArgumentException__init_2)],
jur_PatternSyntaxException, 0, jl_IllegalArgumentException, [], 1, 0, 0, ["$_init_50", $rt_wrapFunction3(jur_PatternSyntaxException__init_0), "$getMessage", $rt_wrapFunction0(jur_PatternSyntaxException_getMessage)],
iitm_ScriptModule$JsAction, 0, jl_Object, [otj_JSObject], 1536, 0, 0, 0,
cgguc_BrowserEventBridge$updateDocumentListener$lambda$_5_0, 0, jl_Object, [cgguc_BrowserEventBridge$NativeHandler], 1, 0, 0, ["$_init_", $rt_wrapFunction0(cgguc_BrowserEventBridge$updateDocumentListener$lambda$_5_0__init_), "$handle", $rt_wrapFunction1(cgguc_BrowserEventBridge$updateDocumentListener$lambda$_5_0_handle)],
jur_AbstractCharClass$LazyJavaDefined, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaDefined__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaDefined_computeValue)]]);
$rt_metadata([jur_Pattern, 0, jl_Object, [ji_Serializable], 17, 0, 0, ["$matcher", $rt_wrapFunction1(jur_Pattern_matcher), "$split0", $rt_wrapFunction2(jur_Pattern_split), "$pattern", $rt_wrapFunction0(jur_Pattern_pattern), "$namedGroups", $rt_wrapFunction0(jur_Pattern_namedGroups), "$groupCount", $rt_wrapFunction0(jur_Pattern_groupCount), "$compCount", $rt_wrapFunction0(jur_Pattern_compCount), "$consCount", $rt_wrapFunction0(jur_Pattern_consCount)],
eycdaca_AceNative, 0, jl_Object, [], 16, 0, 0, 0,
otjde_EventTarget, 0, jl_Object, [otj_JSObject], 1537, 0, 0, 0,
jur_PosAltGroupQuantifierSet, 0, jur_AltGroupQuantifierSet, [], 0, 0, 0, ["$_init_20", $rt_wrapFunction3(jur_PosAltGroupQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_PosAltGroupQuantifierSet_matches), "$setNext", $rt_wrapFunction1(jur_PosAltGroupQuantifierSet_setNext)],
ju_Collections$13, 0, ju_AbstractMap, [], 0, 0, 0, ["$computeIfAbsent", $rt_wrapFunction2(ju_Map_computeIfAbsent), "$_init_96", $rt_wrapFunction1(ju_Collections$13__init_), "$size", $rt_wrapFunction0(ju_Collections$13_size), "$isEmpty", $rt_wrapFunction0(ju_Collections$13_isEmpty)],
eycdaca_AceEditor$addOnChangeHandler$lambda$_11_0, 0, jl_Object, [eycdaca_AceNative$Event], 1, 0, 0, ["$_init_6", $rt_wrapFunction1(eycdaca_AceEditor$addOnChangeHandler$lambda$_11_0__init_), "$fire0", $rt_wrapFunction1(eycdaca_AceEditor$addOnChangeHandler$lambda$_11_0_fire)],
jur_AbstractCharClass$LazyJavaLetterOrDigit, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLetterOrDigit__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLetterOrDigit_computeValue)],
otciu_UnicodeHelper$Range, 0, jl_Object, [], 1, 0, 0, ["$_init_39", $rt_wrapFunction3(otciu_UnicodeHelper$Range__init_)],
jur_AbstractLineTerminator$2, 0, jur_AbstractLineTerminator, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractLineTerminator$2__init_), "$isLineTerminator", $rt_wrapFunction1(jur_AbstractLineTerminator$2_isLineTerminator), "$isAfterLineTerminator", $rt_wrapFunction2(jur_AbstractLineTerminator$2_isAfterLineTerminator)],
cgges_HandlerManager, 0, jl_Object, [cgges_HasHandlers], 1, 0, 0, 0,
otciu_CharMapping, 0, jl_Object, [], 1, 0, 0, ["$_init_38", $rt_wrapFunction2(otciu_CharMapping__init_)],
jur_AbstractLineTerminator$1, 0, jur_AbstractLineTerminator, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractLineTerminator$1__init_), "$isLineTerminator", $rt_wrapFunction1(jur_AbstractLineTerminator$1_isLineTerminator), "$isAfterLineTerminator", $rt_wrapFunction2(jur_AbstractLineTerminator$1_isAfterLineTerminator)],
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart_computeValue)],
cggdc_ImageElement, 0, cggdc_Element, [], 1, 0, 0, ["$_init_10", $rt_wrapFunction1(cggdc_ImageElement__init_)],
eycdaca_AceCompletion, 0, jl_Object, [], 1025, 0, 0, ["$_init_", $rt_wrapFunction0(eycdaca_AceCompletion__init_)],
otci_CharFlow, 0, jl_Object, [], 1, 0, 0, ["$_init_36", $rt_wrapFunction1(otci_CharFlow__init_)],
jur_RangeSet, 0, jur_LeafSet, [], 0, 0, 0, ["$_init_61", $rt_wrapFunction1(jur_RangeSet__init_), "$accepts", $rt_wrapFunction2(jur_RangeSet_accepts), "$first", $rt_wrapFunction1(jur_RangeSet_first), "$getChars", $rt_wrapFunction0(jur_RangeSet_getChars)],
jur_UnicodeCategory, "UnicodeCategory", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_0", $rt_wrapFunction1(jur_UnicodeCategory__init_), "$contains", $rt_wrapFunction1(jur_UnicodeCategory_contains)],
jur_UnicodeCategoryScope, "UnicodeCategoryScope", 2, jur_UnicodeCategory, [], 0, 0, 0, ["$_init_0", $rt_wrapFunction1(jur_UnicodeCategoryScope__init_), "$contains", $rt_wrapFunction1(jur_UnicodeCategoryScope_contains)],
jur_CharClass, "CharClass", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_CharClass__init_2), "$_init_51", $rt_wrapFunction2(jur_CharClass__init_0), "$_init_60", $rt_wrapFunction3(jur_CharClass__init_1), "$add", $rt_wrapFunction1(jur_CharClass_add), "$add5", $rt_wrapFunction1(jur_CharClass_add1), "$add0", $rt_wrapFunction2(jur_CharClass_add0), "$union", $rt_wrapFunction1(jur_CharClass_union), "$intersection", $rt_wrapFunction1(jur_CharClass_intersection), "$contains", $rt_wrapFunction1(jur_CharClass_contains),
"$getBits", $rt_wrapFunction0(jur_CharClass_getBits), "$getLowHighSurrogates", $rt_wrapFunction0(jur_CharClass_getLowHighSurrogates), "$getInstance", $rt_wrapFunction0(jur_CharClass_getInstance), "$toString", $rt_wrapFunction0(jur_CharClass_toString), "$hasUCI", $rt_wrapFunction0(jur_CharClass_hasUCI)],
cgguc_BrowserEventBridge, 0, jl_Object, [], 16, 0, () => cgguc_BrowserEventBridge_$callClinit(), 0,
jur_UCIDecomposedCharSet, 0, jur_DecomposedCharSet, [], 0, 0, 0, ["$_init_33", $rt_wrapFunction2(jur_UCIDecomposedCharSet__init_)],
otrr_ClassInfo, 0, otrr_ReflectionInfo, [], 17, 0, 0, ["$newArrayInstance", $rt_wrapFunction1(otrr_ClassInfo_newArrayInstance)],
cggdc_MetaElement, 0, cggdc_Element, [], 1, 0, 0, ["$_init_10", $rt_wrapFunction1(cggdc_MetaElement__init_)],
cggdc_Document, 0, jl_Object, [], 17, 0, () => cggdc_Document_$callClinit(), ["$createElement", $rt_wrapFunction1(cggdc_Document_createElement), "$createDivElement", $rt_wrapFunction0(cggdc_Document_createDivElement), "$getElementById", $rt_wrapFunction1(cggdc_Document_getElementById)],
iiad_EditorDemo$start$lambda$_2_9, 0, jl_Object, [iiad_EditorDemo$Action], 1, 0, 0, ["$_init_", $rt_wrapFunction0(iiad_EditorDemo$start$lambda$_2_9__init_), "$run", $rt_wrapFunction0(iiad_EditorDemo$start$lambda$_2_9_run)],
iiad_EditorDemo$start$lambda$_2_8, 0, jl_Object, [iiad_EditorDemo$Action], 1, 0, 0, ["$_init_", $rt_wrapFunction0(iiad_EditorDemo$start$lambda$_2_8__init_), "$run", $rt_wrapFunction0(iiad_EditorDemo$start$lambda$_2_8_run)],
iiad_EditorDemo$start$lambda$_2_7, 0, jl_Object, [iiad_EditorDemo$Action], 1, 0, 0, ["$_init_", $rt_wrapFunction0(iiad_EditorDemo$start$lambda$_2_7__init_), "$run", $rt_wrapFunction0(iiad_EditorDemo$start$lambda$_2_7_run)],
jur_AbstractCharClass$LazyJavaWhitespace$1, "AbstractCharClass$LazyJavaWhitespace$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_85", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaWhitespace$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaWhitespace$1_contains)],
jur_AbstractCharClass$LazyJavaJavaIdentifierStart, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaJavaIdentifierStart_computeValue)],
iiad_EditorDemo$start$lambda$_2_2, 0, jl_Object, [iiad_EditorDemo$Action], 1, 0, 0, ["$_init_", $rt_wrapFunction0(iiad_EditorDemo$start$lambda$_2_2__init_), "$run", $rt_wrapFunction0(iiad_EditorDemo$start$lambda$_2_2_run)],
iiad_EditorDemo$start$lambda$_2_1, 0, jl_Object, [iiad_EditorDemo$Action], 1, 0, 0, ["$_init_", $rt_wrapFunction0(iiad_EditorDemo$start$lambda$_2_1__init_), "$run", $rt_wrapFunction0(iiad_EditorDemo$start$lambda$_2_1_run)],
iiad_EditorDemo$start$lambda$_2_0, 0, jl_Object, [iiad_EditorDemo$Action], 1, 0, 0, ["$_init_", $rt_wrapFunction0(iiad_EditorDemo$start$lambda$_2_0__init_), "$run", $rt_wrapFunction0(iiad_EditorDemo$start$lambda$_2_0_run)],
iiad_EditorDemo$start$lambda$_2_6, 0, jl_Object, [iiad_EditorDemo$Action], 1, 0, 0, ["$_init_", $rt_wrapFunction0(iiad_EditorDemo$start$lambda$_2_6__init_), "$run", $rt_wrapFunction0(iiad_EditorDemo$start$lambda$_2_6_run)],
iiad_EditorDemo$start$lambda$_2_5, 0, jl_Object, [iiad_EditorDemo$Action], 1, 0, 0, ["$_init_", $rt_wrapFunction0(iiad_EditorDemo$start$lambda$_2_5__init_), "$run", $rt_wrapFunction0(iiad_EditorDemo$start$lambda$_2_5_run)],
jl_CloneNotSupportedException, 0, jl_Exception, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jl_CloneNotSupportedException__init_)],
iiad_EditorDemo$start$lambda$_2_4, 0, jl_Object, [iiad_EditorDemo$Action], 1, 0, 0, ["$_init_", $rt_wrapFunction0(iiad_EditorDemo$start$lambda$_2_4__init_), "$run", $rt_wrapFunction0(iiad_EditorDemo$start$lambda$_2_4_run)],
iiad_EditorDemo$start$lambda$_2_3, 0, jl_Object, [iiad_EditorDemo$Action], 1, 0, 0, ["$_init_", $rt_wrapFunction0(iiad_EditorDemo$start$lambda$_2_3__init_), "$run", $rt_wrapFunction0(iiad_EditorDemo$start$lambda$_2_3_run)],
iiad_EditorDemo$main$lambda$_1_0, 0, jl_Object, [jl_Runnable], 1, 0, 0, ["$_init_", $rt_wrapFunction0(iiad_EditorDemo$main$lambda$_1_0__init_), "$run", $rt_wrapFunction0(iiad_EditorDemo$main$lambda$_1_0_run)],
cggdc_OptionElement, 0, cggdc_Element, [], 1, 0, () => cggdc_OptionElement_$callClinit(), ["$_init_10", $rt_wrapFunction1(cggdc_OptionElement__init_)],
otjdh_HTMLDocument, 0, jl_Object, [otjdx_Document, otjde_EventTarget], 1025, 0, 0, 0,
cggels_AttachEvent, 0, cgges_GwtEvent, [], 1, 0, () => cggels_AttachEvent_$callClinit(), ["$_init_58", $rt_wrapFunction1(cggels_AttachEvent__init_)],
iiad_EditorDemo$main$lambda$_1_1, 0, jl_Object, [juf_Consumer], 1, 0, 0, ["$_init_", $rt_wrapFunction0(iiad_EditorDemo$main$lambda$_1_1__init_), "$accept1", $rt_wrapFunction1(iiad_EditorDemo$main$lambda$_1_1_accept0), "$accept0", $rt_wrapFunction1(iiad_EditorDemo$main$lambda$_1_1_accept)],
jur_SequenceSet$IntHash, 0, jl_Object, [], 0, 0, 0, ["$_init_0", $rt_wrapFunction1(jur_SequenceSet$IntHash__init_0), "$put0", $rt_wrapFunction2(jur_SequenceSet$IntHash_put), "$get3", $rt_wrapFunction1(jur_SequenceSet$IntHash_get)],
iiad_EditorDemo$lambda$start$11$lambda$_21_0, 0, jl_Object, [jl_Runnable], 1, 0, 0, ["$_init_", $rt_wrapFunction0(iiad_EditorDemo$lambda$start$11$lambda$_21_0__init_), "$run", $rt_wrapFunction0(iiad_EditorDemo$lambda$start$11$lambda$_21_0_run)],
jur_AbstractCharClass$LazyNonDigit, 0, jur_AbstractCharClass$LazyDigit, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonDigit__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonDigit_computeValue)],
iiad_EditorDemo$lambda$start$11$lambda$_21_1, 0, jl_Object, [juf_Consumer], 1, 0, 0, ["$_init_", $rt_wrapFunction0(iiad_EditorDemo$lambda$start$11$lambda$_21_1__init_), "$accept1", $rt_wrapFunction1(iiad_EditorDemo$lambda$start$11$lambda$_21_1_accept0), "$accept0", $rt_wrapFunction1(iiad_EditorDemo$lambda$start$11$lambda$_21_1_accept)],
cggucu_ComplexPanel$1, 0, jl_Object, [ju_Iterator], 0, 0, 0, ["$_init_15", $rt_wrapFunction1(cggucu_ComplexPanel$1__init_), "$hasNext", $rt_wrapFunction0(cggucu_ComplexPanel$1_hasNext), "$next1", $rt_wrapFunction0(cggucu_ComplexPanel$1_next), "$next", $rt_wrapFunction0(cggucu_ComplexPanel$1_next0)],
jur_AbstractCharClass$1, "AbstractCharClass$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_27", $rt_wrapFunction2(jur_AbstractCharClass$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$1_contains)],
jur_AbstractCharClass$2, "AbstractCharClass$2", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_28", $rt_wrapFunction3(jur_AbstractCharClass$2__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$2_contains)]]);
$rt_metadata([jur_AbstractCharClass$LazyJavaLowerCase, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLowerCase__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLowerCase_computeValue)],
jur_PossessiveCompositeQuantifierSet, 0, jur_CompositeQuantifierSet, [], 0, 0, 0, ["$_init_57", $rt_wrapFunction4(jur_PossessiveCompositeQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_PossessiveCompositeQuantifierSet_matches)],
cggucu_RootPanel$JsAction, 0, jl_Object, [otj_JSObject], 1536, 0, 0, 0,
jur_AbstractCharClass$LazyJavaLetterOrDigit$1, "AbstractCharClass$LazyJavaLetterOrDigit$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_63", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLetterOrDigit$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLetterOrDigit$1_contains)],
jur_CharClass$18, "CharClass$18", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_69", $rt_wrapFunction2(jur_CharClass$18__init_), "$contains", $rt_wrapFunction1(jur_CharClass$18_contains), "$toString", $rt_wrapFunction0(jur_CharClass$18_toString)],
jur_PossessiveGroupQuantifierSet, 0, jur_GroupQuantifierSet, [], 0, 0, 0, ["$_init_20", $rt_wrapFunction3(jur_PossessiveGroupQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_PossessiveGroupQuantifierSet_matches)],
jur_CharClass$13, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_66", $rt_wrapFunction2(jur_CharClass$13__init_), "$contains", $rt_wrapFunction1(jur_CharClass$13_contains)],
jur_CharClass$12, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_66", $rt_wrapFunction2(jur_CharClass$12__init_), "$contains", $rt_wrapFunction1(jur_CharClass$12_contains)],
jur_CharClass$11, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_65", $rt_wrapFunction4(jur_CharClass$11__init_), "$contains", $rt_wrapFunction1(jur_CharClass$11_contains)],
otci_Base46, 0, jl_Object, [], 17, 0, 0, 0,
jur_CharClass$10, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_65", $rt_wrapFunction4(jur_CharClass$10__init_), "$contains", $rt_wrapFunction1(jur_CharClass$10_contains)],
jur_CharClass$17, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_65", $rt_wrapFunction4(jur_CharClass$17__init_), "$contains", $rt_wrapFunction1(jur_CharClass$17_contains)],
jur_UCISequenceSet, 0, jur_LeafSet, [], 0, 0, 0, ["$_init_52", $rt_wrapFunction1(jur_UCISequenceSet__init_), "$accepts", $rt_wrapFunction2(jur_UCISequenceSet_accepts)],
jur_CharClass$16, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_65", $rt_wrapFunction4(jur_CharClass$16__init_), "$contains", $rt_wrapFunction1(jur_CharClass$16_contains)],
jur_CharClass$15, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_68", $rt_wrapFunction3(jur_CharClass$15__init_), "$contains", $rt_wrapFunction1(jur_CharClass$15_contains)],
jur_AbstractCharClass$LazyJavaDefined$1, "AbstractCharClass$LazyJavaDefined$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_48", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaDefined$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaDefined$1_contains)],
jur_CharClass$14, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_68", $rt_wrapFunction3(jur_CharClass$14__init_), "$contains", $rt_wrapFunction1(jur_CharClass$14_contains)],
jl_StringBuilder, 0, jl_AbstractStringBuilder, [jl_Appendable], 1, 0, 0, ["$_init_0", $rt_wrapFunction1(jl_StringBuilder__init_3), "$_init_", $rt_wrapFunction0(jl_StringBuilder__init_2), "$_init_1", $rt_wrapFunction1(jl_StringBuilder__init_1), "$append", $rt_wrapFunction1(jl_StringBuilder_append), "$append10", $rt_wrapFunction1(jl_StringBuilder_append2), "$append2", $rt_wrapFunction1(jl_StringBuilder_append0), "$append0", $rt_wrapFunction1(jl_StringBuilder_append1), "$append14", $rt_wrapFunction3(jl_StringBuilder_append3),
"$append7", $rt_wrapFunction1(jl_StringBuilder_append5), "$insert7", $rt_wrapFunction4(jl_StringBuilder_insert2), "$insert8", $rt_wrapFunction2(jl_StringBuilder_insert3), "$insert9", $rt_wrapFunction2(jl_StringBuilder_insert1), "$delete0", $rt_wrapFunction2(jl_StringBuilder_delete), "$deleteCharAt", $rt_wrapFunction1(jl_StringBuilder_deleteCharAt), "$insert10", $rt_wrapFunction2(jl_StringBuilder_insert5), "$insert3", $rt_wrapFunction4(jl_StringBuilder_insert4), "$append3", $rt_wrapFunction3(jl_StringBuilder_append4),
"$length", $rt_wrapFunction0(jl_StringBuilder_length), "$toString", $rt_wrapFunction0(jl_StringBuilder_toString), "$ensureCapacity", $rt_wrapFunction1(jl_StringBuilder_ensureCapacity), "$insert", $rt_wrapFunction2(jl_StringBuilder_insert0), "$insert2", $rt_wrapFunction2(jl_StringBuilder_insert), "$insert0", $rt_wrapFunction2(jl_StringBuilder_insert6)],
jur_CompositeRangeSet, 0, jur_JointSet, [], 0, 0, 0, ["$_init_62", $rt_wrapFunction2(jur_CompositeRangeSet__init_0), "$matches", $rt_wrapFunction3(jur_CompositeRangeSet_matches), "$setNext", $rt_wrapFunction1(jur_CompositeRangeSet_setNext), "$hasConsumed", $rt_wrapFunction1(jur_CompositeRangeSet_hasConsumed), "$first", $rt_wrapFunction1(jur_CompositeRangeSet_first)],
ju_ConcurrentModificationException, 0, jl_RuntimeException, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(ju_ConcurrentModificationException__init_0)],
jur_FinalSet, 0, jur_FSet, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_FinalSet__init_), "$matches", $rt_wrapFunction3(jur_FinalSet_matches)],
eycdaca_AceCommandDescription$KeyBinding, 0, jl_Object, [], 1, 0, 0, ["$_init_1", $rt_wrapFunction1(eycdaca_AceCommandDescription$KeyBinding__init_0), "$_init_76", $rt_wrapFunction2(eycdaca_AceCommandDescription$KeyBinding__init_), "$getMac", $rt_wrapFunction0(eycdaca_AceCommandDescription$KeyBinding_getMac)],
eycdaca_AceCompletionCallbackImpl, 0, jl_Object, [eycdaca_AceCompletionCallback], 0, 0, 0, ["$_init_8", $rt_wrapFunction1(eycdaca_AceCompletionCallbackImpl__init_), "$invokeWithCompletions", $rt_wrapFunction1(eycdaca_AceCompletionCallbackImpl_invokeWithCompletions)],
cggdc_NativeEvent, 0, jl_Object, [iic_NativeHandle], 1, 0, 0, ["$_init_70", $rt_wrapFunction1(cggdc_NativeEvent__init_), "$getType", $rt_wrapFunction0(cggdc_NativeEvent_getType)],
jur_EmptySet, 0, jur_LeafSet, [], 0, 0, 0, ["$_init_11", $rt_wrapFunction1(jur_EmptySet__init_0), "$accepts", $rt_wrapFunction2(jur_EmptySet_accepts), "$find", $rt_wrapFunction3(jur_EmptySet_find), "$findBack", $rt_wrapFunction4(jur_EmptySet_findBack), "$hasConsumed", $rt_wrapFunction1(jur_EmptySet_hasConsumed)],
cgguc_Event$NativePreviewEvent, 0, cgges_GwtEvent, [], 17, 0, () => cgguc_Event$NativePreviewEvent_$callClinit(), ["$_init_73", $rt_wrapFunction1(cgguc_Event$NativePreviewEvent__init_), "$isCanceled", $rt_wrapFunction0(cgguc_Event$NativePreviewEvent_isCanceled), "$isConsumed", $rt_wrapFunction0(cgguc_Event$NativePreviewEvent_isConsumed)],
cggdc_SelectElement, 0, cggdc_Element, [], 1, 0, 0, ["$_init_10", $rt_wrapFunction1(cggdc_SelectElement__init_)],
ju_Map$Entry, 0, jl_Object, [], 1537, 0, 0, 0,
ju_MapEntry, 0, jl_Object, [ju_Map$Entry, jl_Cloneable], 0, 0, 0, ["$_init_77", $rt_wrapFunction2(ju_MapEntry__init_)],
ju_HashMap$HashEntry, 0, ju_MapEntry, [], 0, 0, 0, ["$_init_23", $rt_wrapFunction2(ju_HashMap$HashEntry__init_)],
ju_LinkedHashMap$LinkedHashMapEntry, 0, ju_HashMap$HashEntry, [], 16, 0, 0, ["$_init_23", $rt_wrapFunction2(ju_LinkedHashMap$LinkedHashMapEntry__init_)],
jur_AbstractCharClass$LazyASCII, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyASCII__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyASCII_computeValue)],
cgguc_BrowserEventBridge$previewAndCapture$lambda$_6_0, 0, jl_Object, [jl_Runnable], 1, 0, 0, ["$_init_70", $rt_wrapFunction1(cgguc_BrowserEventBridge$previewAndCapture$lambda$_6_0__init_), "$run", $rt_wrapFunction0(cgguc_BrowserEventBridge$previewAndCapture$lambda$_6_0_run)],
ju_AbstractList$1, 0, jl_Object, [ju_Iterator], 0, 0, 0, ["$_init_44", $rt_wrapFunction1(ju_AbstractList$1__init_), "$hasNext", $rt_wrapFunction0(ju_AbstractList$1_hasNext), "$next", $rt_wrapFunction0(ju_AbstractList$1_next)],
eycdaca_AceNative$Action, 0, jl_Object, [otj_JSObject], 1536, 0, 0, 0,
eycdaca_AceCommandDescription$toJavaScript$lambda$_21_0, 0, jl_Object, [eycdaca_AceNative$Action], 1, 0, 0, ["$_init_90", $rt_wrapFunction2(eycdaca_AceCommandDescription$toJavaScript$lambda$_21_0__init_), "$run", $rt_wrapFunction0(eycdaca_AceCommandDescription$toJavaScript$lambda$_21_0_run)],
jur_Quantifier, "Quantifier", 2, jur_SpecialToken, [jl_Cloneable], 0, 0, 0, ["$_init_19", $rt_wrapFunction2(jur_Quantifier__init_), "$min0", $rt_wrapFunction0(jur_Quantifier_min), "$max0", $rt_wrapFunction0(jur_Quantifier_max), "$toString", $rt_wrapFunction0(jur_Quantifier_toString)],
jur_AbstractCharClass$LazyJavaUpperCase$1, "AbstractCharClass$LazyJavaUpperCase$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_83", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUpperCase$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUpperCase$1_contains)],
otpp_ResourceAccessor, 0, jl_Object, [], 16, 0, 0, 0,
jur_PossessiveQuantifierSet, 0, jur_LeafQuantifierSet, [], 0, 0, 0, ["$_init_37", $rt_wrapFunction3(jur_PossessiveQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_PossessiveQuantifierSet_matches)],
cgwbes_UmbrellaException, 0, jl_RuntimeException, [], 1, 0, 0, ["$_init_78", $rt_wrapFunction1(cgwbes_UmbrellaException__init_)],
jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1, "AbstractCharClass$LazyJavaIdentifierIgnorable$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_91", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1_contains)],
jur_AbstractCharClass$LazyJavaLetter$1, "AbstractCharClass$LazyJavaLetter$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_32", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLetter$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLetter$1_contains)],
jur_ReluctantQuantifierSet, 0, jur_LeafQuantifierSet, [], 0, 0, 0, ["$_init_37", $rt_wrapFunction3(jur_ReluctantQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_ReluctantQuantifierSet_matches)],
cgguc_DOM, 0, jl_Object, [], 17, 0, 0, 0,
jur_EOISet, 0, jur_AbstractSet, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_EOISet__init_), "$matches", $rt_wrapFunction3(jur_EOISet_matches), "$hasConsumed", $rt_wrapFunction1(jur_EOISet_hasConsumed)],
jur_AbstractCharClass$LazyUpper, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyUpper__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyUpper_computeValue)],
cggdc_IFrameElement, 0, cggdc_Element, [], 1, 0, 0, ["$_init_10", $rt_wrapFunction1(cggdc_IFrameElement__init_)],
ju_HashMap$KeyIterator, 0, ju_HashMap$AbstractMapIterator, [ju_Iterator], 0, 0, 0, ["$_init_22", $rt_wrapFunction1(ju_HashMap$KeyIterator__init_), "$next", $rt_wrapFunction0(ju_HashMap$KeyIterator_next)],
cgges_UmbrellaException, 0, cgwbes_UmbrellaException, [], 1, 0, 0, ["$_init_78", $rt_wrapFunction1(cgges_UmbrellaException__init_0)]]);
$rt_metadata([eycdaca_AceNative$Completion, 0, jl_Object, [otj_JSObject], 1536, 0, 0, 0,
otji_JSWrapper, 0, jl_Object, [], 17, 0, 0, 0,
cggdc_AnchorElement, 0, cggdc_Element, [], 1, 0, 0, ["$_init_10", $rt_wrapFunction1(cggdc_AnchorElement__init_)],
jur_MultiLineSOLSet, 0, jur_AbstractSet, [], 0, 0, 0, ["$_init_59", $rt_wrapFunction1(jur_MultiLineSOLSet__init_), "$matches", $rt_wrapFunction3(jur_MultiLineSOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_MultiLineSOLSet_hasConsumed)],
otjc_JSString, 0, jl_Object, [otj_JSObject], 1025, 0, 0, 0,
cggucu_RootPanel$detachWidgets$lambda$_7_0, 0, jl_Object, [juf_Consumer], 1, 0, 0, ["$_init_", $rt_wrapFunction0(cggucu_RootPanel$detachWidgets$lambda$_7_0__init_), "$accept1", $rt_wrapFunction1(cggucu_RootPanel$detachWidgets$lambda$_7_0_accept0), "$accept", $rt_wrapFunction1(cggucu_RootPanel$detachWidgets$lambda$_7_0_accept)],
jur_AbstractCharClass$LazyLower, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyLower__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyLower_computeValue)],
cggdc_SpanElement, 0, cggdc_Element, [], 1, 0, 0, ["$_init_10", $rt_wrapFunction1(cggdc_SpanElement__init_)],
eycdaca_AceEditor$addCompletionProvider$lambda$_56_0, 0, jl_Object, [eycdaca_AceNative$Completion], 1, 0, 0, ["$_init_7", $rt_wrapFunction1(eycdaca_AceEditor$addCompletionProvider$lambda$_56_0__init_), "$complete", function(var_1, var_2, var_3, var_4, var_5) { eycdaca_AceEditor$addCompletionProvider$lambda$_56_0_complete(this, var_1, var_2, var_3, var_4, var_5); }],
jur_AbstractCharClass$LazyJavaTitleCase, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaTitleCase__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaTitleCase_computeValue)],
cggcc_Scheduler, 0, jl_Object, [], 1025, 0, () => cggcc_Scheduler_$callClinit(), ["$_init_", $rt_wrapFunction0(cggcc_Scheduler__init_)],
iitm_ScriptModule, 0, jl_Object, [], 17, 0, 0, ["$onFailure", $rt_wrapFunction1(iitm_ScriptModule_onFailure), "$script0", $rt_wrapFunction1(iitm_ScriptModule_script0), "$script", $rt_wrapFunction2(iitm_ScriptModule_script), "$isReady", $rt_wrapFunction0(iitm_ScriptModule_isReady), "$ensureLoaded", $rt_wrapFunction0(iitm_ScriptModule_ensureLoaded), "$whenReady0", $rt_wrapFunction1(iitm_ScriptModule_whenReady)],
cggcc_Scheduler$RepeatingCommand, 0, jl_Object, [], 1537, 0, 0, 0,
iitm_ScriptModule$loadFrom$lambda$_11_1, 0, jl_Object, [iitm_ScriptModule$JsAction], 1, 0, 0, ["$_init_81", $rt_wrapFunction2(iitm_ScriptModule$loadFrom$lambda$_11_1__init_), "$run", $rt_wrapFunction0(iitm_ScriptModule$loadFrom$lambda$_11_1_run)],
iitm_ScriptModule$loadFrom$lambda$_11_0, 0, jl_Object, [iitm_ScriptModule$JsAction], 1, 0, 0, ["$_init_80", $rt_wrapFunction2(iitm_ScriptModule$loadFrom$lambda$_11_0__init_), "$run", $rt_wrapFunction0(iitm_ScriptModule$loadFrom$lambda$_11_0_run)],
jur_PreviousMatch, 0, jur_AbstractSet, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_PreviousMatch__init_), "$matches", $rt_wrapFunction3(jur_PreviousMatch_matches), "$hasConsumed", $rt_wrapFunction1(jur_PreviousMatch_hasConsumed)],
cggucu_Lifecycle, 0, jl_Object, [], 16, 0, 0, 0,
cggdc_FormElement, 0, cggdc_Element, [], 1, 0, 0, ["$_init_10", $rt_wrapFunction1(cggdc_FormElement__init_)],
jur_NonCapFSet, 0, jur_FSet, [], 0, 0, 0, ["$_init_0", $rt_wrapFunction1(jur_NonCapFSet__init_), "$matches", $rt_wrapFunction3(jur_NonCapFSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_NonCapFSet_hasConsumed)],
iiad_EditorDemo$start$lambda$_2_11, 0, jl_Object, [iiad_EditorDemo$Action], 1, 0, 0, ["$_init_", $rt_wrapFunction0(iiad_EditorDemo$start$lambda$_2_11__init_), "$run", $rt_wrapFunction0(iiad_EditorDemo$start$lambda$_2_11_run)],
iiad_EditorDemo$start$lambda$_2_10, 0, jl_Object, [iiad_EditorDemo$Action], 1, 0, 0, ["$_init_", $rt_wrapFunction0(iiad_EditorDemo$start$lambda$_2_10__init_), "$run", $rt_wrapFunction0(iiad_EditorDemo$start$lambda$_2_10_run)],
jur_UCISupplCharSet, 0, jur_LeafSet, [], 0, 0, 0, ["$_init_0", $rt_wrapFunction1(jur_UCISupplCharSet__init_), "$accepts", $rt_wrapFunction2(jur_UCISupplCharSet_accepts)],
jl_System, 0, jl_Object, [], 17, 0, 0, 0,
jur_AbstractCharClass$LazyRange, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_19", $rt_wrapFunction2(jur_AbstractCharClass$LazyRange__init_0), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyRange_computeValue)],
jur_AbstractCharClass$LazyXDigit, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyXDigit__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyXDigit_computeValue)],
jur_Matcher, 0, jl_Object, [jur_MatchResult], 17, 0, 0, ["$find1", $rt_wrapFunction1(jur_Matcher_find), "$find0", $rt_wrapFunction0(jur_Matcher_find0), "$start", $rt_wrapFunction1(jur_Matcher_start0), "$end", $rt_wrapFunction1(jur_Matcher_end), "$matches1", $rt_wrapFunction0(jur_Matcher_matches), "$start0", $rt_wrapFunction0(jur_Matcher_start), "$end0", $rt_wrapFunction0(jur_Matcher_end0), "$hasTransparentBounds", $rt_wrapFunction0(jur_Matcher_hasTransparentBounds), "$_init_49", $rt_wrapFunction2(jur_Matcher__init_)],
jur_DotAllSet, 0, jur_JointSet, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_DotAllSet__init_), "$matches", $rt_wrapFunction3(jur_DotAllSet_matches), "$setNext", $rt_wrapFunction1(jur_DotAllSet_setNext), "$getType0", $rt_wrapFunction0(jur_DotAllSet_getType), "$hasConsumed", $rt_wrapFunction1(jur_DotAllSet_hasConsumed)],
jur_AbstractCharClass$LazyJavaLowerCase$1, "AbstractCharClass$LazyJavaLowerCase$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_75", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLowerCase$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLowerCase$1_contains)],
jur_UCISupplRangeSet, 0, jur_SupplRangeSet, [], 0, 0, 0, ["$_init_61", $rt_wrapFunction1(jur_UCISupplRangeSet__init_0), "$contains", $rt_wrapFunction1(jur_UCISupplRangeSet_contains)],
jur_AbstractCharClass$LazyJavaUpperCase, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUpperCase__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUpperCase_computeValue)],
jur_HangulDecomposedCharSet, 0, jur_JointSet, [], 0, 0, 0, ["$_init_53", $rt_wrapFunction2(jur_HangulDecomposedCharSet__init_), "$setNext", $rt_wrapFunction1(jur_HangulDecomposedCharSet_setNext), "$matches", $rt_wrapFunction3(jur_HangulDecomposedCharSet_matches), "$first", $rt_wrapFunction1(jur_HangulDecomposedCharSet_first), "$hasConsumed", $rt_wrapFunction1(jur_HangulDecomposedCharSet_hasConsumed)],
jur_AbstractCharClass$LazyPunct, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyPunct__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyPunct_computeValue)],
cggdc_LinkElement, 0, cggdc_Element, [], 1, 0, 0, ["$_init_10", $rt_wrapFunction1(cggdc_LinkElement__init_)],
cgguc_Event$NativePreviewHandler, 0, jl_Object, [cgges_EventHandler], 1537, 0, 0, 0,
cggdc_StyleElement, 0, cggdc_Element, [], 1, 0, 0, ["$_init_10", $rt_wrapFunction1(cggdc_StyleElement__init_)],
cggdc_CanvasElement, 0, cggdc_Element, [], 1, 0, 0, ["$_init_10", $rt_wrapFunction1(cggdc_CanvasElement__init_)],
ju_LinkedHashMapKeySet, 0, ju_AbstractSet, [ju_SequencedSet], 0, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_24", $rt_wrapFunction2(ju_LinkedHashMapKeySet__init_), "$size", $rt_wrapFunction0(ju_LinkedHashMapKeySet_size), "$iterator", $rt_wrapFunction0(ju_LinkedHashMapKeySet_iterator)],
jur_WordBoundary, 0, jur_AbstractSet, [], 0, 0, 0, ["$_init_58", $rt_wrapFunction1(jur_WordBoundary__init_0), "$matches", $rt_wrapFunction3(jur_WordBoundary_matches), "$hasConsumed", $rt_wrapFunction1(jur_WordBoundary_hasConsumed)],
jur_AbstractCharClass$LazySpace, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazySpace__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazySpace_computeValue)],
ju_HashMap$1, 0, ju_AbstractSet, [], 0, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_22", $rt_wrapFunction1(ju_HashMap$1__init_), "$size", $rt_wrapFunction0(ju_HashMap$1_size), "$iterator", $rt_wrapFunction0(ju_HashMap$1_iterator)],
ju_HashMap$2, 0, ju_AbstractCollection, [], 0, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_22", $rt_wrapFunction1(ju_HashMap$2__init_), "$iterator", $rt_wrapFunction0(ju_HashMap$2_iterator)],
eycdaca_AceAnnotationType, 0, jl_Enum, [], 65553, 0, () => eycdaca_AceAnnotationType_$callClinit(), ["$getName", $rt_wrapFunction0(eycdaca_AceAnnotationType_getName)],
cgguc_BrowserEventBridge$lambda$setListener$2$lambda$_20_0, 0, jl_Object, [jl_Runnable], 1, 0, 0, ["$_init_72", $rt_wrapFunction2(cgguc_BrowserEventBridge$lambda$setListener$2$lambda$_20_0__init_), "$run", $rt_wrapFunction0(cgguc_BrowserEventBridge$lambda$setListener$2$lambda$_20_0_run)],
cggdc_InputElement, 0, cggdc_Element, [], 1, 0, 0, ["$_init_10", $rt_wrapFunction1(cggdc_InputElement__init_)],
eycdaca_AceCommandDescription$MultiSelectAction, 0, jl_Enum, [], 65553, 0, () => eycdaca_AceCommandDescription$MultiSelectAction_$callClinit(), 0,
eycdaca_AceCompletionSnippet, 0, eycdaca_AceCompletion, [], 1, 0, 0, ["$_init_93", function(var_1, var_2, var_3, var_4, var_5) { eycdaca_AceCompletionSnippet__init_(this, var_1, var_2, var_3, var_4, var_5); }, "$toJsObject", $rt_wrapFunction0(eycdaca_AceCompletionSnippet_toJsObject)],
jur_IntHash, 0, jl_Object, [], 0, 0, 0, 0,
jur_ReluctantAltQuantifierSet, 0, jur_AltQuantifierSet, [], 0, 0, 0, ["$_init_37", $rt_wrapFunction3(jur_ReluctantAltQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_ReluctantAltQuantifierSet_matches)],
jl_NegativeArraySizeException, 0, jl_RuntimeException, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jl_NegativeArraySizeException__init_)],
jur_AbstractCharClass$LazyJavaWhitespace, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaWhitespace__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaWhitespace_computeValue)]]);
$rt_metadata([jl_UnsupportedOperationException, 0, jl_RuntimeException, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jl_UnsupportedOperationException__init_)],
cggdc_TableCellElement, 0, cggdc_Element, [], 1, 0, 0, ["$_init_10", $rt_wrapFunction1(cggdc_TableCellElement__init_)],
eycdaca_AceSelection$1, 0, jl_Object, [eycdaca_AceSelectionListener], 0, 0, 0, ["$_init_86", $rt_wrapFunction1(eycdaca_AceSelection$1__init_), "$onChangeSelection", $rt_wrapFunction1(eycdaca_AceSelection$1_onChangeSelection)],
jl_NumberFormatException, 0, jl_IllegalArgumentException, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jl_NumberFormatException__init_1), "$_init_1", $rt_wrapFunction1(jl_NumberFormatException__init_)],
eycdaca_AceCompletionProvider, 0, jl_Object, [], 1537, 0, 0, 0,
cggdc_TableRowElement, 0, cggdc_Element, [], 1, 0, 0, ["$_init_10", $rt_wrapFunction1(cggdc_TableRowElement__init_)],
eycdaca_AceSelection, 0, jl_Object, [], 1, 0, 0, ["$_init_8", $rt_wrapFunction1(eycdaca_AceSelection__init_), "$addSelectionListener", $rt_wrapFunction1(eycdaca_AceSelection_addSelectionListener), "$isEmpty", $rt_wrapFunction0(eycdaca_AceSelection_isEmpty), "$isMultiLine", $rt_wrapFunction0(eycdaca_AceSelection_isMultiLine), "$getSelectionLead", $rt_wrapFunction0(eycdaca_AceSelection_getSelectionLead), "$clearSelection", $rt_wrapFunction0(eycdaca_AceSelection_clearSelection), "$select", $rt_wrapFunction4(eycdaca_AceSelection_select)],
jur_IntArrHash, 0, jl_Object, [], 0, 0, 0, 0,
eycdaca_AceMarkerType, 0, jl_Enum, [], 65553, 0, () => eycdaca_AceMarkerType_$callClinit(), ["$getName", $rt_wrapFunction0(eycdaca_AceMarkerType_getName)],
jur_AbstractCharClass$LazyJavaMirrored, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaMirrored__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaMirrored_computeValue)],
jur_AbstractCharClass$LazyJavaISOControl, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaISOControl__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaISOControl_computeValue)],
jl_IllegalStateException, 0, jl_RuntimeException, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jl_IllegalStateException__init_2), "$_init_1", $rt_wrapFunction1(jl_IllegalStateException__init_)],
jur_HighSurrogateCharSet, 0, jur_JointSet, [], 0, 0, 0, ["$_init_54", $rt_wrapFunction1(jur_HighSurrogateCharSet__init_), "$setNext", $rt_wrapFunction1(jur_HighSurrogateCharSet_setNext), "$matches", $rt_wrapFunction3(jur_HighSurrogateCharSet_matches), "$find", $rt_wrapFunction3(jur_HighSurrogateCharSet_find), "$findBack", $rt_wrapFunction4(jur_HighSurrogateCharSet_findBack), "$first", $rt_wrapFunction1(jur_HighSurrogateCharSet_first), "$hasConsumed", $rt_wrapFunction1(jur_HighSurrogateCharSet_hasConsumed)],
cgguc_Event, 0, cggdc_NativeEvent, [], 1, 0, 0, ["$_init_70", $rt_wrapFunction1(cgguc_Event__init_)],
jur_ReluctantCompositeQuantifierSet, 0, jur_CompositeQuantifierSet, [], 0, 0, 0, ["$_init_57", $rt_wrapFunction4(jur_ReluctantCompositeQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_ReluctantCompositeQuantifierSet_matches)],
jur_SOLSet, 0, jur_AbstractSet, [], 16, 0, 0, ["$_init_", $rt_wrapFunction0(jur_SOLSet__init_), "$matches", $rt_wrapFunction3(jur_SOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_SOLSet_hasConsumed)],
cggdc_HeadElement, 0, cggdc_Element, [], 1, 0, 0, ["$_init_10", $rt_wrapFunction1(cggdc_HeadElement__init_)],
eycdaca_AceCommandDescription, 0, jl_Object, [], 1, 0, 0, ["$_init_89", $rt_wrapFunction2(eycdaca_AceCommandDescription__init_), "$getBindKey", $rt_wrapFunction0(eycdaca_AceCommandDescription_getBindKey), "$withBindKey", $rt_wrapFunction2(eycdaca_AceCommandDescription_withBindKey), "$withReadOnly", $rt_wrapFunction1(eycdaca_AceCommandDescription_withReadOnly), "$toJavaScript", $rt_wrapFunction1(eycdaca_AceCommandDescription_toJavaScript)],
iiad_EditorDemo$contracts$lambda$_6_0, 0, jl_Object, [eycdaca_AceCommandDescription$ExecAction], 1, 0, 0, ["$_init_", $rt_wrapFunction0(iiad_EditorDemo$contracts$lambda$_6_0__init_), "$exec", $rt_wrapFunction1(iiad_EditorDemo$contracts$lambda$_6_0_exec)],
cggdc_DivElement, 0, cggdc_Element, [], 1, 0, 0, ["$_init_10", $rt_wrapFunction1(cggdc_DivElement__init_)],
iiad_EditorDemo$contracts$lambda$_6_1, 0, jl_Object, [eycdaca_AceCompletionProvider], 1, 0, 0, ["$_init_", $rt_wrapFunction0(iiad_EditorDemo$contracts$lambda$_6_1__init_), "$getProposals", $rt_wrapFunction4(iiad_EditorDemo$contracts$lambda$_6_1_getProposals)],
jur_AbstractCharClass$LazyJavaIdentifierIgnorable, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaIdentifierIgnorable_computeValue)],
cggdc_TableSectionElement, 0, cggdc_Element, [], 1, 0, 0, ["$_init_10", $rt_wrapFunction1(cggdc_TableSectionElement__init_)],
cggucu_RootPanel$hookWindowClose$lambda$_9_0, 0, jl_Object, [cggucu_RootPanel$JsAction], 1, 0, 0, ["$_init_", $rt_wrapFunction0(cggucu_RootPanel$hookWindowClose$lambda$_9_0__init_), "$run", $rt_wrapFunction0(cggucu_RootPanel$hookWindowClose$lambda$_9_0_run)],
jur_UMultiLineEOLSet, 0, jur_AbstractSet, [], 0, 0, 0, ["$_init_0", $rt_wrapFunction1(jur_UMultiLineEOLSet__init_), "$matches", $rt_wrapFunction3(jur_UMultiLineEOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_UMultiLineEOLSet_hasConsumed)],
ju_LinkedHashMapIterator$KeyIterator, 0, ju_LinkedHashMapIterator, [ju_Iterator], 0, 0, 0, ["$_init_24", $rt_wrapFunction2(ju_LinkedHashMapIterator$KeyIterator__init_), "$next", $rt_wrapFunction0(ju_LinkedHashMapIterator$KeyIterator_next)],
iiad_EditorDemo, 0, jl_Object, [], 17, 0, () => iiad_EditorDemo_$callClinit(), 0,
jur_EOLSet, 0, jur_AbstractSet, [], 16, 0, 0, ["$_init_0", $rt_wrapFunction1(jur_EOLSet__init_), "$matches", $rt_wrapFunction3(jur_EOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_EOLSet_hasConsumed)],
cggcc_Scheduler$Impl, 0, cggcc_Scheduler, [], 16, 0, 0, 0,
otr_StringInfo, 0, otrr_ReflectionInfo, [], 17, 0, 0, 0,
eycdaca_AceResources, 0, jl_Object, [], 17, 0, () => eycdaca_AceResources_$callClinit(), 0,
jur_Lexer, 0, jl_Object, [], 0, 0, 0, ["$_init_12", $rt_wrapFunction2(jur_Lexer__init_), "$peek", $rt_wrapFunction0(jur_Lexer_peek), "$setMode", $rt_wrapFunction1(jur_Lexer_setMode), "$restoreFlags", $rt_wrapFunction1(jur_Lexer_restoreFlags), "$peekSpecial", $rt_wrapFunction0(jur_Lexer_peekSpecial), "$isSpecial", $rt_wrapFunction0(jur_Lexer_isSpecial), "$isNextSpecial", $rt_wrapFunction0(jur_Lexer_isNextSpecial), "$next0", $rt_wrapFunction0(jur_Lexer_next), "$nextSpecial", $rt_wrapFunction0(jur_Lexer_nextSpecial),
"$lookAhead", $rt_wrapFunction0(jur_Lexer_lookAhead), "$back", $rt_wrapFunction0(jur_Lexer_back), "$toString", $rt_wrapFunction0(jur_Lexer_toString), "$isEmpty", $rt_wrapFunction0(jur_Lexer_isEmpty), "$isLetter", $rt_wrapFunction0(jur_Lexer_isLetter0), "$isHighSurrogate0", $rt_wrapFunction0(jur_Lexer_isHighSurrogate0), "$isLowSurrogate0", $rt_wrapFunction0(jur_Lexer_isLowSurrogate0), "$getIndex", $rt_wrapFunction0(jur_Lexer_getIndex)],
jur_AbstractCharClass$LazySpecialsBlock, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazySpecialsBlock__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazySpecialsBlock_computeValue)],
jur_AbstractCharClass$LazyNonSpace, 0, jur_AbstractCharClass$LazySpace, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonSpace__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonSpace_computeValue)],
eycdaca_AceEditorCursorPosition, 0, jl_Object, [], 1, 0, 0, ["$_init_19", $rt_wrapFunction2(eycdaca_AceEditorCursorPosition__init_0), "$getRow", $rt_wrapFunction0(eycdaca_AceEditorCursorPosition_getRow), "$getColumn", $rt_wrapFunction0(eycdaca_AceEditorCursorPosition_getColumn), "$toJsObject", $rt_wrapFunction0(eycdaca_AceEditorCursorPosition_toJsObject)],
eycdaca_AceCompletionValue, 0, eycdaca_AceCompletion, [], 1, 0, 0, ["$_init_92", $rt_wrapFunction4(eycdaca_AceCompletionValue__init_), "$toJsObject", $rt_wrapFunction0(eycdaca_AceCompletionValue_toJsObject)],
ju_Arrays$ArrayAsList, 0, ju_AbstractList, [ju_RandomAccess, ji_Serializable], 0, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_43", $rt_wrapFunction1(ju_Arrays$ArrayAsList__init_), "$get", $rt_wrapFunction1(ju_Arrays$ArrayAsList_get), "$size", $rt_wrapFunction0(ju_Arrays$ArrayAsList_size)],
ju_Collections, 0, jl_Object, [], 17, 0, () => ju_Collections_$callClinit(), 0]);
let $rt_charArrayCls = $rt_arraycls($rt_charcls),
$rt_byteArrayCls = $rt_arraycls($rt_bytecls),
$rt_intArrayCls = $rt_arraycls($rt_intcls);
$rt_stringPool(["String is null", "String contains invalid digits: ", "String contains digits out of radix ", ": ", "The value is too big for int type: ", "The value is too big for integer type", "Illegal radix: ", "String is empty", "", "--", "cssFloat", "styleFloat", "float", "element must not be null", "Cannot set a new parent without first clearing the old parent", "widget must not be null", "initWidget() may only be called once", "width", "height", "_aceGWT", "\\s+", "Editor is not started", "button", "canvas",
"iframe", "option", "textarea", "select", "source", "optgroup", "a", "p", "td", "th", "tr", "div", "img", "body", "form", "head", "link", "meta", "span", "input", "label", "style", "tbody", "tfoot", "thead", "video", "animate", "center", "cursor", "selectionPart", "null", "Lower", "Upper", "ASCII", "Alpha", "Digit", "Alnum", "Punct", "Graph", "Print", "Blank", "Cntrl", "XDigit", "javaLowerCase", "javaUpperCase", "javaWhitespace", "javaMirrored", "javaDefined", "javaDigit", "javaIdentifierIgnorable", "javaISOControl",
"javaJavaIdentifierPart", "javaJavaIdentifierStart", "javaLetter", "javaLetterOrDigit", "javaSpaceChar", "javaTitleCase", "javaUnicodeIdentifierPart", "javaUnicodeIdentifierStart", "Space", "w", "W", "s", "S", "d", "D", "BasicLatin", "Latin-1Supplement", "LatinExtended-A", "LatinExtended-B", "IPAExtensions", "SpacingModifierLetters", "CombiningDiacriticalMarks", "Greek", "Cyrillic", "CyrillicSupplement", "Armenian", "Hebrew", "Arabic", "Syriac", "ArabicSupplement", "Thaana", "Devanagari", "Bengali", "Gurmukhi",
"Gujarati", "Oriya", "Tamil", "Telugu", "Kannada", "Malayalam", "Sinhala", "Thai", "Lao", "Tibetan", "Myanmar", "Georgian", "HangulJamo", "Ethiopic", "EthiopicSupplement", "Cherokee", "UnifiedCanadianAboriginalSyllabics", "Ogham", "Runic", "Tagalog", "Hanunoo", "Buhid", "Tagbanwa", "Khmer", "Mongolian", "Limbu", "TaiLe", "NewTaiLue", "KhmerSymbols", "Buginese", "PhoneticExtensions", "PhoneticExtensionsSupplement", "CombiningDiacriticalMarksSupplement", "LatinExtendedAdditional", "GreekExtended", "GeneralPunctuation",
"SuperscriptsandSubscripts", "CurrencySymbols", "CombiningMarksforSymbols", "LetterlikeSymbols", "NumberForms", "Arrows", "MathematicalOperators", "MiscellaneousTechnical", "ControlPictures", "OpticalCharacterRecognition", "EnclosedAlphanumerics", "BoxDrawing", "BlockElements", "GeometricShapes", "MiscellaneousSymbols", "Dingbats", "MiscellaneousMathematicalSymbols-A", "SupplementalArrows-A", "BraillePatterns", "SupplementalArrows-B", "MiscellaneousMathematicalSymbols-B", "SupplementalMathematicalOperators",
"MiscellaneousSymbolsandArrows", "Glagolitic", "Coptic", "GeorgianSupplement", "Tifinagh", "EthiopicExtended", "SupplementalPunctuation", "CJKRadicalsSupplement", "KangxiRadicals", "IdeographicDescriptionCharacters", "CJKSymbolsandPunctuation", "Hiragana", "Katakana", "Bopomofo", "HangulCompatibilityJamo", "Kanbun", "BopomofoExtended", "CJKStrokes", "KatakanaPhoneticExtensions", "EnclosedCJKLettersandMonths", "CJKCompatibility", "CJKUnifiedIdeographsExtensionA", "YijingHexagramSymbols", "CJKUnifiedIdeographs",
"YiSyllables", "YiRadicals", "ModifierToneLetters", "SylotiNagri", "HangulSyllables", "HighSurrogates", "HighPrivateUseSurrogates", "LowSurrogates", "PrivateUseArea", "CJKCompatibilityIdeographs", "AlphabeticPresentationForms", "ArabicPresentationForms-A", "VariationSelectors", "VerticalForms", "CombiningHalfMarks", "CJKCompatibilityForms", "SmallFormVariants", "ArabicPresentationForms-B", "HalfwidthandFullwidthForms", "all", "Specials", "Cn", "IsL", "Lu", "Ll", "Lt", "Lm", "Lo", "IsM", "Mn", "Me", "Mc", "N",
"Nd", "Nl", "No", "IsZ", "Zs", "Zl", "Zp", "IsC", "Cc", "Cf", "Co", "Cs", "IsP", "Pd", "Ps", "Pe", "Pc", "Po", "IsS", "Sm", "Sc", "Sk", "So", "Pi", "Pf", "0", "beforeIndex=", ", size=", "index=", "[L", ", ", "Patter is null", "\\Q", "\\E", "\\\\E\\Q", "Ace arguments must be strings or JavaScriptObject handles", "mouse", "click", "dblclick", "Exception caught: ", " exceptions caught: ", "; ", "(no scripts)", "Module ", " could not load ", "Either src or dest is null", "ERROR", "error", "INFORMATION", "information",
"WARNING", "warning", "forEach", "forEachLine", "single", "FULL_LINE", "fullLine", "SCREEN_LINE", "screenLine", "TEXT", "text", "ext-language_tools", "mode-java", "mode-json", "mode-sql", "theme-tomorrow_night", "theme-chrome", "java", "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello from TeaVM!\");\n    }\n}\n", "100%", "editor-host", "chrome", "tomorrow_night", "saveDocument", "Ctrl-S", "Command-S", "Main.java", "json", "query.sql", "project.json", "Snapshot saved in memory (",
" characters). Ctrl/Cmd+S calls the same Java command.", "alpha\nbeta\ngamma", "text round trip", "line count", "beta", "getLine", "index to position", "position to index", "selection", "selection lead", "diagnostic-range", "marker registration", "marker removal", "Test", "custom command registration", "command round trip", "insertstring X", "command argument", "remove command", "Ace contract: ", "println", "System.out.println(\"Hello\");", "Java", "main", "public static void main(String[] args) {\n    ${1:// code}\n}",
"snippet", "Selection active", "No selection", "Ln ", ", Col ", "startAutocomplete", "Example diagnostic: review this line.", "Read only", "Unlock editing", "light", "dark", "sql", "SELECT name, status\nFROM projects\nWHERE compiler = \'TeaVM\'\nORDER BY name;\n", "{\n  \"name\": \"AceTea\",\n  \"features\": [\"completion\", \"diagnostics\", \"commands\"],\n  \"ready\": true\n}\n", "Unable to load editor resources: ", "AceTea", "ace.js", "(mode|theme|ext)-[A-Za-z0-9_]+", "Invalid Ace module: ", "AceTea ", ".js",
"webjars/ace/1.45.2/", "Name capturing group should start with letter", "Is", "In"]);
jl_String.prototype.toString = function() {
    return $rt_ustr(this);
};
jl_String.prototype.valueOf = jl_String.prototype.toString;
jl_Object.prototype.toString = function() {
    return $rt_ustr(jl_Object_toString(this));
};
jl_Object.prototype.__teavm_class__ = function() {
    return $dbg_class(this);
};
let $rt_export_main = $rt_mainStarter(iiad_EditorDemo_main);
$rt_export_main.javaException = $rt_javaException;
let $rt_jso_marker = Symbol('jsoClass');
(() => {
    let c;
    c = eycdaca_AceSelection$_init_$lambda$_0_0.prototype;
    c.changed = $rt_callWithReceiver(eycdaca_AceSelection$_init_$lambda$_0_0_changed$exported$0);
    c = cgguc_BrowserEventBridge$setListener$lambda$_7_0.prototype;
    c.handle = $rt_callWithReceiver(cgguc_BrowserEventBridge$setListener$lambda$_7_0_handle$exported$0);
    c = eycdaca_AceEditor$addOnCursorPositionChangeHandler$lambda$_12_0.prototype;
    c.fire = $rt_callWithReceiver(eycdaca_AceEditor$addOnCursorPositionChangeHandler$lambda$_12_0_fire$exported$0);
    c = cgguc_BrowserEventBridge$updateDocumentListener$lambda$_5_0.prototype;
    c.handle = $rt_callWithReceiver(cgguc_BrowserEventBridge$updateDocumentListener$lambda$_5_0_handle$exported$0);
    c = eycdaca_AceEditor$addOnChangeHandler$lambda$_11_0.prototype;
    c.fire = $rt_callWithReceiver(eycdaca_AceEditor$addOnChangeHandler$lambda$_11_0_fire$exported$0);
    c = iiad_EditorDemo$start$lambda$_2_9.prototype;
    c.run = $rt_callWithReceiver(iiad_EditorDemo$start$lambda$_2_9_run$exported$0);
    c = iiad_EditorDemo$start$lambda$_2_8.prototype;
    c.run = $rt_callWithReceiver(iiad_EditorDemo$start$lambda$_2_8_run$exported$0);
    c = iiad_EditorDemo$start$lambda$_2_7.prototype;
    c.run = $rt_callWithReceiver(iiad_EditorDemo$start$lambda$_2_7_run$exported$0);
    c = iiad_EditorDemo$start$lambda$_2_2.prototype;
    c.run = $rt_callWithReceiver(iiad_EditorDemo$start$lambda$_2_2_run$exported$0);
    c = iiad_EditorDemo$start$lambda$_2_1.prototype;
    c.run = $rt_callWithReceiver(iiad_EditorDemo$start$lambda$_2_1_run$exported$0);
    c = iiad_EditorDemo$start$lambda$_2_0.prototype;
    c.run = $rt_callWithReceiver(iiad_EditorDemo$start$lambda$_2_0_run$exported$0);
    c = iiad_EditorDemo$start$lambda$_2_6.prototype;
    c.run = $rt_callWithReceiver(iiad_EditorDemo$start$lambda$_2_6_run$exported$0);
    c = iiad_EditorDemo$start$lambda$_2_5.prototype;
    c.run = $rt_callWithReceiver(iiad_EditorDemo$start$lambda$_2_5_run$exported$0);
    c = iiad_EditorDemo$start$lambda$_2_4.prototype;
    c.run = $rt_callWithReceiver(iiad_EditorDemo$start$lambda$_2_4_run$exported$0);
    c = iiad_EditorDemo$start$lambda$_2_3.prototype;
    c.run = $rt_callWithReceiver(iiad_EditorDemo$start$lambda$_2_3_run$exported$0);
    c = eycdaca_AceCommandDescription$toJavaScript$lambda$_21_0.prototype;
    c.run = $rt_callWithReceiver(eycdaca_AceCommandDescription$toJavaScript$lambda$_21_0_run$exported$0);
    c = eycdaca_AceEditor$addCompletionProvider$lambda$_56_0.prototype;
    c.complete = $rt_callWithReceiver(eycdaca_AceEditor$addCompletionProvider$lambda$_56_0_complete$exported$0);
    c = iitm_ScriptModule$loadFrom$lambda$_11_1.prototype;
    c.run = $rt_callWithReceiver(iitm_ScriptModule$loadFrom$lambda$_11_1_run$exported$0);
    c = iitm_ScriptModule$loadFrom$lambda$_11_0.prototype;
    c.run = $rt_callWithReceiver(iitm_ScriptModule$loadFrom$lambda$_11_0_run$exported$0);
    c = iiad_EditorDemo$start$lambda$_2_11.prototype;
    c.run = $rt_callWithReceiver(iiad_EditorDemo$start$lambda$_2_11_run$exported$0);
    c = iiad_EditorDemo$start$lambda$_2_10.prototype;
    c.run = $rt_callWithReceiver(iiad_EditorDemo$start$lambda$_2_10_run$exported$0);
    c = cggucu_RootPanel$hookWindowClose$lambda$_9_0.prototype;
    c.run = $rt_callWithReceiver(cggucu_RootPanel$hookWindowClose$lambda$_9_0_run$exported$0);
})();
$rt_exports.main = $rt_export_main;
}));

//# sourceMappingURL=editor.js.map