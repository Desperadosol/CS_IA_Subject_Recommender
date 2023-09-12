import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

# Define the model
model = Sequential([
    Dense(8, activation='relu', input_shape=(2,)),  # Input layer: 2 neurons
    Dense(4, activation='relu'),  # Hidden layer: 4 neurons
    Dense(4, activation='sigmoid')  # Output layer: 4 neurons
])

# Compile the model
model.compile(optimizer='adam',
              loss='binary_crossentropy',
              metrics=['accuracy'])

inputs = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
targets = np.array([[0, 0, 1, 0], [0, 0, 0, 1], [1, 0, 0, 0], [0, 1, 0, 0]])

# Train the model
model.fit(inputs, targets, epochs=2000)

# Make predictions
predictions = model.predict([[0, 0], [0, 1], [1, 0], [1, 1]])
print(predictions)
