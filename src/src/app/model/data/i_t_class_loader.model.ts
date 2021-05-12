class InstanceLoader<T> {
    constructor (private context : Object) {
    }

    getInstance (name : string, ...args : any [] ) {
        var instance = Object.create(this.context[name].prototype) ;
        instance.constructor.apply(instance, args) ;
        return <T> instance ;
    }
}