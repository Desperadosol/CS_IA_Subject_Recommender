import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense


def create_model(num_q: int, first: int, second: int, num_s: int):
    model = Sequential([
        Dense(first, activation='relu', input_shape=(num_q, )),  
        Dense(second, activation='relu'),  
        Dense(num_s, activation='sigmoid')  
    ])
    # Compile the model
    model.compile(optimizer='adam',
              loss='binary_crossentropy',
              metrics=['accuracy'])

    return model

model = create_model(10,32,32,17)

model.save('./v0.1/model.h5')

