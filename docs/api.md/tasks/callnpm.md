
<br><a name="module_grunt-call-npm/tasks/callnpm"></a>

## grunt-call-npm/tasks/callnpm
> src/lib/tasks/callnpm.js: grunt-call-npm> >  Implements the core logic of the `call_npm` Grunt multitask.> >  This module provides functionality to execute npm commands as part of a Grunt>  task, for reading config files, preparing task options and registering the task.


* [grunt-call-npm/tasks/callnpm](#module_grunt-call-npm/tasks/callnpm)
    * [.execute(grunt, task, obj)](#module_grunt-call-npm/tasks/callnpm.execute) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.runTask(grunt, task)](#module_grunt-call-npm/tasks/callnpm.runTask) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.registerMultiTask(grunt)](#module_grunt-call-npm/tasks/callnpm.registerMultiTask)


<br><a name="module_grunt-call-npm/tasks/callnpm.execute"></a>

### grunt-call-npm/tasks/callnpm.execute(grunt, task, obj) ⇒ <code>Promise.&lt;Object&gt;</code>
> Executes an npm command using the provided task options.>  'node --[node opts] call-npm --[opts]'

**Returns**: <code>Promise.&lt;Object&gt;</code> - Resolved object with execution details  
**Throws**:

- <code>Error</code> If required properties are missing


| Param | Type | Description |
| --- | --- | --- |
| grunt | <code>grunt</code> | The Grunt runtime |
| task | <code>grunt.task</code> | The current Grunt task |
| obj | <code>Object</code> | Options object containing cmd, args, opts |


<br><a name="module_grunt-call-npm/tasks/callnpm.runTask"></a>

### grunt-call-npm/tasks/callnpm.runTask(grunt, task) ⇒ <code>Promise.&lt;Object&gt;</code>
> Runs the `call_npm` task for the given Grunt task instance.> >  This function performs the full execution pipeline:>    1. Converts task-specific options into an options object via `toArgs`.>    2. Executes npm with the resolved options using `execute`.> >  It returns a Promise that resolves once the task has completed, either>  successfully or with a Rollup instance.

**Returns**: <code>Promise.&lt;Object&gt;</code> - Resolved object containing task options and spawn result (if executed)  
**Throws**:

- <code>Error</code> If option resolution or Rollup execution fails.


| Param | Type | Description |
| --- | --- | --- |
| grunt | <code>grunt</code> | The Grunt runtime instance. |
| task | <code>grunt.task</code> | The current Grunt task instance. |


<br><a name="module_grunt-call-npm/tasks/callnpm.registerMultiTask"></a>

### grunt-call-npm/tasks/callnpm.registerMultiTask(grunt)
> Registers the `call_npm` multitask with Grunt.> >  This is the main integration point for `grunt-call-npm` in a Gruntfile.>  It wraps the asynchronous task execution pipeline:>    1. Resolves task options via `runTask`.>    2. Handles logging and error reporting.


| Param | Type | Description |
| --- | --- | --- |
| grunt | <code>grunt</code> | The Grunt runtime instance. |

