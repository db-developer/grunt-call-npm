
<br><a name="module_grunt-call-npm/options/callnpm"></a>

## grunt-call-npm/options/callnpm
> src/lib/options/callnpm.js: grunt-call-npm> >   Provides default options and arguments for executing npm commands>   from Grunt tasks.


* [grunt-call-npm/options/callnpm](#module_grunt-call-npm/options/callnpm)
    * [.getArguments()](#module_grunt-call-npm/options/callnpm.getArguments) ⇒ <code>Object</code>
    * [.getOptions()](#module_grunt-call-npm/options/callnpm.getOptions) ⇒ <code>Object</code>
    * [.toArgs(grunt, task, [options])](#module_grunt-call-npm/options/callnpm.toArgs) ⇒ <code>Promise.&lt;Object&gt;</code>


<br><a name="module_grunt-call-npm/options/callnpm.getArguments"></a>

### grunt-call-npm/options/callnpm.getArguments() ⇒ <code>Object</code>
> Returns the default arguments for call_npm task.

**Returns**: <code>Object</code> - Default arguments { cmd, args, dryrun }  

<br><a name="module_grunt-call-npm/options/callnpm.getOptions"></a>

### grunt-call-npm/options/callnpm.getOptions() ⇒ <code>Object</code>
> Returns the default options for the `call_npm` task.> >  These defaults are used as a base and will be merged with>  task-specific options provided via `task.options()`.

**Returns**: <code>Object</code> - default options object  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cwd | <code>string</code> | Path to `current working directory` |
| env | <code>string</code> | default environment |
| quiet | <code>boolean</code> | run in quiet mode |
| shell | <code>boolean</code> | as of https://nodejs.org/en/blog/vulnerability/april-2024-security-releases-2 |
| stdio | <code>string</code> | how to handle io between parent and child process |


<br><a name="module_grunt-call-npm/options/callnpm.toArgs"></a>

### grunt-call-npm/options/callnpm.toArgs(grunt, task, [options]) ⇒ <code>Promise.&lt;Object&gt;</code>
> Converts task-specific options for the `call_npm` task into>  a plain options object used for executing Rollup.> >  If an `options` object is provided explicitly, it will be deep-cloned>  using `structuredClone()` to prevent unintended mutations.>  Otherwise, task options are resolved via `getTaskOptions()`.

**Returns**: <code>Promise.&lt;Object&gt;</code> - Resolved options object  
**Throws**:

- <code>Error</code> If required parameters are missing


| Param | Type | Description |
| --- | --- | --- |
| grunt | <code>grunt</code> | The Grunt runtime instance |
| task | <code>grunt.task</code> | The current Grunt task instance |
| [options] | <code>Object</code> | Optional task options override |

