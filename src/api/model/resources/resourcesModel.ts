/**
 *
 * @export
 * @interface AWSElasticBlockStoreVolumeSource
 */
export interface AWSElasticBlockStoreVolumeSource {
  /**
   * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
   * @type {string}
   * @memberof AWSElasticBlockStoreVolumeSource
   */
  fsType?: string;
  /**
   * The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as \"1\". Similarly, the volume partition for /dev/sda is \"0\" (or you can leave the property empty).
   * @type {number}
   * @memberof AWSElasticBlockStoreVolumeSource
   */
  partition?: number;
  /**
   * Specify \"true\" to force and set the ReadOnly property in VolumeMounts to \"true\". If omitted, the default is \"false\". More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
   * @type {boolean}
   * @memberof AWSElasticBlockStoreVolumeSource
   */
  readOnly?: boolean;
  /**
   * Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
   * @type {string}
   * @memberof AWSElasticBlockStoreVolumeSource
   */
  volumeID: string;
}
/**
 *
 * @export
 * @interface Affinity
 */
export interface Affinity {
  /**
   * Describes node affinity scheduling rules for the pod.
   * @type {NodeAffinity}
   * @memberof Affinity
   */
  nodeAffinity?: NodeAffinity;
  /**
   * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
   * @type {PodAffinity}
   * @memberof Affinity
   */
  podAffinity?: PodAffinity;
  /**
   * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
   * @type {PodAntiAffinity}
   * @memberof Affinity
   */
  podAntiAffinity?: PodAntiAffinity;
}
/**
 *
 * @export
 * @interface AzureDiskVolumeSource
 */
export interface AzureDiskVolumeSource {
  /**
   * Host Caching mode: None, Read Only, Read Write.
   * @type {string}
   * @memberof AzureDiskVolumeSource
   */
  cachingMode?: string;
  /**
   * The Name of the data disk in the blob storage
   * @type {string}
   * @memberof AzureDiskVolumeSource
   */
  diskName: string;
  /**
   * The URI the data disk in the blob storage
   * @type {string}
   * @memberof AzureDiskVolumeSource
   */
  diskURI: string;
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
   * @type {string}
   * @memberof AzureDiskVolumeSource
   */
  fsType?: string;
  /**
   * Expected values Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared
   * @type {string}
   * @memberof AzureDiskVolumeSource
   */
  kind?: string;
  /**
   * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   * @type {boolean}
   * @memberof AzureDiskVolumeSource
   */
  readOnly?: boolean;
}
/**
 *
 * @export
 * @interface AzureFileVolumeSource
 */
export interface AzureFileVolumeSource {
  /**
   * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   * @type {boolean}
   * @memberof AzureFileVolumeSource
   */
  readOnly?: boolean;
  /**
   * the name of secret that contains Azure Storage Account Name and Key
   * @type {string}
   * @memberof AzureFileVolumeSource
   */
  secretName: string;
  /**
   * Share Name
   * @type {string}
   * @memberof AzureFileVolumeSource
   */
  shareName: string;
}
/**
 *
 * @export
 * @interface CSIVolumeSource
 */
export interface CSIVolumeSource {
  /**
   * Driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.
   * @type {string}
   * @memberof CSIVolumeSource
   */
  driver: string;
  /**
   * Filesystem type to mount. Ex. \"ext4\", \"xfs\", \"ntfs\". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.
   * @type {string}
   * @memberof CSIVolumeSource
   */
  fsType?: string;
  /**
   * NodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and  may be empty if no secret is required. If the secret object contains more than one secret, all secret references are passed.
   * @type {LocalObjectReference}
   * @memberof CSIVolumeSource
   */
  nodePublishSecretRef?: LocalObjectReference;
  /**
   * Specifies a read-only configuration for the volume. Defaults to false (read/write).
   * @type {boolean}
   * @memberof CSIVolumeSource
   */
  readOnly?: boolean;
  /**
   * VolumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver\'s documentation for supported values.
   * @type {{ [key: string]: string; }}
   * @memberof CSIVolumeSource
   */
  volumeAttributes?: { [key: string]: string };
}
/**
 *
 * @export
 * @interface Capabilities
 */
export interface Capabilities {
  /**
   * Added capabilities
   * @type {Array<string>}
   * @memberof Capabilities
   */
  add?: Array<string>;
  /**
   * Removed capabilities
   * @type {Array<string>}
   * @memberof Capabilities
   */
  drop?: Array<string>;
}
/**
 *
 * @export
 * @interface CephFSVolumeSource
 */
export interface CephFSVolumeSource {
  /**
   * Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
   * @type {Array<string>}
   * @memberof CephFSVolumeSource
   */
  monitors: Array<string>;
  /**
   * Optional: Used as the mounted root, rather than the full Ceph tree, default is /
   * @type {string}
   * @memberof CephFSVolumeSource
   */
  path?: string;
  /**
   * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
   * @type {boolean}
   * @memberof CephFSVolumeSource
   */
  readOnly?: boolean;
  /**
   * Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
   * @type {string}
   * @memberof CephFSVolumeSource
   */
  secretFile?: string;
  /**
   * Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
   * @type {LocalObjectReference}
   * @memberof CephFSVolumeSource
   */
  secretRef?: LocalObjectReference;
  /**
   * Optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
   * @type {string}
   * @memberof CephFSVolumeSource
   */
  user?: string;
}
/**
 *
 * @export
 * @interface CinderVolumeSource
 */
export interface CinderVolumeSource {
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
   * @type {string}
   * @memberof CinderVolumeSource
   */
  fsType?: string;
  /**
   * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
   * @type {boolean}
   * @memberof CinderVolumeSource
   */
  readOnly?: boolean;
  /**
   * Optional: points to a secret object containing parameters used to connect to OpenStack.
   * @type {LocalObjectReference}
   * @memberof CinderVolumeSource
   */
  secretRef?: LocalObjectReference;
  /**
   * volume id used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
   * @type {string}
   * @memberof CinderVolumeSource
   */
  volumeID: string;
}
/**
 *
 * @export
 * @interface ConfigMapEnvSource
 */
export interface ConfigMapEnvSource {
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   * @type {string}
   * @memberof ConfigMapEnvSource
   */
  name?: string;
  /**
   * Specify whether the ConfigMap must be defined
   * @type {boolean}
   * @memberof ConfigMapEnvSource
   */
  optional?: boolean;
}
/**
 *
 * @export
 * @interface ConfigMapKeySelector
 */
export interface ConfigMapKeySelector {
  /**
   * The key to select.
   * @type {string}
   * @memberof ConfigMapKeySelector
   */
  key: string;
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   * @type {string}
   * @memberof ConfigMapKeySelector
   */
  name?: string;
  /**
   * Specify whether the ConfigMap or its key must be defined
   * @type {boolean}
   * @memberof ConfigMapKeySelector
   */
  optional?: boolean;
}
/**
 *
 * @export
 * @interface ConfigMapProjection
 */
export interface ConfigMapProjection {
  /**
   * If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the \'..\' path or start with \'..\'.
   * @type {Array<KeyToPath>}
   * @memberof ConfigMapProjection
   */
  items?: Array<KeyToPath>;
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   * @type {string}
   * @memberof ConfigMapProjection
   */
  name?: string;
  /**
   * Specify whether the ConfigMap or its keys must be defined
   * @type {boolean}
   * @memberof ConfigMapProjection
   */
  optional?: boolean;
}
/**
 *
 * @export
 * @interface ConfigMapVolumeSource
 */
export interface ConfigMapVolumeSource {
  /**
   * Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
   * @type {number}
   * @memberof ConfigMapVolumeSource
   */
  defaultMode?: number;
  /**
   * If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the \'..\' path or start with \'..\'.
   * @type {Array<KeyToPath>}
   * @memberof ConfigMapVolumeSource
   */
  items?: Array<KeyToPath>;
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   * @type {string}
   * @memberof ConfigMapVolumeSource
   */
  name?: string;
  /**
   * Specify whether the ConfigMap or its keys must be defined
   * @type {boolean}
   * @memberof ConfigMapVolumeSource
   */
  optional?: boolean;
}
/**
 *
 * @export
 * @interface Container
 */
export interface Container {
  /**
   * Arguments to the entrypoint. The docker image\'s CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
   * @type {Array<string>}
   * @memberof Container
   */
  args?: Array<string>;
  /**
   * Entrypoint array. Not executed within a shell. The docker image\'s ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
   * @type {Array<string>}
   * @memberof Container
   */
  command?: Array<string>;
  /**
   * List of environment variables to set in the container. Cannot be updated.
   * @type {Array<EnvVar>}
   * @memberof Container
   */
  env?: Array<EnvVar>;
  /**
   * List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
   * @type {Array<EnvFromSource>}
   * @memberof Container
   */
  envFrom?: Array<EnvFromSource>;
  /**
   * Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
   * @type {string}
   * @memberof Container
   */
  image?: string;
  /**
   * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
   * @type {string}
   * @memberof Container
   */
  imagePullPolicy?: string;
  /**
   * Actions that the management system should take in response to container lifecycle events. Cannot be updated.
   * @type {Lifecycle}
   * @memberof Container
   */
  lifecycle?: Lifecycle;
  /**
   * Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
   * @type {Probe}
   * @memberof Container
   */
  livenessProbe?: Probe;
  /**
   * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
   * @type {string}
   * @memberof Container
   */
  name: string;
  /**
   * List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default \"0.0.0.0\" address inside a container will be accessible from the network. Cannot be updated.
   * @type {Array<ContainerPort>}
   * @memberof Container
   */
  ports?: Array<ContainerPort>;
  /**
   * Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
   * @type {Probe}
   * @memberof Container
   */
  readinessProbe?: Probe;
  /**
   * Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
   * @type {ResourceRequirements}
   * @memberof Container
   */
  resources?: ResourceRequirements;
  /**
   * Security options the pod should run with. More info: https://kubernetes.io/docs/concepts/policy/security-context/ More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
   * @type {SecurityContext}
   * @memberof Container
   */
  securityContext?: SecurityContext;
  /**
   * StartupProbe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a Pod\'s lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. This is a beta feature enabled by the StartupProbe feature flag. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
   * @type {Probe}
   * @memberof Container
   */
  startupProbe?: Probe;
  /**
   * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
   * @type {boolean}
   * @memberof Container
   */
  stdin?: boolean;
  /**
   * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
   * @type {boolean}
   * @memberof Container
   */
  stdinOnce?: boolean;
  /**
   * Optional: Path at which the file to which the container\'s termination message will be written is mounted into the container\'s filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
   * @type {string}
   * @memberof Container
   */
  terminationMessagePath?: string;
  /**
   * Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
   * @type {string}
   * @memberof Container
   */
  terminationMessagePolicy?: string;
  /**
   * Whether this container should allocate a TTY for itself, also requires \'stdin\' to be true. Default is false.
   * @type {boolean}
   * @memberof Container
   */
  tty?: boolean;
  /**
   * volumeDevices is the list of block devices to be used by the container.
   * @type {Array<VolumeDevice>}
   * @memberof Container
   */
  volumeDevices?: Array<VolumeDevice>;
  /**
   * Pod volumes to mount into the container\'s filesystem. Cannot be updated.
   * @type {Array<VolumeMount>}
   * @memberof Container
   */
  volumeMounts?: Array<VolumeMount>;
  /**
   * Container\'s working directory. If not specified, the container runtime\'s default will be used, which might be configured in the container image. Cannot be updated.
   * @type {string}
   * @memberof Container
   */
  workingDir?: string;
}
/**
 *
 * @export
 * @interface ContainerPort
 */
export interface ContainerPort {
  /**
   * Number of port to expose on the pod\'s IP address. This must be a valid port number, 0 < x < 65536.
   * @type {number}
   * @memberof ContainerPort
   */
  containerPort: number;
  /**
   * What host IP to bind the external port to.
   * @type {string}
   * @memberof ContainerPort
   */
  hostIP?: string;
  /**
   * Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
   * @type {number}
   * @memberof ContainerPort
   */
  hostPort?: number;
  /**
   * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services.
   * @type {string}
   * @memberof ContainerPort
   */
  name?: string;
  /**
   * Protocol for port. Must be UDP, TCP, or SCTP. Defaults to \"TCP\".
   * @type {string}
   * @memberof ContainerPort
   */
  protocol?: string;
}
/**
 *
 * @export
 * @interface ContainerState
 */
export interface ContainerState {
  /**
   * Details about a running container
   * @type {ContainerStateRunning}
   * @memberof ContainerState
   */
  running?: ContainerStateRunning;
  /**
   * Details about a terminated container
   * @type {ContainerStateTerminated}
   * @memberof ContainerState
   */
  terminated?: ContainerStateTerminated;
  /**
   * Details about a waiting container
   * @type {ContainerStateWaiting}
   * @memberof ContainerState
   */
  waiting?: ContainerStateWaiting;
}
/**
 *
 * @export
 * @interface ContainerStateRunning
 */
export interface ContainerStateRunning {
  /**
   * Time at which the container was last (re-)started
   * @type {string}
   * @memberof ContainerStateRunning
   */
  startedAt?: string;
}
/**
 *
 * @export
 * @interface ContainerStateTerminated
 */
export interface ContainerStateTerminated {
  /**
   * Container\'s ID in the format \'docker://<container_id>\'
   * @type {string}
   * @memberof ContainerStateTerminated
   */
  containerID?: string;
  /**
   * Exit status from the last termination of the container
   * @type {number}
   * @memberof ContainerStateTerminated
   */
  exitCode: number;
  /**
   * Time at which the container last terminated
   * @type {string}
   * @memberof ContainerStateTerminated
   */
  finishedAt?: string;
  /**
   * Message regarding the last termination of the container
   * @type {string}
   * @memberof ContainerStateTerminated
   */
  message?: string;
  /**
   * (brief) reason from the last termination of the container
   * @type {string}
   * @memberof ContainerStateTerminated
   */
  reason?: string;
  /**
   * Signal from the last termination of the container
   * @type {number}
   * @memberof ContainerStateTerminated
   */
  signal?: number;
  /**
   * Time at which previous execution of the container started
   * @type {string}
   * @memberof ContainerStateTerminated
   */
  startedAt?: string;
}
/**
 *
 * @export
 * @interface ContainerStateWaiting
 */
export interface ContainerStateWaiting {
  /**
   * Message regarding why the container is not yet running.
   * @type {string}
   * @memberof ContainerStateWaiting
   */
  message?: string;
  /**
   * (brief) reason the container is not yet running.
   * @type {string}
   * @memberof ContainerStateWaiting
   */
  reason?: string;
}
/**
 *
 * @export
 * @interface ContainerStatus
 */
export interface ContainerStatus {
  /**
   * Container\'s ID in the format \'docker://<container_id>\'.
   * @type {string}
   * @memberof ContainerStatus
   */
  containerID?: string;
  /**
   * The image the container is running. More info: https://kubernetes.io/docs/concepts/containers/images
   * @type {string}
   * @memberof ContainerStatus
   */
  image: string;
  /**
   * ImageID of the container\'s image.
   * @type {string}
   * @memberof ContainerStatus
   */
  imageID: string;
  /**
   * Details about the container\'s last termination condition.
   * @type {ContainerState}
   * @memberof ContainerStatus
   */
  lastState?: ContainerState;
  /**
   * This must be a DNS_LABEL. Each container in a pod must have a unique name. Cannot be updated.
   * @type {string}
   * @memberof ContainerStatus
   */
  name: string;
  /**
   * Specifies whether the container has passed its readiness probe.
   * @type {boolean}
   * @memberof ContainerStatus
   */
  ready: boolean;
  /**
   * The number of times the container has been restarted, currently based on the number of dead containers that have not yet been removed. Note that this is calculated from dead containers. But those containers are subject to garbage collection. This value will get capped at 5 by GC.
   * @type {number}
   * @memberof ContainerStatus
   */
  restartCount: number;
  /**
   * Specifies whether the container has passed its startup probe. Initialized as false, becomes true after startupProbe is considered successful. Resets to false when the container is restarted, or if kubelet loses state temporarily. Is always true when no startupProbe is defined.
   * @type {boolean}
   * @memberof ContainerStatus
   */
  started?: boolean;
  /**
   * Details about the container\'s current condition.
   * @type {ContainerState}
   * @memberof ContainerStatus
   */
  state?: ContainerState;
}
/**
 *
 * @export
 * @interface DownwardAPIProjection
 */
export interface DownwardAPIProjection {
  /**
   * Items is a list of DownwardAPIVolume file
   * @type {Array<DownwardAPIVolumeFile>}
   * @memberof DownwardAPIProjection
   */
  items?: Array<DownwardAPIVolumeFile>;
}
/**
 *
 * @export
 * @interface DownwardAPIVolumeFile
 */
export interface DownwardAPIVolumeFile {
  /**
   * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
   * @type {ObjectFieldSelector}
   * @memberof DownwardAPIVolumeFile
   */
  fieldRef?: ObjectFieldSelector;
  /**
   * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
   * @type {number}
   * @memberof DownwardAPIVolumeFile
   */
  mode?: number;
  /**
   * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the \'..\' path. Must be utf-8 encoded. The first item of the relative path must not start with \'..\'
   * @type {string}
   * @memberof DownwardAPIVolumeFile
   */
  path: string;
  /**
   * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
   * @type {ResourceFieldSelector}
   * @memberof DownwardAPIVolumeFile
   */
  resourceFieldRef?: ResourceFieldSelector;
}
/**
 *
 * @export
 * @interface DownwardAPIVolumeSource
 */
export interface DownwardAPIVolumeSource {
  /**
   * Optional: mode bits to use on created files by default. Must be a Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
   * @type {number}
   * @memberof DownwardAPIVolumeSource
   */
  defaultMode?: number;
  /**
   * Items is a list of downward API volume file
   * @type {Array<DownwardAPIVolumeFile>}
   * @memberof DownwardAPIVolumeSource
   */
  items?: Array<DownwardAPIVolumeFile>;
}
/**
 *
 * @export
 * @interface EmptyDirVolumeSource
 */
export interface EmptyDirVolumeSource {
  /**
   * What type of storage medium should back this directory. The default is \"\" which means to use the node\'s default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
   * @type {string}
   * @memberof EmptyDirVolumeSource
   */
  medium?: string;
  /**
   * Total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir
   * @type {string}
   * @memberof EmptyDirVolumeSource
   */
  sizeLimit?: string;
}
/**
 *
 * @export
 * @interface EnvFromSource
 */
export interface EnvFromSource {
  /**
   * The ConfigMap to select from
   * @type {ConfigMapEnvSource}
   * @memberof EnvFromSource
   */
  configMapRef?: ConfigMapEnvSource;
  /**
   * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
   * @type {string}
   * @memberof EnvFromSource
   */
  prefix?: string;
  /**
   * The Secret to select from
   * @type {SecretEnvSource}
   * @memberof EnvFromSource
   */
  secretRef?: SecretEnvSource;
}
/**
 *
 * @export
 * @interface EnvVar
 */
export interface EnvVar {
  /**
   * Name of the environment variable. Must be a C_IDENTIFIER.
   * @type {string}
   * @memberof EnvVar
   */
  name: string;
  /**
   * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to \"\".
   * @type {string}
   * @memberof EnvVar
   */
  value?: string;
  /**
   * Source for the environment variable\'s value. Cannot be used if value is not empty.
   * @type {EnvVarSource}
   * @memberof EnvVar
   */
  valueFrom?: EnvVarSource;
}
/**
 *
 * @export
 * @interface EnvVarSource
 */
export interface EnvVarSource {
  /**
   * Selects a key of a ConfigMap.
   * @type {ConfigMapKeySelector}
   * @memberof EnvVarSource
   */
  configMapKeyRef?: ConfigMapKeySelector;
  /**
   * Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels[\'<KEY>\']`, `metadata.annotations[\'<KEY>\']`, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
   * @type {ObjectFieldSelector}
   * @memberof EnvVarSource
   */
  fieldRef?: ObjectFieldSelector;
  /**
   * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
   * @type {ResourceFieldSelector}
   * @memberof EnvVarSource
   */
  resourceFieldRef?: ResourceFieldSelector;
  /**
   * Selects a key of a secret in the pod\'s namespace
   * @type {SecretKeySelector}
   * @memberof EnvVarSource
   */
  secretKeyRef?: SecretKeySelector;
}
/**
 *
 * @export
 * @interface EphemeralContainer
 */
export interface EphemeralContainer {
  /**
   * Arguments to the entrypoint. The docker image\'s CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
   * @type {Array<string>}
   * @memberof EphemeralContainer
   */
  args?: Array<string>;
  /**
   * Entrypoint array. Not executed within a shell. The docker image\'s ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
   * @type {Array<string>}
   * @memberof EphemeralContainer
   */
  command?: Array<string>;
  /**
   * List of environment variables to set in the container. Cannot be updated.
   * @type {Array<EnvVar>}
   * @memberof EphemeralContainer
   */
  env?: Array<EnvVar>;
  /**
   * List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
   * @type {Array<EnvFromSource>}
   * @memberof EphemeralContainer
   */
  envFrom?: Array<EnvFromSource>;
  /**
   * Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images
   * @type {string}
   * @memberof EphemeralContainer
   */
  image?: string;
  /**
   * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
   * @type {string}
   * @memberof EphemeralContainer
   */
  imagePullPolicy?: string;
  /**
   * Lifecycle is not allowed for ephemeral containers.
   * @type {Lifecycle}
   * @memberof EphemeralContainer
   */
  lifecycle?: Lifecycle;
  /**
   * Probes are not allowed for ephemeral containers.
   * @type {Probe}
   * @memberof EphemeralContainer
   */
  livenessProbe?: Probe;
  /**
   * Name of the ephemeral container specified as a DNS_LABEL. This name must be unique among all containers, init containers and ephemeral containers.
   * @type {string}
   * @memberof EphemeralContainer
   */
  name: string;
  /**
   * Ports are not allowed for ephemeral containers.
   * @type {Array<ContainerPort>}
   * @memberof EphemeralContainer
   */
  ports?: Array<ContainerPort>;
  /**
   * Probes are not allowed for ephemeral containers.
   * @type {Probe}
   * @memberof EphemeralContainer
   */
  readinessProbe?: Probe;
  /**
   * Resources are not allowed for ephemeral containers. Ephemeral containers use spare resources already allocated to the pod.
   * @type {ResourceRequirements}
   * @memberof EphemeralContainer
   */
  resources?: ResourceRequirements;
  /**
   * SecurityContext is not allowed for ephemeral containers.
   * @type {SecurityContext}
   * @memberof EphemeralContainer
   */
  securityContext?: SecurityContext;
  /**
   * Probes are not allowed for ephemeral containers.
   * @type {Probe}
   * @memberof EphemeralContainer
   */
  startupProbe?: Probe;
  /**
   * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
   * @type {boolean}
   * @memberof EphemeralContainer
   */
  stdin?: boolean;
  /**
   * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
   * @type {boolean}
   * @memberof EphemeralContainer
   */
  stdinOnce?: boolean;
  /**
   * If set, the name of the container from PodSpec that this ephemeral container targets. The ephemeral container will be run in the namespaces (IPC, PID, etc) of this container. If not set then the ephemeral container is run in whatever namespaces are shared for the pod. Note that the container runtime must support this feature.
   * @type {string}
   * @memberof EphemeralContainer
   */
  targetContainerName?: string;
  /**
   * Optional: Path at which the file to which the container\'s termination message will be written is mounted into the container\'s filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
   * @type {string}
   * @memberof EphemeralContainer
   */
  terminationMessagePath?: string;
  /**
   * Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
   * @type {string}
   * @memberof EphemeralContainer
   */
  terminationMessagePolicy?: string;
  /**
   * Whether this container should allocate a TTY for itself, also requires \'stdin\' to be true. Default is false.
   * @type {boolean}
   * @memberof EphemeralContainer
   */
  tty?: boolean;
  /**
   * volumeDevices is the list of block devices to be used by the container.
   * @type {Array<VolumeDevice>}
   * @memberof EphemeralContainer
   */
  volumeDevices?: Array<VolumeDevice>;
  /**
   * Pod volumes to mount into the container\'s filesystem. Cannot be updated.
   * @type {Array<VolumeMount>}
   * @memberof EphemeralContainer
   */
  volumeMounts?: Array<VolumeMount>;
  /**
   * Container\'s working directory. If not specified, the container runtime\'s default will be used, which might be configured in the container image. Cannot be updated.
   * @type {string}
   * @memberof EphemeralContainer
   */
  workingDir?: string;
}
/**
 *
 * @export
 * @interface EphemeralVolumeSource
 */
export interface EphemeralVolumeSource {
  /**
   * Specifies a read-only configuration for the volume. Defaults to false (read/write).
   * @type {boolean}
   * @memberof EphemeralVolumeSource
   */
  readOnly?: boolean;
  /**
   * Will be used to create a stand-alone PVC to provision the volume. The pod in which this EphemeralVolumeSource is embedded will be the owner of the PVC, i.e. the PVC will be deleted together with the pod.  The name of the PVC will be `<pod name>-<volume name>` where `<volume name>` is the name from the `PodSpec.Volumes` array entry. Pod validation will reject the pod if the concatenated name is not valid for a PVC (for example, too long).  An existing PVC with that name that is not owned by the pod will *not* be used for the pod to avoid using an unrelated volume by mistake. Starting the pod is then blocked until the unrelated PVC is removed. If such a pre-created PVC is meant to be used by the pod, the PVC has to updated with an owner reference to the pod once the pod exists. Normally this should not be necessary, but it may be useful when manually reconstructing a broken cluster.  This field is read-only and no changes will be made by Kubernetes to the PVC after it has been created.  Required, must not be nil.
   * @type {PersistentVolumeClaimTemplate}
   * @memberof EphemeralVolumeSource
   */
  volumeClaimTemplate?: PersistentVolumeClaimTemplate;
}
/**
 *
 * @export
 * @interface ExecAction
 */
export interface ExecAction {
  /**
   * Command is the command line to execute inside the container, the working directory for the command  is root (\'/\') in the container\'s filesystem. The command is simply exec\'d, it is not run inside a shell, so traditional shell instructions (\'|\', etc) won\'t work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
   * @type {Array<string>}
   * @memberof ExecAction
   */
  command?: Array<string>;
}
/**
 *
 * @export
 * @interface FCVolumeSource
 */
export interface FCVolumeSource {
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
   * @type {string}
   * @memberof FCVolumeSource
   */
  fsType?: string;
  /**
   * Optional: FC target lun number
   * @type {number}
   * @memberof FCVolumeSource
   */
  lun?: number;
  /**
   * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   * @type {boolean}
   * @memberof FCVolumeSource
   */
  readOnly?: boolean;
  /**
   * Optional: FC target worldwide names (WWNs)
   * @type {Array<string>}
   * @memberof FCVolumeSource
   */
  targetWWNs?: Array<string>;
  /**
   * Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.
   * @type {Array<string>}
   * @memberof FCVolumeSource
   */
  wwids?: Array<string>;
}
/**
 *
 * @export
 * @interface FlexVolumeSource
 */
export interface FlexVolumeSource {
  /**
   * Driver is the name of the driver to use for this volume.
   * @type {string}
   * @memberof FlexVolumeSource
   */
  driver: string;
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". The default filesystem depends on FlexVolume script.
   * @type {string}
   * @memberof FlexVolumeSource
   */
  fsType?: string;
  /**
   * Optional: Extra command options if any.
   * @type {{ [key: string]: string; }}
   * @memberof FlexVolumeSource
   */
  options?: { [key: string]: string };
  /**
   * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   * @type {boolean}
   * @memberof FlexVolumeSource
   */
  readOnly?: boolean;
  /**
   * Optional: SecretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.
   * @type {LocalObjectReference}
   * @memberof FlexVolumeSource
   */
  secretRef?: LocalObjectReference;
}
/**
 *
 * @export
 * @interface FlockerVolumeSource
 */
export interface FlockerVolumeSource {
  /**
   * Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
   * @type {string}
   * @memberof FlockerVolumeSource
   */
  datasetName?: string;
  /**
   * UUID of the dataset. This is unique identifier of a Flocker dataset
   * @type {string}
   * @memberof FlockerVolumeSource
   */
  datasetUUID?: string;
}
/**
 *
 * @export
 * @interface GCEPersistentDiskVolumeSource
 */
export interface GCEPersistentDiskVolumeSource {
  /**
   * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
   * @type {string}
   * @memberof GCEPersistentDiskVolumeSource
   */
  fsType?: string;
  /**
   * The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as \"1\". Similarly, the volume partition for /dev/sda is \"0\" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
   * @type {number}
   * @memberof GCEPersistentDiskVolumeSource
   */
  partition?: number;
  /**
   * Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
   * @type {string}
   * @memberof GCEPersistentDiskVolumeSource
   */
  pdName: string;
  /**
   * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
   * @type {boolean}
   * @memberof GCEPersistentDiskVolumeSource
   */
  readOnly?: boolean;
}
/**
 *
 * @export
 * @interface GitRepoVolumeSource
 */
export interface GitRepoVolumeSource {
  /**
   * Target directory name. Must not contain or start with \'..\'.  If \'.\' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
   * @type {string}
   * @memberof GitRepoVolumeSource
   */
  directory?: string;
  /**
   * Repository URL
   * @type {string}
   * @memberof GitRepoVolumeSource
   */
  repository: string;
  /**
   * Commit hash for the specified revision.
   * @type {string}
   * @memberof GitRepoVolumeSource
   */
  revision?: string;
}
/**
 *
 * @export
 * @interface GlusterfsVolumeSource
 */
export interface GlusterfsVolumeSource {
  /**
   * EndpointsName is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
   * @type {string}
   * @memberof GlusterfsVolumeSource
   */
  endpoints: string;
  /**
   * Path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
   * @type {string}
   * @memberof GlusterfsVolumeSource
   */
  path: string;
  /**
   * ReadOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
   * @type {boolean}
   * @memberof GlusterfsVolumeSource
   */
  readOnly?: boolean;
}
/**
 *
 * @export
 * @interface HTTPGetAction
 */
export interface HTTPGetAction {
  /**
   * Host name to connect to, defaults to the pod IP. You probably want to set \"Host\" in httpHeaders instead.
   * @type {string}
   * @memberof HTTPGetAction
   */
  host?: string;
  /**
   * Custom headers to set in the request. HTTP allows repeated headers.
   * @type {Array<HTTPHeader>}
   * @memberof HTTPGetAction
   */
  httpHeaders?: Array<HTTPHeader>;
  /**
   * Path to access on the HTTP server.
   * @type {string}
   * @memberof HTTPGetAction
   */
  path?: string;
  /**
   * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
   * @type {string}
   * @memberof HTTPGetAction
   */
  port: string;
  /**
   * Scheme to use for connecting to the host. Defaults to HTTP.
   * @type {string}
   * @memberof HTTPGetAction
   */
  scheme?: string;
}
/**
 *
 * @export
 * @interface HTTPHeader
 */
export interface HTTPHeader {
  /**
   * The header field name
   * @type {string}
   * @memberof HTTPHeader
   */
  name: string;
  /**
   * The header field value
   * @type {string}
   * @memberof HTTPHeader
   */
  value: string;
}
/**
 *
 * @export
 * @interface HTTPValidationError
 */
export interface HTTPValidationError {
  /**
   *
   * @type {Array<ValidationError>}
   * @memberof HTTPValidationError
   */
  errors?: Array<ValidationError>;
}
/**
 *
 * @export
 * @interface Handler
 */
export interface Handler {
  /**
   * One and only one of the following should be specified. Exec specifies the action to take.
   * @type {ExecAction}
   * @memberof Handler
   */
  exec?: ExecAction;
  /**
   * HTTPGet specifies the http request to perform.
   * @type {HTTPGetAction}
   * @memberof Handler
   */
  httpGet?: HTTPGetAction;
  /**
   * TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported
   * @type {TCPSocketAction}
   * @memberof Handler
   */
  tcpSocket?: TCPSocketAction;
}
/**
 *
 * @export
 * @interface HostAlias
 */
export interface HostAlias {
  /**
   * Hostnames for the above IP address.
   * @type {Array<string>}
   * @memberof HostAlias
   */
  hostnames?: Array<string>;
  /**
   * IP address of the host file entry.
   * @type {string}
   * @memberof HostAlias
   */
  ip?: string;
}
/**
 *
 * @export
 * @interface HostPathVolumeSource
 */
export interface HostPathVolumeSource {
  /**
   * Path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
   * @type {string}
   * @memberof HostPathVolumeSource
   */
  path: string;
  /**
   * Type for HostPath Volume Defaults to \"\" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
   * @type {string}
   * @memberof HostPathVolumeSource
   */
  type?: string;
}
/**
 *
 * @export
 * @interface ISCSIVolumeSource
 */
export interface ISCSIVolumeSource {
  /**
   * whether support iSCSI Discovery CHAP authentication
   * @type {boolean}
   * @memberof ISCSIVolumeSource
   */
  chapAuthDiscovery?: boolean;
  /**
   * whether support iSCSI Session CHAP authentication
   * @type {boolean}
   * @memberof ISCSIVolumeSource
   */
  chapAuthSession?: boolean;
  /**
   * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
   * @type {string}
   * @memberof ISCSIVolumeSource
   */
  fsType?: string;
  /**
   * Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
   * @type {string}
   * @memberof ISCSIVolumeSource
   */
  initiatorName?: string;
  /**
   * Target iSCSI Qualified Name.
   * @type {string}
   * @memberof ISCSIVolumeSource
   */
  iqn: string;
  /**
   * iSCSI Interface Name that uses an iSCSI transport. Defaults to \'default\' (tcp).
   * @type {string}
   * @memberof ISCSIVolumeSource
   */
  iscsiInterface?: string;
  /**
   * iSCSI Target Lun number.
   * @type {number}
   * @memberof ISCSIVolumeSource
   */
  lun: number;
  /**
   * iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
   * @type {Array<string>}
   * @memberof ISCSIVolumeSource
   */
  portals?: Array<string>;
  /**
   * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
   * @type {boolean}
   * @memberof ISCSIVolumeSource
   */
  readOnly?: boolean;
  /**
   * CHAP Secret for iSCSI target and initiator authentication
   * @type {LocalObjectReference}
   * @memberof ISCSIVolumeSource
   */
  secretRef?: LocalObjectReference;
  /**
   * iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
   * @type {string}
   * @memberof ISCSIVolumeSource
   */
  targetPortal: string;
}
/**
 *
 * @export
 * @interface KeyToPath
 */
export interface KeyToPath {
  /**
   * The key to project.
   * @type {string}
   * @memberof KeyToPath
   */
  key: string;
  /**
   * Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
   * @type {number}
   * @memberof KeyToPath
   */
  mode?: number;
  /**
   * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element \'..\'. May not start with the string \'..\'.
   * @type {string}
   * @memberof KeyToPath
   */
  path: string;
}
/**
 *
 * @export
 * @interface LabelSelector
 */
export interface LabelSelector {
  /**
   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
   * @type {Array<LabelSelectorRequirement>}
   * @memberof LabelSelector
   */
  matchExpressions?: Array<LabelSelectorRequirement>;
  /**
   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is \"key\", the operator is \"In\", and the values array contains only \"value\". The requirements are ANDed.
   * @type {{ [key: string]: string; }}
   * @memberof LabelSelector
   */
  matchLabels?: { [key: string]: string };
}
/**
 *
 * @export
 * @interface LabelSelectorRequirement
 */
export interface LabelSelectorRequirement {
  /**
   * key is the label key that the selector applies to.
   * @type {string}
   * @memberof LabelSelectorRequirement
   */
  key: string;
  /**
   * operator represents a key\'s relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
   * @type {string}
   * @memberof LabelSelectorRequirement
   */
  operator: string;
  /**
   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
   * @type {Array<string>}
   * @memberof LabelSelectorRequirement
   */
  values?: Array<string>;
}
/**
 *
 * @export
 * @interface Lifecycle
 */
export interface Lifecycle {
  /**
   * PostStart is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
   * @type {Handler}
   * @memberof Lifecycle
   */
  postStart?: Handler;
  /**
   * PreStop is called immediately before a container is terminated due to an API request or management event such as liveness/startup probe failure, preemption, resource contention, etc. The handler is not called if the container crashes or exits. The reason for termination is passed to the handler. The Pod\'s termination grace period countdown begins before the PreStop hooked is executed. Regardless of the outcome of the handler, the container will eventually terminate within the Pod\'s termination grace period. Other management of the container blocks until the hook completes or until the termination grace period is reached. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
   * @type {Handler}
   * @memberof Lifecycle
   */
  preStop?: Handler;
}
/**
 *
 * @export
 * @interface LocalObjectReference
 */
export interface LocalObjectReference {
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   * @type {string}
   * @memberof LocalObjectReference
   */
  name?: string;
}
/**
 *
 * @export
 * @interface ManagedFieldsEntry
 */
export interface ManagedFieldsEntry {
  /**
   * APIVersion defines the version of this resource that this field set applies to. The format is \"group/version\" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
   * @type {string}
   * @memberof ManagedFieldsEntry
   */
  apiVersion?: string;
  /**
   * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: \"FieldsV1\"
   * @type {string}
   * @memberof ManagedFieldsEntry
   */
  fieldsType?: string;
  /**
   * FieldsV1 holds the first JSON version format as described in the \"FieldsV1\" type.
   * @type {object}
   * @memberof ManagedFieldsEntry
   */
  fieldsV1?: object;
  /**
   * Manager is an identifier of the workflow managing these fields.
   * @type {string}
   * @memberof ManagedFieldsEntry
   */
  manager?: string;
  /**
   * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are \'Apply\' and \'Update\'.
   * @type {string}
   * @memberof ManagedFieldsEntry
   */
  operation?: string;
  /**
   * Time is timestamp of when these fields were set. It should always be empty if Operation is \'Apply\'
   * @type {string}
   * @memberof ManagedFieldsEntry
   */
  time?: string;
}
export interface NFSVolumeSource {
  /**
   * Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
   * @type {string}
   * @memberof NFSVolumeSource
   */
  path: string;
  /**
   * ReadOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
   * @type {boolean}
   * @memberof NFSVolumeSource
   */
  readOnly?: boolean;
  /**
   * Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
   * @type {string}
   * @memberof NFSVolumeSource
   */
  server: string;
}
/**
 *
 * @export
 * @interface NodeAffinity
 */
export interface NodeAffinity {
  /**
   * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding \"weight\" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
   * @type {Array<PreferredSchedulingTerm>}
   * @memberof NodeAffinity
   */
  preferredDuringSchedulingIgnoredDuringExecution?: Array<PreferredSchedulingTerm>;
  /**
   * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
   * @type {NodeSelector}
   * @memberof NodeAffinity
   */
  requiredDuringSchedulingIgnoredDuringExecution?: NodeSelector;
}
/**
 *
 * @export
 * @interface NodeSelector
 */
export interface NodeSelector {
  /**
   * Required. A list of node selector terms. The terms are ORed.
   * @type {Array<NodeSelectorTerm>}
   * @memberof NodeSelector
   */
  nodeSelectorTerms: Array<NodeSelectorTerm>;
}
/**
 *
 * @export
 * @interface NodeSelectorRequirement
 */
export interface NodeSelectorRequirement {
  /**
   * The label key that the selector applies to.
   * @type {string}
   * @memberof NodeSelectorRequirement
   */
  key: string;
  /**
   * Represents a key\'s relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
   * @type {string}
   * @memberof NodeSelectorRequirement
   */
  operator: string;
  /**
   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
   * @type {Array<string>}
   * @memberof NodeSelectorRequirement
   */
  values?: Array<string>;
}
/**
 *
 * @export
 * @interface NodeSelectorTerm
 */
export interface NodeSelectorTerm {
  /**
   * A list of node selector requirements by node\'s labels.
   * @type {Array<NodeSelectorRequirement>}
   * @memberof NodeSelectorTerm
   */
  matchExpressions?: Array<NodeSelectorRequirement>;
  /**
   * A list of node selector requirements by node\'s fields.
   * @type {Array<NodeSelectorRequirement>}
   * @memberof NodeSelectorTerm
   */
  matchFields?: Array<NodeSelectorRequirement>;
}
/**
 *
 * @export
 * @interface ObjectFieldSelector
 */
export interface ObjectFieldSelector {
  /**
   * Version of the schema the FieldPath is written in terms of, defaults to \"v1\".
   * @type {string}
   * @memberof ObjectFieldSelector
   */
  apiVersion?: string;
  /**
   * Path of the field to select in the specified API version.
   * @type {string}
   * @memberof ObjectFieldSelector
   */
  fieldPath: string;
}
/**
 *
 * @export
 * @interface ObjectMeta
 */
export interface ObjectMeta {
  /**
   * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
   * @type {{ [key: string]: string; }}
   * @memberof ObjectMeta
   */
  annotations?: { [key: string]: string };
  /**
   * The name of the cluster which the object belongs to. This is used to distinguish resources with same name and namespace in different clusters. This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request.
   * @type {string}
   * @memberof ObjectMeta
   */
  clusterName?: string;
  /**
   * CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.  Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   * @type {string}
   * @memberof ObjectMeta
   */
  creationTimestamp?: string;
  /**
   * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
   * @type {number}
   * @memberof ObjectMeta
   */
  deletionGracePeriodSeconds?: number;
  /**
   * DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.  Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   * @type {string}
   * @memberof ObjectMeta
   */
  deletionTimestamp?: string;
  /**
   * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
   * @type {Array<string>}
   * @memberof ObjectMeta
   */
  finalizers?: Array<string>;
  /**
   * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.  If this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header).  Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
   * @type {string}
   * @memberof ObjectMeta
   */
  generateName?: string;
  /**
   * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
   * @type {number}
   * @memberof ObjectMeta
   */
  generation?: number;
  /**
   * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
   * @type {{ [key: string]: string; }}
   * @memberof ObjectMeta
   */
  labels?: { [key: string]: string };
  /**
   * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn\'t need to set or understand this field. A workflow can be the user\'s name, a controller\'s name, or the name of a specific apply path like \"ci-cd\". The set of fields is always in the version that the workflow used when modifying the object.
   * @type {Array<ManagedFieldsEntry>}
   * @memberof ObjectMeta
   */
  managedFields?: Array<ManagedFieldsEntry>;
  /**
   * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
   * @type {string}
   * @memberof ObjectMeta
   */
  name?: string;
  /**
   * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the \"default\" namespace, but \"default\" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.  Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces
   * @type {string}
   * @memberof ObjectMeta
   */
  namespace?: string;
  /**
   * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
   * @type {Array<OwnerReference>}
   * @memberof ObjectMeta
   */
  ownerReferences?: Array<OwnerReference>;
  /**
   * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.  Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
   * @type {string}
   * @memberof ObjectMeta
   */
  resourceVersion?: string;
  /**
   * SelfLink is a URL representing this object. Populated by the system. Read-only.  DEPRECATED Kubernetes will stop propagating this field in 1.20 release and the field is planned to be removed in 1.21 release.
   * @type {string}
   * @memberof ObjectMeta
   */
  selfLink?: string;
  /**
   * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.  Populated by the system. Read-only. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
   * @type {string}
   * @memberof ObjectMeta
   */
  uid?: string;
}
/**
 *
 * @export
 * @interface OwnerReference
 */
export interface OwnerReference {
  /**
   * API version of the referent.
   * @type {string}
   * @memberof OwnerReference
   */
  apiVersion: string;
  /**
   * If true, AND if the owner has the \"foregroundDeletion\" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs \"delete\" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
   * @type {boolean}
   * @memberof OwnerReference
   */
  blockOwnerDeletion?: boolean;
  /**
   * If true, this reference points to the managing controller.
   * @type {boolean}
   * @memberof OwnerReference
   */
  controller?: boolean;
  /**
   * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof OwnerReference
   */
  kind: string;
  /**
   * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
   * @type {string}
   * @memberof OwnerReference
   */
  name: string;
  /**
   * UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
   * @type {string}
   * @memberof OwnerReference
   */
  uid: string;
}
/**
 *
 * @export
 * @interface PersistentVolumeClaimSpec
 */
export interface PersistentVolumeClaimSpec {
  /**
   * AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
   * @type {Array<string>}
   * @memberof PersistentVolumeClaimSpec
   */
  accessModes?: Array<string>;
  /**
   * This field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot - Beta) * An existing PVC (PersistentVolumeClaim) * An existing custom resource/object that implements data population (Alpha) In order to use VolumeSnapshot object types, the appropriate feature gate must be enabled (VolumeSnapshotDataSource or AnyVolumeDataSource) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. If the specified data source is not supported, the volume will not be created and the failure will be reported as an event. In the future, we plan to support more data source types and the behavior of the provisioner may change.
   * @type {TypedLocalObjectReference}
   * @memberof PersistentVolumeClaimSpec
   */
  dataSource?: TypedLocalObjectReference;
  /**
   * Resources represents the minimum resources the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
   * @type {ResourceRequirements}
   * @memberof PersistentVolumeClaimSpec
   */
  resources?: ResourceRequirements;
  /**
   * A label query over volumes to consider for binding.
   * @type {LabelSelector}
   * @memberof PersistentVolumeClaimSpec
   */
  selector?: LabelSelector;
  /**
   * Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
   * @type {string}
   * @memberof PersistentVolumeClaimSpec
   */
  storageClassName?: string;
  /**
   * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
   * @type {string}
   * @memberof PersistentVolumeClaimSpec
   */
  volumeMode?: string;
  /**
   * VolumeName is the binding reference to the PersistentVolume backing this claim.
   * @type {string}
   * @memberof PersistentVolumeClaimSpec
   */
  volumeName?: string;
}
/**
 *
 * @export
 * @interface PersistentVolumeClaimTemplate
 */
export interface PersistentVolumeClaimTemplate {
  /**
   * May contain labels and annotations that will be copied into the PVC when creating it. No other fields are allowed and will be rejected during validation.
   * @type {ObjectMeta}
   * @memberof PersistentVolumeClaimTemplate
   */
  metadata?: ObjectMeta;
  /**
   * The specification for the PersistentVolumeClaim. The entire content is copied unchanged into the PVC that gets created from this template. The same fields as in a PersistentVolumeClaim are also valid here.
   * @type {PersistentVolumeClaimSpec}
   * @memberof PersistentVolumeClaimTemplate
   */
  spec: PersistentVolumeClaimSpec;
}
/**
 *
 * @export
 * @interface PersistentVolumeClaimVolumeSource
 */
export interface PersistentVolumeClaimVolumeSource {
  /**
   * ClaimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
   * @type {string}
   * @memberof PersistentVolumeClaimVolumeSource
   */
  claimName: string;
  /**
   * Will force the ReadOnly setting in VolumeMounts. Default false.
   * @type {boolean}
   * @memberof PersistentVolumeClaimVolumeSource
   */
  readOnly?: boolean;
}
/**
 *
 * @export
 * @interface PhotonPersistentDiskVolumeSource
 */
export interface PhotonPersistentDiskVolumeSource {
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
   * @type {string}
   * @memberof PhotonPersistentDiskVolumeSource
   */
  fsType?: string;
  /**
   * ID that identifies Photon Controller persistent disk
   * @type {string}
   * @memberof PhotonPersistentDiskVolumeSource
   */
  pdID: string;
}
/**
 *
 * @export
 * @interface PodAffinity
 */
export interface PodAffinity {
  /**
   * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding \"weight\" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
   * @type {Array<WeightedPodAffinityTerm>}
   * @memberof PodAffinity
   */
  preferredDuringSchedulingIgnoredDuringExecution?: Array<WeightedPodAffinityTerm>;
  /**
   * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
   * @type {Array<PodAffinityTerm>}
   * @memberof PodAffinity
   */
  requiredDuringSchedulingIgnoredDuringExecution?: Array<PodAffinityTerm>;
}
/**
 *
 * @export
 * @interface PodAffinityTerm
 */
export interface PodAffinityTerm {
  /**
   * A label query over a set of resources, in this case pods.
   * @type {LabelSelector}
   * @memberof PodAffinityTerm
   */
  labelSelector?: LabelSelector;
  /**
   * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means \"this pod\'s namespace\"
   * @type {Array<string>}
   * @memberof PodAffinityTerm
   */
  namespaces?: Array<string>;
  /**
   * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
   * @type {string}
   * @memberof PodAffinityTerm
   */
  topologyKey: string;
}
/**
 *
 * @export
 * @interface PodAntiAffinity
 */
export interface PodAntiAffinity {
  /**
   * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding \"weight\" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
   * @type {Array<WeightedPodAffinityTerm>}
   * @memberof PodAntiAffinity
   */
  preferredDuringSchedulingIgnoredDuringExecution?: Array<WeightedPodAffinityTerm>;
  /**
   * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
   * @type {Array<PodAffinityTerm>}
   * @memberof PodAntiAffinity
   */
  requiredDuringSchedulingIgnoredDuringExecution?: Array<PodAffinityTerm>;
}
/**
 *
 * @export
 * @interface PodCondition
 */
export interface PodCondition {
  /**
   * Last time we probed the condition.
   * @type {string}
   * @memberof PodCondition
   */
  lastProbeTime?: string;
  /**
   * Last time the condition transitioned from one status to another.
   * @type {string}
   * @memberof PodCondition
   */
  lastTransitionTime?: string;
  /**
   * Human-readable message indicating details about last transition.
   * @type {string}
   * @memberof PodCondition
   */
  message?: string;
  /**
   * Unique, one-word, CamelCase reason for the condition\'s last transition.
   * @type {string}
   * @memberof PodCondition
   */
  reason?: string;
  /**
   * Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
   * @type {string}
   * @memberof PodCondition
   */
  status: string;
  /**
   * Type is the type of the condition. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
   * @type {string}
   * @memberof PodCondition
   */
  type: string;
}
/**
 *
 * @export
 * @interface PodDNSConfig
 */
export interface PodDNSConfig {
  /**
   * A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed.
   * @type {Array<string>}
   * @memberof PodDNSConfig
   */
  nameservers?: Array<string>;
  /**
   * A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy.
   * @type {Array<PodDNSConfigOption>}
   * @memberof PodDNSConfig
   */
  options?: Array<PodDNSConfigOption>;
  /**
   * A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed.
   * @type {Array<string>}
   * @memberof PodDNSConfig
   */
  searches?: Array<string>;
}
/**
 *
 * @export
 * @interface PodDNSConfigOption
 */
export interface PodDNSConfigOption {
  /**
   * Required.
   * @type {string}
   * @memberof PodDNSConfigOption
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof PodDNSConfigOption
   */
  value?: string;
}
/**
 *
 * @export
 * @interface PodIP
 */
export interface PodIP {
  /**
   * ip is an IP address (IPv4 or IPv6) assigned to the pod
   * @type {string}
   * @memberof PodIP
   */
  ip?: string;
}
/**
 *
 * @export
 * @interface PodReadinessGate
 */
export interface PodReadinessGate {
  /**
   * ConditionType refers to a condition in the pod\'s condition list with matching type.
   * @type {string}
   * @memberof PodReadinessGate
   */
  conditionType: string;
}
/**
 *
 * @export
 * @interface PodSecurityContext
 */
export interface PodSecurityContext {
  /**
   * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:  1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR\'d with rw-rw----  If unset, the Kubelet will not modify the ownership and permissions of any volume.
   * @type {number}
   * @memberof PodSecurityContext
   */
  fsGroup?: number;
  /**
   * fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are \"OnRootMismatch\" and \"Always\". If not specified defaults to \"Always\".
   * @type {string}
   * @memberof PodSecurityContext
   */
  fsGroupChangePolicy?: string;
  /**
   * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
   * @type {number}
   * @memberof PodSecurityContext
   */
  runAsGroup?: number;
  /**
   * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
   * @type {boolean}
   * @memberof PodSecurityContext
   */
  runAsNonRoot?: boolean;
  /**
   * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
   * @type {number}
   * @memberof PodSecurityContext
   */
  runAsUser?: number;
  /**
   * The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
   * @type {SELinuxOptions}
   * @memberof PodSecurityContext
   */
  seLinuxOptions?: SELinuxOptions;
  /**
   * The seccomp options to use by the containers in this pod.
   * @type {SeccompProfile}
   * @memberof PodSecurityContext
   */
  seccompProfile?: SeccompProfile;
  /**
   * A list of groups applied to the first process run in each container, in addition to the container\'s primary GID.  If unspecified, no groups will be added to any container.
   * @type {Array<number>}
   * @memberof PodSecurityContext
   */
  supplementalGroups?: Array<number>;
  /**
   * Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch.
   * @type {Array<Sysctl>}
   * @memberof PodSecurityContext
   */
  sysctls?: Array<Sysctl>;
  /**
   * The Windows specific settings applied to all containers. If unspecified, the options within a container\'s SecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
   * @type {WindowsSecurityContextOptions}
   * @memberof PodSecurityContext
   */
  windowsOptions?: WindowsSecurityContextOptions;
}
/**
 *
 * @export
 * @interface PodSpec
 */
export interface PodSpec {
  /**
   * Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer.
   * @type {number}
   * @memberof PodSpec
   */
  activeDeadlineSeconds?: number;
  /**
   * If specified, the pod\'s scheduling constraints
   * @type {Affinity}
   * @memberof PodSpec
   */
  affinity?: Affinity;
  /**
   * AutomountServiceAccountToken indicates whether a service account token should be automatically mounted.
   * @type {boolean}
   * @memberof PodSpec
   */
  automountServiceAccountToken?: boolean;
  /**
   * List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated.
   * @type {Array<Container>}
   * @memberof PodSpec
   */
  containers: Array<Container>;
  /**
   * Specifies the DNS parameters of a pod. Parameters specified here will be merged to the generated DNS configuration based on DNSPolicy.
   * @type {PodDNSConfig}
   * @memberof PodSpec
   */
  dnsConfig?: PodDNSConfig;
  /**
   * Set DNS policy for the pod. Defaults to \"ClusterFirst\". Valid values are \'ClusterFirstWithHostNet\', \'ClusterFirst\', \'Default\' or \'None\'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to \'ClusterFirstWithHostNet\'.
   * @type {string}
   * @memberof PodSpec
   */
  dnsPolicy?: string;
  /**
   * EnableServiceLinks indicates whether information about services should be injected into pod\'s environment variables, matching the syntax of Docker links. Optional: Defaults to true.
   * @type {boolean}
   * @memberof PodSpec
   */
  enableServiceLinks?: boolean;
  /**
   * List of ephemeral containers run in this pod. Ephemeral containers may be run in an existing pod to perform user-initiated actions such as debugging. This list cannot be specified when creating a pod, and it cannot be modified by updating the pod spec. In order to add an ephemeral container to an existing pod, use the pod\'s ephemeralcontainers subresource. This field is alpha-level and is only honored by servers that enable the EphemeralContainers feature.
   * @type {Array<EphemeralContainer>}
   * @memberof PodSpec
   */
  ephemeralContainers?: Array<EphemeralContainer>;
  /**
   * HostAliases is an optional list of hosts and IPs that will be injected into the pod\'s hosts file if specified. This is only valid for non-hostNetwork pods.
   * @type {Array<HostAlias>}
   * @memberof PodSpec
   */
  hostAliases?: Array<HostAlias>;
  /**
   * Use the host\'s ipc namespace. Optional: Default to false.
   * @type {boolean}
   * @memberof PodSpec
   */
  hostIPC?: boolean;
  /**
   * Host networking requested for this pod. Use the host\'s network namespace. If this option is set, the ports that will be used must be specified. Default to false.
   * @type {boolean}
   * @memberof PodSpec
   */
  hostNetwork?: boolean;
  /**
   * Use the host\'s pid namespace. Optional: Default to false.
   * @type {boolean}
   * @memberof PodSpec
   */
  hostPID?: boolean;
  /**
   * Specifies the hostname of the Pod If not specified, the pod\'s hostname will be set to a system-defined value.
   * @type {string}
   * @memberof PodSpec
   */
  hostname?: string;
  /**
   * ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. For example, in the case of docker, only DockerConfig type secrets are honored. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod
   * @type {Array<LocalObjectReference>}
   * @memberof PodSpec
   */
  imagePullSecrets?: Array<LocalObjectReference>;
  /**
   * List of initialization containers belonging to the pod. Init containers are executed in order prior to containers being started. If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy. The name for an init container or normal container must be unique among all containers. Init containers may not have Lifecycle actions, Readiness probes, Liveness probes, or Startup probes. The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit for each resource type, and then using the max of of that value or the sum of the normal containers. Limits are applied to init containers in a similar fashion. Init containers cannot currently be added or removed. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/
   * @type {Array<Container>}
   * @memberof PodSpec
   */
  initContainers?: Array<Container>;
  /**
   * NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements.
   * @type {string}
   * @memberof PodSpec
   */
  nodeName?: string;
  /**
   * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node\'s labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
   * @type {{ [key: string]: NodeSelector; }}
   * @memberof PodSpec
   */
  nodeSelector?: { [key: string]: NodeSelector };
  /**
   * Overhead represents the resource overhead associated with running a pod for a given RuntimeClass. This field will be autopopulated at admission time by the RuntimeClass admission controller. If the RuntimeClass admission controller is enabled, overhead must not be set in Pod create requests. The RuntimeClass admission controller will reject Pod create requests which have the overhead already set. If RuntimeClass is configured and selected in the PodSpec, Overhead will be set to the value defined in the corresponding RuntimeClass, otherwise it will remain unset and treated as zero. More info: https://git.k8s.io/enhancements/keps/sig-node/20190226-pod-overhead.md This field is alpha-level as of Kubernetes v1.16, and is only honored by servers that enable the PodOverhead feature.
   * @type {{ [key: string]: string; }}
   * @memberof PodSpec
   */
  overhead?: { [key: string]: string };
  /**
   * PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset. This field is beta-level, gated by the NonPreemptingPriority feature-gate.
   * @type {string}
   * @memberof PodSpec
   */
  preemptionPolicy?: string;
  /**
   * The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority.
   * @type {number}
   * @memberof PodSpec
   */
  priority?: number;
  /**
   * If specified, indicates the pod\'s priority. \"system-node-critical\" and \"system-cluster-critical\" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default.
   * @type {string}
   * @memberof PodSpec
   */
  priorityClassName?: string;
  /**
   * If specified, all readiness gates will be evaluated for pod readiness. A pod is ready when all its containers are ready AND all conditions specified in the readiness gates have status equal to \"True\" More info: https://git.k8s.io/enhancements/keps/sig-network/0007-pod-ready%2B%2B.md
   * @type {Array<PodReadinessGate>}
   * @memberof PodSpec
   */
  readinessGates?: Array<PodReadinessGate>;
  /**
   * Restart policy for all containers within the pod. One of Always, OnFailure, Never. Default to Always. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy
   * @type {string}
   * @memberof PodSpec
   */
  restartPolicy?: string;
  /**
   * RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used to run this pod.  If no RuntimeClass resource matches the named class, the pod will not be run. If unset or empty, the \"legacy\" RuntimeClass will be used, which is an implicit class with an empty definition that uses the default runtime handler. More info: https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md This is a beta feature as of Kubernetes v1.14.
   * @type {string}
   * @memberof PodSpec
   */
  runtimeClassName?: string;
  /**
   * If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler.
   * @type {string}
   * @memberof PodSpec
   */
  schedulerName?: string;
  /**
   * SecurityContext holds pod-level security attributes and common container settings. Optional: Defaults to empty.  See type description for default values of each field.
   * @type {PodSecurityContext}
   * @memberof PodSpec
   */
  securityContext?: PodSecurityContext;
  /**
   * DeprecatedServiceAccount is a depreciated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead.
   * @type {string}
   * @memberof PodSpec
   */
  serviceAccount?: string;
  /**
   * ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
   * @type {string}
   * @memberof PodSpec
   */
  serviceAccountName?: string;
  /**
   * If true the pod\'s hostname will be configured as the pod\'s FQDN, rather than the leaf name (the default). In Linux containers, this means setting the FQDN in the hostname field of the kernel (the nodename field of struct utsname). In Windows containers, this means setting the registry value of hostname for the registry key HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters to FQDN. If a pod does not have FQDN, this has no effect. Default to false.
   * @type {boolean}
   * @memberof PodSpec
   */
  setHostnameAsFQDN?: boolean;
  /**
   * Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Default to false.
   * @type {boolean}
   * @memberof PodSpec
   */
  shareProcessNamespace?: boolean;
  /**
   * If specified, the fully qualified Pod hostname will be \"<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>\". If not specified, the pod will not have a domainname at all.
   * @type {string}
   * @memberof PodSpec
   */
  subdomain?: string;
  /**
   * Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.
   * @type {number}
   * @memberof PodSpec
   */
  terminationGracePeriodSeconds?: number;
  /**
   * If specified, the pod\'s tolerations.
   * @type {Array<Toleration>}
   * @memberof PodSpec
   */
  tolerations?: Array<Toleration>;
  /**
   * TopologySpreadConstraints describes how a group of pods ought to spread across topology domains. Scheduler will schedule pods in a way which abides by the constraints. All topologySpreadConstraints are ANDed.
   * @type {Array<TopologySpreadConstraint>}
   * @memberof PodSpec
   */
  topologySpreadConstraints?: Array<TopologySpreadConstraint>;
  /**
   * List of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes
   * @type {Array<Volume>}
   * @memberof PodSpec
   */
  volumes?: Array<Volume>;
}
/**
 *
 * @export
 * @interface PodStatus
 */
export interface PodStatus {
  /**
   * Current service state of pod. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
   * @type {Array<PodCondition>}
   * @memberof PodStatus
   */
  conditions?: Array<PodCondition>;
  /**
   * The list has one entry per container in the manifest. Each entry is currently the output of `docker inspect`. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status
   * @type {Array<ContainerStatus>}
   * @memberof PodStatus
   */
  containerStatuses?: Array<ContainerStatus>;
  /**
   * Status for any ephemeral containers that have run in this pod. This field is alpha-level and is only populated by servers that enable the EphemeralContainers feature.
   * @type {Array<ContainerStatus>}
   * @memberof PodStatus
   */
  ephemeralContainerStatuses?: Array<ContainerStatus>;
  /**
   * IP address of the host to which the pod is assigned. Empty if not yet scheduled.
   * @type {string}
   * @memberof PodStatus
   */
  hostIP?: string;
  /**
   * The list has one entry per init container in the manifest. The most recent successful init container will have ready = true, the most recently started container will have startTime set. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status
   * @type {Array<ContainerStatus>}
   * @memberof PodStatus
   */
  initContainerStatuses?: Array<ContainerStatus>;
  /**
   * A human readable message indicating details about why the pod is in this condition.
   * @type {string}
   * @memberof PodStatus
   */
  message?: string;
  /**
   * nominatedNodeName is set only when this pod preempts other pods on the node, but it cannot be scheduled right away as preemption victims receive their graceful termination periods. This field does not guarantee that the pod will be scheduled on this node. Scheduler may decide to place the pod elsewhere if other nodes become available sooner. Scheduler may also decide to give the resources on this node to a higher priority pod that is created after preemption. As a result, this field may be different than PodSpec.nodeName when the pod is scheduled.
   * @type {string}
   * @memberof PodStatus
   */
  nominatedNodeName?: string;
  /**
   * The phase of a Pod is a simple, high-level summary of where the Pod is in its lifecycle. The conditions array, the reason and message fields, and the individual container status arrays contain more detail about the pod\'s status. There are five possible phase values:  Pending: The pod has been accepted by the Kubernetes system, but one or more of the container images has not been created. This includes time before being scheduled as well as time spent downloading images over the network, which could take a while. Running: The pod has been bound to a node, and all of the containers have been created. At least one container is still running, or is in the process of starting or restarting. Succeeded: All containers in the pod have terminated in success, and will not be restarted. Failed: All containers in the pod have terminated, and at least one container has terminated in failure. The container either exited with non-zero status or was terminated by the system. Unknown: For some reason the state of the pod could not be obtained, typically due to an error in communicating with the host of the pod.  More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-phase
   * @type {string}
   * @memberof PodStatus
   */
  phase?: string;
  /**
   * IP address allocated to the pod. Routable at least within the cluster. Empty if not yet allocated.
   * @type {string}
   * @memberof PodStatus
   */
  podIP?: string;
  /**
   * podIPs holds the IP addresses allocated to the pod. If this field is specified, the 0th entry must match the podIP field. Pods may be allocated at most 1 value for each of IPv4 and IPv6. This list is empty if no IPs have been allocated yet.
   * @type {Array<PodIP>}
   * @memberof PodStatus
   */
  podIPs?: Array<PodIP>;
  /**
   * The Quality of Service (QOS) classification assigned to the pod based on resource requirements See PodQOSClass type for available QOS classes More info: https://git.k8s.io/community/contributors/design-proposals/node/resource-qos.md
   * @type {string}
   * @memberof PodStatus
   */
  qosClass?: string;
  /**
   * A brief CamelCase message indicating details about why the pod is in this state. e.g. \'Evicted\'
   * @type {string}
   * @memberof PodStatus
   */
  reason?: string;
  /**
   * RFC 3339 date and time at which the object was acknowledged by the Kubelet. This is before the Kubelet pulled the container image(s) for the pod.
   * @type {string}
   * @memberof PodStatus
   */
  startTime?: string;
}
/**
 *
 * @export
 * @interface PortworxVolumeSource
 */
export interface PortworxVolumeSource {
  /**
   * FSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\". Implicitly inferred to be \"ext4\" if unspecified.
   * @type {string}
   * @memberof PortworxVolumeSource
   */
  fsType?: string;
  /**
   * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   * @type {boolean}
   * @memberof PortworxVolumeSource
   */
  readOnly?: boolean;
  /**
   * VolumeID uniquely identifies a Portworx volume
   * @type {string}
   * @memberof PortworxVolumeSource
   */
  volumeID: string;
}
/**
 *
 * @export
 * @interface PreferredSchedulingTerm
 */
export interface PreferredSchedulingTerm {
  /**
   * A node selector term, associated with the corresponding weight.
   * @type {NodeSelectorTerm}
   * @memberof PreferredSchedulingTerm
   */
  preference: NodeSelectorTerm;
  /**
   * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
   * @type {number}
   * @memberof PreferredSchedulingTerm
   */
  weight: number;
}
/**
 *
 * @export
 * @interface Probe
 */
export interface Probe {
  /**
   * One and only one of the following should be specified. Exec specifies the action to take.
   * @type {ExecAction}
   * @memberof Probe
   */
  exec?: ExecAction;
  /**
   * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
   * @type {number}
   * @memberof Probe
   */
  failureThreshold?: number;
  /**
   * HTTPGet specifies the http request to perform.
   * @type {HTTPGetAction}
   * @memberof Probe
   */
  httpGet?: HTTPGetAction;
  /**
   * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
   * @type {number}
   * @memberof Probe
   */
  initialDelaySeconds?: number;
  /**
   * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
   * @type {number}
   * @memberof Probe
   */
  periodSeconds?: number;
  /**
   * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
   * @type {number}
   * @memberof Probe
   */
  successThreshold?: number;
  /**
   * TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported
   * @type {TCPSocketAction}
   * @memberof Probe
   */
  tcpSocket?: TCPSocketAction;
  /**
   * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
   * @type {number}
   * @memberof Probe
   */
  timeoutSeconds?: number;
}
export interface ProjectedVolumeSource {
  /**
   * Mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
   * @type {number}
   * @memberof ProjectedVolumeSource
   */
  defaultMode?: number;
  /**
   * list of volume projections
   * @type {Array<VolumeProjection>}
   * @memberof ProjectedVolumeSource
   */
  sources: Array<VolumeProjection>;
}
export interface QuobyteVolumeSource {
  /**
   * Group to map volume access to Default is no group
   * @type {string}
   * @memberof QuobyteVolumeSource
   */
  group?: string;
  /**
   * ReadOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
   * @type {boolean}
   * @memberof QuobyteVolumeSource
   */
  readOnly?: boolean;
  /**
   * Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
   * @type {string}
   * @memberof QuobyteVolumeSource
   */
  registry: string;
  /**
   * Tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
   * @type {string}
   * @memberof QuobyteVolumeSource
   */
  tenant?: string;
  /**
   * User to map volume access to Defaults to serivceaccount user
   * @type {string}
   * @memberof QuobyteVolumeSource
   */
  user?: string;
  /**
   * Volume is a string that references an already created Quobyte volume by name.
   * @type {string}
   * @memberof QuobyteVolumeSource
   */
  volume: string;
}
/**
 *
 * @export
 * @interface RBDVolumeSource
 */
export interface RBDVolumeSource {
  /**
   * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd
   * @type {string}
   * @memberof RBDVolumeSource
   */
  fsType?: string;
  /**
   * The rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
   * @type {string}
   * @memberof RBDVolumeSource
   */
  image: string;
  /**
   * Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
   * @type {string}
   * @memberof RBDVolumeSource
   */
  keyring?: string;
  /**
   * A collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
   * @type {Array<string>}
   * @memberof RBDVolumeSource
   */
  monitors: Array<string>;
  /**
   * The rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
   * @type {string}
   * @memberof RBDVolumeSource
   */
  pool?: string;
  /**
   * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
   * @type {boolean}
   * @memberof RBDVolumeSource
   */
  readOnly?: boolean;
  /**
   * SecretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
   * @type {LocalObjectReference}
   * @memberof RBDVolumeSource
   */
  secretRef?: LocalObjectReference;
  /**
   * The rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
   * @type {string}
   * @memberof RBDVolumeSource
   */
  user?: string;
}
/**
 *
 * @export
 * @interface ResourceFieldSelector
 */
export interface ResourceFieldSelector {
  /**
   * Container name: required for volumes, optional for env vars
   * @type {string}
   * @memberof ResourceFieldSelector
   */
  containerName?: string;
  /**
   * Specifies the output format of the exposed resources, defaults to \"1\"
   * @type {string}
   * @memberof ResourceFieldSelector
   */
  divisor?: string;
  /**
   * Required: resource to select
   * @type {string}
   * @memberof ResourceFieldSelector
   */
  resource: string;
}
/**
 *
 * @export
 * @interface ResourceRequirements
 */
export interface ResourceRequirements {
  /**
   * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
   * @type {{ [key: string]: string; }}
   * @memberof ResourceRequirements
   */
  limits?: { [key: string]: string };
  /**
   * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
   * @type {{ [key: string]: string; }}
   * @memberof ResourceRequirements
   */
  requests?: { [key: string]: string };
}
/**
 * An enumeration.
 * @export
 * @enum {string}
 */
export enum RoleEnum {
  Super = 'super',
  Test = 'test',
  User = 'user',
}

/**
 *
 * @export
 * @interface RouteItem
 */
export interface RouteItem {
  /**
   *
   * @type {string}
   * @memberof RouteItem
   */
  path: string;
  /**
   *
   * @type {any}
   * @memberof RouteItem
   */
  component?: any | null;
  /**
   *
   * @type {RouteMeta}
   * @memberof RouteItem
   */
  meta: RouteMeta;
  /**
   *
   * @type {string}
   * @memberof RouteItem
   */
  name?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof RouteItem
   */
  props?: { [key: string]: string };
  /**
   *
   * @type {string | Array<string>}
   * @memberof RouteItem
   */
  alias?: string | Array<string>;
  /**
   *
   * @type {string}
   * @memberof RouteItem
   */
  redirect?: string;
  /**
   *
   * @type {boolean}
   * @memberof RouteItem
   */
  caseSensitive?: boolean;
  /**
   *
   * @type {Array<RouteItem>}
   * @memberof RouteItem
   */
  children?: Array<RouteItem>;
}
/**
 *
 * @export
 * @interface RouteMeta
 */
export interface RouteMeta {
  /**
   *
   * @type {string}
   * @memberof RouteMeta
   */
  title: string;
  /**
   *
   * @type {boolean}
   * @memberof RouteMeta
   */
  ignoreAuth?: boolean;
  /**
   *
   * @type {Array<RoleEnum>}
   * @memberof RouteMeta
   */
  roles?: Array<RoleEnum>;
  /**
   *
   * @type {boolean}
   * @memberof RouteMeta
   */
  ignoreKeepAlive?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RouteMeta
   */
  affix?: boolean;
  /**
   *
   * @type {string}
   * @memberof RouteMeta
   */
  icon?: string;
  /**
   *
   * @type {string}
   * @memberof RouteMeta
   */
  frameSrc?: string;
  /**
   *
   * @type {string}
   * @memberof RouteMeta
   */
  transitionName?: string;
  /**
   *
   * @type {boolean}
   * @memberof RouteMeta
   */
  hideBreadcrumb?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RouteMeta
   */
  hideChildrenInMenu?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RouteMeta
   */
  carryParam?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RouteMeta
   */
  single?: boolean;
  /**
   *
   * @type {string}
   * @memberof RouteMeta
   */
  currentActiveMenu?: string;
  /**
   *
   * @type {boolean}
   * @memberof RouteMeta
   */
  hideTab?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RouteMeta
   */
  hideMenu?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RouteMeta
   */
  isLink?: boolean;
}
/**
 *
 * @export
 * @interface SELinuxOptions
 */
export interface SELinuxOptions {
  /**
   * Level is SELinux level label that applies to the container.
   * @type {string}
   * @memberof SELinuxOptions
   */
  level?: string;
  /**
   * Role is a SELinux role label that applies to the container.
   * @type {string}
   * @memberof SELinuxOptions
   */
  role?: string;
  /**
   * Type is a SELinux type label that applies to the container.
   * @type {string}
   * @memberof SELinuxOptions
   */
  type?: string;
  /**
   * User is a SELinux user label that applies to the container.
   * @type {string}
   * @memberof SELinuxOptions
   */
  user?: string;
}
/**
 *
 * @export
 * @interface ScaleIOVolumeSource
 */
export interface ScaleIOVolumeSource {
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Default is \"xfs\".
   * @type {string}
   * @memberof ScaleIOVolumeSource
   */
  fsType?: string;
  /**
   * The host address of the ScaleIO API Gateway.
   * @type {string}
   * @memberof ScaleIOVolumeSource
   */
  gateway: string;
  /**
   * The name of the ScaleIO Protection Domain for the configured storage.
   * @type {string}
   * @memberof ScaleIOVolumeSource
   */
  protectionDomain?: string;
  /**
   * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   * @type {boolean}
   * @memberof ScaleIOVolumeSource
   */
  readOnly?: boolean;
  /**
   * SecretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
   * @type {LocalObjectReference}
   * @memberof ScaleIOVolumeSource
   */
  secretRef: LocalObjectReference;
  /**
   * Flag to enable/disable SSL communication with Gateway, default false
   * @type {boolean}
   * @memberof ScaleIOVolumeSource
   */
  sslEnabled?: boolean;
  /**
   * Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
   * @type {string}
   * @memberof ScaleIOVolumeSource
   */
  storageMode?: string;
  /**
   * The ScaleIO Storage Pool associated with the protection domain.
   * @type {string}
   * @memberof ScaleIOVolumeSource
   */
  storagePool?: string;
  /**
   * The name of the storage system as configured in ScaleIO.
   * @type {string}
   * @memberof ScaleIOVolumeSource
   */
  system: string;
  /**
   * The name of a volume already created in the ScaleIO system that is associated with this volume source.
   * @type {string}
   * @memberof ScaleIOVolumeSource
   */
  volumeName?: string;
}
/**
 *
 * @export
 * @interface SeccompProfile
 */
export interface SeccompProfile {
  /**
   * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet\'s configured seccomp profile location. Must only be set if type is \"Localhost\".
   * @type {string}
   * @memberof SeccompProfile
   */
  localhostProfile?: string;
  /**
   * type indicates which kind of seccomp profile will be applied. Valid options are:  Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
   * @type {string}
   * @memberof SeccompProfile
   */
  type: string;
}
/**
 *
 * @export
 * @interface SecretEnvSource
 */
export interface SecretEnvSource {
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   * @type {string}
   * @memberof SecretEnvSource
   */
  name?: string;
  /**
   * Specify whether the Secret must be defined
   * @type {boolean}
   * @memberof SecretEnvSource
   */
  optional?: boolean;
}
/**
 *
 * @export
 * @interface SecretKeySelector
 */
export interface SecretKeySelector {
  /**
   * The key of the secret to select from.  Must be a valid secret key.
   * @type {string}
   * @memberof SecretKeySelector
   */
  key: string;
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   * @type {string}
   * @memberof SecretKeySelector
   */
  name?: string;
  /**
   * Specify whether the Secret or its key must be defined
   * @type {boolean}
   * @memberof SecretKeySelector
   */
  optional?: boolean;
}
/**
 *
 * @export
 * @interface SecretProjection
 */
export interface SecretProjection {
  /**
   * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the \'..\' path or start with \'..\'.
   * @type {Array<KeyToPath>}
   * @memberof SecretProjection
   */
  items?: Array<KeyToPath>;
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   * @type {string}
   * @memberof SecretProjection
   */
  name?: string;
  /**
   * Specify whether the Secret or its key must be defined
   * @type {boolean}
   * @memberof SecretProjection
   */
  optional?: boolean;
}
/**
 *
 * @export
 * @interface SecretVolumeSource
 */
export interface SecretVolumeSource {
  /**
   * Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
   * @type {number}
   * @memberof SecretVolumeSource
   */
  defaultMode?: number;
  /**
   * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the \'..\' path or start with \'..\'.
   * @type {Array<KeyToPath>}
   * @memberof SecretVolumeSource
   */
  items?: Array<KeyToPath>;
  /**
   * Specify whether the Secret or its keys must be defined
   * @type {boolean}
   * @memberof SecretVolumeSource
   */
  optional?: boolean;
  /**
   * Name of the secret in the pod\'s namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
   * @type {string}
   * @memberof SecretVolumeSource
   */
  secretName?: string;
}
/**
 *
 * @export
 * @interface SecurityContext
 */
export interface SecurityContext {
  /**
   * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN
   * @type {boolean}
   * @memberof SecurityContext
   */
  allowPrivilegeEscalation?: boolean;
  /**
   * The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime.
   * @type {Capabilities}
   * @memberof SecurityContext
   */
  capabilities?: Capabilities;
  /**
   * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false.
   * @type {boolean}
   * @memberof SecurityContext
   */
  privileged?: boolean;
  /**
   * procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled.
   * @type {string}
   * @memberof SecurityContext
   */
  procMount?: string;
  /**
   * Whether this container has a read-only root filesystem. Default is false.
   * @type {boolean}
   * @memberof SecurityContext
   */
  readOnlyRootFilesystem?: boolean;
  /**
   * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
   * @type {number}
   * @memberof SecurityContext
   */
  runAsGroup?: number;
  /**
   * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
   * @type {boolean}
   * @memberof SecurityContext
   */
  runAsNonRoot?: boolean;
  /**
   * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
   * @type {number}
   * @memberof SecurityContext
   */
  runAsUser?: number;
  /**
   * The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
   * @type {SELinuxOptions}
   * @memberof SecurityContext
   */
  seLinuxOptions?: SELinuxOptions;
  /**
   * The seccomp options to use by this container. If seccomp options are provided at both the pod & container level, the container options override the pod options.
   * @type {SeccompProfile}
   * @memberof SecurityContext
   */
  seccompProfile?: SeccompProfile;
  /**
   * The Windows specific settings applied to all containers. If unspecified, the options from the PodSecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
   * @type {WindowsSecurityContextOptions}
   * @memberof SecurityContext
   */
  windowsOptions?: WindowsSecurityContextOptions;
}
/**
 *
 * @export
 * @interface ServiceAccountTokenProjection
 */
export interface ServiceAccountTokenProjection {
  /**
   * Audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
   * @type {string}
   * @memberof ServiceAccountTokenProjection
   */
  audience?: string;
  /**
   * ExpirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
   * @type {number}
   * @memberof ServiceAccountTokenProjection
   */
  expirationSeconds?: number;
  /**
   * Path is the path relative to the mount point of the file to project the token into.
   * @type {string}
   * @memberof ServiceAccountTokenProjection
   */
  path: string;
}
/**
 *
 * @export
 * @interface StorageOSVolumeSource
 */
export interface StorageOSVolumeSource {
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
   * @type {string}
   * @memberof StorageOSVolumeSource
   */
  fsType?: string;
  /**
   * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   * @type {boolean}
   * @memberof StorageOSVolumeSource
   */
  readOnly?: boolean;
  /**
   * SecretRef specifies the secret to use for obtaining the StorageOS API credentials.  If not specified, default values will be attempted.
   * @type {LocalObjectReference}
   * @memberof StorageOSVolumeSource
   */
  secretRef?: LocalObjectReference;
  /**
   * VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.
   * @type {string}
   * @memberof StorageOSVolumeSource
   */
  volumeName?: string;
  /**
   * VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod\'s namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to \"default\" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
   * @type {string}
   * @memberof StorageOSVolumeSource
   */
  volumeNamespace?: string;
}
/**
 *
 * @export
 * @interface Sysctl
 */
export interface Sysctl {
  /**
   * Name of a property to set
   * @type {string}
   * @memberof Sysctl
   */
  name: string;
  /**
   * Value of a property to set
   * @type {string}
   * @memberof Sysctl
   */
  value: string;
}
/**
 *
 * @export
 * @interface TCPSocketAction
 */
export interface TCPSocketAction {
  /**
   * Optional: Host name to connect to, defaults to the pod IP.
   * @type {string}
   * @memberof TCPSocketAction
   */
  host?: string;
  /**
   * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
   * @type {string}
   * @memberof TCPSocketAction
   */
  port: string;
}
/**
 *
 * @export
 * @interface Toleration
 */
export interface Toleration {
  /**
   * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
   * @type {string}
   * @memberof Toleration
   */
  effect?: string;
  /**
   * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
   * @type {string}
   * @memberof Toleration
   */
  key?: string;
  /**
   * Operator represents a key\'s relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
   * @type {string}
   * @memberof Toleration
   */
  operator?: string;
  /**
   * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
   * @type {number}
   * @memberof Toleration
   */
  tolerationSeconds?: number;
  /**
   * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
   * @type {string}
   * @memberof Toleration
   */
  value?: string;
}
/**
 *
 * @export
 * @interface TopologySpreadConstraint
 */
export interface TopologySpreadConstraint {
  /**
   * LabelSelector is used to find matching pods. Pods that match this label selector are counted to determine the number of pods in their corresponding topology domain.
   * @type {LabelSelector}
   * @memberof TopologySpreadConstraint
   */
  labelSelector?: LabelSelector;
  /**
   * MaxSkew describes the degree to which pods may be unevenly distributed. When `whenUnsatisfiable=DoNotSchedule`, it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 1/1/0: | zone1 | zone2 | zone3 | |   P   |   P   |       | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 1/1/1; scheduling it onto zone1(zone2) would make the ActualSkew(2-0) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When `whenUnsatisfiable=ScheduleAnyway`, it is used to give higher precedence to topologies that satisfy it. It\'s a required field. Default value is 1 and 0 is not allowed.
   * @type {number}
   * @memberof TopologySpreadConstraint
   */
  maxSkew: number;
  /**
   * TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a \"bucket\", and try to put balanced number of pods into each bucket. It\'s a required field.
   * @type {string}
   * @memberof TopologySpreadConstraint
   */
  topologyKey: string;
  /**
   * WhenUnsatisfiable indicates how to deal with a pod if it doesn\'t satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location,   but giving higher precedence to topologies that would help reduce the   skew. A constraint is considered \"Unsatisfiable\" for an incoming pod if and only if every possible node assigment for that pod would violate \"MaxSkew\" on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P |   P   |   P   | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won\'t make it *more* imbalanced. It\'s a required field.
   * @type {string}
   * @memberof TopologySpreadConstraint
   */
  whenUnsatisfiable: string;
}
/**
 *
 * @export
 * @interface TypedLocalObjectReference
 */
export interface TypedLocalObjectReference {
  /**
   * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
   * @type {string}
   * @memberof TypedLocalObjectReference
   */
  apiGroup?: string;
  /**
   * Kind is the type of resource being referenced
   * @type {string}
   * @memberof TypedLocalObjectReference
   */
  kind: string;
  /**
   * Name is the name of resource being referenced
   * @type {string}
   * @memberof TypedLocalObjectReference
   */
  name: string;
}
export interface ValidationError {
  /**
   *
   * @type {Array<string>}
   * @memberof ValidationError
   */
  body?: Array<string>;
}
/**
 *
 * @export
 * @interface Volume
 */
export interface Volume {
  /**
   * AWSElasticBlockStore represents an AWS Disk resource that is attached to a kubelet\'s host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
   * @type {AWSElasticBlockStoreVolumeSource}
   * @memberof Volume
   */
  awsElasticBlockStore?: AWSElasticBlockStoreVolumeSource;
  /**
   * AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
   * @type {AzureDiskVolumeSource}
   * @memberof Volume
   */
  azureDisk?: AzureDiskVolumeSource;
  /**
   * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
   * @type {AzureFileVolumeSource}
   * @memberof Volume
   */
  azureFile?: AzureFileVolumeSource;
  /**
   * CephFS represents a Ceph FS mount on the host that shares a pod\'s lifetime
   * @type {CephFSVolumeSource}
   * @memberof Volume
   */
  cephfs?: CephFSVolumeSource;
  /**
   * Cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
   * @type {CinderVolumeSource}
   * @memberof Volume
   */
  cinder?: CinderVolumeSource;
  /**
   * ConfigMap represents a configMap that should populate this volume
   * @type {ConfigMapVolumeSource}
   * @memberof Volume
   */
  configMap?: ConfigMapVolumeSource;
  /**
   * CSI (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature).
   * @type {CSIVolumeSource}
   * @memberof Volume
   */
  csi?: CSIVolumeSource;
  /**
   * DownwardAPI represents downward API about the pod that should populate this volume
   * @type {DownwardAPIVolumeSource}
   * @memberof Volume
   */
  downwardAPI?: DownwardAPIVolumeSource;
  /**
   * EmptyDir represents a temporary directory that shares a pod\'s lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
   * @type {EmptyDirVolumeSource}
   * @memberof Volume
   */
  emptyDir?: EmptyDirVolumeSource;
  /**
   * Ephemeral represents a volume that is handled by a cluster storage driver (Alpha feature). The volume\'s lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed.  Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity    tracking are needed, c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through    a PersistentVolumeClaim (see EphemeralVolumeSource for more    information on the connection between this volume type    and PersistentVolumeClaim).  Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod.  Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information.  A pod can use both types of ephemeral volumes and persistent volumes at the same time.
   * @type {EphemeralVolumeSource}
   * @memberof Volume
   */
  ephemeral?: EphemeralVolumeSource;
  /**
   * FC represents a Fibre Channel resource that is attached to a kubelet\'s host machine and then exposed to the pod.
   * @type {FCVolumeSource}
   * @memberof Volume
   */
  fc?: FCVolumeSource;
  /**
   * FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
   * @type {FlexVolumeSource}
   * @memberof Volume
   */
  flexVolume?: FlexVolumeSource;
  /**
   * Flocker represents a Flocker volume attached to a kubelet\'s host machine. This depends on the Flocker control service being running
   * @type {FlockerVolumeSource}
   * @memberof Volume
   */
  flocker?: FlockerVolumeSource;
  /**
   * GCEPersistentDisk represents a GCE Disk resource that is attached to a kubelet\'s host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
   * @type {GCEPersistentDiskVolumeSource}
   * @memberof Volume
   */
  gcePersistentDisk?: GCEPersistentDiskVolumeSource;
  /**
   * GitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod\'s container.
   * @type {GitRepoVolumeSource}
   * @memberof Volume
   */
  gitRepo?: GitRepoVolumeSource;
  /**
   * Glusterfs represents a Glusterfs mount on the host that shares a pod\'s lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md
   * @type {GlusterfsVolumeSource}
   * @memberof Volume
   */
  glusterfs?: GlusterfsVolumeSource;
  /**
   * HostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
   * @type {HostPathVolumeSource}
   * @memberof Volume
   */
  hostPath?: HostPathVolumeSource;
  /**
   * ISCSI represents an ISCSI Disk resource that is attached to a kubelet\'s host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
   * @type {ISCSIVolumeSource}
   * @memberof Volume
   */
  iscsi?: ISCSIVolumeSource;
  /**
   * Volume\'s name. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   * @type {string}
   * @memberof Volume
   */
  name: string;
  /**
   * NFS represents an NFS mount on the host that shares a pod\'s lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
   * @type {NFSVolumeSource}
   * @memberof Volume
   */
  nfs?: NFSVolumeSource;
  /**
   * PersistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
   * @type {PersistentVolumeClaimVolumeSource}
   * @memberof Volume
   */
  persistentVolumeClaim?: PersistentVolumeClaimVolumeSource;
  /**
   * PhotonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
   * @type {PhotonPersistentDiskVolumeSource}
   * @memberof Volume
   */
  photonPersistentDisk?: PhotonPersistentDiskVolumeSource;
  /**
   * PortworxVolume represents a portworx volume attached and mounted on kubelets host machine
   * @type {PortworxVolumeSource}
   * @memberof Volume
   */
  portworxVolume?: PortworxVolumeSource;
  /**
   * Items for all in one resources secrets, configmaps, and downward API
   * @type {ProjectedVolumeSource}
   * @memberof Volume
   */
  projected?: ProjectedVolumeSource;
  /**
   * Quobyte represents a Quobyte mount on the host that shares a pod\'s lifetime
   * @type {QuobyteVolumeSource}
   * @memberof Volume
   */
  quobyte?: QuobyteVolumeSource;
  /**
   * RBD represents a Rados Block Device mount on the host that shares a pod\'s lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
   * @type {RBDVolumeSource}
   * @memberof Volume
   */
  rbd?: RBDVolumeSource;
  /**
   * ScaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
   * @type {ScaleIOVolumeSource}
   * @memberof Volume
   */
  scaleIO?: ScaleIOVolumeSource;
  /**
   * Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
   * @type {SecretVolumeSource}
   * @memberof Volume
   */
  secret?: SecretVolumeSource;
  /**
   * StorageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
   * @type {StorageOSVolumeSource}
   * @memberof Volume
   */
  storageos?: StorageOSVolumeSource;
  /**
   * VsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
   * @type {VsphereVirtualDiskVolumeSource}
   * @memberof Volume
   */
  vsphereVolume?: VsphereVirtualDiskVolumeSource;
}
/**
 *
 * @export
 * @interface VolumeDevice
 */
export interface VolumeDevice {
  /**
   * devicePath is the path inside of the container that the device will be mapped to.
   * @type {string}
   * @memberof VolumeDevice
   */
  devicePath: string;
  /**
   * name must match the name of a persistentVolumeClaim in the pod
   * @type {string}
   * @memberof VolumeDevice
   */
  name: string;
}
/**
 *
 * @export
 * @interface VolumeMount
 */
export interface VolumeMount {
  /**
   * Path within the container at which the volume should be mounted.  Must not contain \':\'.
   * @type {string}
   * @memberof VolumeMount
   */
  mountPath: string;
  /**
   * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
   * @type {string}
   * @memberof VolumeMount
   */
  mountPropagation?: string;
  /**
   * This must match the Name of a Volume.
   * @type {string}
   * @memberof VolumeMount
   */
  name: string;
  /**
   * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
   * @type {boolean}
   * @memberof VolumeMount
   */
  readOnly?: boolean;
  /**
   * Path within the volume from which the container\'s volume should be mounted. Defaults to \"\" (volume\'s root).
   * @type {string}
   * @memberof VolumeMount
   */
  subPath?: string;
  /**
   * Expanded path within the volume from which the container\'s volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container\'s environment. Defaults to \"\" (volume\'s root). SubPathExpr and SubPath are mutually exclusive.
   * @type {string}
   * @memberof VolumeMount
   */
  subPathExpr?: string;
}
/**
 *
 * @export
 * @interface VolumeProjection
 */
export interface VolumeProjection {
  /**
   * information about the configMap data to project
   * @type {ConfigMapProjection}
   * @memberof VolumeProjection
   */
  configMap?: ConfigMapProjection;
  /**
   * information about the downwardAPI data to project
   * @type {DownwardAPIProjection}
   * @memberof VolumeProjection
   */
  downwardAPI?: DownwardAPIProjection;
  /**
   * information about the secret data to project
   * @type {SecretProjection}
   * @memberof VolumeProjection
   */
  secret?: SecretProjection;
  /**
   * information about the serviceAccountToken data to project
   * @type {ServiceAccountTokenProjection}
   * @memberof VolumeProjection
   */
  serviceAccountToken?: ServiceAccountTokenProjection;
}
/**
 *
 * @export
 * @interface VsphereVirtualDiskVolumeSource
 */
export interface VsphereVirtualDiskVolumeSource {
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
   * @type {string}
   * @memberof VsphereVirtualDiskVolumeSource
   */
  fsType?: string;
  /**
   * Storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
   * @type {string}
   * @memberof VsphereVirtualDiskVolumeSource
   */
  storagePolicyID?: string;
  /**
   * Storage Policy Based Management (SPBM) profile name.
   * @type {string}
   * @memberof VsphereVirtualDiskVolumeSource
   */
  storagePolicyName?: string;
  /**
   * Path that identifies vSphere volume vmdk
   * @type {string}
   * @memberof VsphereVirtualDiskVolumeSource
   */
  volumePath: string;
}
/**
 *
 * @export
 * @interface WeightedPodAffinityTerm
 */
export interface WeightedPodAffinityTerm {
  /**
   * Required. A pod affinity term, associated with the corresponding weight.
   * @type {PodAffinityTerm}
   * @memberof WeightedPodAffinityTerm
   */
  podAffinityTerm: PodAffinityTerm;
  /**
   * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
   * @type {number}
   * @memberof WeightedPodAffinityTerm
   */
  weight: number;
}
/**
 *
 * @export
 * @interface WindowsSecurityContextOptions
 */
export interface WindowsSecurityContextOptions {
  /**
   * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
   * @type {string}
   * @memberof WindowsSecurityContextOptions
   */
  gmsaCredentialSpec?: string;
  /**
   * GMSACredentialSpecName is the name of the GMSA credential spec to use.
   * @type {string}
   * @memberof WindowsSecurityContextOptions
   */
  gmsaCredentialSpecName?: string;
  /**
   * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
   * @type {string}
   * @memberof WindowsSecurityContextOptions
   */
  runAsUserName?: string;
}
