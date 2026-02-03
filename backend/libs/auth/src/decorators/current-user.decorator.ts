import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export type RequestUser = { sub: string; email: string } | undefined;
export const CurrentUser = createParamDecorator((_data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    return req.user as RequestUser;
});

