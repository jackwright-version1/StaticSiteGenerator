## How to debug failed test case

In the Visual Studio context, when you debug your app, it usually means that you are running the application with the debugger attached (that is, in debugger mode). When you do this, the debugger provides many ways to see what your code is doing while it runs. You can step through your code and look at the values stored in variables, you can set watches on variables to see when values change, you can examine the execution path of your code

### Set a breakpoint and start the debugger
To debug, you need to start your app with the debugger attached to the app process. F5 (Debug > Start Debugging) is the most common way to do that. Breakpoints are the most basic and essential feature of reliable debugging. A breakpoint indicates where Visual Studio should suspend your running code so you can take a look at the values of variables, or the behavior of memory, or whether or not a branch of code is getting run.

1. If you have a file open in the code editor, you can set a breakpoint by clicking in the margin to the left of a line of code.
2. Press F5 (Debug > Start Debugging) or the Start Debugging button Start Debugging in the Debug Toolbar, and the debugger runs to the first breakpoint that it encounters
3. If the app is not yet running, F5 starts the debugger and stops at the first breakpoint.

### Navigate code in the debugger using step commands
1. To start your app with the debugger attached, press F11 (Debug > Step Into).
2. F11 is the Step Into command and advances the app execution one statement at a time.
3. When you start the app with F11, the debugger breaks on the first statement that gets executed.
4. The yellow arrow represents the statement on which the debugger paused, which also suspends app execution at the same point (this statement has not yet been executed).

### Step over code to skip functions

When you are on a line of code that is a function or method call, you can press F10 (Debug > Step Over) instead of F11.

1. F10 advances the debugger without stepping into functions or methods in your app code.
2. By pressing F10, you can skip over code that you're not interested in

### Step into a property
As mentioned earlier, by default the debugger skips over managed properties and fields, but the Step Into Specific command allows you to override this behavior.

1. Right-click on a property or field and choose Step Into Specific, then choose one of the available options.

### Run to a point in your code quickly using the mouse
1. While in the debugger, hover over a line of code until the Run to Click (Run execution to here) button Screenshot of the Run to Click button from the Visual Studio Debugger. The button indicates that execution should run to the line where the button is placed. appears on the left.
2. Click the Run to Click (Run execution to here) button. The debugger advances to the line of code where you clicked.
3. Using this button is similar to setting a temporary breakpoint.

### Advance the debugger out of the current function
Sometimes, you might want to continue your debugging session but advance the debugger through the current function.
1. Press Shift + F11 (or Debug > Step Out).
2. This command resumes app execution (and advances the debugger) until the current function returns.

### Run to cursor
1. When you are editing code (rather than paused in the debugger), right-click a line of code in your app and choose Run to Cursor (or press Ctrl to F10).
2. If you have set breakpoints, the debugger pauses on the first breakpoint that it hits.
3. Press F5 until you reach the line of code where you selected Run to Cursor.
Extent Reports can be directly added by: Reference => Manage NuGet Packages.

