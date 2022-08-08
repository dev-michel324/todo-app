const helpers = {
    equals: (a, b, options) => {
      return a == b ? options.fn(this) : options.inverse(this);
    },
    limitChar: (string, size) => {
        const sizeInt = parseInt(size);
        if (string.length > size){
            return string.substring(0, sizeInt) + '...';
        }
        return string;
    }
  };

module.exports = helpers;