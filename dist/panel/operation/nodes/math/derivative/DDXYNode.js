"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class DDXYNode extends base_1.ShaderNode {
    generateCode() {
        return `${this.getOutputVarDefine(0)} = abs(dFdx(${this.getInputValue(0)})) + abs(dFdy(${this.getInputValue(0)}));`;
    }
}
exports.default = DDXYNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRERYWU5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zb3VyY2UvcGFuZWwvb3BlcmF0aW9uL25vZGVzL21hdGgvZGVyaXZhdGl2ZS9ERFhZTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUEyQztBQUUzQyxNQUFxQixRQUFTLFNBQVEsaUJBQVU7SUFDNUMsWUFBWTtRQUNSLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGVBQWUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUN4SCxDQUFDO0NBQ0o7QUFKRCwyQkFJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYWRlck5vZGUgfSBmcm9tIFwiLi4vLi4vLi4vYmFzZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRERYWU5vZGUgZXh0ZW5kcyBTaGFkZXJOb2RlIHtcclxuICAgIGdlbmVyYXRlQ29kZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2V0T3V0cHV0VmFyRGVmaW5lKDApfSA9IGFicyhkRmR4KCR7dGhpcy5nZXRJbnB1dFZhbHVlKDApfSkpICsgYWJzKGRGZHkoJHt0aGlzLmdldElucHV0VmFsdWUoMCl9KSk7YDtcclxuICAgIH1cclxufVxyXG4iXX0=