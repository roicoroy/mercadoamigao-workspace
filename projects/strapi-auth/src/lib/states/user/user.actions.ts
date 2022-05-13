/* eslint-disable @typescript-eslint/no-namespace */

import { IUser } from '../../types/models/User';
import { IResAuthLogin } from '../../types/responses/ResAuthLogin';

export namespace UserActions {

    export class Get {
        static readonly type = '[User] Get';
    }
    export class Set {
        static readonly type = '[User] Get';
        constructor(public payload) {
        }
    }
    export class Out {
        static readonly type = '[User] Out';
    }

}
