import { createPodApi } from '/@/api/pod';
import { PodInCreate } from '/@/api/model/resources/podModel';
import { EnvVar } from '/@/api/model/resources/resourcesModel';

export interface pod {
  name: string;
  image: string;
  port: number;
  limit_cpu?: string;
  limit_memory?: string;
  mount?: Array<{ pvc: string; mountPath: string }>;
  env?: Array<EnvVar>;
}

export async function handleCreatePod(pod: pod) {
  const podParms: PodInCreate = {
    metadata: {
      name: pod.name,
    },
    spec: {
      containers: [
        {
          name: pod.name,
          image: pod.image,
          ports: [{ containerPort: pod.port }],
          env: pod.env,
        },
      ],
    },
  };

  // set limits
  if (pod.limit_memory || pod.limit_cpu) {
    const limits: { [key: string]: string } = {};

    if (pod.limit_memory !== undefined) limits.memory = pod.limit_memory as string;

    if (pod.limit_cpu !== undefined) limits.cpu = pod.limit_cpu;

    podParms.spec.containers[0].resources = {
      limits: limits,
    };
  }

  // set volume mount
  if (pod.mount !== undefined && podParms.spec.containers[0]) {
    podParms.spec.containers[0].volumeMounts = [];
    podParms.spec.volumes = [];

    pod.mount.forEach(function (mount, index) {
      podParms.spec.containers[0].volumeMounts?.push({
        name: `${index}`,
        mountPath: mount.mountPath,
      });
      podParms.spec.volumes?.push({
        name: `${index}`,
        persistentVolumeClaim: {
          claimName: mount.pvc,
        },
      });
    });
  }
  return await createPodApi(podParms);
}
