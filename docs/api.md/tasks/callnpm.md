
<br><a name="module_grunt-call-npm/tasks/callnpm"></a>

## grunt-call-npm/tasks/callnpm
> tasks/callnpm.js: grunt-call-npm


* [grunt-call-npm/tasks/callnpm](#module_grunt-call-npm/tasks/callnpm)
    * [~executeCallNPM(grunt, task, obj)](#module_grunt-call-npm/tasks/callnpm..executeCallNPM)
    * [~runTaskCallNPM()](#module_grunt-call-npm/tasks/callnpm..runTaskCallNPM) ⇒ <code>Promise</code>
    * [~registerMultiTaskCallNPM(grunt)](#module_grunt-call-npm/tasks/callnpm..registerMultiTaskCallNPM)


<br><a name="module_grunt-call-npm/tasks/callnpm..executeCallNPM"></a>

### grunt-call-npm/tasks/callnpm~executeCallNPM(grunt, task, obj)
> Return a promise for executing>    'node --[node opts] call-npm --[opts]'


| Param | Type | Description |
| --- | --- | --- |
| grunt | <code>grunt</code> | the runtime 'instance' of grunt. |
| task | <code>grunt.task</code> | the current task |
| obj | <code>Object</code> | wrapper for options and arguments. |


<br><a name="module_grunt-call-npm/tasks/callnpm..runTaskCallNPM"></a>

### grunt-call-npm/tasks/callnpm~runTaskCallNPM() ⇒ <code>Promise</code>
> Run the 'call_npm' task.

**Returns**: <code>Promise</code> - ... required by callee to terminate async call (on "then")  

<br><a name="module_grunt-call-npm/tasks/callnpm..registerMultiTaskCallNPM"></a>

### grunt-call-npm/tasks/callnpm~registerMultiTaskCallNPM(grunt)
> Registers the 'call_npm' multitask.


| Param | Type |
| --- | --- |
| grunt | <code>grunt</code> | 

