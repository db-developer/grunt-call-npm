
<br><a name="module_grunt-call-npm/options"></a>

## grunt-call-npm/options
> lib/options/index.js: grunt-call-npm> > Aggregated options API for `grunt-call-npm`.> > This module exposes the public option-related functions that are> intended for external consumption.


<br><a name="module_grunt-call-npm/options.toArgs"></a>

### grunt-call-npm/options.toArgs(grunt, task, [options]) ⇒ <code>Promise.&lt;Object&gt;</code>
> Converts task-specific options for the `call_npm` task into>  a plain options object used for executing NPM.> >  This is a re-export of function [toArgs](callnpm.md#.toArgs)>  published by module [options/callnpm](callnpm.md)

**Returns**: <code>Promise.&lt;Object&gt;</code> - Resolved options object  

| Param | Type | Description |
| --- | --- | --- |
| grunt | <code>grunt</code> | The Grunt runtime instance |
| task | <code>grunt.task</code> | The current Grunt task instance |
| [options] | <code>Object</code> | Optional task options override |

