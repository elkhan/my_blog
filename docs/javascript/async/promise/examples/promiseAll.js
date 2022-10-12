const nails = ['rusty nail', 'bent nail', 'clean nail']
const planks = ['splintered plank', 'straight plank', 'bent plank']

export const nailsAndPlanks = [...nails, ...planks]

// TODO: Add setTimeout to simulate latency

export const groupAndClean = (items, cleaningMethod) => {
    const result = []
    items.forEach(item => {
        result.push(cleaningMethod(item))
    })
    return Promise.resolve(result)
}

export const doneCleaning = () => Promise.resolve('Whew, that was a lot of work!')

export const clean = item => `I just cleaned a ${item}`

export const output = () => Promise.all([
        groupAndClean(nailsAndPlanks, clean),
        doneCleaning(),
    ]).then(values => values.flatMap(value => value))
