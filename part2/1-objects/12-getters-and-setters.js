
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    this.getDefaultLocation = function () {
        return defaultLocation;
    }

    this.draw = function () {
        computeOptimalLocation();
        
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function (location) {
            if (!location.x || !location.y) {
                throw new Error('Invalid location');
            }
            defaultLocation = location;
        }
    });
}

const circle = new Circle(10);
circle.defaultLocation = 1;
circle.draw();

