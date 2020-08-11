"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
const type_1 = require("../../../type");
class PositionNode extends base_1.ShaderNode {
    constructor(data) {
        super(data);
        this.concretePrecisionType = type_1.ConcretePrecisionType.Fixed;
        if (this.data.m_Space === type_1.PositionSpace.Object - type_1.PositionSpace.Object) {
            this.depVarings.push(type_1.PositionSpace.Object);
        }
        else if (this.data.m_Space === type_1.PositionSpace.View - type_1.PositionSpace.Object) {
            this.depVarings.push(type_1.PositionSpace.View);
        }
        else if (this.data.m_Space === type_1.PositionSpace.Tangent - type_1.PositionSpace.Object) {
            console.error('Not support Tangent Position');
            this.depVarings.push(type_1.PositionSpace.Tangent);
        }
        else if (this.data.m_Space === type_1.PositionSpace.World - type_1.PositionSpace.Object) {
            this.depVarings.push(type_1.PositionSpace.World);
        }
        else if (this.data.m_Space === type_1.PositionSpace.AbsoluteWorld - type_1.PositionSpace.Object) {
            this.depVarings.push(type_1.PositionSpace.AbsoluteWorld);
        }
    }
    calcConcretePrecision() {
        this.slots.forEach(slot => {
            slot._concretePrecision = 3;
        });
    }
    generateCode() {
        let name = 'v_pos';
        if (this.data.m_Space === type_1.PositionSpace.Object) {
            name = 'v_pos';
        }
        else if (this.data.m_Space === type_1.PositionSpace.View) {
            name = 'v_viewPos';
        }
        else if (this.data.m_Space === type_1.PositionSpace.Tangent) {
            // name = 'v_tangentPos';
            name = 'v_worldPos';
        }
        else if (this.data.m_Space === type_1.PositionSpace.World) {
            name = 'v_worldPos';
        }
        else if (this.data.m_Space === type_1.PositionSpace.AbsoluteWorld) {
            name = 'v_worldPos';
        }
        return `${this.getOutputVarDefine(0)} = ${name};`;
    }
}
exports.default = PositionNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9zaXRpb25Ob2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc291cmNlL3BhbmVsL29wZXJhdGlvbi9ub2Rlcy9pbnB1dC9nZW9tZXRyeS9Qb3NpdGlvbk5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBMkM7QUFDM0Msd0NBQXFFO0FBR3JFLE1BQXFCLFlBQWEsU0FBUSxpQkFBVTtJQUdoRCxZQUFhLElBQUk7UUFDYixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFIZiwwQkFBcUIsR0FBRyw0QkFBcUIsQ0FBQyxLQUFLLENBQUM7UUFLaEQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxvQkFBYSxDQUFDLE1BQU0sR0FBRyxvQkFBYSxDQUFDLE1BQU0sRUFBRTtZQUNuRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxvQkFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzlDO2FBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxvQkFBYSxDQUFDLElBQUksR0FBRyxvQkFBYSxDQUFDLE1BQU0sRUFBRTtZQUN0RSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxvQkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVDO2FBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxvQkFBYSxDQUFDLE9BQU8sR0FBRyxvQkFBYSxDQUFDLE1BQU0sRUFBRTtZQUN6RSxPQUFPLENBQUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsb0JBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvQzthQUNJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssb0JBQWEsQ0FBQyxLQUFLLEdBQUcsb0JBQWEsQ0FBQyxNQUFNLEVBQUU7WUFDdkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsb0JBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QzthQUNJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssb0JBQWEsQ0FBQyxhQUFhLEdBQUcsb0JBQWEsQ0FBQyxNQUFNLEVBQUU7WUFDL0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsb0JBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNyRDtJQUNMLENBQUM7SUFFRCxxQkFBcUI7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxZQUFZO1FBQ1IsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssb0JBQWEsQ0FBQyxNQUFNLEVBQUU7WUFDNUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztTQUNsQjthQUNJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssb0JBQWEsQ0FBQyxJQUFJLEVBQUU7WUFDL0MsSUFBSSxHQUFHLFdBQVcsQ0FBQztTQUN0QjthQUNJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssb0JBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDbEQseUJBQXlCO1lBQ3pCLElBQUksR0FBRyxZQUFZLENBQUM7U0FDdkI7YUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLG9CQUFhLENBQUMsS0FBSyxFQUFFO1lBQ2hELElBQUksR0FBRyxZQUFZLENBQUM7U0FDdkI7YUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLG9CQUFhLENBQUMsYUFBYSxFQUFFO1lBQ3hELElBQUksR0FBRyxZQUFZLENBQUM7U0FDdkI7UUFDRCxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDO0lBQ3RELENBQUM7Q0FDSjtBQWxERCwrQkFrREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJOb2RlIH0gZnJvbSBcIi4uLy4uLy4uL2Jhc2VcIjtcclxuaW1wb3J0IHsgQ29uY3JldGVQcmVjaXNpb25UeXBlLCBQb3NpdGlvblNwYWNlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NpdGlvbk5vZGUgZXh0ZW5kcyBTaGFkZXJOb2RlIHtcclxuICAgIGNvbmNyZXRlUHJlY2lzaW9uVHlwZSA9IENvbmNyZXRlUHJlY2lzaW9uVHlwZS5GaXhlZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoZGF0YSkge1xyXG4gICAgICAgIHN1cGVyKGRhdGEpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEubV9TcGFjZSA9PT0gUG9zaXRpb25TcGFjZS5PYmplY3QgLSBQb3NpdGlvblNwYWNlLk9iamVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlcFZhcmluZ3MucHVzaChQb3NpdGlvblNwYWNlLk9iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5tX1NwYWNlID09PSBQb3NpdGlvblNwYWNlLlZpZXcgLSBQb3NpdGlvblNwYWNlLk9iamVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlcFZhcmluZ3MucHVzaChQb3NpdGlvblNwYWNlLlZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmRhdGEubV9TcGFjZSA9PT0gUG9zaXRpb25TcGFjZS5UYW5nZW50IC0gUG9zaXRpb25TcGFjZS5PYmplY3QpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm90IHN1cHBvcnQgVGFuZ2VudCBQb3NpdGlvbicpO1xyXG4gICAgICAgICAgICB0aGlzLmRlcFZhcmluZ3MucHVzaChQb3NpdGlvblNwYWNlLlRhbmdlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmRhdGEubV9TcGFjZSA9PT0gUG9zaXRpb25TcGFjZS5Xb3JsZCAtIFBvc2l0aW9uU3BhY2UuT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVwVmFyaW5ncy5wdXNoKFBvc2l0aW9uU3BhY2UuV29ybGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmRhdGEubV9TcGFjZSA9PT0gUG9zaXRpb25TcGFjZS5BYnNvbHV0ZVdvcmxkIC0gUG9zaXRpb25TcGFjZS5PYmplY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXBWYXJpbmdzLnB1c2goUG9zaXRpb25TcGFjZS5BYnNvbHV0ZVdvcmxkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY0NvbmNyZXRlUHJlY2lzaW9uICgpIHtcclxuICAgICAgICB0aGlzLnNsb3RzLmZvckVhY2goc2xvdCA9PiB7XHJcbiAgICAgICAgICAgIHNsb3QuX2NvbmNyZXRlUHJlY2lzaW9uID0gMztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlQ29kZSAoKSB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSAndl9wb3MnO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEubV9TcGFjZSA9PT0gUG9zaXRpb25TcGFjZS5PYmplY3QpIHtcclxuICAgICAgICAgICAgbmFtZSA9ICd2X3Bvcyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5tX1NwYWNlID09PSBQb3NpdGlvblNwYWNlLlZpZXcpIHtcclxuICAgICAgICAgICAgbmFtZSA9ICd2X3ZpZXdQb3MnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmRhdGEubV9TcGFjZSA9PT0gUG9zaXRpb25TcGFjZS5UYW5nZW50KSB7XHJcbiAgICAgICAgICAgIC8vIG5hbWUgPSAndl90YW5nZW50UG9zJztcclxuICAgICAgICAgICAgbmFtZSA9ICd2X3dvcmxkUG9zJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5kYXRhLm1fU3BhY2UgPT09IFBvc2l0aW9uU3BhY2UuV29ybGQpIHtcclxuICAgICAgICAgICAgbmFtZSA9ICd2X3dvcmxkUG9zJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5kYXRhLm1fU3BhY2UgPT09IFBvc2l0aW9uU3BhY2UuQWJzb2x1dGVXb3JsZCkge1xyXG4gICAgICAgICAgICBuYW1lID0gJ3Zfd29ybGRQb3MnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5nZXRPdXRwdXRWYXJEZWZpbmUoMCl9ID0gJHtuYW1lfTtgO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=