export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const metodoOriginal = descriptor.value;

        descriptor.value = function (...args: any[]) {
            let divisor = 1;
            let unidade = 'milisegundos'
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }

            console.log('-----------------------------------------');
            console.log(`Parâmetro do método ${propertyKey}: ${JSON.stringify(args)}`);
            const t1 = performance.now();

            //chamada ao método original
            const retorno = metodoOriginal.apply(this, args);

            const t2 = performance.now();
            console.log(`${propertyKey} demorou ${(t2 - t1)/divisor} ${unidade}`);
            console.log('-----------------------')

            //retorno do método original
            return retorno;
        }

        return descriptor;
    }
}