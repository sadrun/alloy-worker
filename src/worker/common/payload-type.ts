declare namespace WorkerPayload {
    namespace WorkerReport {
        type CaptureWorkerException = {
            message: string;
            stack: string;
        };
        type Weblog = any;
        type Monitor = string;
    }

    namespace WorkerAbilityTest {
        type CommunicationTest = number;
        type HeartBeatTest = number;
    }
}

declare namespace WorkerReponse {
    namespace WorkerAbilityTest {
        type CommunicationTest = number;
        type HeartBeatTest = number;
    }

    namespace Cookie {
        type Cookie = string;
    }
}

/**
 * 支持 transfer 传输方式的类型声明
 * 通过 `&` 附加到 payload 类型后面
 */
interface Transfer {
    /**
     * 转换为 transfer 传输的属性列表
     */
    transferProps?: string[];
}
