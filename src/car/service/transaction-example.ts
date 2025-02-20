
const mongoose = require('mongoose');
const User = require('./models/User');
const Order = require('./models/Order');

const performTransaction = async () => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const user = await User.findByIdAndUpdate(
            'userId123',
            { $inc: { balance: -100 } },
            { new: true, session }
        );

        if (user.balance < 0) {
            throw new Error('Insufficient balance');
        }

        const order = new Order({
            userId: user._id,
            amount: 100,
            status: 'Pending',
        });

        await order.save({ session });

        await session.commitTransaction();
        session.endSession();
        console.log('Transaction Successful');

    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        console.error('Transaction Failed:', error);
    }
};

performTransaction();
