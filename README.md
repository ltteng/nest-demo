# Nest.js learning project

内置装饰器不够用的时候，或者想把多个装饰器合并成一个的时候，都可以自定义装饰器。

方法的装饰器就是传入参数，调用下别的装饰器就好了，比如对 @SetMetadata 的封装。

如果组合多个方法装饰器，可以使用 applyDecorators api。

class 装饰器和方法装饰器一样。

还可以通过 createParamDecorator 来创建参数装饰器，它能拿到 ExecutionContext，进而拿到 reqeust、response，可以实现很多内置装饰器的功能，比如 @Query、@Headers 等装饰器。

通过自定义方法和参数的装饰器，可以让 Nest 代码更加的灵活。