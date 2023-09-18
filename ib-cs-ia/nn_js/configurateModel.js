const tf = require('@tensorflow/tfjs')

function create_model(input_shape, first, second, output_shape) {
    const model = tf.sequential();
    model.add(tf.layers.dense({units: first, activation: 'relu', inputShape: [input_shape]}));
    model.add(tf.layers.dense({units: second, activation: 'relu'}));
    model.add(tf.layers.dense({units: output_shape, activation: 'sigmoid'}));

    model.compile({optimizer: 'adam', loss: 'binaryCrossentropy', metrics: ['accuracy']});

    return model;
}

async function saveModel(model, path) {
    await model.save(path);
}

model = create_model(10, 32, 32, 17);
saveModel(model, "file://D:/local_repos/CS_IA_Subject_Recommender/ib-cs-ia/nn_js/model");
