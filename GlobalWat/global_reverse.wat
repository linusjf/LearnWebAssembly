(module
  (type (;0;) (func (result i32)))
  (type (;1;) (func))
  (import "js" "global" (global (;0;) (mut i32)))
  (func (;0;) (type 0) (result i32)
    global.get 0)
  (func (;1;) (type 1)
    global.get 0
    i32.const 1
    i32.add
    global.set 0)
  (export "getGlobal" (func 0))
  (export "incGlobal" (func 1)))
