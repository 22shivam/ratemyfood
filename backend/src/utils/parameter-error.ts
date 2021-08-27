interface ParameterErrorOptions {
    fieldMissing: boolean;
    fields: string[];
}

class ParameterError extends Error {
    readonly options: ParameterErrorOptions = {
        fieldMissing: true,
        fields: []
    };

    constructor(message: string, _options: ParameterErrorOptions) {
        super(message);
        this.name = 'ParameterError';
        this.options = _options;
    }
}

export default ParameterError;