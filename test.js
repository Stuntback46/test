        function isStringPresent(object, filter) {
          let result = false;
          const keys = Object.keys(object);
          keys.map(key => {
            if (typeof object[key] === 'object') {
              result = result || isStringPresent(object[key], filter);
            } else if (typeof object[key] !== 'object' && typeof object[key] !== 'undefined') {
              result = result || object[key].toString().toLowerCase().includes(filter.toLowerCase());
            } 
          });
          return result;
        }
