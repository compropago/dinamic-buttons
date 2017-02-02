var cpbutton = function (data) {
    var that = this;
    this.info = data;

    /**
     * Render all button data and fields
     */
    this.render = function () {
        that.container = document.querySelector(that.info.container);
        that._renderForm();

        if (that.info.public_key) {
            that._renderInput({
                name: 'public_key',
                id: 'public_key',
                type: 'hidden',
                value: that.info.public_key
            });
        } else {
            throw Error('Public Key is not set in configuration Button');
        }
        if (that.info.order_id) {
            if (that.info.order_id.value) {
                that._renderInput({
                    name: 'order_id',
                    id: that.info.order_id.id ? that.info.order_id.id : 'order_id',
                    type: that.info.order_id.type ? that.info.order_id.type : 'hidden',
                    value: that.info.order_id.value ? that.info.order_id.value : ''
                });
            } else {
                throw Error("Field order_id dosn't have vale.");
            }
        } else {
            throw Error('Field order_id dosn\'t exist.');
        }
        if (that.info.order_name) {
            if (that.info.order_name.value) {
                that._renderInput({
                    name: 'order_name',
                    id: that.info.order_name.id ? that.info.order_name.id : 'order_name',
                    type: that.info.order_name.type ? that.info.order_name.type : 'hidden',
                    value: that.info.order_name.value ? that.info.order_name.value : ''
                });
            } else {
                throw Error("Field order_id dosn't have vale.");
            }
        } else {
            throw Error('Field order_id dosn\'t exist.');
        }
        if (that.info.order_price) {
            if (that.info.order_price.value) {
                that._renderInput({
                    name: 'order_price',
                    id: that.info.order_price.id ? that.info.order_price.id : 'order_price',
                    type: that.info.order_price.type ? that.info.order_price.type : 'hidden',
                    value: that.info.order_price.value ? that.info.order_price.value : ''
                });
            } else {
                throw Error("Field order_id dosn't have vale.");
            }
        } else {
            throw Error('Field order_id dosn\'t exist.');
        }
        if (that.info.customer_name) {
            that._renderInput({
                name: 'customer_name',
                id: that.info.customer_name.id ? that.info.customer_name.id : 'customer_name',
                type: that.info.customer_name.type ? that.info.customer_name.type : 'hidden',
                value: that.info.customer_name.value ? that.info.customer_name.value : ''
            });
        } else {
            that._renderInput({
                name: 'customer_name',
                id: 'customer_name',
                type: 'hidden',
                value: ''
            });
        }
        if (that.info.customer_email) {
            that._renderInput({
                name: 'customer_email',
                id: that.info.customer_email.id ? that.info.customer_email.id : 'customer_email',
                type: that.info.customer_email.type ? that.info.customer_email.type : 'hidden',
                value: that.info.customer_email.value ? that.info.customer_email.value : ''
            });
        } else {
            that._renderInput({
                name: 'customer_email',
                id: 'customer_email',
                type: 'hidden',
                value: ''
            });
        }
        if (that.info.customer_phone) {
            that._renderInput({
                name: 'customer_phone',
                id: that.info.customer_phone.id ? that.info.customer_phone.id : 'customer_phone',
                type: that.info.customer_phone.type ? that.info.customer_phone.type : 'hidden',
                value: that.info.customer_phone.value ? that.info.customer_phone.value : ''
            });
        } else {
            that._renderInput({
                name: 'customer_phone',
                id: 'customer_phone',
                type: 'hidden',
                value: ''
            });
        }
        if (that.info.image_url) {
            that._renderInput({
                name: 'image_url',
                id: that.info.image_url.id ? that.info.image_url.id : 'image_url',
                type: that.info.image_url.type ? that.info.image_url.type : 'hidden',
                value: that.info.image_url.value ? that.info.image_url.value : ''
            });
        } else {
            that._renderInput({
                name: 'image_url',
                id: 'image_url',
                type: 'hidden',
                value: ''
            });
        }
        if (that.info.success_url) {
            that._renderInput({
                name: 'success_url',
                id: that.info.success_url.id ? that.info.success_url.id : 'success_url',
                type: that.info.success_url.type ? that.info.success_url.type : 'hidden',
                value: that.info.success_url.value ? that.info.success_url.value : ''
            });
        } else {
            that._renderInput({
                name: 'success_url',
                id: 'success_url',
                type: 'hidden',
                value: ''
            });
        }
        if (that.info.failed_url) {
            that._renderInput({
                name: 'failed_url',
                id: that.info.failed_url.id ? that.info.failed_url.id : 'success_url',
                type: that.info.failed_url.type ? that.info.failed_url.type : 'hidden',
                value: that.info.failed_url.value ? that.info.failed_url.value : ''
            });
        } else {
            that._renderInput({
                name: 'failed_url',
                id: 'failed_url',
                type: 'hidden',
                value: ''
            });
        }

        if (that.info.post_button) {
            that._renderSubmit({
                id: that.info.post_button.id ? that.info.post_button.id : 'cp-sub-'+that.uuid,
                name: that.info.post_button.name ? that.info.post_button.name : '',
                type: that.info.post_button.type ? that.info.post_button.type : 'image',
                value: that.info.post_button.value ? that.info.post_button.value : ''
            });
        } else {
            that._renderSubmit({
                id: 'cp-sub-'+that.uuid,
                name: '',
                type: 'image',
                value: ''
            });
        }
    };

    /**
     * Render input fields
     * @param params
     * @private
     */
    this._renderInput = function (params) {



        var input = document.createElement('input');
        input.name = params.name;
        input.id = params.id;
        input.type = params.type;
        input.value = params.value;

        that.form.appendChild(input)
    };

    /**
     * Render main form button
     * @private
     */
    this._renderForm = function () {
        that.form = document.createElement('form');
        that.form.setAttribute('action', 'https://compropago.com/comprobante');
        that.form.setAttribute('method', 'post');

        that.uuid = that._uuid();
        that.form.setAttribute('id', 'cp-form-'+that.uuid);
        that.container.appendChild(that.form);
    };

    /**
     * Render button submit
     * @param params
     * @private
     */
    this._renderSubmit = function (params) {
        var submit = document.createElement('input');

        submit.id = params.id;
        submit.name = params.name;

        if (params.type == 'image' || !params.type) {
            submit.type = params.type;
            submit.setAttribute('src', 'https://compropago.com/assets/payment-green-btn.png');
            submit.setAttribute('border', '0');
            submit.setAttribute('alt', 'Pagar con ComproPago');
        } else {
            submit.type = params.type;
            submit.value = params.value ? params.value : '';
        }

        that.form.appendChild(submit);

        submit.addEventListener('click', function (evt) {
            document.querySelector('#cp-form-'+that.uuid).submit();
        });
    };

    /**
     * Generate uuid
     * @returns {string}
     * @private
     */
    this._uuid = function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };

    return this;
};
