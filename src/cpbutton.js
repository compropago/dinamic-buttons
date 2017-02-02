var cpbutton = function (data) {
    var that = this;
    this.info = data;

    this.render = function () {
        if (that.info.public_key) {
            that._renderInput({
                'name': 'public_key',
                'id': 'public_key',
                'type': 'hidden',
                'value': that.info.public_key
            });
        } else {
            throw Error('Public Key is not set in configuration Button');
        }
        if (that.info.order_id.status) {
            that._renderInput({
                'name': 'order_id',
                'id': that.info.order_id.id ? that.info.order_id.id : 'order_id',
                'type': that.info.order_id.type ? that.info.order_id.type : 'hidden',
                'value': that.info.order_id.value ? that.info.order_id.value : ''
            });
        }
    };

    this._renderInput = function (params) {
        var container = document.querySelector(that.info.container);

        console.log(container);

        var input = document.createElement('input');
        input.name = params.name;
        input.id = params.id;
        input.type = params.type;
        input.value = params.value;

        container.appendChild(input)
    };

    return this;
};
